<template>
    <div class="indentWrap">
        <div class="topTit">
            <span>&lt;</span>
            <h1>我的订单</h1>
        </div>
        <div class="buttonW">
            <span :class="{active:currentCode==item.code}" v-for="item of buttonData" @click="btnSpan(item.code)">{{item.name}}</span>
        </div>
        <div class="contentW">
            <div class="itemW" v-for="i in [1,2,3]">
                <div class="top">
                    <p class="ellipsis">订单号:2018082115553222250769</p>
                    <span>已支付</span>
                </div>
                <div class="bottomXX">
                    <div class="bottomXX-top">
                        <i class="iconfont icon-faxian"></i>
                        <h1>[书法课]</h1>
                        <span>一周写好字</span>
                    </div>
                    <div class="bottomXX-bottom">
                        <p><span>福利:</span>暂无实物福利信息</p>
                        <div class="bottom">
                            <div class="bottom-left">实付款：￥99</div>
                            <button type="button">订单详情</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'indent',
    data(){
        return{
            buttonData:[
                {"name":"全部","code":1},
                {"name":"已支付","code":2},
                {"name":"待支付","code":3},
                {"name":"已取消","code":4}
            ],
            currentCode:''
        }
    },
    methods:{
        btnSpan(code){
            this.currentCode = code;
        }
    }
}
</script>
<style lang="scss">
    .indentWrap{position: fixed;top:0;left:0;width:100vw;height:100vh;background:#f9f9f9;
        .topTit{position: relative;background:#fff;
            span{position:absolute;left:30px;top:25px;color:#5d5d5d;font-size:28px;font-weight:600;}
            h1{text-align: center;font-size:23px;color:#2d2d2d;width:100%;line-height:73px;font-weight:800;}
        }
        .buttonW{
            padding-left:25px;background:#fff;
            span{margin-right:15px;font-size:22px;line-height:64px;color:#5f5f5f;}
            span.active{color:#fe3235;font-weight:800;}
        }
        .contentW{width:100vw;height:calc(100vh - 138px);overflow:hidden;
            .itemW{margin-bottom:10px;background:#fff;
                .top{padding-left:25px;padding-right:18px;font-size:19px;color:#929292;border-bottom:1px solid #dfdfdf; display: flex;height:53px;flex-direction: row;align-items: center;
                    p{flex:1;}
                    span{width:58px;}
                }
                .bottomXX{padding:29px 30px 10px;
                    .bottomXX-top{padding-bottom:13px;border-bottom:1px solid #dfdfdf;display: flex;
                        flex-direction: row;
                        align-items: center;
                        .icon-faxian{font-size:25px;color:red;margin-right:12px;}
                        h1{font-weight:600;margin-right:3px;font-size:23px;}
                        span{color:#000;font-size:22px;}
                    }
                    .bottomXX-bottom{padding-top:33px;
                        p{font-size:16px;color:#adadad; margin-bottom:50px;
                            span{color:16px;color:#959595;}
                        }
                        .bottom{display: flex;height:43px;flex-direction: row;align-items: center;
                            .bottom-left{flex: 1;font-size:22px;color:#929292;font-weight:700;}
                            button{width:66px;height:43px;border:1px solid #d9d9d9;background:#fff;border-radius:10px;}
                        }
                    }
                }
            }
        }
    }
</style>


