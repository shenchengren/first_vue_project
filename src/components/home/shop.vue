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
  }
};
</script>
<style lang="scss" scoped>
  .shop-content{
    width: 1000px;
    margin: 0 auto;
  }
</style>
