import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Nav from '@/components/nav';
import HomeC from '@/components/home/Home';
import logIn from '@/components/login';
import reg from '@/components/reg';
import inDex from '@/components/index';

Vue.use(Router);
let router = new Router();

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeC
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: logIn
    },
    {
      path:"/",
      name:"index",
      component:inDex
    }
  ]
})
