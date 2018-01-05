<template>
  <div class="shop-body clearfix">
    <div class="shop-content" v-if="content">
      <div class="check-all">
        <input type="checkbox" name="" id="checkAll">
        <label for="checkAll">全选</label>
      </div>
      <ul>
        <li class="book" v-for="book in books" :key="book.id">
          <p class="title">书名：{{book.id}}</p>
          <div class="content">
            <div class="book-check">
              <input type="checkbox" name="" id="">
            </div>
            <div class="book-img">
              <img :src="book.smallImage" alt="">
            </div>
            <div class="summary"><b>简介：</b>{{book.details && book.details.summary}}</div>
            <div class="pricebox">
              <span class="prive-add">总价：￥50.00</span>
              <span class="price">单价：￥{{book.price}}</span>
            </div>
            <div class="numbox">
              <img src="../../assets/images/minus.svg" alt="" class="minus">
              <span class="num">1</span>
              <img src="../../assets/images/add.svg" alt="" class="add">
            </div>
          </div>
          </li>
      </ul>
    </div>
    <div class="shop-content-null" v-if="!content"><span>购物车空空也！！！</span></div>
  </div>
</template>
<script>
import utils from "@/common/utils"
export default {
  data(){
    return {
      content:false
    }
  },
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
  monuted(){
    
  },
  methods: {
    getDataCart(){

    }
  }
};
</script>
<style lang="scss" scoped>
  .check-all{
    margin-top: 35px;
    padding-left: 15px;
    box-sizing: border-box;
    input{
      height: 16px;
      width: 16px;
      line-height: 16px;
      display: inline-block;
      vertical-align: middle;   
    }
    label{
      display: inline-block;
      vertical-align: middle;  
      padding-left:10px;     
    }
  }
  .book{
    border: 1px solid #ccc;
    margin-top: 35px;
  }
  .shop-content-null{
    width: 1000px;
    margin: 0 auto;
    margin-top: 270px;
    text-align: center;
    font-size: 40px;
    letter-spacing:20px;
    span{
      background: red;
      display: inline-block;
      text-indent: 32px;
      padding: 15px 0;
      border-radius: 40px;
      box-shadow: 20px 20px 80px #888888;
      animation: book-null 5s linear infinite;
    }
    
    @keyframes book-null {
        0% {
          background: green;
          transform: rotateX(0deg) rotateY(0deg) translateY(0);
          // transform: translateY(0);
        }
        25% {
          background: yellow;
          transform: rotateX(30deg) rotateY(30deg) translateY(70px);
          // transform: translateY(70px);
        }
        50% {
        background: deeppink;
        transform: rotateX(0deg) rotateY(0deg) translateY(0);
        // transform: translateY(0);
        }
        75% {
        background: deepskyblue;
        transform: rotateX(30deg) rotateY(-30deg) translateY(70px);
        // transform: translateY(70px);
        }
        100% {
        background: green;
        transform: rotateX(0deg) rotateY(0deg) translateY(0);
        // transform: translateY(0);
        } 
      }
  }

  .shop-content{
    width: 1000px;
    margin: 0 auto;
    .content>div{
      display: inline-block;
      vertical-align: middle;
    }
    .title{
      padding:15px 0px 15px 45px ;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: bold;
    }
    .book-check{
      width: 20px;
      text-align: center;
      padding-left: 10px;
    }
    .book-img{
      width: 100px;
      img{
        width: 100px;
        height: 100px;
      }
    }
    .summary{
      width: 350px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .pricebox{
      width: 390px;
      // text-align: center;
      span{
        display: inline-block;
        padding-left:10px ;
        font-size: 18px;
        width: 180px
      }
    }
    .numbox{
      width: 100px;
      img{
        width: 20px;
        height: 20px;;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #ccc;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        font-size: 22px;
        padding: 15px;
      }
    }
  }
</style>
