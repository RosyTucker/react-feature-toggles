import path from 'path';
import yargs from 'yargs';

const appPath = suffix => path.resolve(__dirname, suffix);

export const options = yargs
  .alias('p', 'minimize')
  .argv;

const entry = {
  'react-feature-toggles': appPath('src/index.js')
};

const babelLoader = {
  loader: 'babel-loader',
  include: appPath('src'),
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
  devtool: options.minimize ? 'source-map' : undefined,

  output: {
    path: appPath('dist'),
    filename: options.minimize ? '[name].min.js' : '[name].js',
    sourceMapFilename: options.minimize ? '[name].sourcemap.min.js' : '[name].sourcemap.js',
    library: 'ReactFeatureToggles',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
};
