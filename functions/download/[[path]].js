// Counts real downloads of files in /download/ (the demo), also from direct links such as the GitHub README,
// then serves the file unchanged. Stored like the page counter (functions/api/e.js): time, file, OS/browser/device
// family, country, referring host, bot flag. Never stored: IP address, full user agent.
import { ensureTable, parseUA } from '../api/e.js';

export async function onRequestGet({ request, env, waitUntil }) {
  const res = await env.ASSETS.fetch(request);
  // a download manager may fetch one file in several pieces: only the first piece (or the whole file) counts
  const range = request.headers.get('range') || '';
  if (env.DB && res.status < 400 && (!range || /^bytes=0-/.test(range))) {
    const u = parseUA(request.headers.get('user-agent') || '');
    let ref = '';
    try { const r = request.headers.get('referer'); if (r) ref = new URL(r).host; } catch (e) {}
    const country = (request.cf && request.cf.country) || '';
    const path = new URL(request.url).pathname.slice(0, 80);
    const sid = 'dl' + Math.random().toString(36).slice(2, 12);
    waitUntil((async () => {
      await ensureTable(env.DB);
      await env.DB.prepare('INSERT INTO events VALUES (?,?,?,?,?,?,?,?,?,?,?,?)')
        .bind(Date.now(), sid, path, '', 'dl', '', u.os, u.br, u.dev, country, ref, u.bot).run();
    })().catch(() => {}));
  }
  return res;
}

export function onRequestHead({ request, env }) {
  return env.ASSETS.fetch(request);
}
