<template>
	<div>
		<div class="menu-overlay"></div>
		<div class="com-header-brief clearfix" data-islogined="false" data-id="47038" data-guid="0" data-initialized="true">
			<a class="header-brief-left clearfix" href="#/home" data-ga-event="mobile:click:logo">
				<div class="logo">
					<img src="./images/articlelogo.png" alt="">
				</div>
				<div class="title-slogan">
					<h1>{{title}}</h1>
					<p>{{desc}}</p>
				</div>
			</a>
			<div class="header-brief-right">
				<a data-ga-event="mobile:click:openApp" data-id="47038" href="#" class="callup-button">打开</a>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '好奇心日报',
				desc: '好奇驱动你的世界'
			}
		}
	}
</script>

<style scoped>
	.box {
		margin: 0;
		background-color: #fff;
		color: #363636;
		font-size: 14px;
		font-family: Arial, STHeiti, 华文黑体, Microsoft YaHei, 微软雅黑, SimSun, 宋体, Helvetica, Tahoma, Arial sans-serif;
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
		-webkit-backface-visibility: hidden;
	}
	
	.com-header-brief,
	.menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.menu-overlay {
		z-index: 98;
		display: none;
		height: 100%;
		background: transparent;
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	}
	
	.com-header-brief {
		z-index: 99;
		padding: 7px 12px;
		border-bottom: 1px solid #f9f9f9;
		background-color: #fff;
		box-shadow: 0 1px 8px rgba(0, 0, 0, .1);
	}
	
	.com-header-brief,
	.menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.com-header-brief .header-brief-left {
		float: left;
		height: 100%;
		color: #000;
	}
	
	a,
	img {
		vertical-align: top;
	}
	
	a {
		color: #0f1419;
		text-decoration: none;
	}
	
	a {
		background-color: transparent;
	}
	
	.com-header-brief .header-brief-left .logo {
		float: left;
		width: 45px;
		height: 45px;
	}
	
	.com-header-brief .header-brief-left .logo img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.com-header-brief .header-brief-left .title-slogan {
		padding: 6px 0 4px 58px;
	}
	
	.com-header-brief .header-brief-left .title-slogan h1 {
		font-size: 16px;
		line-height: 16px;
	}
	
	.com-header-brief .header-brief-left .title-slogan p {
		margin-top: 6.5px;
		letter-spacing: 1px;
		font-size: 12px;
		line-height: 12px;
		word-break: break-word;
	}
	
	.com-header-brief .header-brief-right {
		float: right;
		height: 100%;
	}
	
	.com-header-brief .header-brief-right .callup-button {
		display: block;
		margin-top: 4px;
		width: 65px;
		height: 36px;
		background: #000;
		box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
		color: #fff;
		text-align: center;
		font-size: 14px;
		line-height: 36px;
	}
</style>