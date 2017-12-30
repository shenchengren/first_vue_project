import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Nav from '@/components/nav';
import HomeC from '@/components/home/Home';
import logIn from '@/components/login';
import reg from '@/components/reg';
import inDex from '@/components/index';
import shop from '@/components/shop';
import list from "@/components/list"
import dails from "@/components/book-dails"

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
    },
    {
      path:"/shop",
      name:"shop",
      component:shop,
    },
    {
      path:"/list",
      name:"list",
      component:list,
      children: [
        {
          path:":id",
          name:"dails",
          component:dails
        }
      ]
    }
  ]
})
