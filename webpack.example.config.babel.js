import path from 'path';

const appPath = suffix => path.resolve(__dirname, suffix);

const entry = {
  example: appPath('example/example.jsx')
};

const babelLoader = {
  loader: 'babel-loader',
  include: appPath('example'),
  query: {
    presets: ['es2015', 'react']
  }
};

export default {
  entry,
  module: {
    loaders: [babelLoader]
  },
  plugins: [],
  output: {
    path: appPath('example'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
