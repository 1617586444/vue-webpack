// 这个就是 webpack 配置文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 需要暴露一个对象 注意 这里的用的还是 common.js 方式

module.exports = {
  // 模式
  mode: 'production' , // development | production

  // 入口
  entry: './src/index.js',

  // 出口
  output:{
    // 出口位置（绝对路径）
    path: path.resolve(__dirname,'./dist '), //根目录下的文件夹
    filename:'bundle.js',                   //打包之后文件的名字
  },
  // 插件
  plugins:[
    // 自动生成一个 HTML文件在出口位置 ，并且会自动在这个生成的文件中引入 打包的生成的 js 文件
    new HtmlWebpackPlugin({
      title:'三只老鼠',    // 如果存在 template title就不生效
      filename:'index.html',
      template:'./index.html'  // 将index.html 作为生成的demo.html的模板
    }),

    // 拷贝
    new CopyWebpackPlugin([
      {
        from: './lib/jquery.js',
        to:'./lib'
      }
    ])
  ],

  // 解析
  resolve:{
    /* 
    别名：
    1. vue/dist/vue.esm.js -> a
    */
    alias:{
      vue :'vue/dist/vue.esm.js'
    }
  },


  //  webpack-dev-server 的配置
devServer:{
  // 配置那个文件夹作为web服务的根路径
  contentBase: path.resolve(__dirname, './dist')
}

}