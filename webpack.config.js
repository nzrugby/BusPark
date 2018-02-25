module.exports = {
  entry:  __dirname + "/src/js/main.js",//entry js file
  output: {
    path: __dirname + "/",//output js file after package
    filename: "bundle.js"//output js file name
  },
  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  } 
              ]
          },
          {
              test:/(\.jpg|\.png)$/,
              use:[
                {
                  loader: "url-loader"
                }
              ]
          }
      ]
}
}