<template>
  <div class="list-box clearfix">
    <div class="list-seach">
      <div class="search-author">
        <label for="search-author">作者名：</label>
        <input type="text" placeholder="请输入作者名">
      </div>
    </div>
    <div class="list-body">
      <ul>
        <li class="clearfix" v-for="item in items">
          <div class="left"><img src="http://img3m1.ddimg.cn/59/32/25182491-1_w_6.jpg" alt=""></div>
          <div class="right">
            <p class="top">
              <span class="book-name">书名：失乐园</span>
              <span class="book-anthor">作者：渡边淳一</span>
              <span class="countries">国家：Japan</span>
            </p>
            <div class="introduce">
              <p class="title">介绍：</p>
              <p class="content">这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书这是一本书</p>
            </div>
            <p class="bottom">
              <span class="inventory">库存：89</span>
              <span class="price">价格：24.9</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import bus from '../common/bus';

export default {
  data(){
    return {
      items:""
    }
  },
  mounted(){

  },
  methods:{
    getData(){
      
    },
  }
};
</script>
<style lang="scss" scoped>
.list-box {
  width: 1000px;
  margin: 0 auto;
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
    width: 70%; // position: relative;
    .top {
      padding: 15px 0;
      span{
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
        overflow: hidden; // white-space:nowrap
      }
    }
    .bottom {
      margin-top: 40px;
      span{
        display: inline;
        margin-right: 30px;
      }
    }
  }
}
</style>
