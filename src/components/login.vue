<template >
    <div class="loginForm">
        <div class="name">
            <label for="userName">姓名</label>
            <input type="text" id="userName" placeholder="请输入姓名" v-model="username">
        </div>
        <div class="pwd">
            <label for="userPwd">密码</label>
            <input type="password" id="userPwd" placeholder="请输入密码" @keydown="keyDown" v-model="psd">
        </div>
        <div class="lg">
            <button @click="loginFun">登录</button>
            <button @click="goHome">返回首页</button>
        </div>
        <span v-show="isTrue">{{msg}}</span>
    </div>
</template>

<script>
import Router from 'vue-router';
import Vue from "vue";
import reg from '@/components/reg';
Vue.use(Router);

const router = new Router();
export default {
    data() {
        return {
            username: "",
            psd: "",
            msg: "",
            isTrue: false
        }
    },
    mounted: function() {
        this.yincang();
    },
    methods: {
        keyDown(event){
            if(event.keyCode==13){
                this.loginFun();
            }
        },
        loginFun: function() {
            var that = this;
            console.log(that.username, that.psd)
            this.$ajax.post('/api/login', {
                name: that.username,
                pwd: that.psd
            })
                .then(function(response) {
                    that.msg = response.data.msg;
                    that.isTrue = true;
                    setTimeout(function() {
                        that.isTrue = false;
                    }, 3000)
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        yincang: function() {
            this.$emit('increment', false);
        },
        goHome() {
            this.$emit('increment', true);
            this.$router.push({path: '/'})
            console.log(router);
        }
    }
}
</script>
<style lang="scss" scoped>
.loginForm {
    clear: both;
    margin: 0 auto;
    height: 500px;
    width: 500px;
    &>div {
        margin: 25px 0;
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
</style>