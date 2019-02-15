// 这就是入口文件
import Vue from 'vue';


new Vue({
  el:'#app',
  data:{
     msg:'我是vue 里面的data'
  },

  // 我将采用 render 函数的方式去渲染函数页面元素
  // render(h){   // h => creatHtml

    // var p = document.creteElement('p)
    // p.innerHtml = '呵呵'
    // return h('p','我是vue 里面的data')
  // }
})