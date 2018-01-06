<template>
  <div class="shop-body clearfix">
    <div class="shop-content" v-if="content">
      <span class="is-msg" v-show="isTrue">{{msg}}</span>
      <div class="check-all">
        <input type="checkbox" name="" id="checkAll">
        <label for="checkAll">全选</label>
      </div>
      <ul>
        <li class="book" v-for="book in books" :key="book.id">
          <p class="title">书名：{{book.id}}<img src="../../assets/images/close.svg" alt="" @click="delFn"></p>
          <div class="content">
            <div class="book-check">
              <input type="checkbox" name="" id="">
            </div>
            <div class="book-img">
              <img :src="book.smallImage" alt="">
            </div>
            <div class="summary"><b>简介：</b>{{book.details && book.details.summary}}</div>
            <div class="pricebox">
              <span class="prive-add">总价：{{qqq&&"111"}}</span>
              <span class="price">单价：￥{{book.price}}</span>
            </div>
            <div class="numbox">
              <img src="../../assets/images/minus.svg" alt="" class="minus" @click="minusFn">
              <!-- <span class="num">1</span> -->
              <input type="text" value="1" class="num" v-model="qqq">
              <img src="../../assets/images/add.svg" alt="" class="add" @click="addFn">
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
      content:false,
      books:[],
      msg: "请先登录",
      isTrue: false,
      // watchnum:""
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
  computed: {
    // 计算是否有错误提示
    totalamount: function(e) {
      console.log(e.msg);
    }   
  },
  mounted(){
    if(utils.getCookie("first_vue_code")==200){
      this.getDataCart(utils.getCookie("first_vue_id"));
    }else{
      this.content=false
    }
    
  },
  methods: {
   getDataCart(userid){
      let that = this;
      this.$ajax.post('/api/getcard',{
        userid:userid
      }).then(function(response){
        if(response.data.status==1&&response.data.cart.length>0){
          
          that.books=response.data.cart;
          that.content=true
          
        }
      }).catch(function(error){

      })

    },
    addFn(e){
      e.target.previousElementSibling.value++
    },
    minusFn(e){
      if(e.target.nextElementSibling.value==1){return}
      e.target.nextElementSibling.value--
    },
    delFn(){
      
        let userId = utils.getCookie("first_vue_id");
        let bookId = '1001';
        let that   = this;
        let url    = '/api/users/'+userId+'/delcart';
        console.log(url)
        this.$ajax.post(url,{
          userId:userId,
          bookId:bookId
        }).then(function(response){
          that.msg = '删除成功';
          that.isTrue = true;
          setTimeout(function() {
            that.isTrue = false;
          }, 1500);
        }).catch(function(error){
          console.log(error)
        })
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
      img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
        float: right;
        margin-right: 17px;
        transition: 0.5s;
        &:hover{
          transform: rotate(-180deg);
        }
      }
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
      input{
        display: inline-block;
        vertical-align: middle;
        font-size: 22px;
        // padding: 15px;
        width: 40px;
        border: 0;
        // :disabled
        text-align: center
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
</style>
