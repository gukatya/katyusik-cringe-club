{
/* ===== CONFIG ===== */
const eventDetails = {
  mapsUrl: 'https://maps.app.goo.gl/Xz1o8YowddzXAAA2A'
};

/* ===== COPY ===== */
const russianExtra = {
  submitting: 'Сохраняем…',
  submitEdit: 'Сохранить изменения',
  successMsg: 'Записано, молодец!',
  st_coming: 'Придёт', st_not_coming: 'Не придёт', st_maybe: 'Не знает',
  pf_yes: 'Да', pf_maybe: 'Возможно', pf_no: 'Нет',
  ro_yes: 'Да', ro_gentle: 'Аккуратно', ro_no: 'Нет',
  s_total: 'Всего', s_coming: 'Придут', s_not_coming: 'Не придут', s_maybe: 'Не знают', s_perf: 'Выступают', s_roast: 'На прожарку',
  f_all: 'Все', f_coming: 'Придут', f_not_coming: 'Не придут', f_maybe: 'Не знают', f_perf: 'Выступают', f_roast: 'Прожарка',
  noEntries: 'Пока никто не ответил.',
  noMatch: 'Под этот фильтр никто не подходит.',
  loadError: 'Не удалось загрузить ответы. Обнови страницу.',
  csvDone: 'Файл сохранён.',
  csvFail: 'Не получилось сохранить файл.',
  csvEmpty: 'Пока нечего выгружать.'
};

const english = {
  clubName: 'KATYUSIK CRINGE FEST',
  rsvpJump: 'Skip to RSVP',
  special: '28th Birthday Stand-up',
  oneNight: 'One night only',
  titleA: 'SHALL WE',
  titleB: 'GIGGLE?',
  tagline: 'Gathering the people I love to do the thing I love',
  portraitAlt: 'Katya laughing and throwing a peace sign',
  shortDate: '16 December',
  witness: "I'M IN!",
  month: 'December',
  dayYear: 'Wednesday · 2026',
  extrasLabel: 'Dress code and open mic',
  dressLabel: 'Dress code',
  dressTitle: 'Get professionally silly',
  dressIntro: "Tonight everyone is officially prescribed a good dose of silliness. Wear the look you've always wanted to take out but never let yourself. Tonight's the night. Come as whoever the hell you want.",
  dressA: 'Drunk Aussie from Kuta',
  dressB: 'Borat',
  dressC: 'Politician in dress shoes with a tote bag',
  dressD: 'Vitas in his prime',
  dressE: 'Gypsy outside the mall',
  dressF: 'Michael Jackson lookalike',
  micTitle: 'Cringe Open Mic',
  micIntro: 'Got an act, a talent, or a suspicion you might have one? Get up there. Any genre. Strictly amateur antics. You can make a fool of yourself in front of people who are professional enablers of all things cringe.',
  micPunch: 'Why else would all these people be friends with me?',
  micIdeasLabel: 'Act ideas',
  micA: 'Acting exercise: Yegor Krid',
  micB: 'Shanson cover of Morgenshtern',
  micC: 'Presentation on the non-obvious benefits of beer',
  micD: 'Impression of Natalya Morskaya Pekhota',
  micE: 'That collection of jokes the world needs to hear',
  micF: 'Original chastushki',
  micNote: 'Give us a heads-up in the RSVP so we can put you on the bill. A sentence or two about your act is plenty.',
  micCta: 'Put my act on the bill',
  venueLabel: 'When and where',
  doors: 'Doors open',
  showTime: 'Programme starts',
  endTime: 'End — whenever God decides',
  timeNote: 'Times are tentative. So is the plan.',
  map: 'Open in Google Maps',
  introTitle: 'Happy Birthday to Me',
  intro: "I'm turning 28, and I'm inviting you to my Katyusik Cringe Club for one night only. We've got unlimited beer and a stage at a local bar.",
  introPunch: 'Everything is allowed!',
  programTitle: 'On the bill',
  actA: 'My first stand-up set',
  actADesc: "I've been gathering material for 28 years. If it gets awkward — welcome to my life!",
  actB: 'Roasting the guests',
  actBDesc: 'Everything you said will be used against you.',
  actC: 'Talent show',
  actCDesc: "Songs, dancing, whatever you want to put on. We'll figure out the genre as we go.",
  actD: 'Unlimited beer',
  actDDesc: 'Two-litre steins. The only part of the evening with a confirmed volume.',
  rsvpTitle: 'Will you be there?',
  inviteLine: 'Audience member is a perfectly good role.',
  loadingForm: 'Loading…',
  signinTitle: 'Sign in to claude.ai to answer.',
  signinSub: "Or message Katya directly and she'll add you herself.",
  questionName: "What's your name?",
  errName: 'Tell us your name.',
  questionAttendance: 'Will you come?',
  attYes: 'Yes. I want to see this with my own eyes.',
  attNo: 'No. I still have a sense of self-preservation.',
  attMaybe: "I'm not sure. I'll decide nearer the show.",
  errStatus: 'Pick one option.',
  questionPerform: 'Want to do an open mic act?',
  perfYes: "Yes, I'm working on something.",
  perfMaybe: 'Maybe. I could use help with an idea.',
  perfNo: "No, I'm strictly an audience member.",
  perfDetails: 'What are you planning? Tell us a little about your act so we can put it on the bill.',
  questionRoast: 'Mind if Katyusik roasts you a little?',
  roastYes: 'Yes. Destroy me.',
  roastGently: 'Yes, but go easy.',
  roastNo: 'No. I came for the beer.',
  roastDetails: 'Are there any topics we should avoid?',
  questionComment: 'Anything else you want to tell the organizer?',
  errGlobal: "Couldn't save that. Please try again.",
  submit: 'Confirm my answer',
  successMsg: 'Got it! See you in December.',
  editRsvp: 'Change my answer',
  admLabel: 'Organizer only',
  admTitle: "Who's in the room",
  csvBtn: 'Download CSV',
  filterLabel: 'Filter',
  colName: 'Name', colStatus: 'Answer', colPerf: 'Act', colPerfDesc: 'Act idea', colRoast: 'Roast', colRestr: 'Off limits', colComment: 'Comment', colDate: 'Date',
  admLoading: 'Loading answers…',
  submitting: 'Saving…',
  submitEdit: 'Save changes',
  st_coming: 'Coming', st_not_coming: 'Not coming', st_maybe: 'Undecided',
  pf_yes: 'Yes', pf_maybe: 'Maybe', pf_no: 'No',
  ro_yes: 'Yes', ro_gentle: 'Gently', ro_no: 'No',
  s_total: 'Total', s_coming: 'Coming', s_not_coming: 'Not coming', s_maybe: 'Undecided', s_perf: 'Performing', s_roast: 'Roastable',
  f_all: 'All', f_coming: 'Coming', f_not_coming: 'Not coming', f_maybe: 'Undecided', f_perf: 'Performing', f_roast: 'Roast',
  noEntries: 'No answers yet.',
  noMatch: 'Nobody matches this filter.',
  loadError: "Couldn't load answers. Refresh the page.",
  csvDone: 'File saved.',
  csvFail: "Couldn't save the file.",
  csvEmpty: 'Nothing to export yet.'
};

const htmlTitles = { ru: 'KATYUSIK CRINGE CLUB', en: 'KATYUSIK CRINGE CLUB' };

const textNodes = [...document.querySelectorAll('[data-copy]')];
const translatedImages = [...document.querySelectorAll('[data-alt]')];
const translatedLabels = [...document.querySelectorAll('[data-aria]')];
const russian = Object.assign(Object.fromEntries([
  ...textNodes.map((node) => [node.dataset.copy, node.textContent]),
  ...translatedImages.map((node) => [node.dataset.alt, node.alt]),
  ...translatedLabels.map((node) => [node.dataset.aria, node.getAttribute('aria-label')])
]), russianExtra);

const $ = (id) => document.getElementById(id);
const languageButtons = [...document.querySelectorAll('[data-language]')];
const form = $('rsvp-form');
const nameField = form.elements.guestName;
const actIdea = $('act-idea');
const offLimits = $('off-limits');
const commentField = $('guest-comment');

let language = 'ru';
let userId = null;
let existing = null;
let editing = false;
let saving = false;
let entries = [];
let filter = 'all';
let csvMsgTimer = null;

const t = (key) => (language === 'en' ? english : russian)[key] ?? russian[key] ?? '';

/* ===== LANGUAGE ===== */
function setLanguage(next) {
  language = next;
  try { localStorage.setItem('kcc_lang', next); } catch (e) {}
  document.documentElement.lang = next;
  document.title = htmlTitles[next];
  const copy = next === 'en' ? english : russian;
  textNodes.forEach((node) => { node.textContent = copy[node.dataset.copy] ?? russian[node.dataset.copy]; });
  translatedImages.forEach((node) => { node.alt = copy[node.dataset.alt]; });
  translatedLabels.forEach((node) => { node.setAttribute('aria-label', copy[node.dataset.aria]); });
  languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
  nameField.placeholder = next === 'en' ? 'Name (preferably real)' : 'Имя (желательно настоящее)';
  updateSubmitLabel();
  if (!$('admin').hidden) renderAdmin();
}

/* ===== FORM ===== */
function setFollowUp(id, visible) {
  const box = $(id);
  box.hidden = !visible;
  box.querySelector('textarea').disabled = !visible;
}
function syncFollowUps() {
  setFollowUp('perform-details', ['yes', 'maybe'].includes(form.elements.performing.value));
  setFollowUp('roast-details', ['yes', 'gentle'].includes(form.elements.roast.value));
}
function setRadio(name, value) {
  form.querySelectorAll(`input[name="${name}"]`).forEach((r) => { r.checked = r.value === value; });
}
function fillForm(d) {
  nameField.value = d.name || '';
  setRadio('status', d.status || '');
  setRadio('performing', d.performing || '');
  setRadio('roast', d.roast || '');
  actIdea.value = d.performance_desc || '';
  offLimits.value = d.roast_restrictions || '';
  commentField.value = d.comment || '';
  syncFollowUps();
}
function updateSubmitLabel() {
  $('submit-label').textContent = saving ? t('submitting') : (existing ? t('submitEdit') : t('submit'));
}
function clearErrors() {
  ['err-name', 'err-status', 'err-global'].forEach((id) => { $(id).hidden = true; });
}

function showView(view) {
  $('ticket-loading').hidden = view !== 'loading';
  $('signin-note').hidden = true;
  form.hidden = view !== 'form';
  $('success-view').hidden = view !== 'success';
}

function openForm() {
  editing = !!existing;
  if (existing) fillForm(existing);
  clearErrors();
  updateSubmitLabel();
  showView('form');
}

/* ===== SUCCESS ===== */
function showSuccess() {
  editing = false;
  showView('success');
}

/* ===== SUBMIT ===== */
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (saving || !userId) return;
  clearErrors();
  const name = nameField.value.trim();
  const status = form.elements.status.value;
  $('err-name').hidden = !!name;
  $('err-status').hidden = !!status;
  if (!name) { nameField.focus(); return; }
  if (!status) { form.querySelector('input[name="status"]').focus(); return; }

  const performing = form.elements.performing.value;
  const roast = form.elements.roast.value;
  const data = {
    name,
    status,
    performing: performing || '',
    performance_desc: ['yes', 'maybe'].includes(performing) ? actIdea.value.trim() : '',
    roast: roast || '',
    roast_restrictions: ['yes', 'gentle'].includes(roast) ? offLimits.value.trim() : '',
    comment: commentField.value.trim(),
    submitted_at: new Date().toISOString()
  };

  saving = true;
  $('submit-btn').disabled = true;
  updateSubmitLabel();
  try {
    const res = await fetch('/api/rsvp/' + encodeURIComponent(userId), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('save failed');
    existing = Object.assign({}, existing || {}, data);
    showSuccess();
    $('success-view').focus();
  } catch (e) {
    $('err-global').hidden = false;
  } finally {
    saving = false;
    $('submit-btn').disabled = false;
    updateSubmitLabel();
  }
});

form.addEventListener('change', syncFollowUps);
nameField.addEventListener('input', () => { if (nameField.value.trim()) $('err-name').hidden = true; });
form.addEventListener('change', (e) => { if (e.target.name === 'status') $('err-status').hidden = true; });
$('edit-rsvp').addEventListener('click', () => { openForm(); nameField.focus(); });

/* ===== ORGANIZER ===== */
const isPerf = (e) => e.performing === 'yes' || e.performing === 'maybe';
const isRoast = (e) => e.roast === 'yes' || e.roast === 'gentle';
const filters = [
  ['all', () => true],
  ['coming', (e) => e.status === 'coming'],
  ['not_coming', (e) => e.status === 'not_coming'],
  ['maybe', (e) => e.status === 'maybe'],
  ['perf', isPerf],
  ['roast', isRoast]
];
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmtDate = (s) => s ? new Date(s).toLocaleDateString(language === 'en' ? 'en-GB' : 'ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' }) : '';

function renderAdmin() {
  const stats = [
    ['s_total', entries.length],
    ['s_coming', entries.filter((e) => e.status === 'coming').length],
    ['s_not_coming', entries.filter((e) => e.status === 'not_coming').length],
    ['s_maybe', entries.filter((e) => e.status === 'maybe').length],
    ['s_perf', entries.filter(isPerf).length],
    ['s_roast', entries.filter(isRoast).length]
  ];
  $('admin-stats').innerHTML = stats.map(([k, n]) => `<div class="admin-stat"><strong>${n}</strong><span>${esc(t(k))}</span></div>`).join('');
  $('admin-filters').innerHTML = filters.map(([k]) => `<button type="button" class="admin-filter" data-filter="${k}" aria-pressed="${k === filter}">${esc(t('f_' + k))}</button>`).join('');

  const test = (filters.find(([k]) => k === filter) || filters[0])[1];
  const rows = entries.filter(test).sort((a, b) => String(b.submitted_at || '').localeCompare(String(a.submitted_at || '')));
  const body = $('admin-body');
  if (!rows.length) {
    body.innerHTML = `<tr><td colspan="8" class="admin-empty">${esc(entries.length ? t('noMatch') : t('noEntries'))}</td></tr>`;
    return;
  }
  body.innerHTML = rows.map((e) => {
    const st = ['coming', 'not_coming', 'maybe'].includes(e.status) ? e.status : '';
    return `<tr>
      <td class="admin-name">${esc(e.name)}</td>
      <td><span class="badge" data-status="${st}">${esc(st ? t('st_' + st) : e.status)}</span></td>
      <td>${esc(e.performing ? t('pf_' + e.performing) || e.performing : '')}</td>
      <td>${esc(e.performance_desc)}</td>
      <td>${esc(e.roast ? t('ro_' + e.roast) || e.roast : '')}</td>
      <td>${esc(e.roast_restrictions)}</td>
      <td>${esc(e.comment)}</td>
      <td class="admin-date">${esc(fmtDate(e.submitted_at))}</td>
    </tr>`;
  }).join('');
}

$('admin-filters').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  filter = b.dataset.filter;
  renderAdmin();
});

function csvMessage(key) {
  const m = $('csv-msg');
  m.textContent = t(key);
  m.hidden = false;
  clearTimeout(csvMsgTimer);
  csvMsgTimer = setTimeout(() => { m.hidden = true; }, 4000);
}

$('csv-btn').addEventListener('click', () => {
  if (!entries.length) { csvMessage('csvEmpty'); return; }
  const cols = ['colName', 'colStatus', 'colPerf', 'colPerfDesc', 'colRoast', 'colRestr', 'colComment', 'colDate'];
  const header = cols.map((k) => t(k));
  const rows = entries.map((e) => [
    e.name, e.status ? t('st_' + e.status) || e.status : '',
    e.performing ? t('pf_' + e.performing) || e.performing : '', e.performance_desc,
    e.roast ? t('ro_' + e.roast) || e.roast : '', e.roast_restrictions, e.comment,
    e.submitted_at ? new Date(e.submitted_at).toLocaleString(language === 'en' ? 'en-GB' : 'ru-RU') : ''
  ]);
  const csv = [header, ...rows].map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
  try {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: 'katyusik_rsvp.csv' });
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
    csvMessage('csvDone');
  } catch (e) {
    csvMessage('csvFail');
  }
});

async function initAdmin(secret) {
  $('admin').hidden = false;
  renderAdmin();
  const load = async () => {
    try {
      const res = await fetch('/api/admin/rsvps?secret=' + encodeURIComponent(secret));
      if (!res.ok) throw new Error();
      entries = await res.json();
      renderAdmin();
    } catch {
      $('admin-body').innerHTML = `<tr><td colspan="8" class="admin-empty">${esc(t('loadError'))}</td></tr>`;
    }
  };
  await load();
  setInterval(load, 30000);
}

/* ===== INIT ===== */
const mapLink = $('map-link');
if (eventDetails.mapsUrl) {
  mapLink.href = eventDetails.mapsUrl;
  mapLink.hidden = false;
}
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));

async function init() {
  let saved = 'ru';
  try { saved = localStorage.getItem('kcc_lang') || 'ru'; } catch (e) {}
  setLanguage(saved === 'en' ? 'en' : 'ru');
  syncFollowUps();

  try {
    userId = localStorage.getItem('kcc_user_id');
    if (!userId) {
      const buf = new Uint8Array(16);
      crypto.getRandomValues(buf);
      buf[6] = (buf[6] & 0x0f) | 0x40;
      buf[8] = (buf[8] & 0x3f) | 0x80;
      const h = [...buf].map(b => b.toString(16).padStart(2, '0'));
      userId = `${h.slice(0,4).join('')}-${h.slice(4,6).join('')}-${h.slice(6,8).join('')}-${h.slice(8,10).join('')}-${h.slice(10).join('')}`;
      localStorage.setItem('kcc_user_id', userId);
    }
  } catch (e) { userId = Date.now().toString(36); }

  showView('loading');

  try {
    const res = await fetch('/api/rsvp/' + encodeURIComponent(userId));
    if (res.ok) { const d = await res.json(); if (d) existing = d; }
  } catch (e) {}

  openForm();

  try {
    const secret = new URLSearchParams(location.search).get('admin');
    if (secret) {
      const check = await fetch('/api/admin/check?secret=' + encodeURIComponent(secret));
      if (check.ok) initAdmin(secret);
    }
  } catch (e) {}
}

init();

}
