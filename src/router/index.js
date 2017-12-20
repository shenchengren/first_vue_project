import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import HomeC from '@/components/home/Home';
import tabNav from '@/components/tab/nav';

Vue.use(Router)

export default new Router({
  routes: [
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
      name: 'nav',
      component: tabNav
    }
  ]
})
