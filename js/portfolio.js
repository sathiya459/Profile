// ── PORTFOLIO.JS — Main UI Logic ───────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  buildSectorGrid();
  buildHoldingsTable('all');
  buildRationaleCards();
  initFilters();
  initModal();
  initScrollAnimations();
  initMobileNav();
  initNavHighlight();
});

// ── HELPERS ─────────────────────────────────────────────────
function capClass(cap) {
  return cap === 'Large Cap' ? 'large' : cap === 'Mid Cap' ? 'mid' : 'small';
}
function outClass(val) {
  const v = val.toLowerCase();
  if (v.includes('strong buy') || v === 'outperform') return 'strong';
  if (v === 'hold' || v === 'moderate' || v === 'neutral') return 'moderate';
  return 'weak';
}
function capTagClass(cap) {
  return `cap-tag cap-tag-${capClass(cap)}`;
}
function outTagClass(val) {
  const v = val.toLowerCase();
  if (v.includes('strong buy') || v === 'outperform') return 'out-tag out-strong';
  if (v === 'hold' || v === 'moderate' || v === 'neutral') return 'out-tag out-hold';
  return 'out-tag out-weak';
}

// ── SECTOR GRID ─────────────────────────────────────────────
function buildSectorGrid() {
  const grid = document.getElementById('sectorGrid');
  const sorted = Object.entries(SECTORS).sort((a, b) => b[1].alloc - a[1].alloc);
  const maxAlloc = sorted[0][1].alloc;

  sorted.forEach(([name, data]) => {
    const pct = data.alloc.toFixed(1);
    const barW = ((data.alloc / maxAlloc) * 100).toFixed(0);
    const card = document.createElement('div');
    card.className = 'sector-card fade-up';
    card.innerHTML = `
      <div class="sc-head">
        <div class="sc-name">${name}</div>
        <div class="sc-pct">${pct}%</div>
      </div>
      <div class="sc-bar-track">
        <div class="sc-bar-fill" style="width: 0%" data-width="${barW}%"></div>
      </div>
      <div class="sc-stocks">
        ${data.stocks.map(s => `<span class="sc-chip">${s}</span>`).join('')}
      </div>`;
    grid.appendChild(card);
  });

  // Animate bars when visible
  setTimeout(() => {
    document.querySelectorAll('.sc-bar-fill').forEach(el => {
      el.style.width = el.dataset.width;
    });
  }, 400);
}

// ── HOLDINGS TABLE ───────────────────────────────────────────
function buildHoldingsTable(filter) {
  const tbody = document.getElementById('holdingsTbody');
  tbody.innerHTML = '';
  const filtered = filter === 'all' ? STOCKS : STOCKS.filter(s => s.cap === filter);

  filtered.forEach((s, i) => {
    const tr = document.createElement('tr');
    tr.dataset.cap = s.cap;
    tr.innerHTML = `
      <td style="color:var(--text-dim);font-family:'DM Mono',monospace;font-size:.8rem">${String(i + 1).padStart(2, '0')}</td>
      <td>
        <div class="td-sym">${s.sym}</div>
      </td>
      <td>
        <div class="td-company">${s.name}</div>
      </td>
      <td style="font-size:.8rem;color:var(--text-muted)">${s.sector}</td>
      <td><span class="${capTagClass(s.cap)}">${s.cap}</span></td>
      <td style="font-size:.78rem;color:var(--text-dim);font-family:'DM Mono',monospace">${s.index}</td>
      <td><span class="td-num">${s.alloc.toFixed(1)}%</span></td>
      <td><span class="${outTagClass(s.past)}">${s.past}</span></td>
      <td><span class="${outTagClass(s.current)}">${s.current}</span></td>
      <td><span class="${outTagClass(s.outlook)}">${s.outlook}</span></td>`;
    tbody.appendChild(tr);
  });
}

// ── FILTERS ──────────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildHoldingsTable(btn.dataset.filter);
    });
  });
}

// ── RATIONALE CARDS ─────────────────────────────────────────
function buildRationaleCards() {
  const grid = document.getElementById('rationaleGrid');
  STOCKS.forEach(s => {
    const card = document.createElement('div');
    card.className = 'rat-card fade-up';
    card.dataset.sym = s.sym;
    const capC = capClass(s.cap);
    card.innerHTML = `
      <div class="rat-head">
        <div>
          <div class="rat-sym">${s.sym}</div>
          <div class="rat-name">${s.name}</div>
        </div>
        <div class="rat-badges">
          <span class="${capTagClass(s.cap)}">${s.cap}</span>
          <span class="${outTagClass(s.outlook)}">${s.outlook}</span>
        </div>
      </div>
      <div class="rat-body">
        <div class="rat-sector">${s.sector}</div>
        <div class="rat-thesis">${s.rationale.substring(0, 180)}${s.rationale.length > 180 ? '…' : ''}</div>
        <div class="rat-alloc">
          <div class="rat-alloc-bar">
            <div class="rat-alloc-fill" style="width:${Math.min(s.alloc * 18, 100)}%"></div>
          </div>
          <span class="rat-alloc-pct">${s.alloc.toFixed(1)}% of portfolio</span>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(s));
    grid.appendChild(card);
  });
}

// ── MODAL ────────────────────────────────────────────────────
function initModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'stockModal';
  overlay.innerHTML = `<div class="modal" id="modalContent"></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(s) {
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()">&#x2715;</button>
    <div class="modal-sym">${s.sym}</div>
    <div class="modal-name">${s.name} &middot; ${s.index}</div>
    <div class="modal-badges">
      <span class="${capTagClass(s.cap)}">${s.cap}</span>
      <span class="${outTagClass(s.past)}">${s.past} Past</span>
      <span class="${outTagClass(s.current)}">${s.current} Current</span>
      <span class="${outTagClass(s.outlook)}">${s.outlook}</span>
    </div>
    <div class="modal-section">
      <h4>Sector</h4>
      <p>${s.sector} &nbsp;|&nbsp; Portfolio Allocation: <strong style="color:var(--accent)">${s.alloc.toFixed(1)}%</strong></p>
    </div>
    <div class="modal-section">
      <h4>Investment Thesis</h4>
      <p>${s.rationale}</p>
    </div>
    <div class="modal-section">
      <h4>Key Reasons</h4>
      <ul class="modal-reasons">
        ${s.reasons.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>`;
  document.getElementById('stockModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('stockModal').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeModal = closeModal;

// ── SCROLL ANIMATIONS ────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up, .alloc-card, .strategy-card, .sector-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}

// ── MOBILE NAV ───────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = '#111827';
    links.style.padding = '1rem 0';
    links.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    links.style.zIndex = '99';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { links.style.display = 'none'; });
  });
}

// ── NAV ACTIVE HIGHLIGHT ─────────────────────────────────────
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + entry.target.id
            ? 'var(--text)' : '';
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}
