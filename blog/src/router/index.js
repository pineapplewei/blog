import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Home from '@/components/Home'
import About from '@/components/About'
import Note from '@/components/Note'
import Article from '@/components/Article'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    //在APP.vue中router-view中的name属性对应路由路径中components的两个属性，用于显示哪个页面
    {
      path:'/',
      redirect:'/index'
    },{
      path: '/index',
      name: 'index',
      components: {
        header:Header,
        main:Home
      }
    },{
      path: '/about',
      name: 'about',
      components: {
        header:Header,
        main:About
      }
    },
    {
      path: '/note',
      name: 'note',
      components: {
        header:Header,
        main:Note
      },
    },
    {
      //父组件绑定id用于子组件获取相应值
      path: '/article/:id',
      name: 'article',
      components: {
        header:Header,
        main:Article
      },
    },
  ]
})
