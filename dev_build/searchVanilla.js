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
/*!*******************************************!*\
  !*** ./src/javascripts/search-vanilla.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-data.js */ "./src/javascripts/search-data.js");

initSearch(_search_data_js__WEBPACK_IMPORTED_MODULE_0__.articles);
function initSearch(articles) {
  var input = document.querySelector('.A_SearchInput');
  var button = document.querySelector('.A_SearchButton');
  input.addEventListener('input', function () {
    hadleSearchInput(articles, input, button);
  });
  button.addEventListener('click', function () {
    hadleSearchClick(articles, input, button);
  });
}
function hadleSearchClick(articles, input, button) {
  var value = input.value.toLowerCase();
  var result = articles.find(function (article) {
    return article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value);
  });
  if (result) {
    // window.location.href = result.url
    window.location.href = "search.html?q=".concat(encodeURIComponent(value));
  }
}
function toggleButton(button, isActive) {
  button.disabled = !isActive;
}
function hadleSearchInput(articles, input, button) {
  var value = input.value.toLowerCase();
  var dropdown = document.querySelector('.C_Dropdown');
  var results = articles.filter(function (article) {
    return article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value);
  });
  if (results > 0) {
    dropdown.style.display = 'none';
  }
  if (value.length < 3) {
    dropdown.style.display = 'none';
    toggleButton(button, false);
  } else {
    toggleButton(button, true);
    renderDropdown(results, dropdown, value);
  }
}
function renderDropdown(results, dropdown, value) {
  dropdown.innerHTML = '';
  dropdown.style.display = 'flex';
  results.forEach(function (result) {
    var item = document.createElement('a');
    item.classList.add('M_SearchResult');
    item.href = result.url;
    var header = document.createElement('h5');
    header.classList.add('A_SearchResultHeader');
    header.innerHTML = hightlight(result.title, value);
    var description = document.createElement('p');
    description.classList.add('A_SearchResultDescription');
    description.innerHTML = hightlight(result.description, value);
    item.appendChild(header);
    item.appendChild(description);
    dropdown.appendChild(item);
  });
}
function hightlight(text, value) {
  var regex = new RegExp("".concat(value), 'gi');
  var formatted = text.replace(regex, "<span class=\"Q_Hightlight\">".concat(value, "</span>"));
  console.log(formatted);
  return formatted;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxJQUFJLENBQUNmLElBQUksR0FBR04sTUFBTSxDQUFDWCxHQUFHO0lBRXRCLElBQU1vQyxNQUFNLEdBQUdqQyxRQUFRLENBQUM4QixhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzNDRyxNQUFNLENBQUNGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQzVDQyxNQUFNLENBQUNOLFNBQVMsR0FBR08sVUFBVSxDQUFDMUIsTUFBTSxDQUFDYixLQUFLLEVBQUVXLEtBQUssQ0FBQztJQUVsRCxJQUFNVixXQUFXLEdBQUdJLFFBQVEsQ0FBQzhCLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDL0NsQyxXQUFXLENBQUNtQyxTQUFTLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztJQUN0RHBDLFdBQVcsQ0FBQytCLFNBQVMsR0FBR08sVUFBVSxDQUFDMUIsTUFBTSxDQUFDWixXQUFXLEVBQUVVLEtBQUssQ0FBQztJQUU3RHVCLElBQUksQ0FBQ00sV0FBVyxDQUFDRixNQUFNLENBQUM7SUFDeEJKLElBQUksQ0FBQ00sV0FBVyxDQUFDdkMsV0FBVyxDQUFDO0lBRTdCd0IsUUFBUSxDQUFDZSxXQUFXLENBQUNOLElBQUksQ0FBQztFQUM1QixDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNLLFVBQVVBLENBQUNFLElBQUksRUFBRTlCLEtBQUssRUFBRTtFQUMvQixJQUFNK0IsS0FBSyxHQUFHLElBQUlDLE1BQU0sSUFBQXZCLE1BQUEsQ0FBSVQsS0FBSyxHQUFJLElBQUksQ0FBQztFQUUxQyxJQUFNaUMsU0FBUyxHQUFHSCxJQUFJLENBQUNJLE9BQU8sQ0FDNUJILEtBQUssa0NBQUF0QixNQUFBLENBQ3lCVCxLQUFLLFlBQ3JDLENBQUM7RUFDRG1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUM7RUFFdEIsT0FBT0EsU0FBUztBQUNsQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYjI0ZHMwOC8uL3NyYy9qYXZhc2NyaXB0cy9zZWFyY2gtZGF0YS5qcyIsIndlYnBhY2s6Ly9iMjRkczA4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iMjRkczA4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC8uL3NyYy9qYXZhc2NyaXB0cy9zZWFyY2gtdmFuaWxsYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJ0aWNsZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ9Cc0L7QvdGB0YLQtdGA0LAnLFxuICAgIGRlc2NyaXB0aW9uOiAn0KLRgNC+0L/QuNGH0LXRgdC60L7QtSDRgNCw0YHRgtC10L3QuNC1INGBINC60YDRg9C/0L3Ri9C80Lgg0LvQuNGB0YLRjNGP0LzQuCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOC0yNS9wYWdlcy9hcnRpY2xlcy9tb25zdGVyYS5odG1sJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQmtCw0LrRgtGD0YEnLFxuICAgIGRlc2NyaXB0aW9uOiAn0J/Rg9GB0YLRi9C90L3QvtC1INGA0LDRgdGC0LXQvdC40LUg0LHQtdC3INGH0LDRgdGC0L7Qs9C+INC/0L7Qu9C40LLQsCcsXG4gICAgdXJsOiAnaHR0cHM6Ly9hbm5rb21rb3ZhLmdpdGh1Yi5pby9zdGF0aWMtc2l0ZS0wOC0yNS9wYWdlcy9hcnRpY2xlcy9jYWN0dXMuaHRtbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KHQsNC90YHQtdCy0LjQtdGA0LjRjycsXG4gICAgZGVzY3JpcHRpb246ICfQotC10L3QtdCy0YvQvdC+0YHQu9C40LLRi9C5INGB0YPQutC60YPQu9C10L3Rgiwg0L3QtSDRgtGA0LXQsdGD0Y7RidC40Lkg0YfQsNGB0YLQvtCz0L4g0L/QvtC70LjQstCwJyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA4LTI1L3BhZ2VzL2FydGljbGVzL3NhbnNldmllcmlhLmh0bWwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ce0YDQuNGF0LjQtNC10Y8nLFxuICAgIGRlc2NyaXB0aW9uOiAn0JrRgNCw0YHQuNCy0L7QtSDRhtCy0LXRgtGD0YnQtdC1INGA0LDRgdGC0LXQvdC40LUsINGA0LDRgdGC0YPRidC10LUg0LLQviDQvNGF0YMnLFxuICAgIHVybDogJ2h0dHBzOi8vYW5ua29ta292YS5naXRodWIuaW8vc3RhdGljLXNpdGUtMDgtMjUvcGFnZXMvYXJ0aWNsZXMvb3JjaGlkZWEuaHRtbCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JDQu9C+0Y0nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ9Ch0YPQutC60YPQu9C10L3Rgiwg0L3QtSDRgtGA0LXQsdGD0Y7RidC40Lkg0YfQsNGB0YLQvtCz0L4g0L/QvtC70LjQstCwLCDRgSDQu9C10LrQsNGA0YHRgtCy0LXQvdC90YvQvNC4INGB0LLQvtC50YHRgtCy0LDQvNC4JyxcbiAgICB1cmw6ICdodHRwczovL2FubmtvbWtvdmEuZ2l0aHViLmlvL3N0YXRpYy1zaXRlLTA4LTI1L3BhZ2VzL2FydGljbGVzL2Fsb2UuaHRtbCdcbiAgfVxuXVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBhcnRpY2xlcyB9IGZyb20gJy4vc2VhcmNoLWRhdGEuanMnXG5cbmluaXRTZWFyY2goYXJ0aWNsZXMpXG5cbmZ1bmN0aW9uIGluaXRTZWFyY2goYXJ0aWNsZXMpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQV9TZWFyY2hJbnB1dCcpXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BX1NlYXJjaEJ1dHRvbicpXG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgaGFkbGVTZWFyY2hJbnB1dChhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbilcbiAgfSlcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaGFkbGVTZWFyY2hDbGljayhhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbilcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFkbGVTZWFyY2hDbGljayhhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbikge1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKClcblxuICBjb25zdCByZXN1bHQgPSBhcnRpY2xlcy5maW5kKFxuICAgIChhcnRpY2xlKSA9PlxuICAgICAgYXJ0aWNsZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKSB8fFxuICAgICAgYXJ0aWNsZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlKVxuICApXG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzdWx0LnVybFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYHNlYXJjaC5odG1sP3E9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWBcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVCdXR0b24oYnV0dG9uLCBpc0FjdGl2ZSkge1xuICBidXR0b24uZGlzYWJsZWQgPSAhaXNBY3RpdmVcbn1cblxuZnVuY3Rpb24gaGFkbGVTZWFyY2hJbnB1dChhcnRpY2xlcywgaW5wdXQsIGJ1dHRvbikge1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ19Ecm9wZG93bicpXG5cbiAgY29uc3QgcmVzdWx0cyA9IGFydGljbGVzLmZpbHRlcihcbiAgICAoYXJ0aWNsZSkgPT5cbiAgICAgIGFydGljbGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgfHxcbiAgICAgIGFydGljbGUuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSlcbiAgKVxuXG4gIGlmIChyZXN1bHRzID4gMCkge1xuICAgIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxuXG4gIGlmICh2YWx1ZS5sZW5ndGggPCAzKSB7XG4gICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRvZ2dsZUJ1dHRvbihidXR0b24sIGZhbHNlKVxuICB9IGVsc2Uge1xuICAgIHRvZ2dsZUJ1dHRvbihidXR0b24sIHRydWUpXG4gICAgcmVuZGVyRHJvcGRvd24ocmVzdWx0cywgZHJvcGRvd24sIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duKHJlc3VsdHMsIGRyb3Bkb3duLCB2YWx1ZSkge1xuICBkcm9wZG93bi5pbm5lckhUTUwgPSAnJ1xuICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG5cbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdNX1NlYXJjaFJlc3VsdCcpXG4gICAgaXRlbS5ocmVmID0gcmVzdWx0LnVybFxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdBX1NlYXJjaFJlc3VsdEhlYWRlcicpXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGhpZ2h0bGlnaHQocmVzdWx0LnRpdGxlLCB2YWx1ZSlcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnQV9TZWFyY2hSZXN1bHREZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gaGlnaHRsaWdodChyZXN1bHQuZGVzY3JpcHRpb24sIHZhbHVlKVxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgaXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGl0ZW0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhpZ2h0bGlnaHQodGV4dCwgdmFsdWUpIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAke3ZhbHVlfWAsICdnaScpXG5cbiAgY29uc3QgZm9ybWF0dGVkID0gdGV4dC5yZXBsYWNlKFxuICAgIHJlZ2V4LFxuICAgIGA8c3BhbiBjbGFzcz1cIlFfSGlnaHRsaWdodFwiPiR7dmFsdWV9PC9zcGFuPmBcbiAgKVxuICBjb25zb2xlLmxvZyhmb3JtYXR0ZWQpXG5cbiAgcmV0dXJuIGZvcm1hdHRlZFxufVxuIl0sIm5hbWVzIjpbImFydGljbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsImluaXRTZWFyY2giLCJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYWRsZVNlYXJjaElucHV0IiwiaGFkbGVTZWFyY2hDbGljayIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJyZXN1bHQiLCJmaW5kIiwiYXJ0aWNsZSIsImluY2x1ZGVzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY29uY2F0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidG9nZ2xlQnV0dG9uIiwiaXNBY3RpdmUiLCJkaXNhYmxlZCIsImRyb3Bkb3duIiwicmVzdWx0cyIsImZpbHRlciIsInN0eWxlIiwiZGlzcGxheSIsImxlbmd0aCIsInJlbmRlckRyb3Bkb3duIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsIml0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVhZGVyIiwiaGlnaHRsaWdodCIsImFwcGVuZENoaWxkIiwidGV4dCIsInJlZ2V4IiwiUmVnRXhwIiwiZm9ybWF0dGVkIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9