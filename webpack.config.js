const path = require('path');
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module:{
  	loaders:[{
            test: /\.(png|jpg)$/,
            loader: 'url-loader' //  <= 8kb的图片base64内联
        }]
  },
  devServer: {
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
}