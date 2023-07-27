const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // Цель - Node.js
  mode: 'development', // Режим разработки
  entry: './src/index.js',
  output: {
    filename: 'server.js', // Выходной файл для сервера
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()], // Исключаем node_modules из сборки
};
