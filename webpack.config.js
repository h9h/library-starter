/* global __dirname, require, module*/

const pkg = require('./package.json')
const libraryName = pkg.name

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: __dirname + '/src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/lib',
    filename: argv.mode === 'production' ? libraryName + '.min.js' : libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== "undefined" ? self : this',
  },
  externals: {
    // react: "react",
    // ramda: "ramda"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.json', '.js', '.jsx'],
  }
})
