/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascripts/search-data.js":
/*!****************************************!*\
  !*** ./src/javascripts/search-data.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   articles: () => (/* binding */ articles)
/* harmony export */ });
var articles = [{
  title: 'Монстера',
  description: 'Тропическое растение с крупными листьями',
  url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/monstera.html'
}, {
  title: 'Кактус',
  description: 'Пустынное растение без частого полива',
  url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/cactus.html'
}, {
  title: 'Сансевиерия',
  description: 'Теневыносливый суккулент, не требующий частого полива',
  url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/sansevieria.html'
}, {
  title: 'Орихидея',
  description: 'Красивое цветущее растение, растущее во мху',
  url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/orchidea.html'
}, {
  title: 'Алоэ',
  description: 'Суккулент, не требующий частого полива, с лекарственными свойствами',
  url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/aloe.html'
}];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./src/javascripts/search-vanilla-module.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-data.js */ "./src/javascripts/search-data.js");

initSearchPage(_search_data_js__WEBPACK_IMPORTED_MODULE_0__.articles);
function initSearchPage(articles) {
  var input = document.querySelector('.A_SearchInput');
  var button = document.querySelector('.A_SearchButton');
  var results = document.querySelector('.C_SearchResults');
  var params = new URLSearchParams(window.location.search);
  var query = params.get('q') || '';
  input.value = query;

  //вызвать рендер карточек результатов
  renderResults(query, results, articles);

  //события инпута
  input.addEventListener('input', function () {
    var value = input.value.toLowerCase();
    updateURL(value);
    renderResults(value, results, articles);
  });

  //события клика
  button.addEventListener('click', function () {
    var value = input.value.toLowerCase();
    updateURL(value);
    renderResults(value, results, articles);
  });
}
function renderResults(query, results, articles) {
  results.innerHTML = '';
  if (query.length < 3) return;
  var list = articles.filter(function (article) {
    return article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query);
  });
  if (list.length == 0) {
    results.innerHTML = '<p>Ничего не найдено</p>';
    return;
  }
  list.forEach(function (item) {
    var card = document.createElement('a');
    card.classList.add('W_IndexSectionCard');
    card.href = item.url;
    var header = document.createElement('h3');
    header.classList.add('A_IndexSectionCardHeader');
    header.innerHTML = hightlight(item.title, query);
    var description = document.createElement('p');
    description.classList.add('A_IndexSectionCardDescription');
    description.innerHTML = hightlight(item.description, query);
    card.appendChild(header);
    card.appendChild(description);
    results.appendChild(card);
  });
}
function hightlight(text, value) {
  var regex = new RegExp("".concat(value), 'gi');
  var formatted = text.replace(regex, "<span class=\"Q_Hightlight\">".concat(value, "</span>"));
  return formatted;
}
function updateURL(value) {
  var url = "search.html?q=".concat(encodeURIComponent(value));
  history.replaceState(null, '', url);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTdCTyxPQUFPLENBQUM0QixXQUFXLENBQUNQLElBQUksQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNNLFVBQVVBLENBQUNFLElBQUksRUFBRXJCLEtBQUssRUFBRTtFQUMvQixJQUFNc0IsS0FBSyxHQUFHLElBQUlDLE1BQU0sSUFBQUMsTUFBQSxDQUFJeEIsS0FBSyxHQUFJLElBQUksQ0FBQztFQUUxQyxJQUFNeUIsU0FBUyxHQUFHSixJQUFJLENBQUNLLE9BQU8sQ0FDNUJKLEtBQUssa0NBQUFFLE1BQUEsQ0FDeUJ4QixLQUFLLFlBQ3JDLENBQUM7RUFFRCxPQUFPeUIsU0FBUztBQUNsQjtBQUVBLFNBQVNyQixTQUFTQSxDQUFDSixLQUFLLEVBQUU7RUFDeEIsSUFBTWQsR0FBRyxvQkFBQXNDLE1BQUEsQ0FBb0JHLGtCQUFrQixDQUFDM0IsS0FBSyxDQUFDLENBQUU7RUFDeEQ0QixPQUFPLENBQUNDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFM0MsR0FBRyxDQUFDO0FBQ3JDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL2phdmFzY3JpcHRzL3NlYXJjaC1kYXRhLmpzIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL2phdmFzY3JpcHRzL3NlYXJjaC12YW5pbGxhLW1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJ0aWNsZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ9Cc0L7QvdGB0YLQtdGA0LAnLFxuICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC+0L/QuNGH0LXRgdC60L7QtSDRgNCw0YHRgtC10L3QuNC1INGBINC60YDRg9C/0L3Ri9C80Lgg0LvQuNGB0YLRjNGP0LzQuCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOC0yNS9wYWdlcy9hcnRpY2xlcy9tb25zdGVyYS5odG1sJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQmtCw0LrRgtGD0YEnLFxuICAgIGRlc2NyaXB0aW9uOiAn0J/Rg9GB0YLRi9C90L3QvtC1INGA0LDRgdGC0LXQvdC40LUg0LHQtdC3INGH0LDRgdGC0L7Qs9C+INC/0L7Qu9C40LLQsCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOC0yNS9wYWdlcy9hcnRpY2xlcy9jYWN0dXMuaHRtbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KHQsNC90YHQtdCy0LjQtdGA0LjRjycsXG4gICAgZGVzY3JpcHRpb246ICfQotC10L3QtdCy0YvQvdC+0YHQu9C40LLRi9C5INGB0YPQutC60YPQu9C10L3Rgiwg0L3QtSDRgtGA0LXQsdGD0Y7RidC40Lkg0YfQsNGB0YLQvtCz0L4g0L/QvtC70LjQstCwJyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA4LTI1L3BhZ2VzL2FydGljbGVzL3NhbnNldmllcmlhLmh0bWwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ce0YDQuNGF0LjQtNC10Y8nLFxuICAgIGRlc2NyaXB0aW9uOiAn0JrRgNCw0YHQuNCy0L7QtSDRhtCy0LXRgtGD0YnQtdC1INGA0LDRgdGC0LXQvdC40LUsINGA0LDRgdGC0YPRidC10LUg0LLQviDQvNGF0YMnLFxuICAgIHVybDogJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDgtMjUvcGFnZXMvYXJ0aWNsZXMvb3JjaGlkZWEuaHRtbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JDQu9C+0Y0nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ9Ch0YPQutC60YPQu9C10L3Rgiwg0L3QtSDRgtGA0LXQsdGD0Y7RidC40Lkg0YfQsNGB0YLQvtCz0L4g0L/QvtC70LjQstCwLCDRgSDQu9C10LrQsNGA0YHRgtCy0LXQvdC90YvQvNC4INGB0LLQvtC50YHRgtCy0LDQvNC4JyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA4LTI1L3BhZ2VzL2FydGljbGVzL2Fsb2UuaHRtbCdcbiAgfVxuXVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhcnRpY2xlcyB9IGZyb20gJy4vc2VhcmNoLWRhdGEuanMnXG5cbmluaXRTZWFyY2hQYWdlKGFydGljbGVzKVxuXG5mdW5jdGlvbiBpbml0U2VhcmNoUGFnZShhcnRpY2xlcykge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX1NlYXJjaElucHV0JylcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkFfU2VhcmNoQnV0dG9uJylcbiAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DX1NlYXJjaFJlc3VsdHMnKVxuXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgY29uc3QgcXVlcnkgPSBwYXJhbXMuZ2V0KCdxJykgfHwgJydcblxuICBpbnB1dC52YWx1ZSA9IHF1ZXJ5XG5cbiAgLy/QstGL0LfQstCw0YLRjCDRgNC10L3QtNC10YAg0LrQsNGA0YLQvtGH0LXQuiDRgNC10LfRg9C70YzRgtCw0YLQvtCyXG4gIHJlbmRlclJlc3VsdHMocXVlcnksIHJlc3VsdHMsIGFydGljbGVzKVxuXG4gIC8v0YHQvtCx0YvRgtC40Y8g0LjQvdC/0YPRgtCwXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgIHVwZGF0ZVVSTCh2YWx1ZSlcbiAgICByZW5kZXJSZXN1bHRzKHZhbHVlLCByZXN1bHRzLCBhcnRpY2xlcylcbiAgfSlcblxuICAvL9GB0L7QsdGL0YLQuNGPINC60LvQuNC60LBcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgIHVwZGF0ZVVSTCh2YWx1ZSlcbiAgICByZW5kZXJSZXN1bHRzKHZhbHVlLCByZXN1bHRzLCBhcnRpY2xlcylcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVzdWx0cyhxdWVyeSwgcmVzdWx0cywgYXJ0aWNsZXMpIHtcbiAgcmVzdWx0cy5pbm5lckhUTUwgPSAnJ1xuXG4gIGlmIChxdWVyeS5sZW5ndGggPCAzKSByZXR1cm5cblxuICBjb25zdCBsaXN0ID0gYXJ0aWNsZXMuZmlsdGVyKFxuICAgIChhcnRpY2xlKSA9PlxuICAgICAgYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KSB8fFxuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KVxuICApXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09IDApIHtcbiAgICByZXN1bHRzLmlubmVySFRNTCA9ICc8cD7QndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QvjwvcD4nXG4gICAgcmV0dXJuXG4gIH1cblxuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdXX0luZGV4U2VjdGlvbkNhcmQnKVxuICAgIGNhcmQuaHJlZiA9IGl0ZW0udXJsXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ0FfSW5kZXhTZWN0aW9uQ2FyZEhlYWRlcicpXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGhpZ2h0bGlnaHQoaXRlbS50aXRsZSwgcXVlcnkpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ0FfSW5kZXhTZWN0aW9uQ2FyZERlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBoaWdodGxpZ2h0KGl0ZW0uZGVzY3JpcHRpb24sIHF1ZXJ5KVxuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIHJlc3VsdHMuYXBwZW5kQ2hpbGQoY2FyZClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGlnaHRsaWdodCh0ZXh0LCB2YWx1ZSkge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCR7dmFsdWV9YCwgJ2dpJylcblxuICBjb25zdCBmb3JtYXR0ZWQgPSB0ZXh0LnJlcGxhY2UoXG4gICAgcmVnZXgsXG4gICAgYDxzcGFuIGNsYXNzPVwiUV9IaWdodGxpZ2h0XCI+JHt2YWx1ZX08L3NwYW4+YFxuICApXG5cbiAgcmV0dXJuIGZvcm1hdHRlZFxufVxuXG5mdW5jdGlvbiB1cGRhdGVVUkwodmFsdWUpIHtcbiAgY29uc3QgdXJsID0gYHNlYXJjaC5odG1sP3E9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWBcbiAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJycsIHVybClcbn1cbiJdLCJuYW1lcyI6WyJhcnRpY2xlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJpbml0U2VhcmNoUGFnZSIsImlucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwicmVzdWx0cyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicXVlcnkiLCJnZXQiLCJ2YWx1ZSIsInJlbmRlclJlc3VsdHMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9Mb3dlckNhc2UiLCJ1cGRhdGVVUkwiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJsaXN0IiwiZmlsdGVyIiwiYXJ0aWNsZSIsImluY2x1ZGVzIiwiZm9yRWFjaCIsIml0ZW0iLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhyZWYiLCJoZWFkZXIiLCJoaWdodGxpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0IiwicmVnZXgiLCJSZWdFeHAiLCJjb25jYXQiLCJmb3JtYXR0ZWQiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=