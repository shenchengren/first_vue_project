<template>
  <div class="list-box clearfix">
    <div class="list-body">
      <ul>
        <li class="clearfix">
          <div class="left"><img :src="item.smallImage" alt=""></div>
          <div class="right">
            <p class="top">
              <span class="book-name">书名：{{item.bookName}}</span>
              <span class="book-anthor">作者：{{item.author}}</span>
              <span class="countries">国家：{{item.area}}</span>
            </p>
            <div class="introduce">
              <p class="title">介绍：</p>
              <p class="content">{{item.details && item.details.summary}}</p>
            </div>
            <p class="bottom">
              <span class="inventory">库存：{{item.stock}}</span>
              <span class="price">价格：{{item.price}}</span>
              <span class="cart" @click="cartFn">加入购物车</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import bus from "../common/bus";

export default {
  data() {
    return {
      item: "",
    };
  },
  watch: {
    //监听路由---用户自己改变参数专用
    // $route(to, from) {
    //   let listId = this.$route.params.listId;
    //   this.getData(listId);
    // }
  },
  mounted() {
    //获取sessionStorage获取数据来渲染详情页
    let objDate = sessionStorage.getItem("bookDetails")
    this.item = JSON.parse(objDate) 
  },
  methods: {
    cartFn(){
      
    }
  }
};
</script>
<style lang="scss" scoped>
.list-box {
  width: 1000px;
  margin: 0 auto;
  .list-seach {
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
        height: 108px;
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
        vertical-align: middle
      }
      .cart{
        // display: inline-block;
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
}
</style>
