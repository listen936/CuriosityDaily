<template>
	<div>
		<div class="menu-overlay"></div>
		<div class="com-header-brief clearfix" data-islogined="false" data-id="47038" data-guid="0" data-initialized="true">
			<a class="header-brief-left clearfix" href="#/home" data-ga-event="mobile:click:logo">
				<div class="logo">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAABzlBMVEVCQUFCQUFCQUEBAQEAAAABAQFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUFCQUEAAAACAgIAAABCQUEAAAD/yB//0yH/0CAxJwb/4yP/yx9XRQv/2CENCgFEREQ7Ozvyvh3/xx//xB7/ziD/3yL////h4eFSUlL/7yX/7STZ2dlOTk4oKCj/2iH/0SDl5eWurq55eXn/6iQJCAGVlZWMjIz/9SX/5yP/5SP/2CL/1SEwJQUtIwUUEALPz89WVlYxMTH/1yH/yh8ICAg5LAceGQTd3d3V1dWEhIR0dHRjY2M2Njb//CcgICD/yR/NpBmtjxVAMQcbFAMEBAPu7u7MzMy9vb2oqKh9fX1tbW1eXl4tLS3zvR3quhzntRwbGxvTpxm6mRd8Yw8MDAxlTAtSQgpMPwlHNwgpHwX09PTp6enk5OTHx8fAwMC/v7+4uLizs7Ofn5+ZmZlnZ2dBQUEjIyPyyB/vwh7gshvMqhrHnxkXFxengxSJcxGLbBCCZQ9bTwxXRwsjGwT5+fnOzs7CwsL31SH00SDzziD8xR/2wR74wB7fuh3WsBvEqBqxlxemiRWahBScghSifxRnWQ4dEwPgGAgxAAAAGHRSTlMHKxX28vhIbV4DEAEoIhoUDVhDOgDs5WWJMdkWAAADoUlEQVRo3u3aaVPaQBgH8GCtbQKIV9slElAsJLFBjiI3CK0geN/W+76qvWu9tZ697/vb1mRXZ6rjm7Lr1E7+w0w2z4vnx3IEsrNUiZa+mksyV2ltCaWlKUA2FK2laIrJBSSTyxwYdEE+YSW/gKYoRn8BkMwFPUNRlEFHWNEZDpQcDWFFk6Mq/4lSvl9jimf8ABBTMj+/TqyaWdaTGu34vpsgosx/80gOIcmW8qVslHM4Vra68StTQoi12YyHsdmiodczuJXt1qhd6c5HhSgvaza7EJrBq8yFPEpnoy85ujbqjiizsru5eazKhgO+WJHOtB/4uzbCysTsoR84lQTPKi9XeBIVPnEKKozhVOYEs9zUzKVRYUZqlwusuRujYuFSStN3CVRIu3m5wLMmrIoyl7IRPyrE2VK5UEpEuV6OCjVnophURVVURVVURVVURVVURVXOheI/g//JyZHyI4XHr8xyqT9viroEs6J4ajAqabfStN1hQYUdySgnZktgVPwf3Mp9pfARdo2/TSrnkQms98jPW+FNMbc6lY53bXsEeNo6hVXJxCKwr9tX5nH7YvBEGvNjVUAXJxnhugLv4eEaiTn0Zh/3OkzNZ8nHthsPk0pKji+/CKxc7U7yYSlcZrfHOJ8jstJ5l9AqXGZva3KN58c6OnfuJoiuKM6GJTgJosocF+mE1xmSiilqFt5PdKx3ZEgqPSNuW4zjHL44KQVdBvj2lDnmmSeqdK8LYaJzQTHNWix7lnIAzvnaOBnF5TxRqlhEA+c4LiUonigtPkEDcQiP0rNZffNoCtPgWB7cgMe6g0ddFkp/Q18D6vTkUUMLHA6+AjCVSOlrBlUVWSiVTYNoLrXidP0CHDbeOaY8DAJxPAvlltOKlOEqUB+Ew+qqY8qzgKsSZKPcdsoK7CU2n6I09Q+9xKPUeb29A6coTm/gKR6lVgTewCmKy9sbwKTcAY+Dpyg9fS+as1GqrEvoA9VyDzxCT3ig/tj3BfSKrmyUxw+9qOW0GLjfhN7sSgBz34oGT8WeLBTXoDdYXQGz0N84BEfNjajUeBsewYAIKlx/rQy7xpeXrUqWNtvaauGwts0K09YCjy33GoB1mPSV3xpEE/nHf19URVXOjwLIBilXLpLMFUUx6IoKr10ilWuFRcreHkZfnFd4mVQK84r1DCXvudIUF+WRSlGxRt5zRVNMvl6nIRWdPp85MLQ0VcAYckjFwBRQtFbe10dTJEPT2pLfEEel41hxtS4AAAAASUVORK5CYII=" alt="">
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