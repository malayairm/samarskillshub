// Enrollment pass: click to change the viewing angle
(function () {
  var pass = document.querySelector('.pass');
  if (!pass) return;
  pass.addEventListener('click', function () {
    var on = pass.getAttribute('aria-pressed') === 'true';
    pass.setAttribute('aria-pressed', on ? 'false' : 'true');
  });
})();

// Mobile menu toggle
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
