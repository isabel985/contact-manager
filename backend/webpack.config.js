const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const DIR = path.resolve(__dirname)

const browserConfig = {
  entry: './src/index.js',
  output: {
    path: `${DIR}`,
    filename: 'assets/js/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([{ from: "./assets", to: "assets" }])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // host: '192.168.0.134',
    port: 4001,
    historyApiFallback: true, // resolves error while refresh or access directly
    // from browser. Error GET /someroot
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        secure: false
      }
    }
  }

}

module.exports = [browserConfig];