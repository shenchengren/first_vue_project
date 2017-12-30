<template>
  <div class="list-box clearfix">
    <router-view />
    <div class="list-seach">
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
    <div class="list-body">
      <ul>
        <li class="clearfix" v-for="item in items" @click="bookDails(item)">
          <div class="left"><img :src="item.smallImage" alt=""></div>
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
            </p>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
import bus from "../common/bus";
import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
const router = new Router();

export default {
  data() {
    return {
      searchAuthor: "",
      searchAdress: "",
      items: "",
      itemsBox: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const that = this;
      this.$ajax
        .get("/api/books", {})
        .then(function(response) {
          that.items = response.data;
          that.itemsBox = response.data;
        })
        .catch(function(error) {});
    },
    bookDails(data) {
      console.log(data)
      let listId = data.id;
      console.log(listId);
      // bus.$emit("getDails", data);
      // this.$router.push({ name: "dails"});
      this.$router.push({ name: 'dails', params: { listId}})
    },
    searchBtnAuthor() {
      this.items = [];
      let that = this;
      this.itemsBox.forEach(function(ele, index) {
        // if(ele.author==that.searchAuthor){
        if (ele.author.indexOf(that.searchAuthor) >= 0) {
          that.items.push(ele);
        }
      });
    },
    searchBtnAdress() {
      this.items = [];
      let that = this;
      this.itemsBox.forEach(function(ele, index) {
        if (ele.area == that.searchAdress) {
          that.items.push(ele);
        }
      });
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
      margin-top: 34px;
      span {
        display: inline;
        margin-right: 30px;
      }
    }
  }
}
</style>
