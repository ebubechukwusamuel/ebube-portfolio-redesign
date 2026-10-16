(function () {
  'use strict';
  var d = document;

  // Footer year
  var y = d.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var burger = d.querySelector('.burger');
  var menu = d.getElementById('menu');
  function setMenu(open) {
    if (!burger || !menu) return;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
    d.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) {
    burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 820) setMenu(false); });
  }

  // Reveal on scroll
  var els = [].slice.call(d.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Project filters
  var bar = d.querySelector('.filters');
  var grid = d.getElementById('pgrid');
  if (bar && grid) {
    var cards = [].slice.call(grid.querySelectorAll('.pcard'));
    var empty = d.getElementById('empty');
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('.chipbtn');
      if (!b) return;
      var key = b.getAttribute('data-filter');
      [].forEach.call(bar.querySelectorAll('.chipbtn'), function (x) {
        var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', String(on));
      });
      var shown = 0;
      cards.forEach(function (c) {
        var ok = key === 'all' || c.getAttribute('data-filters').split(' ').indexOf(key) > -1;
        c.classList.toggle('hide', !ok);
        if (ok) { shown++; c.classList.add('in'); }
      });
      if (empty) empty.hidden = shown > 0;
      if (history.replaceState) history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key);
    });
    var hash = location.hash.replace('#', '');
    if (hash) { var hb = bar.querySelector('[data-filter="' + hash + '"]'); if (hb) hb.click(); }
  }

  // Contact form
  var form = d.getElementById('contact-form');
  if (form) {
    var status = d.getElementById('form-status');
    var btn = form.querySelector('button[type=submit]');
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var say = function (msg, cls) { status.className = 'status ' + (cls || ''); status.textContent = msg; };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = { name: form.name.value.trim(), email: form.email.value.trim(), message: form.message.value.trim(), website: form.website.value };
      var bad = [];
      if (!data.name) bad.push(form.name);
      if (!EMAIL_RE.test(data.email)) bad.push(form.email);
      if (data.message.length < 5) bad.push(form.message);
      [form.name, form.email, form.message].forEach(function (f) { f.setAttribute('aria-invalid', String(bad.indexOf(f) > -1)); });
      if (bad.length) { say('Please fill in your name, a valid email, and a message.', 'err'); bad[0].focus(); return; }
      btn.disabled = true; say('Sending...');
      fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, body: j }; }); })
        .then(function (res) {
          if (res.ok) { form.reset(); say("Thanks! Your message is on its way. I'll get back to you soon.", 'ok'); }
          else { throw new Error(res.body && res.body.error || 'failed'); }
        })
        .catch(function () {
          status.className = 'status err';
          status.innerHTML = 'Sorry, that did not send. Please email me at <a href="mailto:ebubechkwu.samuel.com@gmail.com">ebubechkwu.samuel.com@gmail.com</a>.';
        })
        .then(function () { btn.disabled = false; });
    });
  }
})();

(function(){var v=document.querySelectorAll('.proof video');if(!v.length)return;
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){var el=e.target;if(e.isIntersecting){var p=el.play();if(p&&p.catch)p.catch(function(){})}else el.pause()})},{threshold:.25});
v.forEach(function(el){el.muted=true;io.observe(el)})})();

// Tickers: auto-scroll that the visitor can also drag, swipe or scroll by hand
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  [].forEach.call(document.querySelectorAll('.tick'), function (el) {
    var sets = el.querySelectorAll('.tick-set');
    if (sets.length < 3) return;
    var speed = parseFloat(el.getAttribute('data-speed')) || 40;
    var lastMeasure = 0, setW = 0, pos = 0, lastSet = 0, last = 0, holdUntil = 0, hovering = false, touching = false, dragging = false, startX = 0, startL = 0;
    function measure() { setW = sets[1].offsetLeft - sets[0].offsetLeft; }
    function wrap() {
      if (!setW) return;
      var p = el.scrollLeft;
      if (p >= setW * 2) { el.scrollLeft = p - setW; } else if (p < setW) { el.scrollLeft = p + setW; } else { return; }
      pos = el.scrollLeft; lastSet = pos;
    }
    function hold(ms) { holdUntil = Math.max(holdUntil, performance.now() + ms); }
    var ready = false;
    function init() { measure(); if (setW < el.clientWidth * 0.8) return; el.scrollLeft = setW; pos = el.scrollLeft; lastSet = pos; ready = true; }
    el.addEventListener('scroll', function () {
      if (Math.abs(el.scrollLeft - lastSet) > 1.5) { pos = el.scrollLeft; lastSet = pos; hold(2500); wrap(); }
    }, { passive: true });
    el.addEventListener('mouseenter', function () { hovering = true; });
    el.addEventListener('mouseleave', function () { hovering = false; hold(600); });
    el.addEventListener('touchstart', function () { touching = true; }, { passive: true });
    el.addEventListener('touchend', function () { touching = false; hold(2500); }, { passive: true });
    el.addEventListener('touchcancel', function () { touching = false; hold(2500); }, { passive: true });
    el.addEventListener('wheel', function () { hold(2500); }, { passive: true });
    el.addEventListener('focusin', function () { hovering = true; });
    el.addEventListener('focusout', function () { hovering = false; hold(600); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { el.scrollLeft += 240; e.preventDefault(); } else if (e.key === 'ArrowLeft') { el.scrollLeft -= 240; e.preventDefault(); }
    });
    el.addEventListener('mousedown', function (e) { if (e.button !== 0) return; dragging = true; startX = e.clientX; startL = el.scrollLeft; el.classList.add('grab'); });
    window.addEventListener('mousemove', function (e) { if (!dragging) return; el.scrollLeft = startL - (e.clientX - startX); hold(2500); });
    window.addEventListener('mouseup', function () { if (!dragging) return; dragging = false; el.classList.remove('grab'); hold(2500); });
    el.addEventListener('dragstart', function (e) { e.preventDefault(); });
    window.addEventListener('resize', function () { measure(); });
    function frame(t) {
      var dt = last ? Math.min(t - last, 64) : 16; last = t;
      if (!ready) { init(); requestAnimationFrame(frame); return; }
      if (t - lastMeasure > 800) { lastMeasure = t; measure(); }
      if (!reduce && !hovering && !touching && !dragging && t > holdUntil && !document.hidden) {
        pos += speed * dt / 1000;
        el.scrollLeft = pos; lastSet = el.scrollLeft;
        if (pos >= setW * 2) { pos -= setW; el.scrollLeft = pos; lastSet = el.scrollLeft; }
      }
      requestAnimationFrame(frame);
    }
    function start() { init(); requestAnimationFrame(frame); }
    start();
  });
})();
