<template>
  <div class="shop-body clearfix">
    <div class="shop-content">这是购物车页面</div>
  </div>
</template>
<script>
export default {
  watch: {
    // '$route'(to, from) {
    //   console.log("111")
    //   if (this.getCookie("first_vue_code") != 200) {
    //     this.$router.push({ path: "/" });
    //   }
    // }
    '$route' (to, from) {
      console.log("111")
          
          }
  },
  methods: {
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

</style>
