/* eslint-disable prefer-regex-literals */
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import WebpackPwaManifest from 'webpack-pwa-manifest'
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'InstaChris | app creada con la finalidad de aprender funcionalidad de react. ',
      short_name: 'InstaChris 😎',
      description: 'aplicacion Progresiva con especificaciones de react',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/icon.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server.midudev.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map'
}
