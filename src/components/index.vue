<template>
  <div class="index-body clearfix">
    这是首页
  </div>
</template>
<script>
    import bus from '../common/bus';

    export default{
      mounted(){
        bus.$emit('my-event', 'hello world');
      }
    }
</script>
<style lang="scss" scoped>
  
</style>
