const path = require('path');
const webpack = require('webpack');
const projectRoot = path.resolve(__dirname, './');

module.exports = {
  entry: {
    'infinite-scroller': 'src/index'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    library: 'InfiniteScroller',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/img/[name]_[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/fonts/[name]_[hash:7].[ext]'
        }
      },
      { test: 'css', loader: 'vue-style-loader!css-loader?sourceMap' },
      { test: 'postcss', loader: 'vue-style-loader!css-loader?sourceMap' },
      { test: 'less', loader: 'vue-style-loader!css-loader?sourceMap!less-loader?sourceMap' },
      { test: 'sass', loader: 'vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap' },
      { test: 'scss', loader: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap' },
      { test: 'stylus', loader: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap' },
      { test: 'styl', loader: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap' }
    ]
  },
  resolve: {
    root: [path.resolve(__dirname)],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader?sourceMap',
      postcss: 'vue-style-loader!css-loader?sourceMap',
      less: 'vue-style-loader!css-loader?sourceMap!less-loader?sourceMap',
      sass: 'vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap',
      scss: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap',
      stylus: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap',
      styl: 'vue-style-loader!css-loader?sourceMap!stylus-loader?sourceMap'
    },
    postcss: [
      require('autoprefixer')({
        browsers: [
          'last 2 versions'
        ]
      })
    ]
  },
  devtool: 'source-map',
  target: 'node'
};

module.exports.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  })
];
