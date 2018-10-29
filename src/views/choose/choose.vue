<template>
    <div class="choose-wrapper">
     <scroll :scrollY="false" :scrollX="true" class="scroll">
        <ul class="choose-box">
          <li><router-link to="/home/choose/course">课</router-link></li>
          <li><router-link to="/home/choose/lu">录播课</router-link></li>
          <li><router-link to="/home/choose/one">高一课程</router-link></li>
          <li><router-link to="/home/choose/person">1对1</router-link></li>
          <li><router-link to="/home/choose/practive">专题课程</router-link></li>
          <li><router-link to="/home/choose/spacing">特色讲座</router-link></li>
          <li><router-link to="/home/choose/two">高二课程</router-link></li>
        </ul>
     </scroll>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name:"choose"
}
</script>

<style lang="scss" scoped>
  .choose-wrapper{
    width:100%;
    height:calc(100vh - 70px);
    .scroll{
      width:100vw;
      overflow:hidden;
      height:30px;
      .choose-box{
        overflow:hidden;
        width:600px;
        height:30px;
        line-height:30px;
        font-size:14px;
        li{
          float: left;
          // width:100px;
          margin:0 15px;
          a{
            color:#666
          }
          a.router-link-active{
            color:#000;
          }
        }
      }
    }
    
  }
</style>
