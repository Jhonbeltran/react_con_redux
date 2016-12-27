module.exports = {
  entry: '../source/server.js',
  output: {
    filename: 'index.js',
    path: './build/server'
  },
  module: {
    loader: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['la       test-minimal', 'react']
        }
      }
    ]
  },
  target: 'node',
};
