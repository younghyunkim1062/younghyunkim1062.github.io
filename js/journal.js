// The top navigation is the single entry point for journal categories.
document.addEventListener('DOMContentLoaded', function () {
  var collection = document.querySelector('.journal-collection');
  if (!collection) return;
  var cards = Array.from(collection.querySelectorAll('.journal-card'));
  var nav = document.querySelector('.journal-nav');
  var aliases = { Conference: 'Lab Life', CreArtBot: 'Making', Workshop: 'Making' };
  var tag = new URLSearchParams(location.search).get('tag') || 'All';
  tag = aliases[tag] || tag;
  if (['All', 'Making', 'Travel', 'Lab Life'].indexOf(tag) < 0) tag = 'All';
  function apply(value) {
    cards.forEach(function (card) {
      card.hidden = value !== 'All' && card.dataset.tags.split('|').indexOf(value) < 0;
      if (card.hidden) card.querySelectorAll('video').forEach(function (video) { video.pause(); });
    });
    if (nav) nav.querySelectorAll('a').forEach(function (link) {
      var url = new URL(link.href, location.href);
      var active = url.pathname === location.pathname &&
        (url.searchParams.get('tag') || 'All') === value;
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
  function revealHash() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    var target = document.getElementById(id);
    if (target && target.closest('.journal-card')) {
      apply('All');
      target.scrollIntoView({ block: 'start' });
    }
  }
  apply(tag);
  revealHash();
  window.addEventListener('hashchange', revealHash);
  document.addEventListener('journal:reveal', function () { apply('All'); });
});
