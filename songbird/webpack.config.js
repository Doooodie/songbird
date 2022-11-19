const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const listOfComponents = ['game', 'index', 'results'];

const config = {
  entry: listOfComponents.reduce((conf, page) => {
    const pageConfig = conf;
    pageConfig[page] = path.resolve(__dirname, 'src', 'pages', `${page}`, 'scripts', `${page}.js`);
    return pageConfig;
  }, {}),
  output: {
    filename: 'assets/scripts/[name].js',
    clean: true,
  },
  plugins: [].concat(
    listOfComponents.map((page) => {
      const plugin = new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'pages', `${page}`, `${page}.html`),
        filename: path.resolve(__dirname, 'dist', `${page}.html`),
        favicon: path.resolve(__dirname, 'src', 'assets', 'icons', 'favicon.ico'),
        chunks: [page],
      });
      return plugin;
    }),
    [
      new MiniCssExtractPlugin({
        filename: 'assets/styles/[name].css',
      }),
    ],
  ),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/sounds/[name][ext]',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
  devServer: {
    open: true,
    hot: true,
    static: path.resolve(__dirname, 'src'),
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
