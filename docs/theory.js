/******/ (() => { // webpackBootstrap
console.clear();
var showModalWindowButton = document.querySelector('.showModalWindow');
showModalWindowButton.addEventListener('click', showModalWindow);

// helloUser()
// testWhile()
showPineTree();
function showModalWindow() {
  alert('hey!');
}
function helloUser() {
  var userName = prompt('Как тебя зовут?');
  if (userName == null) {
    alert("\u041F\u0440\u0438\u0432\u0435\u0442, \u0430\u043D\u043E\u043D\u0438\u043C!");
  } else {
    alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(userName, "!"));
  }
}
function testWhile() {
  var number = 7;
  var i = 0;
  console.log('Таблица умножения на число', number);
  while (i < 10) {
    i++;
    console.log(number * i);
  }

  // let scream = 'a'
  // while (scream !== 'aaaaaaaaaaaa') {
  //   console.log(scream)
  //   scream += 'a'
  // }
}
function showPineTree() {
  //   *
  //  ***
  // *****

  var treeHeight = 6;
  for (var i = 0; i < treeHeight; i++) {
    var starsCount = i * 2 + 1;
    var out = '';
    var spaceCount = treeHeight - i - 1;
    for (var k = 0; k < spaceCount; k++) {
      out += ' ';
    }
    for (var j = 0; j < starsCount; j++) {
      out += '*';
    }
    console.log(out);
  }
}
/******/ })()
;