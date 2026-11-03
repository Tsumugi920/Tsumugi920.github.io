function updateTime() {
  var el = document.getElementById('local-time');
  if (el) { el.textContent = new Date().toLocaleString(); }
}
updateTime();
setInterval(updateTime, 1000);
var buttons = document.querySelectorAll('.toggle');
buttons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var card = btn.closest('.card');
    if (card) {
      if (card.classList.contains('collapsed')) {
        card.classList.remove('collapsed');
        btn.textContent = '收起';
      } else {
        card.classList.add('collapsed');
        btn.textContent = '展开';
      }
    }
  });
});
var themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = '浅色';
  }
  themeBtn.addEventListener('click', function() {
    var dark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    themeBtn.textContent = dark ? '浅色' : '深色';
  });
}
var search = document.getElementById('work-search');
var filterBtns = document.querySelectorAll('.filter');
var currentFilter = 'all';
function applyWorksFilter() {
  var q = search ? search.value.trim().toLowerCase() : '';
  document.querySelectorAll('.works .card').forEach(function(card) {
    var text = card.textContent.toLowerCase();
    var okFilter = currentFilter === 'all' || card.dataset.type === currentFilter || card.dataset.date === currentFilter;
    var okSearch = !q || text.indexOf(q) !== -1;
    card.style.display = (okFilter && okSearch) ? '' : 'none';
  });
}
if (search) { search.addEventListener('input', applyWorksFilter); }
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    currentFilter = btn.dataset.filter;
    applyWorksFilter();
  });
});
