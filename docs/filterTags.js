/******/ (() => { // webpackBootstrap
console.clear();
initFilter();
function initFilter() {
  var tags = document.querySelectorAll('.A_FilterTag');
  var allTag = document.querySelector('.A_FilterTag.all');
  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      if (tag != allTag) {
        allTag.classList.remove('active');
        tag.classList.toggle('active');
        filterByTag();
      }
      var activeTags = document.querySelectorAll('.A_FilterTag.active');
      if (tag == allTag && !tag.classList.contains('active') || tags.length - 1 == activeTags.length || activeTags.length == 0) {
        activeTags.forEach(function (activeTag) {
          activeTag.classList.remove('active');
        });
        allTag.classList.add('active');
        filterAll();
      }
    });
  });
}
function filterByTag() {
  var cards = document.querySelectorAll('.W_TestCard');
  var activeTags = document.querySelectorAll('.A_FilterTag.active');
  var cnt;
  var tagList = [];
  cards.forEach(function (card) {
    card.style.display = 'none';
  });
  activeTags.forEach(function (tag) {
    var classList = tag.className.split(' ');
    classList.sort();
    cnt = 1;
    if (classList[1] == 'active') {
      cnt++;
    }
    for (var i = cnt; i < classList.length; i++) {
      tagList.push(classList[i]);
    }
    tagList.forEach(function (tagName) {
      cards.forEach(function (card) {
        if (card.classList.contains(tagName)) {
          card.style.display = 'block';
        }
      });
    });
  });
}
function filterAll() {
  var cards = document.querySelectorAll('.W_TestCard');
  var activeTags = document.querySelectorAll('.A_FilterTag.active');
  activeTags.forEach(function (tag) {
    var classList = tag.className.split(' ');
    if (tag.classList.contains('all')) {
      cards.forEach(function (card) {
        card.style.display = 'block';
      });
    }
  });
}
/******/ })()
;