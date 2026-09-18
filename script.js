const list = document.querySelector('#article-list');
const search = document.querySelector('#article-search');
const showMore = document.querySelector('#show-more');
const count = document.querySelector('#article-count');
let expanded = false;

function render() {
  const term = search.value.trim().toLowerCase();
  const matches = ARTICLES.filter(item => item.title.toLowerCase().includes(term));
  const visible = expanded || term ? matches : matches.slice(0, 6);
  count.textContent = matches.length;
  list.innerHTML = visible.map((item, index) => `<a class="article-row" href="${item.url}" target="_blank" rel="noreferrer"><span class="article-index">${String(index + 1).padStart(2,'0')}</span><span class="article-title">${item.title}</span><span class="article-view">View ↗</span></a>`).join('') || '<p class="article-row">No publications found.</p>';
  showMore.hidden = Boolean(term) || matches.length <= 6;
  showMore.textContent = expanded ? 'Show fewer publications' : 'Show all publications';
}

search.addEventListener('input', render);
showMore.addEventListener('click', () => { expanded = !expanded; 
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-parallax-stage]').forEach(stage => {
  const layers = [...stage.querySelectorAll('[data-depth]')];
  layers.forEach(layer => layer.style.transform = 'translate3d(var(--mx, 0px), calc(var(--my, 0px) + var(--sy, 0px)), 0)');
  if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
    stage.addEventListener('pointermove', event => {
      const box = stage.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - .5) * 18;
      const y = ((event.clientY - box.top) / box.height - .5) * 18;
      layers.forEach(layer => {
        const depth = Number(layer.dataset.depth || 1);
        layer.style.setProperty('--mx', x * depth + 'px');
        layer.style.setProperty('--my', y * depth + 'px');
      });
    });
    stage.addEventListener('pointerleave', () => layers.forEach(layer => {
      layer.style.setProperty('--mx', '0px'); layer.style.setProperty('--my', '0px');
    }));
  }
  if (!reduceMotion) window.addEventListener('scroll', () => {
    const box = stage.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - box.top - box.height / 2) / innerHeight));
    layers.forEach(layer => layer.style.setProperty('--sy', progress * Number(layer.dataset.depth || 1) * 18 + 'px'));
  }, {passive:true});
});
render(); });
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.1});
document.querySelectorAll('.appear').forEach(item => observer.observe(item));
document.querySelector('#year').textContent = new Date().getFullYear();

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('[data-parallax-stage]').forEach(stage => {
  const layers = [...stage.querySelectorAll('[data-depth]')];
  layers.forEach(layer => layer.style.transform = 'translate3d(var(--mx, 0px), calc(var(--my, 0px) + var(--sy, 0px)), 0)');
  if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
    stage.addEventListener('pointermove', event => {
      const box = stage.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - .5) * 18;
      const y = ((event.clientY - box.top) / box.height - .5) * 18;
      layers.forEach(layer => {
        const depth = Number(layer.dataset.depth || 1);
        layer.style.setProperty('--mx', x * depth + 'px');
        layer.style.setProperty('--my', y * depth + 'px');
      });
    });
    stage.addEventListener('pointerleave', () => layers.forEach(layer => {
      layer.style.setProperty('--mx', '0px'); layer.style.setProperty('--my', '0px');
    }));
  }
  if (!reduceMotion) window.addEventListener('scroll', () => {
    const box = stage.getBoundingClientRect();
    const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - box.top - box.height / 2) / innerHeight));
    layers.forEach(layer => layer.style.setProperty('--sy', progress * Number(layer.dataset.depth || 1) * 18 + 'px'));
  }, {passive:true});
});
render();
