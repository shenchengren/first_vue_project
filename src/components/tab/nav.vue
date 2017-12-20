<template>
    <ul>
        <li v-for="item in items">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                    "首页",
                    "登陆"
                ]
            }
        },
        // components:{
        //     'app-nav': Nav,
        //     'app-content': Content,
        //     'app-footer': Footer
        // }
    }
</script>
<style lang="scss" scoped>
    ul{
        li{
            float:left;
            list-style:none;
            padding-right:15px;
            // &:last-child{
            //     padding：0;
            // }
        }
    }
</style>