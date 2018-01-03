import Vue from 'vue';
import Router from 'vue-router';

// import HelloWorld from '@/components/HelloWorld';
import Nav from '@/components/home/nav';
import HomeC from '@/components/home';
import Login from '@/components/home/login';
import Reg from '@/components/home/reg';
import Index from '@/components/home/index';
import Shop from '@/components/home/shop';
import List from "@/components/home/list"
import Details from "@/components/home/list/book-details"

Vue.use(Router);
let router = new Router();
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: HomeC,
    children: [{
        path: "/",
        name: "index",
        component: Index
      },
      {
        path: '/reg',
        name: 'reg',
        component: Reg
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: "/shop",
        name: "shop",
        component: Shop,
      },
      {
        path: "/list",
        name: "list",
        component: List,
        children: [{
          path: ":listId",
          name: "details",
          component: Details
        }]
      },
    ]
  }, ]
})
