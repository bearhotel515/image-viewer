
const Webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

process.noDeprecation = true


function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'viewer.1.0.0.js', 
    library: 'Viewer', // 
    libraryExport: "default",
    globalObject: 'this', 
    libraryTarget: 'umd' 
  },
  module: {
    rules: [{
        test: /\.js$/, 
        exclude: /node_modules/,
        include: [resolve('src')],
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }]
      }
    ]
  },
  mode: "production", 
  plugins: [
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      exclude: [/\/node_modules/],
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      }
    })
  ]
}
