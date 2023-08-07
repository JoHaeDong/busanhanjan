function clickText1Haedler() {}
function clickText2Haedler() {}
function clickText3Haedler() {}
function clickText4Haedler() {}
function clickText5Haedler() {}

function init() {
  document.querySelector('#clickText1').onclick = clickText1Haedler;
  document.querySelector('#clickText2').onclick = clickText2Haedler;
  document.querySelector('#clickText3').onclick = clickText3Haedler;
  document.querySelector('#clickText4').onclick = clickText4Haedler;
  document.querySelector('#clickText5').onclick = clickText5Haedler;
}

window.onload = init;
