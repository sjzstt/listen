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
        <div class="indentCollect-wrap">
            <div class="leftW">
                <router-link class="iconfont icon-wodedingdan" to=""></router-link>
                <p>我的订单</p>
            </div>
            <div class="rightW">
                <router-link class="iconfont icon-wodeshoucang" to=""></router-link>
                <p>我的收藏</p>
            </div>
        </div>
        <div class="Advertising"></div>
        <div class="my-bottomW">
            <div class="itemW" v-for='item in bottomData' @click="clickTz(item.type)">
                <div class="iW">
                    <i :class="item.className"></i>
                </div>
                <p>{{item.tit}}</p>
                <div class="gtW">&gt;</div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'my',
    data(){
        return {
            bottomData:[
                {'className':'iconfont icon-wodeyue','tit':'我的余额','type':'yue'},
                {'className':'iconfont icon-youhuiquan','tit':'优惠卷','type':'youhuiquan'},
                {'className':'iconfont icon-juanzeng','tit':'赠课卡','type':'zhengke'},
                {'className':'iconfont icon-kefuzhongxin','tit':'客服中心','type':'kefu'},
                {'className':'iconfont icon-duihuan','tit':'兑换站','type':'duihuan'}
            ]
        }
    },
    methods:{
        clickTz(type){

        }
    }
}
</script>
<style lang="scss">
    .my{
        .topWrap{
            position:relative;
            // background:red;
            padding:84px 30px 0;
            .icon-shezhi{font-size:30px;color:#606060;position:absolute;right:32px;top:18px;}
            .yonghXX{width:100%;height:88px;display: flex;flex-direction: row;
                padding-bottom:28px;border-bottom:1px solid #f2f2f;
                .user-header{width:88px;height:88px;border-radius:100%;margin-right:5px;}
                .yonghXX-center{flex:1;
                    h1{line-height:58px;font-size:25px;color:#333;font-weight:700;}
                    p{color:#9a9a9a;font-size:14px;line-height:23px;}
                }
                .yonghXX-right{
                    h2{line-height:58px;font-size:25px;color:#f7282e;text-align:right;}
                    p{color:#9a9a9a;font-size:14px;line-height:23px;text-align: right;}
                }
            }
        }
        .indentCollect-wrap{
            display:flex;flex-direction: row;justify-content:space-between;padding:24px 92px 13px;
            .leftW,.rightW{width:85px;text-align:center;}
            .iconfont{color:#eb3333;font-size:32px;}
            p{font-size:19px;color:#3a3a3a;line-height:59px;}
        }
        .Advertising{
            padding:0 14px 0;
            width:calc(100vw -28px);
            height:90px;
            background:url('../../assets/images/my1.png') no-repeat;
            background-size:100% 100%;
        }
        .my-bottomW{height:calc(100vh - 491px);padding:0 30px 0;
        display: flex;flex-direction: column;
            .itemW{flex:1;border-top:1px solid #f1f1f1;display: flex;flex-direction: row;align-items: center;
                .iW{width:55px;
                    i{color:#676767;font-size:29px;}
                }
                p{font-size:24px;color:#2b2b2b;flex:1;}
                .gtW{width:14px;font-size:18px;color:#a3a3a3;}
            }
        }
    }
</style>

