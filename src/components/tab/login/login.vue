<template>
    <div class="loginForm">
        <div class="name">
            <label for="userName">姓名</label>
            <input type="text" id="userName" placeholder="请输入姓名" v-model="username">
            <span v-show="isTrue">{{msg}}</span>
        </div>
        <div class="pwd">
            <label for="userPwd">密码</label>
            <input type="password" id="userPwd" placeholder="请输入密码" v-model="psd">
        </div>
        <div class="lg">
            <button @click="loginFun">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:"",
                psd:"",
                msg: "",
                isTrue: true
            }
        },
        methods: {
            loginFun: function() {
                var that=this;
                this.$ajax.post('/api/login', {
                        name: that.username,
                        pwd: that.psd
                    })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },
        }
    }
</script>
<style lang="scss" scoped>
    .loginForm{
        clear: both;
        margin: 0 auto;
        height: 500px;
        width: 500px;
        &>div{
            margin: 25px 0;
        }
    }
</style>