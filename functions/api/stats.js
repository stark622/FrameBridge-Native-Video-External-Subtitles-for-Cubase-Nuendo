// Private statistics report: /api/stats?key=<STATS_KEY>&days=7|all   (&format=json for aggregates, &full=1 adds every visit and event)
import { ensureTable } from './e.js';

const FAQ = ['Changes video files?', 'How to remove', 'Steinberg files?', 'Antivirus warning', 'Plugin? Mac version?', 'Which subtitle file', 'Refund if it does not work', 'After a Cubase/Nuendo update'];
const OWNER_COUNTRIES = ['UA'];
const SECTIONS = ['how', 'features', 'formats', 'compatibility', 'pricing', 'faq'];

// Every visitor Cloudflare saw (it keeps request details for 31 days), including those before this counter existed.
// A person = a browser that loaded the site's stylesheet; bots, data-centre crawlers, faked Chrome strings and
// "farms" (4+ countries in the same minute) are left out; VPN/server networks are shown as uncertain.
// Needs the Pages secret CF_API_TOKEN (read-only analytics token). IP addresses only group requests and are not shown.
const ZONE = 'd2f096ab8dda3ff2f77cab796160b463';
const SITE_START = Date.UTC(2026, 9, 29);
const BOT_UA = /bot|spider|crawl|checker|validator|inspectiontool|google-|headless|lighthouse|preview|curl|wget|python|go-http/i;
const CLOUD = /google|amazon|aws|microsoft|azure|akamai|oracle|alibaba|tencent|huawei/i;
const VPN = /digitalocean|ovh|hetzner|linode|scaleway|vultr|choopa|contabo|leaseweb|ionos|hostinger|datacamp|m247|powerhouse|gsl networks|zenlayer|g-core|psychz|cdn77|packethub|tzulo|hostroyale|sondatech|clouvider|performive|quadranet|servers\.com|hosting|server|gthost|estnoc/i;

async function cfQuery(token, parts) {
  const r = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `query($z:String!){viewer{zones(filter:{zoneTag:$z}){${parts.join(' ')}}}}`, variables: { z: ZONE } }),
  });
  const j = await r.json();
  if (j.errors && j.errors.length) throw new Error(j.errors.map((e) => e.message).join('; '));
  return Object.values(j.data.viewer.zones[0]).flat().filter(Boolean).sort((a, b) => (a.datetime < b.datetime ? -1 : 1));
}

// one alias per UTC day: on wider windows Cloudflare returns only a sample
function dayParts(days, filter, fields) {
  return days.map(([a, b], i) => `d${i}:httpRequestsAdaptive(limit:10000,filter:{datetime_geq:"${new Date(a).toISOString()}",datetime_lt:"${new Date(b).toISOString()}",${filter}}){${fields}}`);
}

async function cfVisitors(token, sinceMs, showOwner) {
  const now = Date.now();
  const from = Math.max(sinceMs, now - 31 * 86400000 + 600000, SITE_START);
  const days = [];
  for (let t = from; t < now; t = Math.floor(t / 86400000) * 86400000 + 86400000) days.push([t, Math.min(Math.floor(t / 86400000) * 86400000 + 86400000, now)]);
  if (!days.length) return { visits: [], bots: 0, farm: 0, owner: 0 };

  const rows = await cfQuery(token, dayParts(days, 'clientRequestPath:"/style.css"',
    'datetime clientIP clientCountryName clientASNDescription userAgentOS userAgentBrowser userAgent'));
  for (const r of rows) {
    const ua = r.userAgent || '', net = r.clientASNDescription || '';
    const fakeChrome = /Chrome\//.test(ua) && (!/KHTML, like Gecko/.test(ua) || /Chrome\/\d+(\.\d+)? /.test(ua));
    r.k = BOT_UA.test(ua) || BOT_UA.test(r.userAgentBrowser || '') || fakeChrome || CLOUD.test(net) ? 'bot'
      : !showOwner && OWNER_COUNTRIES.includes(r.clientCountryName) ? 'owner' : VPN.test(net) ? 'vpn' : 'human';
  }
  const perMinute = {};
  for (const r of rows) if (r.k === 'human' || r.k === 'vpn') (perMinute[r.datetime.slice(0, 16)] ||= new Set()).add(r.clientCountryName);
  let farm = 0;
  for (const r of rows) if ((r.k === 'human' || r.k === 'vpn') && perMinute[r.datetime.slice(0, 16)].size >= 4) { r.k = 'bot'; farm++; }

  const visits = [], last = {};
  for (const r of rows) {
    if (r.k !== 'human' && r.k !== 'vpn') continue;
    const t = Date.parse(r.datetime);
    if (last[r.clientIP] && t - last[r.clientIP] < 7200000) continue; // same visit
    last[r.clientIP] = t;
    visits.push({ t, ip: r.clientIP, k: r.k, country: r.clientCountryName, net: r.clientASNDescription, sys: `${r.userAgentOS} / ${r.userAgentBrowser}` });
  }
  const result = { visits, bots: rows.filter((r) => r.k === 'bot').length, farm, owner: rows.filter((r) => r.k === 'owner').length };
  if (!visits.length) return result;

  // pages of those visitors: only the days they came on, only their addresses
  const byDay = {};
  for (const v of visits) for (const t of [v.t, v.t + 7200000]) {
    const d = Math.floor(t / 86400000) * 86400000;
    if (d < now) (byDay[d] ||= new Set()).add(v.ip);
  }
  const parts = Object.entries(byDay).map(([d, ips], i) => `p${i}:httpRequestsAdaptive(limit:10000,filter:{datetime_geq:"${new Date(+d).toISOString()}",datetime_lt:"${new Date(Math.min(+d + 86400000, now)).toISOString()}",clientIP_in:${JSON.stringify([...ips])},OR:[{edgeResponseContentTypeName:"html"},{clientRequestPath:"/api/e"}]}){datetime clientIP clientRequestPath edgeResponseStatus edgeResponseContentTypeName}`);
  const req = await cfQuery(token, parts);
  for (const v of visits) {
    const mine = req.filter((q) => q.clientIP === v.ip && Date.parse(q.datetime) >= v.t - 600000 && Date.parse(q.datetime) < v.t + 7200000);
    const pages = [];
    for (const q of mine) {
      if (q.edgeResponseContentTypeName !== 'html' || (q.edgeResponseStatus !== 200 && q.edgeResponseStatus !== 304) || q.clientRequestPath === '/api/stats') continue;
      if (pages[pages.length - 1] !== q.clientRequestPath) pages.push(q.clientRequestPath);
    }
    const counter = mine.some((q) => q.clientRequestPath === '/api/e');
    const sec = mine.length ? Math.round((Date.parse(mine[mine.length - 1].datetime) - Date.parse(mine[0].datetime)) / 1000) : 0;
    // reading time is visible only when the visitor moved between pages or this counter was running (from 4 Nov)
    v.time = pages.length <= 1 && !counter && sec < 60 ? 'unknown' : sec < 60 ? `${sec} s` : `${Math.round(sec / 60)} min`;
    v.pages = pages;
    v.counter = counter;
    delete v.ip;
  }
  return result;
}

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
  for (const s of sessions) {
    // behaviour no person shows: several pages in no time, or 3+ sections "seen" within 2 seconds
    if (!s.bot && ((s.views.length >= 3 && s.time === 0 && !s.acts) || (s.time <= 2 && s.sees.size >= 3))) s.bot = 1;
  }
  // the owner tests the site from Ukraine, so those visits are left out of the report (rows stay stored; &owner=1 shows them)
  const showOwner = url.searchParams.get('owner') === '1';
  const owner = sessions.filter((s) => !s.bot && !showOwner && OWNER_COUNTRIES.includes(s.country));
  const human = sessions.filter((s) => !s.bot && !owner.includes(s));
  const keep = new Set(human.map((s) => s.sid));
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
    if (!keep.has(r.sid)) continue;
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
    sessions_flagged_bot: sessions.filter((s) => s.bot).length, sessions_owner_excluded: owner.length, buy_click_sessions: human.filter((s) => s.buy).length,
    video_play_sessions: human.filter((s) => s.play).length, avg_active_seconds_engaged: avgTime,
  };

  let cf = null, cfError = '';
  if (env.CF_API_TOKEN) {
    try { cf = await cfVisitors(env.CF_API_TOKEN, since, showOwner); } catch (e) { cfError = String((e && e.message) || e); }
  }

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
      cf_visitors: cf ? cf.visits.map((v) => ({ ...v, start: new Date(v.t).toISOString() })) : null, cf_error: cfError || undefined,
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
<div class="tile"><b>${owner.length}</b>own visits (${OWNER_COUNTRIES.join(', ')})<br><span class="muted">${showOwner ? 'shown' : 'excluded'}</span></div>
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
${!env.CF_API_TOKEN
    ? '<h2>All visitors seen by Cloudflare</h2><p class="muted">Add the Pages secret CF_API_TOKEN (read-only analytics token) to list here every visitor of the last 31 days, including those before this counter.</p>'
    : cfError
      ? `<h2>All visitors seen by Cloudflare</h2><p class="muted">Cloudflare error: ${esc(cfError)}</p>`
      : table('All visitors seen by Cloudflare, also before this counter (newest first, UTC; Cloudflare keeps 31 days)',
          cf.visits.slice().reverse().map((v) => [new Date(v.t).toISOString().slice(5, 16).replace('T', ' '), v.k === 'vpn' ? 'VPN/server?' : 'person',
            v.country, v.net, v.sys, v.time, v.pages.length ? v.pages.join(' → ') : '—', v.counter ? 'yes' : '']),
          ['Start', 'Type', 'Country', 'Network', 'System', 'On site', 'Pages', 'In this counter']) +
        `<div class="muted" style="margin-top:6px">${cf.visits.filter((v) => v.k === 'human').length} people · ${cf.visits.filter((v) => v.k === 'vpn').length} via VPN/servers (person or bot, unclear) · left out: ${cf.bots} bot loads (${cf.farm} from farms: 4+ countries in one minute), ${cf.owner} own (${OWNER_COUNTRIES.join(', ')}) · "unknown" time = one page, reading time not recorded before 4 Nov · Buy clicks and video plays are only in this counter</div>`}
${table('Recent visits (newest first, UTC)', human.slice(-100).reverse().map((s) => [
    new Date(s.t0).toISOString().slice(5, 16).replace('T', ' '), s.country || '—', `${s.os} · ${s.br} · ${s.dev}`, s.lang, s.ref || '—',
    `${s.time} s · ${s.scroll}%`, s.trail.join(' → ') + (s.sees.size ? `  [saw: ${[...s.sees].join(', ')}]` : ''),
  ]), ['Start', 'Country', 'System', 'Lang', 'From', 'Active · scroll', 'What they did'])}
</body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
}
