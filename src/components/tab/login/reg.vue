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
                    "登陆",
                    "登陆",
                    "登陆"
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>
    ul{
        clear: both;
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