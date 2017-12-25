<template>
    <div id="app">
        <app-nav v-if="isShow"></app-nav>
            <router-view @increment="incrementTotal"></router-view>
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
           isShow:true
        }
    },
    components:{
        'app-nav': Nav
    },
    mounted(){

    },
    watch: {
        '$route' (to, from) {
          this.isShow=true;
          }
       },
    methods:{
        incrementTotal(e){
            this.isShow=e;
        }
    }
}
</script>

<style lang="scss" scoped>
body{
    margin: 0;
    padding: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50; // margin-top: 60px;
}
.clearfix{
    content:"";
    clear: both;
    display: block;
}
.footer {
    display: inline-block;
    vertical-align: top;
}
</style>
