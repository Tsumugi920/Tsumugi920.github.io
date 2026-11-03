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
