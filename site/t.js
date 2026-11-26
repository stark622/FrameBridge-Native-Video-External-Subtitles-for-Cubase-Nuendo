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
  window.fbTrack = ev; // the file check reports the kind of file and the result (never its name or contents)

  var ref = '';
  try { if (document.referrer) { var r = new URL(document.referrer); if (r.host !== location.host) ref = r.host; } } catch (e) {}
  ev('pv', ref);

  // clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a, summary, button') : null;
    if (!a) return;
    if (a.tagName === 'BUTTON') {
      var clip = function (fig) { var v = fig && fig.querySelector('video'); return v ? (v.getAttribute('src') || '').replace(/^.*\/|\.mp4.*$/g, '') : ''; };
      if (a.classList.contains('mt-btn')) { if (a.getAttribute('aria-expanded') !== 'true') ev('guide'); }
      else if (a.classList.contains('dt')) {
        var tabs = Array.prototype.slice.call(document.querySelectorAll('.dt')), figs = document.querySelectorAll('.demo');
        ev('clip', clip(figs[tabs.indexOf(a)]));
      }
      else if (a.classList.contains('demo-zoom')) ev('zoom', clip(a.parentNode));
      else if (a.classList.contains('fmt-toggle')) { if (a.getAttribute('aria-expanded') !== 'true') ev('formats_all'); }
      else if (a.classList.contains('more-btn')) { if (a.getAttribute('aria-expanded') !== 'true') ev('nearby_builds'); }
      else if (a.classList.contains('b2-btn')) { if (a.getAttribute('aria-expanded') !== 'true') ev('whats_new'); }
      return;
    }
    if (a.tagName === 'SUMMARY') {
      var d = a.parentNode;
      if (d.classList.contains('lang')) { if (!d.open) ev('lang_menu'); return; }
      if (d.classList.contains('likely')) { if (!d.open) ev('likely'); return; }
      if (!d.open) {
        var all = document.querySelectorAll('#faq details');
        for (var i = 0; i < all.length; i++) if (all[i] === d) ev('faq', i + 1);
      }
      return;
    }
    var h = a.getAttribute('href') || '';
    if (a.id === 'demo') ev('play');
    else if (h.indexOf('/download/') === 0) ev('demo_dl', a.getAttribute('aria-describedby') === 'tc-tip' ? 'hero' : 'pricing');
    else if (h === '#check') ev('to_check', a.classList.contains('hero-check') ? 'hero' : a.closest('.tabbar') ? 'tabbar' : a.closest('#faq') ? 'faq' : 'menu');
    else if (h.indexOf('creem.io') >= 0) ev('buy', a.id === 'buy' ? 'pricing' : (a.closest('.site-header') ? 'header' : 'hero'));
    else if (a.hasAttribute('data-lang')) ev('lang', a.getAttribute('data-lang'));
    else if (h.indexOf('NjNHtkc8-OE') >= 0) ev('ext_video');
    else if (/^https?:/.test(h)) { try { ev('out', new URL(h).host); } catch (x) {} }
    else if (h.charAt(0) === '/' && h.indexOf('#') < 0) ev('nav', h);
  }, true);

  // the before/after slider was moved (once per page)
  var slid = false;
  function slider(e) { if (!slid && e.target.closest && e.target.closest('.ba-box')) { slid = true; ev('slider'); } }
  document.addEventListener('pointerdown', slider, true);
  document.addEventListener('keydown', slider, true);

  // hover cards (demo, file check, what's new in Beta 3): counted once per page when the mouse stays on the button 0.6 s
  var cardSeen = {}, cardTimer = null;
  function cardName(el) {
    var t = el.querySelector('[aria-describedby]');
    var id = t ? t.getAttribute('aria-describedby') : '';
    return id === 'tc-tip' ? 'demo_hero' : id === 'tc-tip2' ? 'demo_pricing' : id === 'hc-tip' ? 'check' : id === 'b2-tip' ? 'whats_new' : '';
  }
  document.addEventListener('pointerover', function (e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    var el = e.target.closest ? e.target.closest('.hc, .b2') : null;
    var n = el ? cardName(el) : '';
    if (!n || cardSeen[n] || cardTimer) return;
    cardTimer = setTimeout(function () { cardTimer = null; if (!cardSeen[n] && el.matches(':hover')) { cardSeen[n] = 1; ev('card', n); } }, 600);
  }, true);
  document.addEventListener('pointerout', function (e) {
    if (cardTimer && e.target.closest && e.target.closest('.hc, .b2') && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.hc, .b2'))) { clearTimeout(cardTimer); cardTimer = null; }
  }, true);

  // which sections were actually seen
  if ('IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting && !seen[x.target.id]) { seen[x.target.id] = 1; ev('see', x.target.id); io.unobserve(x.target); }
      });
    }, { threshold: 0.35 });
    ['how', 'features', 'formats', 'check', 'compatibility', 'pricing', 'faq'].forEach(function (id) {
      var el = document.getElementById(id); if (el) io.observe(el);
    });
  }

  // active time and scroll depth, sent once each time the page is hidden or closed (values are cumulative per page load)
  var active = 0, last = Date.now(), visible = !document.hidden, maxScroll = 0, reported = false;
  function tick() { if (visible) active += Date.now() - last; last = Date.now(); }
  // the section on screen when the page is closed or hidden: the last one whose top is above the middle of the window
  function where() {
    var at = 'top', mid = innerHeight / 2;
    ['how', 'features', 'formats', 'check', 'compatibility', 'pricing', 'faq'].forEach(function (id) {
      var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < mid) at = id;
    });
    return at;
  }
  function bye() {
    tick(); visible = false;
    if (!reported) { reported = true; ev('leave', Math.round(active / 1000) + 's/' + maxScroll + '%/' + where()); }
    send(true);
  }
  window.addEventListener('scroll', function () {
    var h = document.documentElement.scrollHeight - innerHeight;
    if (h > 0) maxScroll = Math.min(100, Math.max(maxScroll, Math.round(100 * scrollY / h)));
  }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) bye();
    else { last = Date.now(); visible = true; reported = false; }
  });
  window.addEventListener('pagehide', bye);
})();
