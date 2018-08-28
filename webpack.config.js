var config = {
  // which is my main file to load
  entry: './main.js',

  // out put path
  output: {
    path: './',
    filename: 'index.js'
  },

  // which port it is running
  devServer: {
    inline: true,
    port: 7777
  },

  // loaders
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}

module.exports = config;
