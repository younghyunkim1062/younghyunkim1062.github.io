// Shared site behavior: mobile nav toggle + accordion (used on grad-school page)

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // On mobile, tapping a dropdown parent link opens the submenu instead of navigating.
  document.querySelectorAll('.has-dropdown > a.nav-link').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  // Accordion (How to Start Graduate School page)
  document.querySelectorAll('.accordion-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.accordion-item');
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Open first accordion item by default
  var first = document.querySelector('.accordion-item');
  if (first) first.classList.add('open');

  // Lightbox — click any .illus-item to view its full-resolution image.
  // Markup: <button class="illus-item" data-full="path/to/full.png" data-caption="...">
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCaption = lightbox.querySelector('.lightbox-caption');

    function openLightbox(src, caption) {
      lightboxImg.src = src;
      lightboxCaption.textContent = caption || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.illus-item').forEach(function (el) {
      el.addEventListener('click', function () {
        openLightbox(el.dataset.full, el.dataset.caption);
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }
});
