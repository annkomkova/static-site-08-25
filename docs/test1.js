/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/javascripts/tests.js
var currentStage = 0;
var resultCount = 0;
var checkboxes = document.querySelectorAll('input[type=checkbox]');
function initTest(stages) {
  var numberOfQuestion = document.querySelector('.A_NumberOfQuestion');
  var question = document.querySelector('.A_Question');
  var answers = document.querySelectorAll('.A_AnswerText');
  numberOfQuestion.innerText = "\u0432\u043E\u043F\u0440\u043E\u0441 \u2116".concat(currentStage + 1, " \u0438\u0437 ").concat(stages.length);
  question.innerText = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
  }
  for (var j = 0; j < checkboxes.length; j++) {
    checkboxes[j].dataset.count = stages[currentStage].answers[j].count;
  }
}
function chooseAnswer(stages) {
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        setTimeout(function () {
          resultCount += Number(checkbox.dataset.count);
          updateStage(stages);
          checkbox.checked = false;
        }, 300);
      }
    });
  });
}
function updateStage(stages) {
  if (++currentStage < stages.length) {
    initTest(stages);
  } else {
    console.log('результат');
  }
}

;// ./src/javascripts/test1.js
console.clear();

var stages = [{
  question: 'Какое растение, согласно народной медицине, следует использовать для заживления ран?',
  answers: [{
    text: 'ромашка',
    count: 0
  }, {
    text: 'брусника',
    count: 0
  }, {
    text: 'алоэ',
    count: 1
  }]
}, {
  question: 'Отвар и настой ягод какого растения применяется как дезинфицирующее средство?',
  answers: [{
    text: 'калина',
    count: 0
  }, {
    text: 'брусника',
    count: 1
  }, {
    text: 'клюква',
    count: 0
  }]
}, {
  question: 'Какое из перечисленных растений обладает противовоспалительным действием?',
  answers: [{
    text: 'ромашка',
    count: 0
  }, {
    text: 'аир',
    count: 0
  }, {
    text: 'девятисил',
    count: 1
  }]
}, {
  question: 'Экстракт какого растения используется для приготовления безрецептурных растительных антидепрессантов?',
  answers: [{
    text: 'зверобой',
    count: 1
  }, {
    text: 'шалфей',
    count: 0
  }, {
    text: 'солодка',
    count: 0
  }]
}];
initTest(stages);
chooseAnswer(stages);
/******/ })()
;