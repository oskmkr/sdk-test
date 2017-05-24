const path = require("path");

module.exports = {
  entry: "./src/app.js", // 이 파일에 dependency 있는 파일들을 모두..
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js" // 이 파일로 output 한다.
    , library : ["NSDK"]
    , libraryTarget : "umd"
    , umdNamedDefine : true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    publicPath: "/dist/"
  },
  devtool: "source-map"
};
