/******/ (() => { // webpackBootstrap
initSearch();
function initSearch() {
  var articles = [{
    title: 'Монстера',
    description: 'Тропическое растение с крупными листьями',
    url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/monstera.html'
  }, {
    title: 'Кактус',
    description: 'Растение с иголками вместо листьев',
    url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/cactus.html'
  }, {
    title: 'Орхидея',
    description: 'Цветущее растение, выращиваемое во мху',
    url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/orhidea.html'
  }, {
    title: 'Сансевиерия',
    description: 'Растение-суккулент, которое также называют "щучий хвост"',
    url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/sansevieria.html'
  }, {
    title: 'Алоэ',
    description: 'Лечебное растение-суккулент с сочными листьями',
    url: 'https://annkomkova.github.io/static-site-08-25/pages/articles/aloe.html'
  }];
  var input = document.querySelector('.A_SearchInput');
  var button = document.querySelector('.A_SearchButton');
  input.addEventListener('input', function () {
    handleSearchInput(articles, input, button);
  });
  button.addEventListener('click', function () {
    handleSearchButton(articles, button, input);
  });
}
function handleSearchButton(articles, button, input) {
  var value = input.value.toLowerCase();
  var result = articles.find(function (article) {
    return article.title.toLowerCase().includes(value);
  }) || articles.find(function (article) {
    return article.description.toLowerCase().includes(value);
  });
  if (result) {
    window.location.href = result.url;
  }
}
function handleSearchInput(articles, input, button) {
  var value = input.value.toLowerCase();
  var dropdown = document.querySelector('.C_Dropdown');
  if (value.length < 3) {
    toggleButton(button, false);
    dropdown.style.display = 'none';
    return;
  }
  toggleButton(button, true);
  var results = articles.filter(function (article) {
    return article.title.toLowerCase().includes(value);
  }) || articles.filter(function (article) {
    return article.description.toLowerCase().includes(value);
  });
  renderDropdown(dropdown, results, value);
}
function toggleButton(button, isActive) {
  button.disabled = !isActive;
  button.classList.toggle('active');
}
function renderDropdown(dropdown, results, value) {
  dropdown.innerHTML = '';
  if (results.length == 0) {
    dropdown.style.display = 'none';
    return;
  }
  dropdown.style.display = 'flex';
  results.forEach(function (article) {
    var item = document.createElement('a');
    item.classList.add('M_SearchResult');
    item.href = article.url;
    var header = document.createElement('h5');
    header.classList.add('A_SearchResultHeader');
    header.innerHTML = article.title;
    // header.innerHTML = `${hightlight(article.title, value)}`

    var description = document.createElement('p');
    description.classList.add('A_SearchResultDesc');
    description.innerHTML = article.description;
    item.appendChild(header);
    item.appendChild(description);
    dropdown.appendChild(item);
  });
}

// function hightlight(text, value) {
//   const regex = new RegExp(`(${value})`, 'gi')

//   const result = text.replace(regex, '<span class="Q_Hightlight">$1</span')

//   return result
// }
/******/ })()
;