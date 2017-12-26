<template>
    <div id="app">
        <app-nav></app-nav>
            <router-view @increment="incrementTotal" :zhuangtai="fuzhuangtai" v-show="!isTrue"></router-view>
        <span v-show="isTrue">{{msg}}</span>
    </div>
</template>

<script>
import Nav from "./components/nav";
export default {
  name: "app",
  data() {
    return {
      isShow: true,
      fuzhuangtai: "111",
      msg: "请先登录",
      isTrue: false
    };
  },
  components: {
    "app-nav": Nav
  },
  mounted() {},
  watch: {
    $route(to, from) {
      if (
        this.$route.path == "/shop" &&
        this.getCookie("first_vue_code") != 200
      ) {
        this.isTrue = true;
        var that = this;
        setTimeout(function() {
          that.isTrue = false;

          that.$router.push({ path: "/login" });
        }, 1500);
      }
    }
  },
  methods: {
    incrementTotal(e) {
      this.isShow = e;
    },
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; // margin-top: 60px;
  span {
    position: fixed;
    top: 40%;
    left: 50%;
    background: #000;
    opacity: 0.5;
    color: white;
    font-size: 28px;
    display: inline-block;
    padding: 10px;
    width: 300px;
    margin-left: -150px;
  }
}
</style>
