<template>
	
		<div class="app">
			<header class="head">
				<p class="back"> 《 </p>
				<p class="myBalance">我的余额</p>
			</header>
			<div class="money">
				<p class="zhangHu">
					<span class="yve">账户余额</span>
				</p>
				<p class="num">
					<span class="logo">￥</span>
					<span class="doller">996.00</span>
				</p>
			</div>
				
			<ul class="dataTop">
				<li class="dataMid">
					<div class="left">
						<h3 class="zhtx">账户提现</h3>
						<span class="zhtx2">账户提现</span><br>
						<span class="data">2018-10-06 16:48:07</span>
					</div>
					<div class="right">
						996.00
					</div>
				</li>
			</ul>
			
		</div>
	
</template>
<script>
	export default{
		name:'balance'
	}
</script>
<style lang='scss'>
	.app{
		width:100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		.head{
			width:100%;
			height:8%;
			display:flex;
			justify-content:flex-start;
			line-height:50px;
			padding-left:16px;
			.back{
				font-size:20px;
				}
		    .myBalance{
			  	width:100%;
			  	text-align:center;
			  	margin-left:-38px;
			  	font-size:18px;
			  	font-weight:700;
		 	 }
		}
		.money{
			height:20%;
			width:100%;
			background:#ef773b;
			.yve{
				margin-top:0px;
			}
			.zhangHu{
				display:flex;
				justify-content:center;
				color:white;
				line-height:58px;
			}
			.num{
				margin-top:-10px;
				display:flex;
				justify-content:center;
				.logo{
					color:white;
					font-size:20px;
					line-height:50px;
				}
				.doller{
					color:white;
					font-size:38px;
				}

			}
		}
		.dataTop{
			width:100%;
			height:72%;
			.dataMid{
				display:flex;
				border-bottom:1px solid #f2f2f2;
				.left{
					width:70%;
					.zhtx{
						margin:15px 0px 5px 10px;
						font-weight:700;
						font-size:16px;
					}
					.zhtx2{
						display:inline-block;
						margin:10px 0px 6px 10px;
					}
					.data{
						display:inline-block;
						margin:0px 0px 15px 10px;
					}
					
				}
				.right{
					text-align:center;
					width:30%;
					line-height:50px;
					color:#d83222;
					

				}
			}
		}
		
	}

</style>