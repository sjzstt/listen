<template>
    <div class="my">
        <div class="topWrap">
            <router-link class="iconfont icon-shezhi" to=""></router-link>
            <div class="yonghXX">
                <img class="user-header" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540611207&di=89f33d90219847080fa599c69c8c4993&src=http://userimg.yingyonghui.com/head/90/1478076844135/5689990.png-thumb" alt="用户头像">
                <div class="yonghXX-center">
                    <h1>ruidi</h1>
                    <p>编辑个人资料</p>
                </div>
                <div class="yonghXX-right">
                    <h2>2758</h2>
                    <p>金币&ensp; &gt;</p>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name:'my'
}
</script>
<style lang="scss">
    .my{
        .topWrap{
            position:relative;
            background:red;
            padding:84px 30px 0;
            .icon-shezhi{font-size:30px;color:#606060;position:absolute;right:32px;top:18px;}
            .yonghXX{width:100%;height:88px;display: flex;flex-direction: row;background:pink;
                padding-bottom:28px;border-bottom:1px solid #000;
                .user-header{width:88px;height:88px;border-radius:100%;margin-right:5px;}
                .yonghXX-center{background:blue;flex:1;
                    h1{line-height:58px;font-size:25px;color:#333;font-weight:700;}
                    p{color:#9a9a9a;font-size:14px;line-height:23px;}
                }
                .yonghXX-right{
                    width:80px;
                    h2{line-height:58px;font-size:25px;color:#f7282e;text-align:right;}
                    p{color:#9a9a9a;font-size:14px;line-height:23px;text-align: right;}
                }
            }
        }
    }
</style>

