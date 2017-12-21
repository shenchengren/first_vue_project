import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Nav from '@/components/nav';
import HomeC from '@/components/home/Home';
import logIn from '@/components/tab/login/login';
import reg from '@/components/tab/login/reg';
import tabNav from '@/components/tab/nav';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeC
    },
    {
      path: '/tab',
      name: 'login',
      component: logIn,
      children:[
        {path:'/login/login',component:logIn}
       ]
    },
    {
      path: '/tab',
      name: 'login',
      component: reg,
      children:[
        {path:'/login/reg',component:reg}
       ]
    },
    {
      path: '/tab',
      name: 'nav',
      component: tabNav
    },
    
  ]
})
