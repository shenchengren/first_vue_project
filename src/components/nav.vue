<template>
    <div>
        <ul class="clearfix">
            <li v-for="item in items"><router-link :to="item.toLink">{{item.name}}</router-link></li>
        </ul>
    </div>
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
                        toLink:"/login",
                    },
                    {
                        name:"免费注册",
                        toLink:"/reg",
                    },
                ]
            }
        },
        methods:{
            handleClick(){
                console.log('nav');
            }
        }
    }
</script>
<style lang="scss" scoped>
.clearfix{
    content:"";
    clear: both;
    display: block;
}
    ul{
        height: 20px;
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