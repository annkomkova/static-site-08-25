/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ articles)
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
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _search_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(306);

initSearchPage(_search_data_js__WEBPACK_IMPORTED_MODULE_0__/* .articles */ .O);
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
/******/ })()
;