import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Nav from '@/components/nav';
import HomeC from '@/components/home/Home';
import logIn from '@/components/login';
import reg from '@/components/reg';
import inDex from '@/components/index';
import shop from '@/components/shop'

Vue.use(Router);
let router = new Router();
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}
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
      // beforeRouteUpdate : (to, from, next) => {
      //   console.log("122123")
      //   if(getCookie("first_vue_code") != 200){
      //     this.$router.push({ path: "/login" });
      //   }
      // }
    }
  ]
})
