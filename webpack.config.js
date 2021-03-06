var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './example/app.js',
  output: {
    path: __dirname + '/example',
    filename: 'bundle.js',
    publicPath: "/example/",
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@material-ui/core': '@material-ui/core',
    'prop-types': 'prop-types',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  },
  devtool: "source-map"
};