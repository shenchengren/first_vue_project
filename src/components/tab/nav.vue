<template>
    <ul>
        <li v-for="item in items"></li>
        <li></li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                name: 'Home Component'
            }
        },
        components:{
            'app-nav': Nav,
            'app-content': Content,
            'app-footer': Footer
        }
    }
</script>
<style lang="scss" scoped>
    
</style>