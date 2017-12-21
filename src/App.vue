<template>
    <div id="app">
        <app-nav />
        <div>dddd</div>
        <!-- <router-view/> -->
        <!-- <router-view name="login" /> -->
        <!-- <div class="footer">我是底部</div> -->
    </div>
</template>

<script>
import Nav from './components/nav';
export default {
    name: 'app',
    data() {
        return {
            items: [
                {
                    name: "首页",
                    toLink: "../",
                },
                {
                    name: "登录",
                    toLink: "/login",
                },
                {
                    name: "免费注册",
                    toLink: "/reg",
                }
            ]
        }
    },
    components:{
        'app-nav': Nav
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50; // margin-top: 60px;
}

ul {
    clear: both;
    li {
        float: left;
        list-style: none;
        padding-right: 15px;
        margin-bottom: 200px;
        &:last-child {
            padding: 0;
        }
        &:hover {
            color: #44CC11;
        }
    }
}

.footer {
    display: inline-block;
    vertical-align: top;
}
</style>
