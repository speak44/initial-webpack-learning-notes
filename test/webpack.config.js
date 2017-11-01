//从node中获取到path的模块
const path=require("path");
//模块
module.exports={
  //入口：指app.js
  entry:'./src/app.js',
  //导出：
  output:{
    // 文件名称是add.js
    filename:'add.js',
    //路径是__dirname （指当前目录） 下面的'dist'中
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[{
      //识别模块引入的时候以js结尾的文件
      test:/\.js$/,
      //使用 babel-loder=>会直接去找babelrc的文件
      use:['babel-loader']
      //在解析整个文件夹的时候排除掉当前目录下的node_modules
      // exclude:path.resolve(__dirname,'node_modules')
    }]
  }
}
