// Private statistics report: /api/stats?key=<STATS_KEY>&days=7|all   (&format=json for aggregates, &full=1 adds every visit and event)
import { ensureTable } from './e.js';

const FAQ = ['Changes video files?', 'How to remove', 'Steinberg files?', 'Antivirus warning', 'Plugin? Mac version?', 'Which subtitle file', 'Refund if it does not work', 'After a Cubase/Nuendo update'];
const SECTIONS = ['how', 'features', 'formats', 'compatibility', 'pricing', 'faq'];

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
function inc(m, k, n = 1) { m[k] = (m[k] || 0) + n; }
function sorted(m) { return Object.entries(m).sort((a, b) => b[1] - a[1]); }

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (!env.STATS_KEY || url.searchParams.get('key') !== env.STATS_KEY) return new Response('Not found', { status: 404 });
  if (!env.DB) return new Response('D1 binding DB is not configured', { status: 500 });
  await ensureTable(env.DB);

  const allTime = url.searchParams.get('days') === 'all';
  const days = allTime ? 'all' : Math.min(Math.max(parseInt(url.searchParams.get('days') || '7', 10) || 7, 1), 365);
  const since = allTime ? 0 : Date.now() - days * 86400000;
  const { results } = await env.DB.prepare(
    'SELECT rowid, ts, sid, path, lang, ev, val, os, br, dev, country, ref, bot FROM events WHERE ts >= ? ORDER BY ts, rowid LIMIT 200000'
  ).bind(since).all();

  // build sessions
  const S = new Map();
  for (const r of results) {
    let s = S.get(r.sid);
    if (!s) {
      s = { sid: r.sid, t0: r.ts, t1: r.ts, os: r.os, br: r.br, dev: r.dev, country: r.country, ref: '', lang: r.lang,
            bot: r.bot, pages: new Set(), trail: [], acts: 0, sees: new Set(), time: 0, scroll: 0, buy: 0, play: 0, views: [] };
      S.set(r.sid, s);
    }
    s.t1 = r.ts;
    s.pages.add(r.path);
    // one entry per page load; 'leave' values are cumulative within a page load, so keep the largest
    if (r.ev === 'pv' || !s.views.length) s.views.push({ t0: r.ts, t1: r.ts, leave: 0 });
    const v = s.views[s.views.length - 1];
    v.t1 = r.ts;
    if (r.ev === 'pv') { if (r.ref && !s.ref) s.ref = r.ref; s.trail.push('open ' + r.path); continue; }
    if (r.ev === 'see') { s.sees.add(r.val); continue; }
    if (r.ev === 'leave') {
      const m = /^(\d+)s\/(\d+)%$/.exec(r.val || '');
      if (m) { v.leave = Math.max(v.leave, +m[1]); s.scroll = Math.min(100, Math.max(s.scroll, +m[2])); }
      continue;
    }
    s.acts++;
    if (r.ev === 'buy') s.buy++;
    if (r.ev === 'play') s.play++;
    s.trail.push(r.ev === 'faq' ? 'faq: ' + (FAQ[+r.val - 1] || r.val) : (r.val ? r.ev + ':' + r.val : r.ev));
  }
  // active time: measured value per page load; when the browser sent none (tab killed), the span of its events
  for (const s of S.values()) s.time = s.views.reduce((a, v) => a + (v.leave || Math.round((v.t1 - v.t0) / 1000)), 0);
  const sessions = [...S.values()];
  const human = sessions.filter((s) => !s.bot);
  const engaged = human.filter((s) => s.acts > 0 || s.sees.size >= 2 || s.time >= 15);

  const by = (key) => {
    const all = {}, eng = {};
    for (const s of human) inc(all, s[key] || '—');
    for (const s of engaged) inc(eng, s[key] || '—');
    return sorted(all).map(([k, n]) => [k, n, eng[k] || 0]);
  };
  const perDay = {};
  for (const s of human) {
    const d = new Date(s.t0).toISOString().slice(0, 10);
    perDay[d] = perDay[d] || [0, 0, 0];
    perDay[d][0]++;
    if (engaged.includes(s)) perDay[d][1]++;
    if (s.buy) perDay[d][2]++;
  }
  const ev = {}, faq = {}, langSw = {}, out = {}, seen = {}, buyFrom = {};
  for (const r of results) {
    if (r.bot) continue;
    if (r.ev === 'faq') inc(faq, FAQ[+r.val - 1] || r.val);
    else if (r.ev === 'lang') inc(langSw, r.val);
    else if (r.ev === 'out') inc(out, r.val);
    else if (r.ev === 'buy') inc(buyFrom, r.val);
    if (r.ev !== 'see' && r.ev !== 'leave' && r.ev !== 'pv') inc(ev, r.ev);
  }
  for (const s of human) for (const id of s.sees) inc(seen, id);
  const avgTime = engaged.length ? Math.round(engaged.reduce((a, s) => a + s.time, 0) / engaged.length) : 0;

  const summary = {
    days, sessions_all: sessions.length, sessions_real_browser: human.length, sessions_engaged: engaged.length,
    sessions_flagged_bot: sessions.length - human.length, buy_click_sessions: human.filter((s) => s.buy).length,
    video_play_sessions: human.filter((s) => s.play).length, avg_active_seconds_engaged: avgTime,
  };

  if (url.searchParams.get('format') === 'json') {
    const full = url.searchParams.get('full') === '1';
    const num = new Map(human.map((s, i) => [s.sid, i + 1]));
    return Response.json({
      ...(full ? {
        visits: human.map((s) => ({
          visit: num.get(s.sid), start: new Date(s.t0).toISOString(), end: new Date(s.t1).toISOString(), country: s.country,
          os: s.os, br: s.br, dev: s.dev, lang: s.lang, ref: s.ref, pages: [...s.pages], active_s: s.time, scroll: s.scroll,
          actions: s.acts, buy: s.buy, play: s.play, sections: [...s.sees], trail: s.trail,
        })),
        event_log: results.filter((r) => num.has(r.sid)).map((r) => ({
          visit: num.get(r.sid), time: new Date(r.ts).toISOString(), path: r.path, ev: r.ev, val: r.ev === 'pv' ? r.ref : r.val,
        })),
      } : {}),
      summary, per_day: perDay, os: by('os'), browser: by('br'), device: by('dev'), country: by('country'),
      language: by('lang'), referrer: by('ref'), events: ev, buy_from: buyFrom, faq, lang_switch: langSw, outbound: out, sections_seen: seen,
      recent: human.slice(-200).reverse().map((s) => ({
        start: new Date(s.t0).toISOString(), country: s.country, os: s.os, br: s.br, dev: s.dev, lang: s.lang, ref: s.ref,
        active_s: s.time, scroll: s.scroll, sections: [...s.sees], trail: s.trail,
      })),
    }, { headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
  }

  const table = (title, rows, head) => `<h2>${esc(title)}</h2><table><tr>${head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr>${
    rows.length ? rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${head.length}">—</td></tr>`}</table>`;
  const pct = (n) => (human.length ? Math.round((100 * n) / human.length) + '%' : '—');

  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>FrameBridge stats</title><style>
body{margin:0;padding:24px;background:#070c16;color:#e8eef8;font:15px/1.5 "Segoe UI",system-ui,sans-serif}
h1{margin:0 0 4px}h2{margin:28px 0 8px;font-size:18px}.muted{color:#9fb0c8}
.tiles{display:flex;flex-wrap:wrap;gap:12px;margin-top:16px}.tile{background:#101a2e;border:1px solid #1d2a44;border-radius:12px;padding:12px 16px;min-width:150px}
.tile b{display:block;font-size:26px}table{border-collapse:collapse;background:#101a2e;border:1px solid #1d2a44;border-radius:10px;min-width:320px}
th,td{padding:6px 12px;border-bottom:1px solid #1d2a44;text-align:left;vertical-align:top}th{color:#9fb0c8;font-weight:600}
.grid{display:flex;flex-wrap:wrap;gap:24px}.trail{color:#9fb0c8;font-size:13px}a{color:#2ea8ff}</style></head><body>
<h1>FrameBridge — visit statistics</h1>
<div class="muted">${allTime ? 'All time' : `Last ${days} day(s)`} · counted only from real browsers that ran the page script ·
<a href="?key=${esc(url.searchParams.get('key'))}&days=1">1 day</a> · <a href="?key=${esc(url.searchParams.get('key'))}&days=7">7 days</a> ·
<a href="?key=${esc(url.searchParams.get('key'))}&days=30">30 days</a> · <a href="?key=${esc(url.searchParams.get('key'))}&days=all">all</a></div>
<div class="tiles">
<div class="tile"><b>${human.length}</b>visits (browsers)</div>
<div class="tile"><b>${engaged.length}</b>engaged visits<br><span class="muted">clicked, read 2+ sections or stayed 15 s+</span></div>
<div class="tile"><b>${summary.buy_click_sessions}</b>visits clicked Buy</div>
<div class="tile"><b>${summary.video_play_sessions}</b>visits played the video</div>
<div class="tile"><b>${avgTime} s</b>avg active time (engaged)</div>
<div class="tile"><b>${summary.sessions_flagged_bot}</b>flagged as bots<br><span class="muted">excluded</span></div>
</div>
${table('Per day (UTC)', sorted(perDay).sort((a, b) => (a[0] < b[0] ? 1 : -1)).map(([d, v]) => [d, v[0], v[1], v[2]]), ['Day', 'Visits', 'Engaged', 'Clicked Buy'])}
<div class="grid">
${table('Operating system', by('os'), ['OS', 'Visits', 'Engaged'])}
${table('Browser', by('br'), ['Browser', 'Visits', 'Engaged'])}
${table('Device', by('dev'), ['Device', 'Visits', 'Engaged'])}
</div><div class="grid">
${table('Country', by('country'), ['Country', 'Visits', 'Engaged'])}
${table('Site language', by('lang'), ['Language', 'Visits', 'Engaged'])}
${table('Came from', by('ref'), ['Referrer', 'Visits', 'Engaged'])}
</div><div class="grid">
${table('Sections seen', SECTIONS.map((id) => [id, seen[id] || 0, pct(seen[id] || 0)]), ['Section', 'Visits', 'Share'])}
${table('Clicks', sorted(ev), ['Action', 'Count'])}
${table('Buy clicked from', sorted(buyFrom), ['Button', 'Count'])}
</div><div class="grid">
${table('FAQ opened', sorted(faq), ['Question', 'Count'])}
${table('Language switched to', sorted(langSw), ['Language', 'Count'])}
${table('Outbound links', sorted(out), ['Site', 'Count'])}
</div>
${table('Recent visits (newest first, UTC)', human.slice(-100).reverse().map((s) => [
    new Date(s.t0).toISOString().slice(5, 16).replace('T', ' '), s.country || '—', `${s.os} · ${s.br} · ${s.dev}`, s.lang, s.ref || '—',
    `${s.time} s · ${s.scroll}%`, s.trail.join(' → ') + (s.sees.size ? `  [saw: ${[...s.sees].join(', ')}]` : ''),
  ]), ['Start', 'Country', 'System', 'Lang', 'From', 'Active · scroll', 'What they did'])}
</body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
}
