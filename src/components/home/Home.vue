<template>
    <div class="home-wrapper">
        <div>{{name}}</div>
        <app-nav></app-nav>
        <app-content></app-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Nav from './Nav';
    import Content from './Content';
    import Footer from './Footer';
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