<template>
    <ul>
        <li v-for="item in items"><router-link :to="item.toLink">{{item.name}}</router-link></li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                    {
                        name:"首页",
                        toLink:"./",
                    },
                    {
                        name:"登录",
                        toLink:"/login/login",
                    },
                    {
                        name:"免费注册",
                        toLink:"/login/reg",
                    },
                    {
                        name:"免费注册",
                        toLink:"/login/reg",
                    }
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>
    ul{
        li{
            float:left;
            list-style:none;
            padding-right:15px;
            &:last-child{
                padding: 0;
            }
            &:hover{
                color: #44CC11;
            }
        }
    }
</style>