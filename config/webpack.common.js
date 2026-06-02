const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const htmlPages = require('./webpack.pages.js')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

const paths = [
  'static-site-08-25/index.html',
  'static-site-08-25/search.html',
  'static-site-08-25/styleguide.html',
  'static-site-08-25/pages/articles.html',
  'static-site-08-25/pages/tests.html',
  'static-site-08-25/pages/dictionary.html',
  'static-site-08-25/pages/react-basics.html',
  'static-site-08-25/pages/theory.html',
  'static-site-08-25/pages/tests/test1.html',
  'static-site-08-25/pages/articles/plants.html',
  'static-site-08-25/pages/articles/aloe.html',
  'static-site-08-25/pages/articles/cactus.html',
  'static-site-08-25/pages/articles/monstera.html',
  'static-site-08-25/pages/articles/orhidea.html',
  'static-site-08-25/pages/articles/sansevieria.html'
]

module.exports = {
  entry: {
    index: './src/javascripts/index.js',
    styleguide: './src/javascripts/styleguide.js',
    articles: './src/javascripts/articles.js',
    theory: './src/javascripts/theory.js',
    test1: './src/javascripts/test1.js',
    allStyles: './src/javascripts/allStyles.js',
    filterTags: './src/javascripts/filterTags.js',
    searchVanilla: './src/javascripts/search-vanilla.js',
    searchMolule: './src/javascripts/search-vanilla-module.js',
    searchData: './src/javascripts/search-data.js',
    reactBasics: './src/javascripts/reactBasics.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', 'docs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages,
    new SitemapPlugin({
      base: 'https://annkomkova.github.io/',
      paths
    }),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, '../src/partials/analytics.html'),
        priority: 'replace',
        location: 'analytics',
        template_filename: '*'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
