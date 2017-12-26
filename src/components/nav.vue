<template>
<div class="nav-box">
   <div class="nav clearfix">
       <div class="logtext"><span @click="goHome">热卖街</span><span class="logtext1">Remaijie.net</span></div>
        <ul class="clearfix">
            <li><router-link to="./">首页</router-link></li>
            <li><router-link to="./shop">购物车</router-link></li>
            <li v-if="isShow"><router-link to="./login">登录</router-link></li>
            <li v-if="!isShow">{{name}}</li>
            <li v-if="!isShow" @click="logOut"><router-link to="">登出</router-link></li>
            <li><router-link to="./reg">免费注册</router-link></li>
        </ul>   
  </div>
</div>
       
</template>

<script>
import bus from '../common/bus';
export default {
  props: ["zhuangtai"],
  data() {
    return {
      name: "admin先生",
      isShow: true
    };
  },
  mounted() {
    if (this.getCookie("first_vue_code") == 200) {
      console.log(this.getCookie("first_vue_code1"));
      this.isShow = false;
    }
    bus.$on('my-event', function(data){
      console.log(data);
    })
  },
  watch: {
    $route(to, from) {
      if (this.getCookie("first_vue_code") == 200) {
        console.log(this.getCookie("first_vue_code1"));
        this.isShow = false;
      }
    }
  },
  methods: {
    handleClick() {
      console.log("nav");
    },
    logOut() {
      this.clearCookie("first_vue_code");
      this.isShow = true;
      this.$router.push({ path: "/" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
    //设置cookie
    setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      //   console.info(cname + "=" + cvalue + "; " + expires);
      document.cookie = cname + "=" + cvalue + "; " + expires;
      //   console.info(document.cookie);
    },
    //获取cookie
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    },
    //清除cookie
    clearCookie: function(e) {
      this.setCookie(e, "", -1);
    }
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
    a:hover {
      color: deeppink;
    }
  }
}
</style>