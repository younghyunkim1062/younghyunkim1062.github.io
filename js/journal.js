// Cards are rendered in HTML; filtering is an optional progressive enhancement.
document.addEventListener('DOMContentLoaded', function () {
  var collection = document.querySelector('.journal-collection');
  if (!collection) return;
  var cards = Array.from(collection.querySelectorAll('.journal-card'));
  var filters = collection.querySelector('.journal-filters');
  var buttons = Array.from(filters.querySelectorAll('button'));
  var count = collection.querySelector('.journal-count');
  function apply(tag) {
    if (!buttons.some(function (b) { return b.dataset.journalFilter === tag; })) tag = 'All';
    var total = 0;
    cards.forEach(function (card) {
      card.hidden = tag !== 'All' && card.dataset.tags.split('|').indexOf(tag) < 0;
      if (!card.hidden) total++;
      if (card.hidden) card.querySelectorAll('video').forEach(function (video) { video.pause(); });
    });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.journalFilter === tag)); });
    count.textContent = total + (total === 1 ? ' story' : ' stories');
  }
  filters.hidden = false;
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      apply(button.dataset.journalFilter);
      var url = new URL(location.href);
      if (button.dataset.journalFilter === 'All') url.searchParams.delete('tag');
      else url.searchParams.set('tag', button.dataset.journalFilter);
      url.hash = '';
      history.replaceState(null, '', url);
    });
  });
  function revealHash() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    var target = document.getElementById(id);
    if (target && target.closest('.journal-card')) {
      apply('All');
      target.scrollIntoView({ block: 'start' });
    }
  }
  apply(new URLSearchParams(location.search).get('tag') || 'All');
  revealHash();
  window.addEventListener('hashchange', revealHash);
  document.addEventListener('journal:reveal', function () { apply('All'); });
});
