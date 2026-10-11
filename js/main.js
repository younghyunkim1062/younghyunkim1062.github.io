document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    links.id = links.id || 'primary-navigation';
    toggle.setAttribute('aria-controls', links.id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', String(links.classList.toggle('open')));
    });
  }
  document.querySelectorAll('.has-dropdown').forEach(function (item, index) {
    var menu = item.querySelector('.dropdown');
    var link = item.querySelector('.nav-link');
    if (!menu || !link) return;
    menu.id = menu.id || 'submenu-' + index;
    var button = document.createElement('button');
    button.type = 'button'; button.className = 'submenu-toggle'; button.textContent = '⌄';
    button.setAttribute('aria-label', 'Toggle ' + link.textContent + ' submenu');
    button.setAttribute('aria-controls', menu.id); button.setAttribute('aria-expanded', 'false');
    link.after(button);
    button.addEventListener('click', function () {
      button.setAttribute('aria-expanded', String(item.classList.toggle('open')));
    });
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { item.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); button.focus(); }
    });
  });
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  function respectMotion() {
    document.querySelectorAll('video').forEach(function (video) {
      video.controls = true;
      if (reduced.matches) { video.autoplay = false; video.pause(); }
    });
  }
  respectMotion(); reduced.addEventListener('change', respectMotion);
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  var img = lightbox.querySelector('img');
  var caption = lightbox.querySelector('.lightbox-caption');
  var close = lightbox.querySelector('.lightbox-close');
  var previousFocus, previousOverflow;
  lightbox.setAttribute('role', 'dialog'); lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image viewer');
  var status = document.createElement('p'); status.setAttribute('role', 'status');
  status.style.color = 'white'; img.parentElement.append(status);
  function closeLightbox() {
    if (!lightbox.classList.contains('open')) return;
    lightbox.classList.remove('open'); img.removeAttribute('src');
    document.body.style.overflow = previousOverflow;
    if (previousFocus) previousFocus.focus();
  }
  document.querySelectorAll('.illus-item[data-full], .link-btn[data-full]').forEach(function (el) {
    el.addEventListener('click', function () {
      previousFocus = el; previousOverflow = document.body.style.overflow;
      caption.textContent = el.dataset.caption || '';
      img.alt = el.dataset.caption || el.querySelector('img')?.alt || 'Enlarged research image';
      status.textContent = 'Loading image…'; img.hidden = true;
      img.onload = function () { status.textContent = ''; img.hidden = false; };
      img.onerror = function () { status.textContent = 'This image could not be loaded. Please close and try again.'; };
      img.src = el.dataset.full; lightbox.classList.add('open');
      document.body.style.overflow = 'hidden'; close.focus();
    });
  });
  close.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'Tab') { e.preventDefault(); close.focus(); }
  });
});
