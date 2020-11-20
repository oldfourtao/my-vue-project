import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
