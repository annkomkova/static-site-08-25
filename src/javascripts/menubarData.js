const homeURL = 'http://localhost:8080/' // для тестирования на устройстве (локалхост)
// const homeURL = 'https://project.adc.ac/' // для публикации (доменное имя проекта в формате project.adc.ac)

const menu = [
  {
    text: 'Статьи',
    url: 'articles.html'
  },
  {
    text: 'Тесты',
    url: 'tests.html'
  },
  {
    text: 'Словарь',
    url: 'dictionary.html'
  }
]

const props = {
  homeURL,
  menu
}

export { props }
