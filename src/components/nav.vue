<template>
<div class="nav-box">
   <div class="nav clearfix">
          <div class="logtext"><span>热卖街</span><span class="logtext1">Remaijie.net</span></div>
          <ul class="clearfix">
              <li v-for="item in items"><router-link :to="item.toLink">{{item.name}}</router-link></li>
          </ul>
        </div>
</div>
       
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "首页",
          toLink: "./"
        },
        {
          name: "登录",
          toLink: "/login"
        },
        {
          name: "免费注册",
          toLink: "/reg"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log("nav");
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-box{
  background: #434343;

}
.nav{
  height: 50px;
  line-height: 50px;
  width:1000px;
  margin: 0 auto; 
  color: #e4e4e4;
}
.logtext{
  float: left;
    box-sizing: border-box;
    span{
      font-size: 22px;
      display: inline-block;
    }
    .logtext1{
      font-size: 14px;
      box-sizing: border-box;
    }
  }
ul {
  color: #e4e4e4;
  margin: 0 auto; 
  float: right;
  a:visited{
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
    &:hover {
      color: #44cc11;
    }
  }
}
</style>