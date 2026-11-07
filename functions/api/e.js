// Receives anonymous site events from /t.js and stores them in D1 (binding DB).
// Stored: time, random tab-session id, page, language, event, OS/browser/device family,
// country (from Cloudflare), referring host. Never stored: IP address, full user agent.

let ready = false;
export async function ensureTable(db) {
  if (ready) return;
  await db.prepare(`CREATE TABLE IF NOT EXISTS events (
    ts INTEGER, sid TEXT, path TEXT, lang TEXT, ev TEXT, val TEXT,
    os TEXT, br TEXT, dev TEXT, country TEXT, ref TEXT, bot INTEGER)`).run();
  await db.prepare('CREATE INDEX IF NOT EXISTS events_ts ON events (ts)').run();
  ready = true;
}

function parseUA(ua) {
  let os = 'Other';
  if (/Windows NT/.test(ua)) os = 'Windows';
  else if (/iPhone|iPad|iPod/.test(ua)) os = 'iOS';
  else if (/Android/.test(ua)) os = 'Android';
  else if (/Mac OS X|Macintosh/.test(ua)) os = 'macOS';
  else if (/CrOS/.test(ua)) os = 'ChromeOS';
  else if (/Linux/.test(ua)) os = 'Linux';
  let br = 'Other';
  if (/Edg\//.test(ua)) br = 'Edge';
  else if (/OPR\/|Opera/.test(ua)) br = 'Opera';
  else if (/YaBrowser/.test(ua)) br = 'Yandex';
  else if (/Firefox\//.test(ua)) br = 'Firefox';
  else if (/Chrome\//.test(ua)) br = 'Chrome';
  else if (/Safari\//.test(ua)) br = 'Safari';
  const dev = /iPad|Tablet/.test(ua) ? 'tablet' : (/Mobi|iPhone|Android/.test(ua) ? 'mobile' : 'desktop');
  const named = /bot|crawl|spider|slurp|headless|lighthouse|preview|inspectiontool|google-|python|curl|wget|phantom|puppeteer|playwright|selenium/i.test(ua);
  // a real Chrome always sends "KHTML, like Gecko" and a four-part version; scrapers often fake a short one
  const fakeChrome = /Chrome\//.test(ua) && (!/KHTML, like Gecko/.test(ua) || /Chrome\/\d+\.\d+ /.test(ua) || (/Windows NT/.test(ua) && !/Win64|WOW64/.test(ua)));
  const bot = named || fakeChrome ? 1 : 0;
  return { os, br, dev, bot };
}

const clip = (v, n) => String(v == null ? '' : v).slice(0, n);

export async function onRequestPost({ request, env }) {
  if (!env.DB) return new Response(null, { status: 204 });
  if (Number(request.headers.get('content-length') || 0) > 8192) return new Response(null, { status: 413 });
  let b;
  try { b = await request.json(); } catch (e) { return new Response(null, { status: 400 }); }
  const events = Array.isArray(b && b.e) ? b.e.slice(0, 20) : [];
  if (!events.length) return new Response(null, { status: 204 });

  const u = parseUA(request.headers.get('user-agent') || '');
  const country = (request.cf && request.cf.country) || '';
  const sid = clip(b.s, 16), path = clip(b.p, 80), lang = clip(b.l, 10);
  const now = Date.now();

  await ensureTable(env.DB);
  const stmt = env.DB.prepare('INSERT INTO events VALUES (?,?,?,?,?,?,?,?,?,?,?,?)');
  const rows = events.map((x) => {
    const ev = clip(x && x[0], 20), val = clip(x && x[1], 120);
    return stmt.bind(now, sid, path, lang, ev, ev === 'pv' ? '' : val, u.os, u.br, u.dev, country, ev === 'pv' ? val : '', u.bot);
  });
  await env.DB.batch(rows);
  return new Response(null, { status: 204 });
}

export async function onRequest() {
  return new Response(null, { status: 405 });
}
