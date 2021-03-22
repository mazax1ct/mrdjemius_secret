function clipboardTextCopyFunction() {
  var copyText = document.getElementById("promoCode");
  document.execCommand("copy");
  alert("Промокод скопирован: " + copyText.value);
}
