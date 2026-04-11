/* ═══════════════════════════════
   HAMBURGER / MOBILE DRAWER
═══════════════════════════════ */
const hamburger   = document.getElementById('hamburger');
const drawer      = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawer.addEventListener('click', e => { if (e.target === drawer) closeDrawer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* ═══════════════════════════════
   NETWORK CANVAS ANIMATION
═══════════════════════════════ */
(function () {
  const canvas = document.getElementById('network-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [];
  const mouse = { x: -9999, y: -9999 };
  const isMobile = () => window.innerWidth <= 768;
  const nodeCount = () => isMobile() ? 50 : 90;
  const maxDist   = () => isMobile() ? 120 : 160;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function makeNode() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r:  Math.random() * 1.6 + 0.8,
      accent: Math.random() > 0.85
    };
  }
  function init() { resize(); nodes = Array.from({ length: nodeCount() }, makeNode); }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const MD = maxDist();

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < MD) {
          const alpha = (1 - d / MD) * 0.32;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = (a.accent || b.accent)
            ? `rgba(129,140,248,${alpha})`
            : `rgba(56,189,248,${alpha})`;
          ctx.lineWidth = 0.65;
          ctx.stroke();
        }
      }
    }

    // mouse lines (desktop only)
    if (!isMobile()) {
      nodes.forEach(n => {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 200) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(129,140,248,${(1 - d/200)*0.55})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      });
    }

    nodes.forEach(n => {
      const col = n.accent ? 'rgba(129,140,248,' : 'rgba(56,189,248,';
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = col + '0.8)'; ctx.fill();
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI*2);
      ctx.fillStyle = col + '0.07)'; ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 200);
  });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  // touch support for mobile canvas interaction
  window.addEventListener('touchmove', e => {
    const t = e.touches[0];
    mouse.x = t.clientX; mouse.y = t.clientY;
  }, { passive: true });
  window.addEventListener('touchend', () => { mouse.x = -9999; mouse.y = -9999; });

  init(); draw();
})();

/* ═══════════════════════════════
   SCROLL REVEAL — TIMELINE
═══════════════════════════════ */
const expItems = document.querySelectorAll('.exp-item');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 120);
  });
}, { threshold: 0.08 });
expItems.forEach(el => revealObs.observe(el));

/* ═══════════════════════════════
   NAV ACTIVE STATE
═══════════════════════════════ */
const allSections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  allSections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  allNavLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : ''; });
}, { passive: true });
