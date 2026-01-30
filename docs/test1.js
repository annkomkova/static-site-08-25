/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

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
function chooseAnswer(stages, results) {
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        setTimeout(function () {
          resultCount += Number(checkbox.dataset.count);
          updateStage(stages, results);
          checkbox.checked = false;
        }, 300);
      }
    });
  });
}
function updateStage(stages, results) {
  if (++currentStage < stages.length) {
    initTest(stages);
  } else {
    showResult(results);
  }
}
function showResult(results) {
  var testContainer = document.querySelector('.O_Test');
  testContainer.innerHTML = '';
  var resultWrapper = document.createElement('div');
  resultWrapper.classList.add('M_TestResult');
  var resultCnt = document.createElement('p');
  resultCnt.classList.add('A_TestResultCount');
  resultCnt.innerText = "\u0438\u0442\u043E\u0433\u043E: ".concat(resultCount);
  var resultHeader = document.createElement('h2');
  resultHeader.classList.add('A_TestResultHeader');
  var resultParagraph = document.createElement('p');
  resultParagraph.classList.add('A_TestResultParagraph');
  var resultImage = document.createElement('img');
  resultImage.classList.add('A_TestResultImage');
  if (resultCount == 4) {
    resultHeader.innerText = results[0].header;
    resultParagraph.innerText = results[0].paragraph;
    resultImage.src = results[0].image;
  } else if (resultCount == 3 || resultCount == 2) {
    resultHeader.innerText = results[1].header;
    resultParagraph.innerText = results[1].paragraph;
    resultImage.src = results[1].image;
  } else {
    resultHeader.innerText = results[2].header;
    resultParagraph.innerText = results[2].paragraph;
    resultImage.src = results[2].image;
  }

  // switch (resultCount) {
  //   case 4:
  //     resultHeader.innerText = results[0].header
  //     resultParagraph.innerText = results[0].paragraph
  //     resultImage.src = results[0].image
  //     break
  //   case 3:
  //     resultHeader.innerText = results[1].header
  //     resultParagraph.innerText = results[1].paragraph
  //     resultImage.src = results[1].image
  //     break
  //   case 2:
  //     resultHeader.innerText = results[1].header
  //     resultParagraph.innerText = results[1].paragraph
  //     resultImage.src = results[1].image
  //     break
  //   default:
  //     resultHeader.innerText = results[2].header
  //     resultParagraph.innerText = results[2].paragraph
  //     resultImage.src = results[2].image
  //     break
  // }

  resultWrapper.appendChild(resultCnt);
  resultWrapper.appendChild(resultHeader);
  resultWrapper.appendChild(resultParagraph);
  resultWrapper.appendChild(resultImage);
  testContainer.appendChild(resultWrapper);
}

;// ./src/images/results/result_good.svg
const result_good_namespaceObject = __webpack_require__.p + "images/9939a5cd06aa41fd0baa.svg";
;// ./src/images/results/result_bad.svg
const result_bad_namespaceObject = __webpack_require__.p + "images/98d269d50b291f94a07b.svg";
;// ./src/images/results/result_ok.svg
const result_ok_namespaceObject = __webpack_require__.p + "images/3095aca50eeb671b9cda.svg";
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
var results = [{
  header: 'Отличный результат!',
  paragraph: 'Видно, что вы прекрасно разбираетесь в теме! Проверьте свои знания в других наших тестах',
  image: "".concat(result_good_namespaceObject)
}, {
  header: 'Хороший результат!',
  paragraph: 'Видно, что вы неплохо знакомы с темой! Проверьте свои знания в других наших тестах',
  image: "".concat(result_ok_namespaceObject)
}, {
  header: 'Кажется, вы новичок в этой теме...',
  paragraph: 'Почитайте наши статьи, чтобы лучше подготовиться, и попробуйте снова проверить свои занния!',
  image: "".concat(result_bad_namespaceObject)
}];
initTest(stages);
chooseAnswer(stages, results);
/******/ })()
;