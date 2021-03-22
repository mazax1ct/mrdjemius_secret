var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
//var buttonText = document.querySelector('.js-copybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'Промокод скопирован' : 'Промокод не скопирован. Обратитетсь в службу поддержки';
    alert(msg);
  } catch (err) {
    alert('Что-то пошло не так. Скопируйте текст вручную');
  }
});
