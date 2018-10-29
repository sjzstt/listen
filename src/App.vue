<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <balance></balance> -->
    <router-view/>
    
  </div>
</template>

<script>
// import Balance from './views/my/balance/balance'
// export default {
//   name: 'App',
//   component:{
//     Balance
//   }
// }
</script>

<style>
/* 雅虎的样式从置，以及移除隐藏显示省略号，万能清浮动等base */
  @import './assets/scss/base.scss';
  @import './assets/scss/reset.scss';

  html,body{height:100%;}
 
  a:hover{
    text-decoration: none;
  }
</style>
