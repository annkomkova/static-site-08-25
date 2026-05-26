/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/results/result_bad.svg":
/*!*******************************************!*\
  !*** ./src/images/results/result_bad.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/98d269d50b291f94a07b.svg";

/***/ }),

/***/ "./src/images/results/result_good.svg":
/*!********************************************!*\
  !*** ./src/images/results/result_good.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9939a5cd06aa41fd0baa.svg";

/***/ }),

/***/ "./src/images/results/result_ok.svg":
/*!******************************************!*\
  !*** ./src/images/results/result_ok.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3095aca50eeb671b9cda.svg";

/***/ }),

/***/ "./src/javascripts/tests.js":
/*!**********************************!*\
  !*** ./src/javascripts/tests.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseAnswer: () => (/* binding */ chooseAnswer),
/* harmony export */   initTest: () => (/* binding */ initTest)
/* harmony export */ });
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascripts/test1.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests.js */ "./src/javascripts/tests.js");
/* harmony import */ var _images_results_result_good_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/results/result_good.svg */ "./src/images/results/result_good.svg");
/* harmony import */ var _images_results_result_bad_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/results/result_bad.svg */ "./src/images/results/result_bad.svg");
/* harmony import */ var _images_results_result_ok_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/results/result_ok.svg */ "./src/images/results/result_ok.svg");
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
  image: "".concat(_images_results_result_good_svg__WEBPACK_IMPORTED_MODULE_1__)
}, {
  header: 'Хороший результат!',
  paragraph: 'Видно, что вы неплохо знакомы с темой! Проверьте свои знания в других наших тестах',
  image: "".concat(_images_results_result_ok_svg__WEBPACK_IMPORTED_MODULE_3__)
}, {
  header: 'Кажется, вы новичок в этой теме...',
  paragraph: 'Почитайте наши статьи, чтобы лучше подготовиться, и попробуйте снова проверить свои занния!',
  image: "".concat(_images_results_result_bad_svg__WEBPACK_IMPORTED_MODULE_2__)
}];
(0,_tests_js__WEBPACK_IMPORTED_MODULE_0__.initTest)(stages);
(0,_tests_js__WEBPACK_IMPORTED_MODULE_0__.chooseAnswer)(stages, results);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRTtFQUNULENBQUMsRUFDRDtJQUNFSCxJQUFJLEVBQUUsU0FBUztJQUNmRyxLQUFLLEVBQUU7RUFDVCxDQUFDO0FBRUwsQ0FBQyxDQUNGO0FBRUQsSUFBTUUsT0FBTyxHQUFHLENBQ2Q7RUFDRW1CLE1BQU0sRUFBRSxxQkFBcUI7RUFDN0JDLFNBQVMsRUFDUCwwRkFBMEY7RUFDNUZFLEtBQUssS0FBQTlCLE1BQUEsQ0FBS2tDLDREQUFPO0FBQ25CLENBQUMsRUFDRDtFQUNFUCxNQUFNLEVBQUUsb0JBQW9CO0VBQzVCQyxTQUFTLEVBQ1Asb0ZBQW9GO0VBQ3RGRSxLQUFLLEtBQUE5QixNQUFBLENBQUtvQywwREFBSztBQUNqQixDQUFDLEVBQ0Q7RUFDRVQsTUFBTSxFQUFFLG9DQUFvQztFQUM1Q0MsU0FBUyxFQUNQLDZGQUE2RjtFQUMvRkUsS0FBSyxLQUFBOUIsTUFBQSxDQUFLbUMsMkRBQU07QUFDbEIsQ0FBQyxDQUNGO0FBRUQxQyxtREFBUSxDQUFDQyxNQUFNLENBQUM7QUFDaEJhLHVEQUFZLENBQUNiLE1BQU0sRUFBRWMsT0FBTyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL2phdmFzY3JpcHRzL3Rlc3RzLmpzIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iMjRkczA4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL2phdmFzY3JpcHRzL3Rlc3QxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50U3RhZ2UgPSAwXG5sZXQgcmVzdWx0Q291bnQgPSAwXG5jb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKVxuXG5mdW5jdGlvbiBpbml0VGVzdChzdGFnZXMpIHtcbiAgY29uc3QgbnVtYmVyT2ZRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX051bWJlck9mUXVlc3Rpb24nKVxuICBjb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX1F1ZXN0aW9uJylcbiAgY29uc3QgYW5zd2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5BX0Fuc3dlclRleHQnKVxuXG4gIG51bWJlck9mUXVlc3Rpb24uaW5uZXJUZXh0ID0gYNCy0L7Qv9GA0L7RgSDihJYke2N1cnJlbnRTdGFnZSArIDF9INC40LcgJHtzdGFnZXMubGVuZ3RofWBcblxuICBxdWVzdGlvbi5pbm5lclRleHQgPSBzdGFnZXNbY3VycmVudFN0YWdlXS5xdWVzdGlvblxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGFuc3dlcnNbaV0uaW5uZXJUZXh0ID0gc3RhZ2VzW2N1cnJlbnRTdGFnZV0uYW5zd2Vyc1tpXS50ZXh0XG4gIH1cblxuICBmb3IgKGxldCBqID0gMDsgaiA8IGNoZWNrYm94ZXMubGVuZ3RoOyBqKyspIHtcbiAgICBjaGVja2JveGVzW2pdLmRhdGFzZXQuY291bnQgPSBzdGFnZXNbY3VycmVudFN0YWdlXS5hbnN3ZXJzW2pdLmNvdW50XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlQW5zd2VyKHN0YWdlcywgcmVzdWx0cykge1xuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzdWx0Q291bnQgKz0gTnVtYmVyKGNoZWNrYm94LmRhdGFzZXQuY291bnQpXG4gICAgICAgICAgdXBkYXRlU3RhZ2Uoc3RhZ2VzLCByZXN1bHRzKVxuICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICB9LCAzMDApXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhZ2Uoc3RhZ2VzLCByZXN1bHRzKSB7XG4gIGlmICgrK2N1cnJlbnRTdGFnZSA8IHN0YWdlcy5sZW5ndGgpIHtcbiAgICBpbml0VGVzdChzdGFnZXMpXG4gIH0gZWxzZSB7XG4gICAgc2hvd1Jlc3VsdChyZXN1bHRzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dSZXN1bHQocmVzdWx0cykge1xuICBjb25zdCB0ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk9fVGVzdCcpXG4gIHRlc3RDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICBjb25zdCByZXN1bHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcmVzdWx0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdNX1Rlc3RSZXN1bHQnKVxuXG4gIGNvbnN0IHJlc3VsdENudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICByZXN1bHRDbnQuY2xhc3NMaXN0LmFkZCgnQV9UZXN0UmVzdWx0Q291bnQnKVxuICByZXN1bHRDbnQuaW5uZXJUZXh0ID0gYNC40YLQvtCz0L46ICR7cmVzdWx0Q291bnR9YFxuXG4gIGNvbnN0IHJlc3VsdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgcmVzdWx0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ0FfVGVzdFJlc3VsdEhlYWRlcicpXG5cbiAgY29uc3QgcmVzdWx0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHJlc3VsdFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdBX1Rlc3RSZXN1bHRQYXJhZ3JhcGgnKVxuXG4gIGNvbnN0IHJlc3VsdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgcmVzdWx0SW1hZ2UuY2xhc3NMaXN0LmFkZCgnQV9UZXN0UmVzdWx0SW1hZ2UnKVxuXG4gIGlmIChyZXN1bHRDb3VudCA9PSA0KSB7XG4gICAgcmVzdWx0SGVhZGVyLmlubmVyVGV4dCA9IHJlc3VsdHNbMF0uaGVhZGVyXG4gICAgcmVzdWx0UGFyYWdyYXBoLmlubmVyVGV4dCA9IHJlc3VsdHNbMF0ucGFyYWdyYXBoXG4gICAgcmVzdWx0SW1hZ2Uuc3JjID0gcmVzdWx0c1swXS5pbWFnZVxuICB9IGVsc2UgaWYgKHJlc3VsdENvdW50ID09IDMgfHwgcmVzdWx0Q291bnQgPT0gMikge1xuICAgIHJlc3VsdEhlYWRlci5pbm5lclRleHQgPSByZXN1bHRzWzFdLmhlYWRlclxuICAgIHJlc3VsdFBhcmFncmFwaC5pbm5lclRleHQgPSByZXN1bHRzWzFdLnBhcmFncmFwaFxuICAgIHJlc3VsdEltYWdlLnNyYyA9IHJlc3VsdHNbMV0uaW1hZ2VcbiAgfSBlbHNlIHtcbiAgICByZXN1bHRIZWFkZXIuaW5uZXJUZXh0ID0gcmVzdWx0c1syXS5oZWFkZXJcbiAgICByZXN1bHRQYXJhZ3JhcGguaW5uZXJUZXh0ID0gcmVzdWx0c1syXS5wYXJhZ3JhcGhcbiAgICByZXN1bHRJbWFnZS5zcmMgPSByZXN1bHRzWzJdLmltYWdlXG4gIH1cblxuICAvLyBzd2l0Y2ggKHJlc3VsdENvdW50KSB7XG4gIC8vICAgY2FzZSA0OlxuICAvLyAgICAgcmVzdWx0SGVhZGVyLmlubmVyVGV4dCA9IHJlc3VsdHNbMF0uaGVhZGVyXG4gIC8vICAgICByZXN1bHRQYXJhZ3JhcGguaW5uZXJUZXh0ID0gcmVzdWx0c1swXS5wYXJhZ3JhcGhcbiAgLy8gICAgIHJlc3VsdEltYWdlLnNyYyA9IHJlc3VsdHNbMF0uaW1hZ2VcbiAgLy8gICAgIGJyZWFrXG4gIC8vICAgY2FzZSAzOlxuICAvLyAgICAgcmVzdWx0SGVhZGVyLmlubmVyVGV4dCA9IHJlc3VsdHNbMV0uaGVhZGVyXG4gIC8vICAgICByZXN1bHRQYXJhZ3JhcGguaW5uZXJUZXh0ID0gcmVzdWx0c1sxXS5wYXJhZ3JhcGhcbiAgLy8gICAgIHJlc3VsdEltYWdlLnNyYyA9IHJlc3VsdHNbMV0uaW1hZ2VcbiAgLy8gICAgIGJyZWFrXG4gIC8vICAgY2FzZSAyOlxuICAvLyAgICAgcmVzdWx0SGVhZGVyLmlubmVyVGV4dCA9IHJlc3VsdHNbMV0uaGVhZGVyXG4gIC8vICAgICByZXN1bHRQYXJhZ3JhcGguaW5uZXJUZXh0ID0gcmVzdWx0c1sxXS5wYXJhZ3JhcGhcbiAgLy8gICAgIHJlc3VsdEltYWdlLnNyYyA9IHJlc3VsdHNbMV0uaW1hZ2VcbiAgLy8gICAgIGJyZWFrXG4gIC8vICAgZGVmYXVsdDpcbiAgLy8gICAgIHJlc3VsdEhlYWRlci5pbm5lclRleHQgPSByZXN1bHRzWzJdLmhlYWRlclxuICAvLyAgICAgcmVzdWx0UGFyYWdyYXBoLmlubmVyVGV4dCA9IHJlc3VsdHNbMl0ucGFyYWdyYXBoXG4gIC8vICAgICByZXN1bHRJbWFnZS5zcmMgPSByZXN1bHRzWzJdLmltYWdlXG4gIC8vICAgICBicmVha1xuICAvLyB9XG5cbiAgcmVzdWx0V3JhcHBlci5hcHBlbmRDaGlsZChyZXN1bHRDbnQpXG4gIHJlc3VsdFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdWx0SGVhZGVyKVxuICByZXN1bHRXcmFwcGVyLmFwcGVuZENoaWxkKHJlc3VsdFBhcmFncmFwaClcbiAgcmVzdWx0V3JhcHBlci5hcHBlbmRDaGlsZChyZXN1bHRJbWFnZSlcblxuICB0ZXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdFdyYXBwZXIpXG59XG5cbmV4cG9ydCB7IGluaXRUZXN0LCBjaG9vc2VBbnN3ZXIgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImNvbnNvbGUuY2xlYXIoKVxuaW1wb3J0IHsgaW5pdFRlc3QsIGNob29zZUFuc3dlciB9IGZyb20gJy4vdGVzdHMuanMnXG5cbmltcG9ydCBpbWdHb29kIGZyb20gJy4uL2ltYWdlcy9yZXN1bHRzL3Jlc3VsdF9nb29kLnN2ZydcbmltcG9ydCBpbWdCYWQgZnJvbSAnLi4vaW1hZ2VzL3Jlc3VsdHMvcmVzdWx0X2JhZC5zdmcnXG5pbXBvcnQgaW1nT0sgZnJvbSAnLi4vaW1hZ2VzL3Jlc3VsdHMvcmVzdWx0X29rLnN2ZydcblxuY29uc3Qgc3RhZ2VzID0gW1xuICB7XG4gICAgcXVlc3Rpb246XG4gICAgICAn0JrQsNC60L7QtSDRgNCw0YHRgtC10L3QuNC1LCDRgdC+0LPQu9Cw0YHQvdC+INC90LDRgNC+0LTQvdC+0Lkg0LzQtdC00LjRhtC40L3QtSwg0YHQu9C10LTRg9C10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LvRjyDQt9Cw0LbQuNCy0LvQtdC90LjRjyDRgNCw0L0/JyxcbiAgICBhbnN3ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfRgNC+0LzQsNGI0LrQsCcsXG4gICAgICAgIGNvdW50OiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn0LHRgNGD0YHQvdC40LrQsCcsXG4gICAgICAgIGNvdW50OiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn0LDQu9C+0Y0nLFxuICAgICAgICBjb3VudDogMVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOlxuICAgICAgJ9Ce0YLQstCw0YAg0Lgg0L3QsNGB0YLQvtC5INGP0LPQvtC0INC60LDQutC+0LPQviDRgNCw0YHRgtC10L3QuNGPINC/0YDQuNC80LXQvdGP0LXRgtGB0Y8g0LrQsNC6INC00LXQt9C40L3RhNC40YbQuNGA0YPRjtGJ0LXQtSDRgdGA0LXQtNGB0YLQstC+PycsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn0LrQsNC70LjQvdCwJyxcbiAgICAgICAgY291bnQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfQsdGA0YPRgdC90LjQutCwJyxcbiAgICAgICAgY291bnQ6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfQutC70Y7QutCy0LAnLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHF1ZXN0aW9uOlxuICAgICAgJ9Ca0LDQutC+0LUg0LjQtyDQv9C10YDQtdGH0LjRgdC70LXQvdC90YvRhSDRgNCw0YHRgtC10L3QuNC5INC+0LHQu9Cw0LTQsNC10YIg0L/RgNC+0YLQuNCy0L7QstC+0YHQv9Cw0LvQuNGC0LXQu9GM0L3Ri9C8INC00LXQudGB0YLQstC40LXQvD8nLFxuICAgIGFuc3dlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9GA0L7QvNCw0YjQutCwJyxcbiAgICAgICAgY291bnQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfQsNC40YAnLFxuICAgICAgICBjb3VudDogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9C00LXQstGP0YLQuNGB0LjQuycsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgcXVlc3Rpb246XG4gICAgICAn0K3QutGB0YLRgNCw0LrRgiDQutCw0LrQvtCz0L4g0YDQsNGB0YLQtdC90LjRjyDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LTQu9GPINC/0YDQuNCz0L7RgtC+0LLQu9C10L3QuNGPINCx0LXQt9GA0LXRhtC10L/RgtGD0YDQvdGL0YUg0YDQsNGB0YLQuNGC0LXQu9GM0L3Ri9GFINCw0L3RgtC40LTQtdC/0YDQtdGB0YHQsNC90YLQvtCyPycsXG4gICAgYW5zd2VyczogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAn0LfQstC10YDQvtCx0L7QuScsXG4gICAgICAgIGNvdW50OiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn0YjQsNC70YTQtdC5JyxcbiAgICAgICAgY291bnQ6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfRgdC+0LvQvtC00LrQsCcsXG4gICAgICAgIGNvdW50OiAwXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmNvbnN0IHJlc3VsdHMgPSBbXG4gIHtcbiAgICBoZWFkZXI6ICfQntGC0LvQuNGH0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgiEnLFxuICAgIHBhcmFncmFwaDpcbiAgICAgICfQktC40LTQvdC+LCDRh9GC0L4g0LLRiyDQv9GA0LXQutGA0LDRgdC90L4g0YDQsNC30LHQuNGA0LDQtdGC0LXRgdGMINCyINGC0LXQvNC1ISDQn9GA0L7QstC10YDRjNGC0LUg0YHQstC+0Lgg0LfQvdCw0L3QuNGPINCyINC00YDRg9Cz0LjRhSDQvdCw0YjQuNGFINGC0LXRgdGC0LDRhScsXG4gICAgaW1hZ2U6IGAke2ltZ0dvb2R9YFxuICB9LFxuICB7XG4gICAgaGVhZGVyOiAn0KXQvtGA0L7RiNC40Lkg0YDQtdC30YPQu9GM0YLQsNGCIScsXG4gICAgcGFyYWdyYXBoOlxuICAgICAgJ9CS0LjQtNC90L4sINGH0YLQviDQstGLINC90LXQv9C70L7RhdC+INC30L3QsNC60L7QvNGLINGBINGC0LXQvNC+0LkhINCf0YDQvtCy0LXRgNGM0YLQtSDRgdCy0L7QuCDQt9C90LDQvdC40Y8g0LIg0LTRgNGD0LPQuNGFINC90LDRiNC40YUg0YLQtdGB0YLQsNGFJyxcbiAgICBpbWFnZTogYCR7aW1nT0t9YFxuICB9LFxuICB7XG4gICAgaGVhZGVyOiAn0JrQsNC20LXRgtGB0Y8sINCy0Ysg0L3QvtCy0LjRh9C+0Log0LIg0Y3RgtC+0Lkg0YLQtdC80LUuLi4nLFxuICAgIHBhcmFncmFwaDpcbiAgICAgICfQn9C+0YfQuNGC0LDQudGC0LUg0L3QsNGI0Lgg0YHRgtCw0YLRjNC4LCDRh9GC0L7QsdGLINC70YPRh9GI0LUg0L/QvtC00LPQvtGC0L7QstC40YLRjNGB0Y8sINC4INC/0L7Qv9GA0L7QsdGD0LnRgtC1INGB0L3QvtCy0LAg0L/RgNC+0LLQtdGA0LjRgtGMINGB0LLQvtC4INC30LDQvdC90LjRjyEnLFxuICAgIGltYWdlOiBgJHtpbWdCYWR9YFxuICB9XG5dXG5cbmluaXRUZXN0KHN0YWdlcylcbmNob29zZUFuc3dlcihzdGFnZXMsIHJlc3VsdHMpXG4iXSwibmFtZXMiOlsiY3VycmVudFN0YWdlIiwicmVzdWx0Q291bnQiLCJjaGVja2JveGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdFRlc3QiLCJzdGFnZXMiLCJudW1iZXJPZlF1ZXN0aW9uIiwicXVlcnlTZWxlY3RvciIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImlubmVyVGV4dCIsImNvbmNhdCIsImxlbmd0aCIsImkiLCJ0ZXh0IiwiaiIsImRhdGFzZXQiLCJjb3VudCIsImNob29zZUFuc3dlciIsInJlc3VsdHMiLCJmb3JFYWNoIiwiY2hlY2tib3giLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsInNldFRpbWVvdXQiLCJOdW1iZXIiLCJ1cGRhdGVTdGFnZSIsInNob3dSZXN1bHQiLCJ0ZXN0Q29udGFpbmVyIiwiaW5uZXJIVE1MIiwicmVzdWx0V3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZXN1bHRDbnQiLCJyZXN1bHRIZWFkZXIiLCJyZXN1bHRQYXJhZ3JhcGgiLCJyZXN1bHRJbWFnZSIsImhlYWRlciIsInBhcmFncmFwaCIsInNyYyIsImltYWdlIiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwiY2xlYXIiLCJpbWdHb29kIiwiaW1nQmFkIiwiaW1nT0siXSwic291cmNlUm9vdCI6IiJ9