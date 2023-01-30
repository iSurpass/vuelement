<template>
  <div id="app">
    <!--    组件路径  -->
<!--    <a href="#/button">点我显示 Button</a>-->
<!--    <a href="#/buttonCreate">点我显示 Button</a>-->
<!--    <a href="#/upload">上传文件</a>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  height: 100%;
}
</style>
