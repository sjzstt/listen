<template>
    <div class="home-wrapper">
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from '../footer/footer';
// console.log(MyFooter)
export default {
 name:"home",
 components:{
     MyFooter
 }
}
</script>

<style>

</style>
