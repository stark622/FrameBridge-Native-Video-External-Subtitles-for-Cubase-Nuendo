// Small visual touches: pointer light on cards, reveal on scroll. Content stays visible without this file.
(function () {
  var cores = navigator.hardwareConcurrency || 8, mem = navigator.deviceMemory || 8;
  var lite = cores <= 4 || mem <= 4 || /[?&]fb-lite=1/.test(location.search);
  if (lite) document.documentElement.classList.add('lite');

  document.addEventListener('pointermove', function (e) {
    var c = e.target.closest ? e.target.closest('.card') : null;
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  if (lite || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var items = document.querySelectorAll('main section h2, main .section-lead, main .card, main .price-card, #faq details, main .note, .showcase .player');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) {
      if (!x.isIntersecting) return;
      var el = x.target;
      el.classList.add('in');
      io.unobserve(el);
      // hand the element back to its own hover transitions once it has arrived
      setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); }, 1300);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  var vh = window.innerHeight;
  items.forEach(function (el) {
    if (el.getBoundingClientRect().top < vh * 0.9) return; // already on screen: no animation
    var sib = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
    el.style.setProperty('--d', Math.min(sib, 5) * 0.07 + 's');
    el.classList.add('reveal');
    io.observe(el);
  });
})();
