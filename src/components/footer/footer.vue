<template>
    <div class="footer-wrapper">
        <ul class="footer-list">
            <li>
                <router-link to="/home/choose"><i class="iconfont icon-xuanke"></i><span>选课</span></router-link>
            </li>
            <li>
                <router-link to="/home/listen"><i class="iconfont icon-xuexizhongxin"></i><span>学习</span></router-link>
            </li>
            <li>
                <router-link to="/home/find"><i class="iconfont icon-faxian"></i><span>发现</span></router-link>
            </li>
            <li>
                <router-link to="/home/my"><i class="iconfont icon-wodeyue"></i><span>我</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name:'my-footer'
}
</script>

<style lang="scss" scoped>
   .footer-wrapper{
       position:fixed;
       bottom:0;
       left:0;
       width:100%;
       height:70px;
       .footer-list{
            width:100%;
            height:70px;
            display: flex;
            flex-direction: row;
            justify-content:space-around;
            align-items: center;
            li{
               a{
                   display: flex;
                   flex-direction: column;
                   text-align:center;
                   i{
                       font-size:18px;
                   }
                   span{
                       margin-top:5px;
                   }
               }
               a.router-link-active{
                   color:red;
               }
            }
       }
   }
</style>
