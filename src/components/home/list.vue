<template>
  <div class="list-box clearfix">
    <router-view />
    <div class="list-seach" v-if="isRouter">
      <div class="search-author">
        <label for="search-author">作者名：</label>
        <input type="text" placeholder="请输入作者名" id="search-author" v-model="searchAuthor">
        <button @click="searchBtnAuthor">搜索</button>
      </div>
      <div class="search-adress">
        <label for="search-adress">地区：</label>
        <input type="text" placeholder="请输入地区" id="search-adress" v-model="searchAdress">
        <button @click="searchBtnAdress">搜索</button>
      </div>
    </div>
    <div class="list-body" v-if="isRouter">
      <ul>
        <li class="clearfix" v-for="item in items" :key="item.id">
          <div class="left"><img :src="item.smallImage" @click="bookDetails(item)" alt=""></div>
          <div class="right">
            <p class="top">
              <span class="book-name">书名：{{item.bookName}}</span>
              <span class="book-anthor">作者：{{item.author}}</span>
              <span class="countries">国家：{{item.area}}</span>
            </p>
            <div class="introduce">
              <p class="title">介绍：</p>
              <p class="content">{{item.details.summary}}</p>
            </div>
            <p class="bottom">
              <span class="inventory">库存：{{item.stock}}</span>
              <span class="price">价格：{{item.price}}</span>
              <span class="cart" @click="cartFn(item)">加入购物车</span>
            </p>
          </div>
        </li>
      </ul>
      <span class="is-msg" v-show="isTrue">{{msg}}</span>
    </div>
    
    
  </div>
</template>
<script>
// import bus from "../common/bus";
import Router from "vue-router";
import Vue from "vue";
import utils from "@/common/utils"
Vue.use(Router);
const router = new Router();

export default {
  data() {
    return {
      searchAuthor: "",//监听作者--搜索作者
      searchAdress: "",//监听地址--搜索地址
      items: "",//循环列表用
      itemsBox: "",//循环列表用----搜索的时候
      isRouter:true,//隐藏列表页
      msg: "请先登录",
      isTrue: false
    };
  },
  mounted() {
    //获取列表页后面有没有id参数来判断---有参数说明是详情页--隐藏列表页
    if(this.$route.params.listId){
      this.isRouter=false;
    }else{
      this.isRouter=true;
    }
    this.getData();
  },
  watch: {
    //获取列表页后面有没有id参数来判断---有参数说明是详情页--隐藏列表页（用户自定义改变参数--监听路由）
    $route(to, from) {
      if(this.$route.params.listId){
      this.isRouter=false;
    }else{
      this.isRouter=true;
    }
    }
  },
  methods: {
    //获取列表数据
    getData() {
      const that = this;
      this.$ajax
        .get("/api/books", {})
        .then(function(response) {
          that.items    = response.data;//循环列表
          that.itemsBox = response.data;//搜索专用
        })
        .catch(function(error) {});
    },
    //点击列表项--进入详情页
    bookDetails(data) {
      let listId   = data.id;
      let jsonData = JSON.stringify(data);

      sessionStorage.setItem("bookDetails",jsonData)
      this.$router.push({ name: 'details', params: { listId}})
    },
    //用作者赛选
    searchBtnAuthor() {
      this.items = [];
      let that   = this;
      this.itemsBox.forEach(function(ele, index) {
        // if(ele.author==that.searchAuthor){
        if (ele.author.indexOf(that.searchAuthor) >= 0) {
          that.items.push(ele);
        }
      });
    },
    //用地区赛选
    searchBtnAdress() {
      this.items = [];
      let that   = this;
      this.itemsBox.forEach(function(ele, index) {
        if (ele.area == that.searchAdress) {
          that.items.push(ele);
        }
      });
    },
    cartFn(data){
      if (utils.getCookie("first_vue_code") != "200"){
        console.log(utils.getCookie("first_vue_code"))
        this.msg = '请先登录';
        this.isTrue = true;
        let self    = this;
        setTimeout(function() {
          self.isTrue = false;
          // that.$router.push({ name: "login" });
        }, 1500);
      }else{
        let userId = utils.getCookie("first_vue_id");
        let bookId = data.id;
        let that   = this;
        let url    = '/api/users/'+userId+'/cart';
        console.log(url)
        this.$ajax.post(url,{
          userId:userId,
          bookId:bookId
        }).then(function(response){
          that.msg = '添加成功';
          that.isTrue = true;
          // let self    = this;
          setTimeout(function() {
            
            that.isTrue = false;
            // that.$router.push({ name: "login" });
          }, 1500);
        }).catch(function(error){
          console.log(error)
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.list-box {
  width: 1000px;
  margin: 0 auto;
  .list-seach {
    .search-author,
    .search-adress {
      display: inline-block;
      width: 45%;
    }
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 80px;
    margin-top: 25px;
    background: #ddd;
    border-radius: 2px;
    input {
      font-size: 16px;
      padding-left: 10px;
    }
    button {
      padding: 1px 8px;
    }
  }
  li {
    border: 1px solid #ddd;
    margin-top: 25px;
    border-radius: 2px;
    box-shadow: 7px 7px 15px #ddd;
    padding: 10px 0;
  }
  .left {
    float: left;
    width: 30%;
    img {
      width: 250px;
      height: 250px;
    }
  }
  .right {
    float: right;
    width: 70%;
    .top {
      padding: 15px 0;
      span {
        display: inline;
        margin-right: 30px;
      }
    }
    .introduce {
      .content {
        box-sizing: border-box;
        text-indent: 1.5em;
        padding-top: 8px;
        height: 114px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; //文本行数
        overflow: hidden;
      }
    }
    .bottom {
      margin-top: 24px;
      span {
        display: inline-block;
        margin-right: 30px;
        vertical-align: middle;
      }
      .cart{
        // display: block;
        float: right;
        background-color: #ff4936;
        padding: 10px;
        margin-top:-12px; 
        // margin-right: 40px;
        border-radius: 4px;
        color: #fff;
        &:hover{
          cursor: pointer;
          background-color:  #f42517
        }
      }
    }
  }
  .is-msg{
    position: fixed;
    top: 40%;
    left: 50%;
    background: #000;
    opacity: 0.5;
    color: white;
    font-size: 28px;
    display: inline-block;
    text-align: center;
    padding: 10px;
    width: 300px;
    margin-left: -150px;
  }
}
</style>
