<template>
<div class="nav-box">
   <div class="nav clearfix">
       <div class="logtext"><span @click="goHome">热卖街</span><span class="logtext1">Remaijie.net</span></div>
        <ul class="clearfix">
            <li><router-link :to="{name: 'index'}">首页</router-link></li>
            <li><router-link :to="{name: 'list'}">商品列表</router-link></li>
            <li><router-link :to="{name: 'shop'}">购物车</router-link></li>
            <li v-if="isShow"><router-link :to="{name: 'login'}">登录</router-link></li>
            <li v-if="!isShow">{{name}}</li>
            <li v-if="!isShow" @click="logOut"><router-link to="">登出</router-link></li>
            <li><router-link v-if="isShow" :to="{name: 'reg'}">免费注册</router-link></li>
        </ul>   
  </div>
</div>
       
</template>

<script>
import Utils from '../../common/utils';
// let Utils = new Utils();
export default {
  // props: ["zhuangtai"],
  data() {
    return {
      name: "admin先生",
      isShow: true//控制显示登录登出效果
    };
  },
  mounted() {
    //判断是否是登录状态
    console.log(Utils);
    if (Utils.getCookie("first_vue_code") == 200) {
      this.name=Utils.getCookie("first_vue_name")
      this.isShow = false;
    }
  },
  watch: {
    //监听是否是登录状态
    $route(to, from) {
      if (Utils.getCookie("first_vue_code") == 200) {
        this.name=Utils.getCookie("first_vue_name")
        this.isShow = false;
      }
    }
  },
  methods: {
    //登出
    logOut() {
      Utils.clearCookie("first_vue_code");
      Utils.clearCookie("first_vue_name");
      this.isShow = true;
      this.$router.push({ path: "/" });
    },
    // 返回主页
    goHome() {
      this.$router.push({ path: "/" });
    },
  }
};
</script>
<style lang="scss" scoped>
.nav-box {
  background: #434343;
}
.nav {
  height: 50px;
  line-height: 50px;
  width: 1000px;
  margin: 0 auto;
  color: #e4e4e4;
}
.logtext {
  float: left;
  box-sizing: border-box;
  span {
    font-size: 22px;
    display: inline-block;
  }
  .logtext1 {
    font-size: 14px;
    box-sizing: border-box;
  }
}
ul {
  color: #e4e4e4;
  margin: 0 auto;
  float: right;
  a:visited {
    color: #e4e4e4;
  }
  li {
    float: left;
    list-style: none;
    color: white;
    padding-right: 15px;
    &:last-child {
      padding: 0;
    }
    a{
      color: #e4e4e4;
    }
    a:hover {
      color: deeppink;
    }
  }
}
</style>