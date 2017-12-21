<template>
  <div id="app">
    <ul>
        <li v-for="item in items"><router-link :to="item.toLink">{{item.name}}</router-link></li>
    </ul>
    <router-view/>
    <!-- <div class="footer">我是底部</div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
          return {
              items: [
                  {
                      name:"首页",
                      toLink:"../",
                  },
                  {
                      name:"登录",
                      toLink:"/login/login",
                  },
                  {
                      name:"免费注册",
                      toLink:"/login/reg",
                  }
              ]
          }
      },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
ul{
  clear: both;
    li{
        float:left;
        list-style:none;
        padding-right:15px;
        margin-bottom: 200px;
        &:last-child{
            padding: 0;
        }
        &:hover{
            color: #44CC11;
        }
    }
}
.footer{
  display: inline-block;
  vertical-align: top;
}
</style>
