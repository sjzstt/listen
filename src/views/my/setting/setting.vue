<template>
	<div class="all">
		<li class="liSetting">
			<p>《</p>
			<p class="settings">设置</p>
		</li>
		<li class="liList">
			<p>收货地址</p>
			<span>></span>
		</li>

		<li class="liList">
			<p>声纹认证</p>
			<span>未认证 ></span>
		</li>
		<li class="liList">
			<p>仅wifi下使用</p>
			<span class="box1" >
				<span class="btn1"></span>
			</span>
		</li>
		<li class="liList">
			<p>切换到3G/4G网络下提醒我</p>
			<span class="box2">
				<span class="btn2"></span>
			</span>
		</li>
		<li class="liList">
			<p>清理缓存</p>
			<span>0.2M</span>
		</li>
		<li class="liList">
			<p>异常日志上报</p>
			<span>></span>
		</li>
		<li class="liList">
			<p>选择下载位置收货地址</p>
			<span>手机存储</span>
		</li>
		<li class="liList">
			<p>新版本更新</p>
			<span>当前 v6.16.03</span>
		</li>

	</div>
</template>

<script>
export default{
	
}
</script>
<style lang='scss'>

	li{
		position:relative;
		width:100%;
		height:calc(100vh/9);
		border-bottom:1px solid #f2f2f2;
		overflow:hidden;

		p{
			margin:31px 0 0px 10px;
			float:left;
		}
		span{
			float:right;
			margin:31px 15px 0px 0px;
		}
		.settings{
			position:absolute;
			font-size:15px;
			right:203px;
			font-weight:800;
		}
		.box1{
			position:relative;
			display:block;
			width:50px;
			height:21px;
			border:2px solid #d9d9d9;
			border-radius:13px;
		}
		.btn1{
			position:absolute;
			bottom:-1px;
			left:-2px;

			width:20px;
			height:20px;
			border-radius:50%;
			border:2px solid #d9d9d9;
		}
		.box2{
			position:relative;
			display:block;
			width:50px;
			height:21px;
			border:2px solid #d9d9d9;
			border-radius:13px;
		}
		.btn2{
			position:absolute;
			bottom:-1px;
			left:-2px;
			width:20px;
			height:20px;
			border-radius:50%;
			border:2px solid #d9d9d9;
		}
	}
	
  

</style>