// Atualiza o ano do rodapé automaticamente
var anoEl = document.getElementById('ano-atual');
if (anoEl) {
  anoEl.textContent = '© ' + new Date().getFullYear() + ' Mercadinho Maná. Todos os direitos reservados.';
}

// Indicador "aberto agora / fechado", com base no horário do aparelho de quem visita
(function () {
  var dot = document.getElementById('status-dot');
  var text = document.getElementById('status-text');
  if (!dot || !text) return;

  var now = new Date();
  var day = now.getDay(); // 0 = domingo
  var minutes = now.getHours() * 60 + now.getMinutes();
  var opens = 7 * 60;
  var closes = (day === 0) ? 13 * 60 : 21 * 60;
  var open = minutes >= opens && minutes < closes;

  if (open) {
    text.textContent = 'Aberto agora';
  } else {
    dot.classList.add('closed');
    text.textContent = (day === 0 && minutes >= closes)
      ? 'Fechado — abre segunda às 07h'
      : 'Fechado — abre às 07h';
  }
})();