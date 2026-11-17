(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const escapeHTML = (str) => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const validSrc = src => typeof src === 'string' && (
    /^assets\/media\/(?:[\w -]+\/)*[\w -][\w .-]*\.(jpg|jpeg|png|webp|gif)$/i.test(src) ||
    /^assets\/images\/(?:[\w-]+\/)*[\w-][\w.-]*\.(jpg|jpeg|png|webp|gif)$/i.test(src)
  );
  const validCompanyLogoSrc = src => typeof src === 'string' && /^assets\/images\/companies\/(?:[\w-]+\/)*[\w-][\w.-]*\.(png|svg|webp|jpe?g)$/i.test(src);
  const normalizeImage = image => {
    const src = typeof image === 'string' ? image : image && typeof image === 'object' ? image.src : '';
    if (!validSrc(src)) return null;
    return { src, caption: image && typeof image === 'object' && typeof image.caption === 'string' ? image.caption.trim() : '' };
  };
  const imageSources = value => {
    const seen = new Set();
    return (Array.isArray(value) ? value : (value ? [value] : []))
      .map(normalizeImage)
      .filter(image => {
        if (!image || seen.has(image.src)) return false;
        seen.add(image.src);
        return true;
      });
  };
  const photoCaption = (image, title) => image.caption ? `${title} · ${image.caption}` : title;
  const projectImages = item => imageSources(item.images || item.gallery);
  const technologySymbols = {
    chip: '<rect x="8" y="8" width="16" height="16" rx="3"/><rect x="12" y="12" width="8" height="8" rx="1"/><path d="M12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5"/>',
    microchip: '<path d="M11 5h10v22H11zM5 9h6m-6 7h6m-6 7h6m10-14h6m-6 7h6m-6 7h6"/>',
    'single-board': '<rect x="4" y="6" width="24" height="20" rx="3"/><circle cx="11" cy="13" r="3"/><path d="M18 11h6m-6 5h6M9 21h14"/>',
    circuit: '<path d="M4 16h7l4-7h6l3 7h4"/><circle cx="4" cy="16" r="2"/><circle cx="11" cy="16" r="2"/><circle cx="21" cy="9" r="2"/><circle cx="28" cy="16" r="2"/>',
    terminal: '<rect x="4" y="5" width="24" height="22" rx="3"/><path d="m9 12 4 4-4 4m8 0h6M4 10h24"/>',
    code: '<path d="m11 9-7 7 7 7m10-14 7 7-7 7m-3-18-4 20"/>',
    'code-plus': '<path d="m10 10-6 6 6 6m12-12 6 6-6 6m-9 5 4-20m5-4v8m-4-4h8"/>',
    snake: '<path d="M6 11a5 5 0 0 1 5-5h7v7H11a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3h-7v-7"/><path d="M15 10h.01M17 22h.01"/>',
    serial: '<rect x="3" y="7" width="8" height="18" rx="2"/><rect x="21" y="7" width="8" height="18" rx="2"/><path d="M11 12h10m-3-3 3 3-3 3m-7 5h10m-3-3 3 3-3 3"/>',
    spi: '<rect x="3" y="8" width="7" height="16" rx="2"/><rect x="22" y="8" width="7" height="16" rx="2"/><path d="M10 12h12m-12 4h12m-12 4h12"/>',
    i2c: '<rect x="3" y="8" width="7" height="16" rx="2"/><rect x="22" y="8" width="7" height="16" rx="2"/><path d="M10 13h12m-12 6h12m-9-8v4m6-4v4"/>',
    wifi: '<path d="M4 12a18 18 0 0 1 24 0M8 16a12 12 0 0 1 16 0m-12 4a6 6 0 0 1 8 0"/><circle cx="16" cy="24" r="1.5"/>',
    bluetooth: '<path d="M16 4v24l8-7-16-9m0 8 16-9-8-7"/>',
    radio: '<path d="M16 27V12m-5 15h10M12 8a6 6 0 0 1 8 0m-12-4a12 12 0 0 1 16 0"/><circle cx="16" cy="8" r="1"/>',
    network: '<circle cx="16" cy="7" r="3"/><circle cx="7" cy="24" r="3"/><circle cx="25" cy="24" r="3"/><path d="m14 10-5 11m9-11 5 11M10 24h12"/>',
    'edge-ai': '<circle cx="16" cy="16" r="7"/><path d="M16 12v8m-4-4h8M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3m0-20-3 3M9 23l-3 3"/>',
    reinforcement: '<path d="M7 10a11 11 0 0 1 18-2l2 2m0-6v6h-6M25 22a11 11 0 0 1-18 2l-2-2m0 6v-6h6"/><path d="m16 11 1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z"/>',
    'decision-tree': '<circle cx="16" cy="6" r="3"/><circle cx="8" cy="17" r="3"/><circle cx="24" cy="17" r="3"/><circle cx="5" cy="27" r="2"/><circle cx="11" cy="27" r="2"/><circle cx="21" cy="27" r="2"/><circle cx="27" cy="27" r="2"/><path d="m14 9-4 5m8-5 4 5M8 20v3m0 0H5m3 0h3m13-3v3m0 0h-3m3 0h3"/>',
    'term-frequency': '<path d="M6 4h13l6 6v17H6zM19 4v7h6M10 15h3m-3 4h3m-3 4h3"/><path d="M17 24v-4m4 4v-7m4 7v-11"/>',
    'cross-encoder': '<rect x="3" y="6" width="10" height="17" rx="2"/><rect x="19" y="6" width="10" height="17" rx="2"/><path d="M6 11h4m-4 4h4m-4 4h4m12-8h4m-4 4h4m-4 4h4M13 11h6m-3-3 3 3-3 3m6 5h-6m3-3-3 3 3 3"/>',
    'vision-text': '<rect x="3" y="5" width="16" height="22" rx="2"/><circle cx="11" cy="12" r="3"/><path d="m5 23 5-5 3 3 2-2 4 4m2-13h7m-7 5h7m-7 5h5"/>',
    'neural-network': '<circle cx="6" cy="8" r="2.5"/><circle cx="6" cy="24" r="2.5"/><circle cx="16" cy="5" r="2.5"/><circle cx="16" cy="16" r="2.5"/><circle cx="16" cy="27" r="2.5"/><circle cx="26" cy="8" r="2.5"/><circle cx="26" cy="24" r="2.5"/><path d="m8 8 6-2m-6 4 6 5m-6 8 6-6m-6 9 6 1m4-22 6 2m-6 9 6-7m-6 9 6 7m-6-4 6 4"/>',
    'federated-network': '<rect x="12" y="11" width="8" height="10" rx="2"/><circle cx="6" cy="7" r="3"/><circle cx="26" cy="7" r="3"/><circle cx="6" cy="25" r="3"/><circle cx="26" cy="25" r="3"/><path d="m9 8 4 5m10-5-4 5m-10 10 4-4m10 4-4-4M14 15h4m-4 4h4"/>',
    retrieval: '<path d="M7 4h12l6 6v8"/><path d="M19 4v7h7M7 4v14m0 5v5h9"/><circle cx="22" cy="22" r="5"/><path d="m26 26 3 3M11 13h5m-5 5h3"/>',
    vector: '<circle cx="7" cy="7" r="1"/><circle cx="16" cy="7" r="1"/><circle cx="25" cy="7" r="1"/><circle cx="7" cy="16" r="1"/><circle cx="16" cy="16" r="1"/><circle cx="25" cy="16" r="1"/><circle cx="7" cy="25" r="1"/><circle cx="16" cy="25" r="1"/><path d="M18 25h10m-4-4 4 4-4 4"/>',
    graph: '<circle cx="7" cy="8" r="3"/><circle cx="25" cy="8" r="3"/><circle cx="16" cy="24" r="3"/><circle cx="7" cy="8" r="1"/><path d="m10 9 12-1M9 11l5 10m9-10-5 10"/>',
    protocol: '<rect x="11" y="11" width="10" height="10" rx="2"/><circle cx="5" cy="5" r="2"/><circle cx="27" cy="5" r="2"/><circle cx="5" cy="27" r="2"/><circle cx="27" cy="27" r="2"/><path d="m7 7 5 5m13-5-5 5m-13 13 5-5m13 5-5-5"/>',
    enterprise: '<path d="M5 27V8l11-5 11 5v19M3 27h26M10 11h3m6 0h3m-12 5h3m6 0h3m-12 5h3m6 0h3M14 27v-5h4v5"/>',
    server: '<rect x="4" y="5" width="24" height="8" rx="2"/><rect x="4" y="19" width="24" height="8" rx="2"/><circle cx="9" cy="9" r="1"/><circle cx="9" cy="23" r="1"/><path d="M14 9h9m-9 14h9m-9-7h4"/>',
    node: '<circle cx="16" cy="16" r="5"/><circle cx="6" cy="7" r="3"/><circle cx="26" cy="7" r="3"/><circle cx="6" cy="25" r="3"/><circle cx="26" cy="25" r="3"/><path d="m12 13-4-4m12 4 4-4m-12 7-4 7m12-7 4 7"/>',
    api: '<path d="m11 9-7 7 7 7m10-14 7 7-7 7M16 5v4m0 14v4"/><circle cx="16" cy="16" r="2"/>',
    database: '<ellipse cx="16" cy="7" rx="11" ry="4"/><path d="M5 7v18c0 2.2 4.9 4 11 4s11-1.8 11-4V7M5 16c0 2.2 4.9 4 11 4s11-1.8 11-4"/>',
    'file-database': '<path d="M5 4h13l5 5v7M18 4v6h5M5 4v24h7"/><ellipse cx="21" cy="21" rx="7" ry="3"/><path d="M14 21v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    documents: '<path d="M5 7h15v19H5zM9 4h15v19M13 1h14v19M9 12h7m-7 4h7m-7 4h4"/>',
    html: '<path d="m11 8-7 8 7 8m10-16 7 8-7 8m-4-19-3 22"/>',
    stylesheet: '<rect x="4" y="5" width="24" height="22" rx="3"/><path d="M4 11h24M10 16h4m-4 5h4m4-5h4m-4 5h4"/>',
    ide: '<rect x="3" y="5" width="26" height="22" rx="3"/><path d="M3 11h26m-20 5-3 3 3 3m4 0h5m2-5h3m-3 5h3"/>',
    encoding: '<rect x="4" y="5" width="24" height="22" rx="3"/><path d="M10 5v22m12-22v22M4 11h6m-6 10h6m12-10h6m-6 10h6"/>',
    'media-pipeline': '<circle cx="6" cy="16" r="3"/><circle cx="16" cy="7" r="3"/><circle cx="16" cy="25" r="3"/><circle cx="26" cy="16" r="3"/><path d="m9 14 4-5m0 14-4-5m10-11 4 7m-4 11 4-7"/>',
    codec: '<rect x="4" y="5" width="24" height="22" rx="3"/><path d="M4 12h24m-24 8h24M12 5v7m8 0v7m-8 0v8"/>',
    plot: '<path d="M5 4v23h23M9 21l5-7 5 4 7-9"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="18" r="1"/><circle cx="26" cy="9" r="1"/>',
    'circuit-simulator': '<path d="M3 16h5m16 0h5m-14-6v12m8-12v12"/><path d="m8 16 3-5 3 10 3-10 3 10 3-5"/><circle cx="3" cy="16" r="1"/><circle cx="29" cy="16" r="1"/>',
    fiber: '<circle cx="16" cy="16" r="3"/><path d="M16 3v8m0 10v8M3 16h8m10 0h8M7 7l6 6m6 6 6 6m0-18-6 6m-6 6-6 6"/>',
    touch: '<rect x="4" y="4" width="24" height="24" rx="5"/><path d="M16 24V14a2 2 0 0 1 4 0v5l2-2a2 2 0 0 1 3 2l-2 6a5 5 0 0 1-5 3h-1a6 6 0 0 1-5-3l-3-4a2 2 0 0 1 3-2z"/>',
    sliders: '<path d="M4 8h8m6 0h10M4 16h3m6 0h15M4 24h11m6 0h7"/><circle cx="15" cy="8" r="3"/><circle cx="10" cy="16" r="3"/><circle cx="18" cy="24" r="3"/>'
  };
  const technologySymbolSvg = key => technologySymbols[key]
    ? `<svg class="technology-symbol" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${technologySymbols[key]}</svg>`
    : '';
  function photoPreview(image, alt) {
    return `<img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.caption || alt)}" loading="lazy" decoding="async" onerror="this.style.display='none'">`;
  }
  function createViolinGallery(images) {
    if (!images.length) {
      return `<div class="violin-cinema-placeholder" aria-hidden="true"><span class="violin-placeholder-mark">♪</span><span class="violin-placeholder-note">VIOLIN PHOTOS / ADD PHOTOS IN data.js</span><span class="violin-placeholder-year">2015</span></div>`;
    }
    const slides = images.map((image,index) => {
      const photo = photoPreview(image, `Violin performance ${index + 1}`);
      return `<button type="button" class="violin-frame" data-gallery-index="${index}" data-passion-gallery="violin" data-open-image="${escapeHTML(image.src)}" data-caption="Violin performance" aria-label="Enlarge violin photo ${index + 1} of ${images.length}">${photo}<span class="violin-frame-index">PERFORMANCE / ${String(index + 1).padStart(2,'0')}</span><span class="media-action" aria-hidden="true">↗</span></button>`;
    }).join('');
    const galleryCountClass = images.length >= 4 ? 'photo-grid-many' : `photo-grid-count-${images.length}`;
    return `<div class="violin-gallery-viewport photo-grid ${galleryCountClass}">${slides}</div>`;
  }
  function createCrochetGallery(images) {
    if (!images.length) {
      return `<div class="crochet-tile crochet-tile-main crochet-placeholder"><span class="crochet-tile-mark">✿</span><span class="crochet-tile-caption">HANDMADE / ADD PHOTOS IN data.js</span><span class="crochet-tile-number">01</span></div><div class="crochet-tile crochet-placeholder crochet-placeholder-secondary"><span class="crochet-tile-mark">◌</span><span class="crochet-tile-caption">TEXTURE &amp; DETAIL</span><span class="crochet-tile-number">02</span></div><div class="crochet-tile crochet-placeholder crochet-placeholder-tertiary"><span class="crochet-tile-mark">✳</span><span class="crochet-tile-caption">MADE SLOWLY</span><span class="crochet-tile-number">03</span></div>`;
    }
    return images.map((image,index) => {
      const photo = photoPreview(image, `Crochet work ${index + 1}`);
      return `<button type="button" class="crochet-tile crochet-tile-${(index % 4) + 1}" data-passion-gallery="crochet" data-gallery-index="${index}" data-open-image="${escapeHTML(image.src)}" data-caption="Crochet creations" aria-label="Open crochet photo ${index + 1} of ${images.length}">${photo}<span class="crochet-tile-number">${String(index + 1).padStart(2,'0')}</span><span class="crochet-tile-type">HANDMADE</span></button>`;
    }).join('');
  }
  function createProjectGallery(project, projectIndex) {
    const images = projectImages(project);
    const galleryCountClass = images.length >= 4 ? 'photo-grid-many' : `photo-grid-count-${images.length}`;
    const slides = images.length ? images.map((image, imageIndex) => {
      const visual = photoPreview(image, `${project.title} — photo ${imageIndex + 1}`);
      return `<button type="button" class="project-media" id="project-${projectIndex}-media-${imageIndex}" data-gallery-index="${imageIndex}" data-open-image="${escapeHTML(image.src)}" data-caption="${escapeHTML(project.title)}" aria-label="Enlarge photo ${imageIndex + 1} of ${images.length} for ${escapeHTML(project.title)}">${visual}<span class="media-action" aria-hidden="true">↗</span></button>`;
    }).join('') : `<div class="project-media media-fallback theme-${escapeHTML(project.color || 'blue')} project-placeholder"><span class="project-art" aria-hidden="true">${escapeHTML(project.icon)}</span><span class="media-hint">ADD PHOTOS IN data.js</span></div>`;
    return `<div class="project-gallery" role="group" aria-label="${escapeHTML(project.title)} photo gallery"><div class="project-gallery-viewport photo-grid ${galleryCountClass}">${slides}</div></div>`;
  }
  function projectReportLink(project) {
    const report = typeof project.report === 'string' ? project.report.trim() : '';
    if (!report) return '';
    return `<a class="project-report-link" href="${escapeHTML(report)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(project.title)} report PDF in a new tab">View project report (PDF) <span aria-hidden="true">↗</span></a>`;
  }
  const skillGrid = $('#skillGrid');
  skillGrid.addEventListener('load', event => {
    if (event.target.matches('.technology-brand-icon')) event.target.parentElement.classList.add('has-brand-icon');
  }, true);
  skillGrid.innerHTML = D.skills.map((s, skillIndex) => {
    const gridId = `technology-grid-${skillIndex + 1}`;
    const visibleCount = Number.isInteger(s.collapsedVisible)
      ? Math.min(s.technologies.length, Math.max(0, s.collapsedVisible))
      : s.technologies.length;
    const technologies = s.technologies.map((technology, technologyIndex) => {
      const icon = /^[a-z0-9]+$/.test(technology.icon || '') ? `<img class="technology-brand-icon" src="https://cdn.simpleicons.org/${technology.icon}/3D6687" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : '';
      const symbol = technologySymbolSvg(technology.symbol);
      const fallback = symbol ? '' : `<span class="technology-monogram" aria-hidden="true">${escapeHTML(technology.fallback || technology.name.slice(0, 3))}</span>`;
      const displayName = technology.displayName || technology.name;
      const accessibleName = technology.status ? `${technology.name} — ${technology.status}` : technology.name;
      const hidden = technologyIndex >= visibleCount ? ' hidden data-collapsed-item' : '';
      const visibleWhenFits = technology.visibleWhenFits ? ' data-visible-when-fits' : '';
      const status = technology.status ? `<span class="technology-status">${escapeHTML(technology.status)}</span>` : '';
      const label = displayName === technology.name
        ? escapeHTML(displayName)
        : `<span class="technology-name-visible" aria-hidden="true">${escapeHTML(displayName)}</span>`;
      const measureName = displayName === technology.name ? '' : ` data-measure="${escapeHTML(technology.name)}"`;
      return `<li class="technology-tile" data-technology="${escapeHTML(technology.name)}"${hidden}${visibleWhenFits}><span class="technology-icon-shell" role="img" aria-label="${escapeHTML(technology.name)} icon">${icon}${symbol}${fallback}</span><span class="technology-name"${measureName} title="${escapeHTML(accessibleName)}" aria-label="${escapeHTML(technology.name)}">${label}</span>${status}</li>`;
    }).join('');
    const hiddenCount = s.technologies.length - visibleCount;
    const toggle = hiddenCount > 0
      ? `<button class="technology-toggle" type="button" data-skill-toggle data-hidden-count="${hiddenCount}" aria-controls="${gridId}" aria-expanded="false">Show ${hiddenCount} more <span aria-hidden="true">↓</span></button>`
      : '';
    return `<article class="skill-card reveal"><div class="skill-heading"><span class="skill-icon" aria-hidden="true">${escapeHTML(s.icon)}</span><h3>${escapeHTML(s.title)}</h3></div><ul class="technology-grid" id="${gridId}" aria-label="${escapeHTML(s.title)} technologies">${technologies}</ul>${toggle}</article>`;
  }).join('');
  function refreshSkillFitItems(targetCard) {
    const cards = targetCard ? [targetCard] : [...skillGrid.querySelectorAll('.skill-card')];
    cards.forEach(card => {
      const toggle = card.querySelector('[data-skill-toggle]');
      if (!toggle || toggle.getAttribute('aria-expanded') === 'true') return;
      const grid = card.querySelector('.technology-grid');
      const tile = grid.querySelector('[data-visible-when-fits]');
      if (!tile) return;
      const columns = Math.max(1, getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).length);
      const visibleCount = grid.querySelectorAll('.technology-tile:not([hidden])').length;
      const collapsedCount = visibleCount - (tile.hidden ? 0 : 1);
      const fits = Math.ceil((collapsedCount + 1) / columns) === Math.ceil(collapsedCount / columns);
      tile.hidden = !fits;
      if (fits) tile.removeAttribute('data-collapsed-item');
      else tile.setAttribute('data-collapsed-item', '');
      const hiddenCount = grid.querySelectorAll('[data-collapsed-item]').length;
      toggle.dataset.hiddenCount = String(hiddenCount);
      toggle.innerHTML = `Show ${hiddenCount} more <span aria-hidden="true">↓</span>`;
    });
  }
  refreshSkillFitItems();
  let skillFitFrame = 0;
  window.addEventListener('resize', () => {
    if (skillFitFrame) return;
    skillFitFrame = requestAnimationFrame(() => {
      refreshSkillFitItems();
      skillFitFrame = 0;
    });
  }, { passive: true });
  skillGrid.addEventListener('click', event => {
    const toggle = event.target.closest('[data-skill-toggle]');
    if (!toggle) return;
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    const card = toggle.closest('.skill-card');
    card.querySelectorAll('[data-collapsed-item]').forEach(tile => { tile.hidden = !expanded; });
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.innerHTML = expanded
      ? 'Show less <span aria-hidden="true">↑</span>'
      : `Show ${toggle.dataset.hiddenCount} more <span aria-hidden="true">↓</span>`;
    if (!expanded) refreshSkillFitItems(card);
  });
  const filters = ['All', ...new Set(D.projects.map(project => project.category))];
  $('#projectFilters').innerHTML = filters.map((f, i) => `<button type="button" class="filter-btn ${i === 0 ? 'is-active' : ''}" data-filter="${f}" aria-pressed="${i === 0}">${f === 'All' ? 'ALL PROJECTS' : f.toUpperCase()}</button>`).join('');
  $('#projectGrid').innerHTML = D.projects.map((p, i) => {
    const layoutClass = p.layout === 'compact-report' ? ' project-card-compact-report' : '';
    return `<article class="project-card${layoutClass} reveal" data-category="${escapeHTML(p.category)}" data-project-index="${i}"><div class="project-card-media">${createProjectGallery(p,i)}</div><div class="project-info"><div class="project-meta"><span class="project-number">PROJECT / ${String(i+1).padStart(2,'0')}</span><span class="project-category">${escapeHTML(p.category)}</span></div><h3>${escapeHTML(p.title)}</h3><p class="project-subtitle">${escapeHTML(p.subtitle)}</p><p class="project-desc">${escapeHTML(p.description)}</p><div class="tags">${p.tags.map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>${projectReportLink(p)}</div></article>`;
  }).join('');
  $('#projectFilterStatus').textContent = `Showing all ${D.projects.length} projects`;
  const graduationIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3.5 2.7 8.5 2.7 12 0v-5M22 9v6"/></svg>';
  const trophyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v5m-4 2h8m-7-2h6"/></svg>';
  function experiencePhotos(item) {
    const images = imageSources(item.images);
    if (!images.length) return '';
    return `<div class="experience-gallery" role="group" aria-label="${escapeHTML(item.company)} experience photos">${images.map((image, imageIndex) => `<button type="button" class="experience-media" data-open-image="${escapeHTML(image.src)}" data-gallery-index="${imageIndex}" data-caption="${escapeHTML(item.company)}" aria-label="Open ${escapeHTML(item.company)} photo ${imageIndex + 1} of ${images.length}">${photoPreview(image, `${item.company} photo ${imageIndex + 1}`)}</button>`).join('')}</div>`;
  }
  function companyLogo(item) {
    const src = !item.companyLogoPending && validCompanyLogoSrc(item.companyLogo) ? item.companyLogo : '';
    const image = src ? `<img class="experience-company-logo" src="${escapeHTML(src)}" alt="${escapeHTML(item.company)} logo" loading="lazy" decoding="async" onerror="this.remove()">` : '';
    return `<div class="experience-logo">${image}<span class="experience-logo-placeholder" aria-hidden="true"><span class="experience-logo-mark">✳</span><span class="experience-logo-label">COMPANY LOGO</span></span></div>`;
  }
  function timeline(items) {
    return items.map((item, index) => `<article class="timeline-item experience-card reveal" data-experience-index="${index}">${companyLogo(item)}<div class="timeline-content"><span class="timeline-date">${escapeHTML(item.date)}</span><h4>${escapeHTML(item.title)}</h4><p class="company">${escapeHTML(item.company)}</p><p>${escapeHTML(item.desc)}</p>${experiencePhotos(item)}</div></article>`).join('');
  }
  function certificationPhotos(item, index) {
    const images = imageSources(item.images);
    if (!images.length) return `<div class="cert-media-placeholder" aria-hidden="true">${graduationIcon}<span>ADD CERTIFICATE PHOTOS IN data.js</span></div>`;
    return `<div class="cert-gallery" role="group" aria-label="${escapeHTML(item.issuer)} ${escapeHTML(item.title)} certificate photos">${images.map((image, imageIndex) => `<button type="button" data-open-image="${escapeHTML(image.src)}" data-cert-index="${index}" data-gallery-index="${imageIndex}" data-caption="${escapeHTML(item.issuer)} · ${escapeHTML(item.title)}" aria-label="Open certificate photo ${imageIndex + 1} of ${images.length} for ${escapeHTML(item.title)}">${photoPreview(image, `${item.title} certificate photo ${imageIndex + 1}`)}</button>`).join('')}</div>`;
  }
  function academicPhotos(item) {
    const images = imageSources(item.images);
    if (!item.photoSlot || !images.length) return '';
    return `<div class="academic-media-gallery" role="group" aria-label="${escapeHTML(item.company)} photos">${images.map((image, imageIndex) => `<button type="button" class="academic-media-thumb" data-open-image="${escapeHTML(image.src)}" data-gallery-index="${imageIndex}" aria-label="Open academic photo ${imageIndex + 1} of ${images.length} for ${escapeHTML(item.company)}">${photoPreview(image, `${item.company} academic photo ${imageIndex + 1}`)}</button>`).join('')}</div>`;
  }
  function aboutGalleryMarkup(images) {
    if (!images.length) return '';
    return `<span class="about-media-placeholder">ABOUT PHOTOS · ADD PHOTOS IN data.js</span>${images.map((image, imageIndex) => `<button type="button" class="academic-media-thumb about-media-thumb" data-open-image="${escapeHTML(image.src)}" data-gallery-index="${imageIndex}" data-caption="About Hala" aria-label="Open about photo ${imageIndex + 1} of ${images.length}">${photoPreview(image, `About Hala photo ${imageIndex + 1}`)}</button>`).join('')}`;
  }
  function restoreGalleryPlaceholder(container, gallerySelector, placeholderClass, content) {
    container.addEventListener('error', event => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || !image.matches(`${gallerySelector} img`)) return;
      const gallery = image.closest(gallerySelector);
      image.closest('button')?.remove();
      if (gallery.querySelector('img')) return;
      const placeholder = document.createElement('div');
      placeholder.className = placeholderClass;
      placeholder.setAttribute('aria-hidden', 'true');
      placeholder.innerHTML = content;
      gallery.replaceWith(placeholder);
    }, true);
  }
  const aboutGallery = $('#aboutMedia');
  aboutGallery.addEventListener('load', event => {
    if (event.target.matches('.about-media-thumb img')) aboutGallery.classList.add('has-loaded-media');
  }, true);
  aboutGallery.addEventListener('error', event => {
    if (!event.target.matches('.about-media-thumb img')) return;
    event.target.closest('.about-media-thumb').remove();
    if (!aboutGallery.querySelector('.about-media-thumb')) aboutGallery.classList.remove('has-loaded-media');
  }, true);
  const aboutImages = imageSources(D.aboutImages);
  aboutGallery.innerHTML = aboutGalleryMarkup(aboutImages);

  const experienceList = $('#experienceList');
  experienceList.addEventListener('load', event => {
    if (event.target.matches('.experience-company-logo')) event.target.closest('.experience-logo').classList.add('has-company-logo');
  }, true);
  experienceList.innerHTML = timeline(D.experience);
  const educationList = $('#educationList');
  restoreGalleryPlaceholder(educationList, '.academic-media-gallery', 'academic-media-placeholder', `${graduationIcon}<span>ADD SCHOOL, GRADUATION OR CERTIFICATE PHOTOS</span>`);
  educationList.classList.add('academic-timeline');
  const orderedEducation = [...D.education].reverse();
  educationList.innerHTML = orderedEducation.map((item, index) => {
    const achievement = item.achievement
      ? `<span class="academic-achievement ${item.achievementType === 'ranking' ? 'is-ranking' : 'is-credential'}">${item.achievementType === 'ranking' ? trophyIcon : graduationIcon}<span>${escapeHTML(item.achievement)}</span></span>`
      : '';
    const photo = academicPhotos(item);
    const schoolName = item.company ? `<p class="academic-school">${escapeHTML(item.company)}</p>` : '';
    const location = item.location ? `<p class="academic-location">${escapeHTML(item.location)}</p>` : '';
    return `<article class="academic-milestone reveal" role="listitem" data-education-index="${D.education.length - 1 - index}"><span class="academic-milestone-point" aria-hidden="true"></span><div class="academic-milestone-card"><div class="academic-milestone-top"><span class="academic-date">${escapeHTML(item.date)}</span></div><h4>${escapeHTML(item.title)}</h4>${schoolName}${location}<p class="academic-description">${escapeHTML(item.desc)}</p>${achievement}${photo}</div></article>`;
  }).join('');
  const certList = $('#certList');
  restoreGalleryPlaceholder(certList, '.cert-gallery', 'cert-media-placeholder', `${graduationIcon}<span>ADD CERTIFICATE IMAGES IN data.js</span>`);
  certList.innerHTML = D.certifications.map((certification, index) => `<article class="cert-item cert-card" data-cert-index="${index}"><div class="cert-copy"><span class="cert-issuer">${escapeHTML(certification.issuer)}</span><h4>${escapeHTML(certification.title)}</h4></div>${certificationPhotos(certification, index)}</article>`).join('');
  const ieeeItems = [
    { ...D.leadership[0], originalIndex: 0 },
    { ...D.ambassador, title: 'IEEE Day 2025 Ambassador', role: 'Ambassador', date: '2025', isAmbassador: true, originalIndex: -1 },
    ...D.leadership.slice(1).map((item, i) => ({ ...item, originalIndex: i + 1 }))
  ];
  const ieeeGallery = $('#leadershipGallery');
  ieeeGallery.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.matches('.ieee-photo img')) return;
    console.error('IEEE photo could not be loaded.', image.src);
    image.closest('.ieee-photo-item').remove();
  }, true);
  ieeeGallery.innerHTML = ieeeItems.map((item, itemIndex) => {
    if (item.photoFree) return '';
    const images = projectImages(item);
    return images.map((image, imageIndex) => `<figure class="ieee-photo-item"><button type="button" class="ieee-photo" data-ieee-item-index="${itemIndex}" data-gallery-index="${imageIndex}" data-open-image="${escapeHTML(image.src)}" data-caption="${escapeHTML(item.title)}" aria-label="Open ${escapeHTML(item.title)} photo ${imageIndex + 1} of ${images.length}">${photoPreview(image, `${item.title} photo ${imageIndex + 1}`)}<span class="media-action" aria-hidden="true">↗</span></button><figcaption>${escapeHTML(item.title)}</figcaption></figure>`).join('');
  }).join('');
  $('#leadershipGrid').innerHTML = ieeeItems.map(item => {
    const achievements = item.isAmbassador ? `<ul class="ieee-rankings">${item.rankings.map(rank => `<li>${trophyIcon}<span>${escapeHTML(rank)}</span></li>`).join('')}</ul>` : '';
    return `<article class="ieee-role"><span class="ieee-role-date">${escapeHTML(item.date)}</span><h4>${escapeHTML(item.role)}</h4><p class="ieee-role-title">${escapeHTML(item.title)}</p><p class="ieee-role-description">${escapeHTML(item.desc)}</p>${achievements}</article>`;
  }).join('');
  document.querySelector('.ieee-gallery-controls').addEventListener('click', event => {
    const button = event.target.closest('[data-ieee-scroll]');
    if (!button) return;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    ieeeGallery.scrollBy({ left: Number(button.dataset.ieeeScroll) * ieeeGallery.clientWidth * 0.8, behavior });
  });
  // Add the portrait and creative photo galleries when their paths are configured.
  const heroImages = imageSources(D.heroImages);
  if(heroImages.length) {
    const heroPortrait = $('#heroPortrait');
    const placeholder = heroPortrait.innerHTML;
    const galleryCountClass = heroImages.length >= 4 ? 'photo-grid-many' : `photo-grid-count-${heroImages.length}`;
    heroPortrait.innerHTML = `<div class="hero-photo-gallery photo-grid ${galleryCountClass}" role="group" aria-label="Portrait photos of Hala Hamdi">${heroImages.map((image, imageIndex) => `<button type="button" class="hero-photo-slide" data-gallery-index="${imageIndex}" data-open-image="${escapeHTML(image.src)}" data-caption="Portrait of Hala Hamdi" aria-label="Enlarge portrait photo ${imageIndex + 1} of ${heroImages.length}">${photoPreview(image, `Portrait of Hala Hamdi ${imageIndex + 1}`)}</button>`).join('')}</div>`;
    heroPortrait.addEventListener('error', event => {
      if (!event.target.matches('.hero-photo-gallery img')) return;
      event.target.closest('.hero-photo-slide')?.remove();
      if (!heroPortrait.querySelector('.hero-photo-slide')) heroPortrait.innerHTML = placeholder;
    }, true);
  }
  $('#violinMedia').innerHTML=createViolinGallery(imageSources(D.violinImages));
  $('#crochetMedia').innerHTML=createCrochetGallery(imageSources(D.crochetImages));
  $('#projectFilters').addEventListener('click',e=>{
    const btn=e.target.closest('[data-filter]');if(!btn)return;
    $('#projectFilters').querySelectorAll('button').forEach(b=>{b.classList.toggle('is-active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});
    $('#projectGrid').querySelectorAll('.project-card').forEach(card=>{card.hidden=btn.dataset.filter!=='All'&&card.dataset.category!==btn.dataset.filter});
    const visible=$('#projectGrid').querySelectorAll('.project-card:not([hidden])').length;
    $('#projectFilterStatus').textContent=`Showing ${visible} of ${D.projects.length} projects`;
  });
  const dialog=$('#mediaDialog'),content=$('#dialogContent');
  content.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    const placeholder = document.createElement('div');
    placeholder.className = 'media-viewer-placeholder';
    placeholder.textContent = 'PHOTO NOT AVAILABLE · CHECK THE data.js PATH';
    image.replaceWith(placeholder);
  }, true);
  let cursor=null,customCursorActive=false;
  let viewerSources=[],viewerCaption='',viewerIndex=0;
  function renderViewer(){
    const image=viewerSources[viewerIndex];
    const caption=photoCaption(image,viewerCaption);
    const controls=viewerSources.length>1?`<button type="button" class="viewer-arrow" data-viewer-step="-1" aria-label="Previous photo">←</button><button type="button" class="viewer-arrow" data-viewer-step="1" aria-label="Next photo">→</button>`:'';
    content.innerHTML=`<div class="media-viewer-frame"><img src="${escapeHTML(image.src)}" alt="${escapeHTML(caption)}" decoding="async">${controls}</div>`;
    $('#dialogCaption').textContent=viewerSources.length>1?`${caption} · ${String(viewerIndex+1).padStart(2,'0')} / ${String(viewerSources.length).padStart(2,'0')}`:caption;
  }
  function openPhoto(src,caption,sources=[src],startIndex=0){
    const image=normalizeImage(src);
    if(!image)return;
    viewerSources=imageSources(sources);
    if(!viewerSources.length)viewerSources=[image];
    viewerIndex=Math.max(0,Math.min(startIndex,viewerSources.length-1));
    viewerCaption=caption;
    renderViewer();
    if(customCursorActive){
      document.body.classList.remove('custom-cursor-enabled');
      cursor.classList.remove('is-visible','is-hovering');
    }
    dialog.showModal();
  }
  content.addEventListener('click',e=>{
    const step=e.target.closest('[data-viewer-step]');
    if(!step)return;
    viewerIndex=(viewerIndex+Number(step.dataset.viewerStep)+viewerSources.length)%viewerSources.length;
    renderViewer();
  });
  document.addEventListener('click',e=>{
    const target=e.target.closest('[data-open-image]');
    if(!target)return;
    const card=target.closest('.project-card');
    const ieeePhoto=target.closest('[data-ieee-item-index]');
    const leadershipCard=target.closest('.leadership-card');
    const academicCard=target.closest('.academic-milestone');
    const certificationCard=target.closest('.cert-card');
    const experienceCard=target.closest('.timeline-item[data-experience-index]');
    const ambassadorCard=target.closest('#ambassadorFeature');
    const aboutMediaSection=target.closest('#aboutMedia');
    const heroGallery=target.closest('.hero-photo-gallery');
    const passionGallery=target.dataset.passionGallery;
    if(ieeePhoto){
      const item=ieeeItems[Number(ieeePhoto.dataset.ieeeItemIndex)];
      openPhoto(target.dataset.openImage,item.title,projectImages(item),Number(target.dataset.galleryIndex||0));
    }else if(heroGallery){
      openPhoto(target.dataset.openImage,'Portrait of Hala Hamdi',heroImages,Number(target.dataset.galleryIndex||0));
    }else if(card||leadershipCard){
      const item=card?D.projects[Number(card.dataset.projectIndex)]:D.leadership[Number(leadershipCard.dataset.leadershipIndex)];
      const images=projectImages(item);
      openPhoto(target.dataset.openImage,target.dataset.caption||item.title,images,Number(target.dataset.galleryIndex||0));
    }else if(academicCard){
      const item=D.education[Number(academicCard.dataset.educationIndex)];
      const images=imageSources(item.images);
      openPhoto(target.dataset.openImage,item.company,images,Number(target.dataset.galleryIndex||0));
    }else if(aboutMediaSection){
      openPhoto(target.dataset.openImage,'About Hala',aboutImages,Number(target.dataset.galleryIndex||0));
    }else if(certificationCard){
      const item=D.certifications[Number(certificationCard.dataset.certIndex)];
      const images=imageSources(item.images);
      openPhoto(target.dataset.openImage,`${item.issuer} · ${item.title}`,images,Number(target.dataset.galleryIndex||0));
    }else if(experienceCard){
      const item=D.experience[Number(experienceCard.dataset.experienceIndex)];
      openPhoto(target.dataset.openImage,item.company,imageSources(item.images),Number(target.dataset.galleryIndex||0));
    }else if(ambassadorCard){
      openPhoto(target.dataset.openImage,D.ambassador.title,imageSources(D.ambassador.images),Number(target.dataset.galleryIndex||0));
    }else if(passionGallery){
      const images=imageSources(passionGallery==='violin'?D.violinImages:D.crochetImages);
      openPhoto(target.dataset.openImage,target.dataset.caption||'Creative portfolio photos',images,Number(target.dataset.galleryIndex||0));
    }else{
      openPhoto(target.dataset.openImage,target.dataset.caption||'Portfolio photo');
    }
  });
  document.addEventListener('keydown',e=>{
    if(!dialog.open)return;
    if(e.key==='Escape'){
      e.preventDefault();
      closeMedia();
      return;
    }
    if(viewerSources.length<2)return;
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
      e.preventDefault();
      viewerIndex=(viewerIndex+(e.key==='ArrowRight'?1:-1)+viewerSources.length)%viewerSources.length;
      renderViewer();
    }
  });
  function closeMedia(){dialog.close();content.innerHTML='';viewerSources=[];viewerIndex=0}
  $('#closeDialog').addEventListener('click',closeMedia);dialog.addEventListener('click',e=>{if(e.target===dialog)closeMedia()});dialog.addEventListener('cancel',event=>{event.preventDefault();closeMedia()});dialog.addEventListener('close',()=>{content.innerHTML='';if(customCursorActive){cursor.classList.remove('is-hovering');document.body.classList.add('custom-cursor-enabled')}});
  const menu=$('.menu-toggle');menu.addEventListener('click',()=>{const open=$('#navLinks').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});
  $('#navLinks').addEventListener('click',e=>{if(e.target.matches('a')){$('#navLinks').classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}});
  const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  $('#year').textContent=new Date().getFullYear();
  const contactForm=$('#contactForm');
  const contactStatus=$('#contactFormStatus');
  const contactSubmit=$('#contactSubmit');
  const contactFields=[...contactForm.querySelectorAll('input,textarea')];
  const contactGithub=$('#contactGithub');
  const githubUrl=typeof D.contactGithubUrl==='string' ? D.contactGithubUrl.trim() : '';
  if(githubUrl){
    try{
      const parsedGithubUrl=new URL(githubUrl);
      if(parsedGithubUrl.protocol==='https:'&&parsedGithubUrl.hostname==='github.com'&&!parsedGithubUrl.username&&!parsedGithubUrl.password&&!parsedGithubUrl.search&&!parsedGithubUrl.hash&&/^\/[A-Za-z0-9-]+\/?$/.test(parsedGithubUrl.pathname)){
        contactGithub.href=parsedGithubUrl.href;
        contactGithub.hidden=false;
      }
    }catch(error){
      console.error('The configured GitHub profile URL is invalid.',error);
    }
  }
  const fieldError=(field)=>{
    if(field.validity.valueMissing||!field.value.trim())return `${field.labels[0].textContent} is required.`;
    if(field.validity.typeMismatch)return 'Enter a valid email address.';
    return '';
  };
  const updateContactField=(field)=>{
    const error=fieldError(field);
    const errorElement=$(`#${field.id}Error`);
    errorElement.textContent=error;
    field.setAttribute('aria-invalid',String(Boolean(error)));
    return !error;
  };
  contactFields.forEach(field=>field.addEventListener('input',()=>{
    if(field.getAttribute('aria-invalid')==='true')updateContactField(field);
  }));
  contactForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const invalidFields=contactFields.filter(field=>!updateContactField(field));
    if(invalidFields.length){
      contactStatus.textContent='Please check the highlighted fields and try again.';
      invalidFields[0].focus();
      return;
    }
    const endpoint=typeof D.contactFormEndpoint==='string' ? D.contactFormEndpoint.trim() : '';
    let parsedEndpoint;
    try{
      parsedEndpoint=new URL(endpoint);
    }catch(error){
      contactStatus.textContent='The contact form needs to be configured before it can send. Please email me directly instead.';
      return;
    }
    if(parsedEndpoint.protocol!=='https:'||parsedEndpoint.hostname!=='formspree.io'||!/^\/f\/[A-Za-z0-9_-]+\/?$/.test(parsedEndpoint.pathname)){
      contactStatus.textContent='The contact form endpoint is invalid. Please email me directly instead.';
      return;
    }
    contactSubmit.disabled=true;
    contactSubmit.classList.add('is-loading');
    contactSubmit.querySelector('span').textContent='Sending...';
    contactStatus.textContent='Sending your message...';
    try{
      const response=await fetch(parsedEndpoint.href,{method:'POST',headers:{Accept:'application/json'},body:new FormData(contactForm)});
      if(!response.ok)throw new Error(`Contact form service returned ${response.status}.`);
      contactStatus.textContent='Thank you! Your message has been sent.';
      contactForm.reset();
      contactFields.forEach(field=>updateContactField(field));
    }catch(error){
      console.error('Contact form submission failed.',error);
      contactStatus.textContent='Your message could not be sent. Please try again or email me directly.';
    }finally{
      contactSubmit.disabled=false;
      contactSubmit.classList.remove('is-loading');
      contactSubmit.querySelector('span').textContent='Send Message';
    }
  });
  $('#copyContactEmail').addEventListener('click',async()=>{
    const email='hala.hamdi@etudiant-enit.utm.tn';
    const copyStatus=$('#contactCopyStatus');
    try{
      if(navigator.clipboard&&window.isSecureContext){
        await navigator.clipboard.writeText(email);
      }else{
        const temporaryInput=document.createElement('textarea');
        temporaryInput.value=email;
        temporaryInput.setAttribute('readonly','');
        temporaryInput.style.position='fixed';
        temporaryInput.style.opacity='0';
        document.body.appendChild(temporaryInput);
        let copied=false;
        try{
          temporaryInput.select();
          copied=document.execCommand('copy');
        }finally{
          temporaryInput.remove();
        }
        if(!copied)throw new Error('Clipboard copy was not available.');
      }
      copyStatus.textContent='Email copied!';
    }catch(error){
      console.error('Could not copy the contact email.',error);
      copyStatus.textContent='Could not copy. Please use the email link.';
    }
  });
  cursor=$('#cursorGlow');
  const motionAllowed=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer=window.matchMedia('(pointer: fine) and (min-width: 761px)').matches;
  if(cursor&&finePointer&&motionAllowed){
    customCursorActive=true;
    document.body.classList.add('custom-cursor-enabled');
    let cursorX=0,cursorY=0,cursorFrame=0;
    const isInteractive=target=>target instanceof Element&&target.closest('a,button,[role="button"],.project-card,.leadership-card,.academic-milestone,.cert-card,.timeline-item,.ambassador-feature,.passion-card,[data-open-image]');
    document.addEventListener('pointermove',e=>{
      cursorX=e.clientX;cursorY=e.clientY;
      if(cursorFrame)return;
      cursorFrame=requestAnimationFrame(()=>{
        if(!dialog.open){cursor.style.setProperty('--cursor-x',cursorX+'px');cursor.style.setProperty('--cursor-y',cursorY+'px');cursor.classList.add('is-visible')}
        cursorFrame=0;
      });
    },{passive:true});
    document.addEventListener('pointerover',e=>{if(isInteractive(e.target))cursor.classList.add('is-hovering')});
    document.addEventListener('pointerout',e=>{if(isInteractive(e.target)&&!isInteractive(e.relatedTarget))cursor.classList.remove('is-hovering')});
    document.addEventListener('pointerleave',()=>cursor.classList.remove('is-visible'));
    window.addEventListener('blur',()=>cursor.classList.remove('is-visible'));
    window.addEventListener('focus',()=>cursor.classList.remove('is-hovering'));
    document.querySelectorAll('[data-magnetic]').forEach(button=>{
      button.addEventListener('pointermove',e=>{
        const bounds=button.getBoundingClientRect();
        const x=((e.clientX-bounds.left)/bounds.width-.5)*8;
        const y=((e.clientY-bounds.top)/bounds.height-.5)*6;
        button.style.setProperty('--mag-x',x.toFixed(1)+'px');
        button.style.setProperty('--mag-y',y.toFixed(1)+'px');
      });
      button.addEventListener('pointerleave',()=>{
        button.style.setProperty('--mag-x','0px');
        button.style.setProperty('--mag-y','0px');
      });
    });
  }
})();
