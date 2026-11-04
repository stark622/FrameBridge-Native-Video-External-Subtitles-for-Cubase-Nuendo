// FrameBridge anonymous visit statistics: no cookies, no IP, no persistent identifier.
// Opt out in this browser: open any page with ?fb-notrack=1 (undo with ?fb-notrack=0).
(function () {
  var q = location.search;
  try {
    if (/[?&]fb-notrack=1/.test(q)) localStorage.setItem('fb-notrack', '1');
    if (/[?&]fb-notrack=0/.test(q)) localStorage.removeItem('fb-notrack');
    if (localStorage.getItem('fb-notrack') === '1') return;
  } catch (e) {}
  if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;

  var sid;
  try {
    sid = sessionStorage.getItem('fb-sid');
    if (!sid) { sid = Math.random().toString(36).slice(2, 14); sessionStorage.setItem('fb-sid', sid); }
  } catch (e) { sid = Math.random().toString(36).slice(2, 14); }

  var lang = document.documentElement.lang || '';
  var path = location.pathname;
  var queue = [];
  var timer = null;

  function send(final) {
    if (!queue.length) return;
    var body = JSON.stringify({ s: sid, p: path, l: lang, e: queue.splice(0, 20) });
    if (final && navigator.sendBeacon) { navigator.sendBeacon('/api/e', new Blob([body], { type: 'application/json' })); return; }
    try { fetch('/api/e', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true }); } catch (e) {}
  }
  function ev(name, val) {
    queue.push([name, val == null ? '' : String(val).slice(0, 120)]);
    if (!timer) timer = setTimeout(function () { timer = null; send(false); }, 1500);
  }

  var ref = '';
  try { if (document.referrer) { var r = new URL(document.referrer); if (r.host !== location.host) ref = r.host; } } catch (e) {}
  ev('pv', ref);

  // clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a, summary') : null;
    if (!a) return;
    if (a.tagName === 'SUMMARY') {
      var d = a.parentNode;
      if (d.classList.contains('lang')) { if (!d.open) ev('lang_menu'); return; }
      if (!d.open) {
        var all = document.querySelectorAll('#faq details');
        for (var i = 0; i < all.length; i++) if (all[i] === d) ev('faq', i + 1);
      }
      return;
    }
    var h = a.getAttribute('href') || '';
    if (a.id === 'demo') ev('play');
    else if (h.indexOf('creem.io') >= 0) ev('buy', a.id === 'buy' ? 'pricing' : (a.closest('.site-header') ? 'header' : 'hero'));
    else if (a.hasAttribute('data-lang')) ev('lang', a.getAttribute('data-lang'));
    else if (h.indexOf('NjNHtkc8-OE') >= 0) ev('ext_video');
    else if (/^https?:/.test(h)) { try { ev('out', new URL(h).host); } catch (x) {} }
    else if (h.charAt(0) === '/' && h.indexOf('#') < 0) ev('nav', h);
  }, true);

  // which sections were actually seen
  if ('IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting && !seen[x.target.id]) { seen[x.target.id] = 1; ev('see', x.target.id); io.unobserve(x.target); }
      });
    }, { threshold: 0.35 });
    ['how', 'features', 'formats', 'compatibility', 'pricing', 'faq'].forEach(function (id) {
      var el = document.getElementById(id); if (el) io.observe(el);
    });
  }

  // active time and scroll depth, sent when the tab is hidden or closed
  var active = 0, last = Date.now(), visible = !document.hidden, maxScroll = 0, left = false;
  function tick() { if (visible) active += Date.now() - last; last = Date.now(); }
  window.addEventListener('scroll', function () {
    var h = document.documentElement.scrollHeight - innerHeight;
    if (h > 0) maxScroll = Math.max(maxScroll, Math.round(100 * scrollY / h));
  }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    tick(); visible = !document.hidden;
    if (document.hidden) { ev('leave', Math.round(active / 1000) + 's/' + maxScroll + '%'); send(true); }
  });
  window.addEventListener('pagehide', function () {
    if (left) return; left = true; tick();
    if (!document.hidden) ev('leave', Math.round(active / 1000) + 's/' + maxScroll + '%');
    send(true);
  });
})();
