const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', [
    'index',
    'allStyles',
    'searchVanilla'
  ]),
  createPages('./src/pages/articles.html', './pages/articles.html', [
    'articles',
    'allStyles'
  ]),
  createPages('./src/pages/tests.html', './pages/tests.html', [
    'allStyles',
    'filterTags'
  ]),
  createPages('./src/pages/dictionary.html', './pages/dictionary.html', [
    'allStyles'
  ]),
  createPages(
    './src/pages/articles/plants.html',
    './pages/articles/plants.html',
    ['allStyles']
  ),
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'test1',
    'allStyles'
  ]),
  createPages('./src/styleguide.html', './styleguide.html', [
    'styleguide',
    'allStyles'
  ]),
  createPages('./src/pages/theory.html', './pages/theory.html', ['theory']),
  createPages('./src/pages/articles/aloe.html', './pages/articles/aloe.html', [
    'allStyles'
  ]),
  createPages(
    './src/pages/articles/cactus.html',
    './pages/articles/cactus.html',
    ['allStyles']
  ),
  createPages(
    './src/pages/articles/monstera.html',
    './pages/articles/monstera.html',
    ['allStyles']
  ),
  createPages(
    './src/pages/articles/orhidea.html',
    './pages/articles/orhidea.html',
    ['allStyles']
  ),
  createPages(
    './src/pages/articles/sansevieria.html',
    './pages/articles/sansevieria.html',
    ['allStyles']
  )
]

module.exports = htmlPages
