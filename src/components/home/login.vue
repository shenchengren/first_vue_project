<template >
    <div class="login-box clearfix">
        <div class="left">
            <img src="../../assets/images/logps.png" alt="">
        </div>
        <div class="right">
            <div class="loginForm">
                <div class="top">尊敬的用户,您已通过校付宝账号登录</div>
                <div class="name">
                    <label for="userName">姓名</label>
                    <input type="text" id="userName" placeholder="请输入姓名" v-model="username">
                </div>
                <div class="pwd">
                    <label for="userPwd">密码</label>
                    <input type="password" id="userPwd" placeholder="请输入密码" @keydown="keyDown" v-model="psd">
                </div>
                <div class="remember">
                    <input type="checkbox" id="checkBox" checked>
                    <label for="checkBox">记住我的密码</label>
                </div>
                <div class="lg">
                    <button @click="loginFun">登录</button>
                </div>
                <span v-show="isTrue">{{msg}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Router from "vue-router";
import Vue from "vue";
import Utils from '@/common/utils';

Vue.use(Router);
const router = new Router();
export default {
  data() {
    return {
      username: "",
      psd: "",
      msg: "",
      isTrue: false
    };
  },
  methods: {
    keyDown(event) {
      if (event.keyCode == 13) {
        this.loginFun();
      }
    },
    loginFun: function() {
      var that = this;
      this.$ajax
        .post("/api/login", {
          name: that.username,
          pwd: that.psd
        })
        .then(function(response) {
          if (response.data.status == 1) {
            Utils.setCookie("first_vue_code", 200, 7);
            Utils.setCookie("first_vue_name",response.data.userName+"先生", 7);
            Utils.setCookie("first_vue_id",response.data.userId, 7);
            that.$router.push({ path: "/shop" });
          } else {
            that.msg = response.data.msg;
            that.isTrue = true;
            setTimeout(function() {
              that.isTrue = false;
            }, 2500);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  width: 1000px;
  margin: 0 auto;
  .left {
    float: left;
    img {
      margin-top: 72px;
    }
  }
  .right {
    float: right;
    // margin: 0 auto;
    height: 405px;
    width: 400px;
    margin-top: 75px;
    border: solid 1px #e5e5e5;

    .loginForm {
      width: 296px;
      margin: 0 auto;

      .top {
        width: 296px;
        text-align: center;
        font-size: 18px;
        margin-bottom: 17px;
        margin-top: 40px;
      }
      .pwd,
      .name {
        width: 296px;
        height: 44px;
        // line-height: 44px;
        border: solid 1px #e5e5e5;
        margin-top: 30px;
        padding-left: 13px;
        box-sizing: border-box;

        input {
          width: 70%;
          font-size: 16px;
          display: inline-block;
          border: 0;
          outline: 0;
          vertical-align: middle;
          color: deepskyblue;
        }
        label {
          font-size: 16px;
          display: inline-block;
          width: 14%;
          vertical-align: middle;
          height: 42px;
          line-height: 44px;
        }
      }
      .remember{
        font-size: 14px;
        height: 44px;
        line-height: 44px;
        input,label{
          display: inline-block;
          vertical-align: middle;
          padding-left: 10px;
        }
      }
      .lg{
        margin-top: 25px;
        button{
          border-radius: 4px;
          width: 296px;
          font-size: 20px;
          height: 56px;
          background-color: #ff4936;
          border: 0;
          color: #fff;
          line-height: 56px;
          &:hover{
            cursor: pointer;
            background-color:  #f42517

          }
        }
      }
    }

    span {
      position: fixed;
      top: 40%;
      left: 50%;
      background: #000;
      opacity: 0.5;
      color: white;
      font-size: 28px;
      display: inline-block;
      padding: 10px;
      width: 300px;
      margin-left: -150px;
    }
  }
}
</style>