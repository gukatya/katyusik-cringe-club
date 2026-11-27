import express from 'express';
import pg from 'pg';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

const ADMIN_SECRET = process.env.ADMIN_SECRET || '';

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.get('/api/rsvp/:userId', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT name, status, performing, performance_desc, roast, roast_restrictions, comment, submitted_at FROM rsvps WHERE user_id = $1',
      [req.params.userId]
    );
    res.json(rows[0] || null);
  } catch (e) {
    res.json(null);
  }
});

app.post('/api/rsvp/:userId', async (req, res) => {
  const { name, status, performing, performance_desc, roast, roast_restrictions, comment, submitted_at } = req.body;
  try {
    await pool.query(`
      INSERT INTO rsvps (user_id, name, status, performing, performance_desc, roast, roast_restrictions, comment, submitted_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (user_id) DO UPDATE SET
        name = EXCLUDED.name, status = EXCLUDED.status,
        performing = EXCLUDED.performing, performance_desc = EXCLUDED.performance_desc,
        roast = EXCLUDED.roast, roast_restrictions = EXCLUDED.roast_restrictions,
        comment = EXCLUDED.comment, submitted_at = EXCLUDED.submitted_at
    `, [req.params.userId, name, status, performing, performance_desc, roast, roast_restrictions, comment, submitted_at]);
    res.json({ ok: true });
  } catch (e) {
    console.error('RSVP error:', e.message);
    res.status(500).json({ error: 'save failed' });
  }
});

app.get('/api/admin/check', (req, res) => {
  if (!ADMIN_SECRET || req.query.secret !== ADMIN_SECRET) return res.status(403).json({ error: 'forbidden' });
  res.json({ ok: true });
});

app.get('/api/admin/rsvps', async (req, res) => {
  if (!ADMIN_SECRET || req.query.secret !== ADMIN_SECRET) return res.status(403).json({ error: 'forbidden' });
  try {
    const { rows } = await pool.query(
      'SELECT name, status, performing, performance_desc, roast, roast_restrictions, comment, submitted_at FROM rsvps ORDER BY submitted_at DESC'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json([]);
  }
});

app.get('*', (_req, res) => res.sendFile(join(__dirname, 'public', 'index.html')));

async function main() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS rsvps (
      user_id TEXT PRIMARY KEY,
      name TEXT, status TEXT,
      performing TEXT, performance_desc TEXT,
      roast TEXT, roast_restrictions TEXT,
      comment TEXT, submitted_at TEXT
    )
  `);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log('Listening on :' + PORT));
}

main().catch(err => { console.error(err); process.exit(1); });
