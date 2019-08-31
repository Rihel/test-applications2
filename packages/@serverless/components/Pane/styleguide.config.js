const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')

const demos = glob.sync('docs/!(指引).md')
const demoSections = [
  {
    name: '指引',
    content: 'docs/指引.md'
  }
].concat(
  demos.map(filePath => ({
    name: path.basename(filePath, '.md'),
    content: filePath
  }))
)

module.exports = {
  styleguideDir: 'docs',
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      components: 'src/*.vue',
      usageMode: 'expand'
    },
    {
      name: 'Demo',
      sections: demoSections
    }
  ],
  require: ['./styleguide/element.js'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          loaders: ['vue-style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(woff2?|eot|[ot]tf)(\?.*)?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
}
