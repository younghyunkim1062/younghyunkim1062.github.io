// Renders TRAVEL_PINS (from travel-data.js) as clickable, color-coded pins on #travel-map,
// builds a category filter bar in #travel-filters, and shows the selected pin's story
// in #travel-detail.

document.addEventListener('DOMContentLoaded', function () {
  var svg = document.getElementById('travel-map');
  var detail = document.getElementById('travel-detail');
  var filterBar = document.getElementById('travel-filters');
  if (!svg || typeof TRAVEL_PINS === 'undefined') return;

  var ns = 'http://www.w3.org/2000/svg';
  var viewBox = svg.viewBox.baseVal;
  var vbW = viewBox.width || 1000;
  var vbH = viewBox.height || 500;
  var activeFilter = 'all';
  var pinGroups = [];

  function categoryMeta(cat) {
    if (typeof TRAVEL_CATEGORIES !== 'undefined' && TRAVEL_CATEGORIES[cat]) return TRAVEL_CATEGORIES[cat];
    return { label: cat || 'Other', color: '#A51C30' };
  }

  // Equirectangular projection — matches the projection used to generate the country paths.
  function project(lat, lon) {
    return [(lon + 180) / 360 * vbW, (90 - lat) / 180 * vbH];
  }

  function applyFilter() {
    pinGroups.forEach(function (item) {
      var visible = activeFilter === 'all' || item.pin.category === activeFilter;
      item.g.style.display = visible ? '' : 'none';
    });
  }

  function buildFilterBar() {
    if (!filterBar) return;
    var seen = [];
    TRAVEL_PINS.forEach(function (pin) {
      if (seen.indexOf(pin.category) === -1) seen.push(pin.category);
    });

    function makeButton(value, label, color) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'map-filter-btn';
      if (value === activeFilter) btn.classList.add('active');
      btn.dataset.filter = value;
      if (color) {
        var dot = document.createElement('span');
        dot.className = 'dot';
        dot.style.background = color;
        btn.appendChild(dot);
      }
      btn.appendChild(document.createTextNode(label));
      btn.addEventListener('click', function () {
        activeFilter = value;
        filterBar.querySelectorAll('.map-filter-btn').forEach(function (b) {
          b.classList.toggle('active', b.dataset.filter === value);
        });
        applyFilter();
      });
      return btn;
    }

    filterBar.appendChild(makeButton('all', 'All', null));
    seen.forEach(function (cat) {
      var meta = categoryMeta(cat);
      filterBar.appendChild(makeButton(cat, meta.label, meta.color));
    });
  }

  TRAVEL_PINS.forEach(function (pin) {
    var xy = project(pin.lat, pin.lon);
    var cx = xy[0];
    var cy = xy[1];
    var color = categoryMeta(pin.category).color;

    var g = document.createElementNS(ns, 'g');
    g.setAttribute('class', 'map-pin');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', pin.name);

    var halo = document.createElementNS(ns, 'circle');
    halo.setAttribute('cx', cx);
    halo.setAttribute('cy', cy);
    halo.setAttribute('r', 13);
    halo.setAttribute('fill', color);
    halo.setAttribute('opacity', '0.22');

    var dot = document.createElementNS(ns, 'circle');
    dot.setAttribute('cx', cx);
    dot.setAttribute('cy', cy);
    dot.setAttribute('r', 6);
    dot.setAttribute('fill', color);
    dot.setAttribute('stroke', '#fff');
    dot.setAttribute('stroke-width', '2');

    var label = document.createElementNS(ns, 'text');
    label.setAttribute('x', cx);
    label.setAttribute('y', cy - 16);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('font-size', '11');
    label.setAttribute('font-weight', '700');
    label.setAttribute('fill', '#22503f');
    label.textContent = pin.name;

    g.appendChild(halo);
    g.appendChild(dot);
    g.appendChild(label);
    svg.appendChild(g);
    pinGroups.push({ pin: pin, g: g });

    function show() {
      var photosHtml = '';
      if (pin.photos && pin.photos.length) {
        photosHtml = '<div class="grid grid-3" style="margin-top:16px;">' +
          pin.photos.map(function (src) {
            return '<img src="' + src + '" alt="' + pin.name + '" style="border-radius:12px;">';
          }).join('') + '</div>';
      } else {
        photosHtml = '<p class="subtle" style="margin-top:12px;">No photos added yet.</p>';
      }

      detail.innerHTML =
        '<span class="tag" style="background:' + color + '22; color:' + color + ';">' + pin.tag + '</span>' +
        '<h3>' + pin.name + '</h3>' +
        '<p class="mb-0">' + pin.episode + '</p>' +
        photosHtml;
      detail.classList.add('visible');
      detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    g.addEventListener('click', show);
    g.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' || e.key === ' ') show();
    });
  });

  buildFilterBar();
});
