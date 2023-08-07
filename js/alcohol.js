// '링크로 이동하기' 글자를 클릭했을 때 실행될 함수를 정의합니다.
function home() {
  // 이동할 링크의 URL을 지정합니다.
  var home = '이동하고자 하는 링크의 경로 또는 URL';

  // 현재 창을 이동할 링크의 URL로 변경합니다.
  window.location.href = linkUrl;
}

// '링크로 이동하기' 글자를 클릭했을 때 moveToLink 함수가 실행되도록 합니다.
var textElement = document.getElementById('home');
textElement.addEventListener('click', home);
