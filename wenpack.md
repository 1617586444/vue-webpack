# 前端的自己模块化之路

1. script标签需要引用什么
2. AMD规范(require.js)
3. CMD规范(sea.js)
4. ESM规范(es6 中出现 )


# webpack （打包）之路
1. 手动压缩。手动打包
2. grunt
3. gulp
4. webpack (最火 最热 人数最多)


# 结合 webpack 搭建起 vue 的开发环境

1. 创建项目并且初始化
2. 下载项目需要的资源包
 - vue
- 开发环境
 - webpack 
 - webpack-cli

 ## 项目目录结构
 - dist    ( 最终生成的文件-这个文件夹才是最终要上传到服务器的代码)
 - node_modules(放资源包)
 - src     (源文件 里面放置一些项目自己写的模块，需要被放到webpack 打包的文件，都需要放到这个文件夹下面)
   - index.js (项目的入口)
 - package-lock.json(包锁文件)
 - package.json(项目依赖的资源与项目的描述信息文件)
 - webpack.config.js(webpack 的配置文件)

 思考上面的三个文件， 这三个文件都不是真正需要上线的内容，于是需要 webpack 打包(抽取项目中真正需要用在前端的内容 )

 3. 项目根目录下面创建一个 src 文件夹 （source 源文件的意思）这个文件夹下，放源文件
 4. 项目根目录下面创建一个 webpack.config.js （webpack配置文件）
 5. src 下面创建一个 js 文件作为项目入口文件
 6. 配置 webpack 的文件
 7. 简单使用一下


## webpack 的配置

四大核心    模式|入口|出口是必须要配置的

- 模式      指定这次打包的是开发环境的包还是生产环境用的包 4.XX以上支持
- 入口       指定webpack需要打包项目的入口文件
- 出口        打包之后生成的文件需要放到哪个位置
- 加载器      默认情况下， webpack 只是简单的打包js文件，如果需要打包css img 之类的文件
          ，则添加相对应得加载器去处理这种类型的文件
- 插件    插件就是加载器做不了的事，就可以；用插件去做


如何配置    就是在 webpack.config.js 文件中 暴露一些写了这些选项的对象

## 如何调用 webpack 开始打包

命令行中，使用webpack 这个命令

- ./node_modules/.bin/webpack

- npx webpack
- 配置 package.json 的 npm 脚本


# 问题集合

1。 如何将根目录下的 index.html 让其打包的时候 自动生成到 dist 文件下面去


使用一款插件：HtmlWebpackPlugin
安装命令：npm install --save-dev html-webpack-plugin

2. 需要用的资源都是通过 npm 安装的

  vue

  npm install --save vue

  那个代码中需要使用 vue ，就在那里象 commonJs 一样去引入他就ok

  通过 es6 的模块引入方式

  import 'xxx'

  import xx from 'xxx'

4.  import Vue from 'vue';  引入的vue是什么？ 

  4.1 具体找到 node_modules 下面的 vue 文件夹
  4.2 找到 package.json 中的 main和 modules 选项的值
  4.3 如果通过 commonjs require 的方式去引入 vue 引入的是 main选项指定的
  4.3 如果通过 esm import 的方式引入的是 modules选项指定的文件

5. import Vue from 'vue'; 默认页面不OK？
  vue.common.js
  vue.esm.js


  vue.runtime     运行时版本      render  函数去渲染模板
  vue.没runtime   运行时+编译版本(完整版)  template

  修改 引入的 vue 文件为 完整版的 esm 版本

  PS ： 请不要直接修改 node_modules 下面 vue 的 package.json 可以通过设置 webpack 的别名
  这个选项要完成

  6. 自动打包（开发时的打包）

  webpack-dev-server资源包

# 插件的使用

1. 找到需要使用的插件并安装他
2. 在webpack.config.js 中引入他
3. 在 plugins 选项中调用它，并按照他的文档做配置

