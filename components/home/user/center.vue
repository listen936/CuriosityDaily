<template>
	<div>
		<body class="mobile users center">
		<div class="page-content">
			<div class="com-users-center-radar" data-guid="1" data-initialized="true" data-islogined="true">
				<div class="users-center-radar-hd">
					<div class="mask"></div><canvas class="radar" width="480" height="480" style="width: 240px; height: 240px;"></canvas>
					<a href="#" class="avatar circle x40"><img src="http://m.qdaily.com/images/missing_face.png" alt=""></a>
				</div>
				<div class="users-center-radar-ft">
					<div class="introduce"></div>
					<div class="record"><span class="name">{{name}}</span>,你的<span class="min-num">开脑洞</span>指数还不够哦！</div>
				</div>
			</div>
			<div class="com-users-center-switch" data-guid="5" data-initialized="true">
				<div class="baseslide-container" data-initialized="true" data-guid="4">
					<div class="baseslide-bullets">
						<ul class="clearfix">
							<li v-for="a in arr" @click="changebar(a.id)" class="baseslide-bullet collect " :class="{active:id==a.id}">
								<a href="javascript:;">{{a.title}}</a>
							</li>
						</ul>
					</div>					
						<div class="baseslide-wrapper" style="height: 100px;">
						<div class="baseslide collect-article"  :class="id==1?'cur':'left'" style="transition:all 0.5s" @click="left">
							<div class="packery-container articles clearfix" data-lastkey="0"></div>
							<div class="origin-container" style="display:none"></div>
							<div class="collect-loader">
								<div class="com-loader nomore" data-guid="2" data-initialized="true">
									<div class="loader-bd">
										<p class="notext">没有更多啦</p>
										<a rel="nofollow" href="#" class="btn showtext ripple">加载更多</a>
										<div class="spinner">
											<div class="bounce1"></div>
											<div class="bounce2"></div>
											<div class="bounce3"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="baseslide attend-paper"  :class="id==2? 'cur' : 'right'" style="transition:all 0.5s" @click="right">
							<div class="papers clearfix" data-lastkey="0"></div>
							<div class="attend-loader">
								<div class="com-loader nomore" data-guid="3" data-initialized="true">
									<div class="loader-bd">
										<p class="notext">没有更多啦</p>
										<a rel="nofollow" href="#" class="btn showtext ripple">加载更多</a>
										<div class="spinner">
											<div class="bounce1"></div>
											<div class="bounce2"></div>
											<div class="bounce3"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</body>
	</div>
</template>

<script>
	

	export default {
		data:function(){
			return {
				bool:true,
				arr:[{
					title:"我的参与",
					id:1
				},{
					title:"我的收藏",
					id:2
				}],
				id:1
			}
		},
		methods:{
			changebar:function(id){
				this.id = id
			},
			left:function(){
				var Collect = document.querySelector(".collect-article");
				var Attend = document.querySelector(".attend-paper");
				Collect.style.left = 0;
				Attend.style.left = 375;
			},
			right:function(){
				var Collect = document.querySelector(".collect-article");
				var Attend = document.querySelector(".attend-paper");
				Collect.style.left = -375;
				Attend.style.left = 0;
			}
		},
		computed:{
			name: function(){
				return this.$cookie.get('username');
			}	
		},


	}

</script>

<style lang="scss" scoped>

	body{
		height:667px,;
		background-color:#f2f2f2;
	}
	.com-grid-paper {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%;
		background-color: #fff
	}
	
	.com-grid-paper .grid-paper-bd {
		position: relative;
		width: 100%;
		height: 160px;
		height: 8rem
	}
	
	.com-grid-paper .grid-paper-bd .imgcover img {
		width: 100%
	}
	
	.com-grid-paper .grid-paper-bd .category {
		position: absolute;
		bottom: 10px;
		bottom: .5rem;
		left: 15px;
		left: .75rem
	}
	
	.com-grid-paper .grid-paper-bd .count {
		position: absolute;
		top: 0;
		right: 15px;
		width: 59px;
		width: 2.95rem;
		height: 73px;
		height: 3.65rem;
		background-color: #000;
		background-color: rgba(0, 0, 0, .7);
		text-align: center
	}
	
	.com-grid-paper .grid-paper-bd .count .icon-join {
		display: inline-block;
		margin-top: 5px;
		margin-top: .25rem;
		width: 50px;
		width: 2.5rem;
		height: 30px;
		height: 1.5rem;
		color: #ffc81f;
		text-align: center;
		font-size: 42px;
		font-size: 2.1rem;
		line-height: 30px;
		line-height: 1.5rem
	}
	
	.com-grid-paper .grid-paper-bd .count .num,
	.com-grid-paper .grid-paper-bd .count .text {
		display: none
	}
	
	.com-grid-paper .grid-paper-bd .count .num {
		color: #fff;
		font-weight: 700;
		font-size: 14px;
		font-size: .7rem;
		line-height: 16px;
		line-height: .8rem
	}
	
	.com-grid-paper .grid-paper-bd .count .text {
		color: #d2d2d2;
		font-size: 12px;
		font-size: .6rem;
		line-height: 16px;
		line-height: .8rem
	}
	
	.com-grid-paper .grid-paper-bd .count.new .text {
		margin-top: 5px;
		margin-top: .25rem;
		color: #ffc81f;
		font-weight: 700;
		font-size: 18px;
		font-size: .9rem
	}
	
	.com-grid-paper .grid-paper-ft {
		width: 100%
	}
	
	.com-grid-paper .grid-paper-ft .title-description {
		padding: 6px 15px 12px
	}
	
	.com-grid-paper .grid-paper-ft .title-description .title {
		font-size: 20px;
		line-height: 24px
	}
	
	.com-grid-paper .grid-paper-ft .title-description .description {
		margin-top: 5px;
		font-size: 14px;
		line-height: 18px;
		opacity: .6;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
		filter: alpha(opacity=60)
	}
	
	.com-grid-paper.large .grid-paper-bd .imgcover .pic,
	.com-grid-paper.normal .grid-paper-bd .imgcover .pic {
		width: 100%;
		height: auto
	}
	
	.com-grid-paper.large .grid-paper-bd .count,
	.com-grid-paper.normal .grid-paper-bd .count {
		right: 30px
	}
	
	.com-grid-paper.large .grid-paper-bd .category,
	.com-grid-paper.normal .grid-paper-bd .category {
		left: 30px
	}
	
	.com-grid-paper.large .grid-paper-ft .title-description,
	.com-grid-paper.normal .grid-paper-ft .title-description {
		padding-right: 30px;
		padding-left: 30px;
		width: 100%
	}
	
	.com-grid-key-article {
		display: inline-block;
		width: 100%
	}
	
	.com-grid-key-article,
	.com-grid-key-article .grid-key-article-hd {
		position: relative;
		height: 100%
	}
	
	.com-grid-key-article .grid-key-article-hd .imgcover img {
		height: 100%
	}
	
	.com-grid-key-article .grid-key-article-hd:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background-color: #000;
		background-color: rgba(0, 0, 0, .3);
		content: ''
	}
	
	.com-grid-key-article .grid-key-article-bd {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
		padding: 0 10px 12px;
		width: 100%;
		line-height: 0
	}
	
	.com-grid-key-article .grid-key-article-bd .category {
		display: inline-block;
		padding: 0 5px;
		height: 16px;
		background-color: #000;
		background-color: rgba(0, 0, 0, .4);
		line-height: 16px
	}
	
	.com-grid-key-article .grid-key-article-bd .category span {
		float: left;
		padding: 2px 0;
		color: #ffc81f;
		font-size: 12px;
		line-height: 12px
	}
	
	.com-grid-key-article .grid-key-article-bd .category .iconfont:before {
		margin-right: 3px
	}
	
	.com-grid-key-article .grid-key-article-bd .title {
		margin: 5px 0 0;
		color: #fff;
		font-weight: 400;
		font-size: 23px;
		line-height: 28px
	}
	
	.com-grid-key-article .grid-key-article-bd .ribbon {
		margin-top: 2px;
		height: 16px;
		line-height: 16px;
		-webkit-transform: scale(.83333333);
		transform: scale(.83333333);
		-webkit-transform-origin: left;
		transform-origin: left
	}
	
	.com-grid-key-article .grid-key-article-bd .ribbon .iconfont {
		margin-right: 5px;
		color: #fff;
		font-size: 12px
	}
	
	.com-grid-key-article .grid-key-article-bd .ribbon .iconfont:before {
		margin-right: 2px
	}
	
	.com-grid-key-article .grid-key-article-bd .ribbon .iconfont:last-child {
		margin-right: 0
	}
	
	.com-grid-key-article .grid-key-article-ft {
		position: absolute;
		top: 52.5px;
		top: 2.625rem;
		left: 50%;
		z-index: 5;
		margin-left: -27.5px;
		margin-left: -1.375rem;
		width: 55px;
		width: 2.75rem;
		height: 55px;
		height: 2.75rem
	}
	
	.com-grid-key-article .grid-key-article-ft .play-btn {
		width: 100%;
		height: 100%;
		border: 1px solid hsla(0, 0%, 100%, .45);
		border-radius: 50%
	}
	
	.com-grid-key-article .grid-key-article-ft .play-btn:after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: #000;
		background: rgba(0, 0, 0, .25);
		content: ''
	}
	
	.com-grid-key-article .grid-key-article-ft .play-btn .iconfont {
		position: absolute;
		z-index: 5;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 55px;
		line-height: 2.75rem
	}
	
	.com-grid-key-article .grid-key-article-ft .play-btn .iconfont:before {
		position: relative;
		left: 2px;
		left: .1rem;
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 30px;
		font-size: 1.5rem
	}
	
	.com-grid-key-article .grid-key-article-ft .play-btn .time {
		position: absolute;
		bottom: -20px;
		bottom: -1rem;
		left: 0;
		width: 100%;
		color: #fff;
		text-align: center;
		font-size: 13px;
		font-size: .65rem;
		line-height: 15px;
		line-height: .75rem
	}
	
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10600;
		visibility: hidden;
		width: 100%;
		height: 100%;
		background: #000;
		background: rgba(0, 0, 0, .4);
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
		-webkit-transition-duration: .4s;
		transition-duration: .4s
	}
	
	.popup-overlay.modal-overlay-visible {
		visibility: visible;
		opacity: 1;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"
	}
	
	.popup-overlay {
		z-index: 10200
	}
	
	.login-screen,
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10400;
		display: none;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		background: #fff;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}
	
	.login-screen.modal-in,
	.login-screen.modal-out,
	.popup.modal-in,
	.popup.modal-out {
		-webkit-transition-duration: .4s;
		transition-duration: .4s
	}
	
	.login-screen.modal-in,
	.popup.modal-in {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
	
	.login-screen.modal-out,
	.popup.modal-out {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}
	
	.login-screen.absolute,
	.popup.absolute {
		position: absolute
	}
	
	.login-screen.relative,
	.popup.relative {
		position: relative
	}
	
	.login-screen.modal-in,
	.login-screen.modal-out {
		display: block
	}
	
	@media all and (min-width:630px) and (min-height:630px) {
		.popup:not(.tablet-fullscreen) {
			top: 50%;
			left: 50%;
			margin-top: -315px;
			margin-left: -315px;
			width: 630px;
			height: 630px;
			-webkit-transform: translate3d(0, 1024px, 0);
			transform: translate3d(0, 1024px, 0)
		}
		.popup:not(.tablet-fullscreen).modal-in {
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
		.popup:not(.tablet-fullscreen).modal-out {
			-webkit-transform: translate3d(0, 1024px, 0);
			transform: translate3d(0, 1024px, 0)
		}
	}
	
	@media (max-height:629px),
	all and (max-width:629px) {
		html.with-statusbar-overlay .popup {
			top: 20px;
			height: calc(100% - 20px)
		}
		html.with-statusbar-overlay .popup-overlay {
			z-index: 9800
		}
	}
	
	html.with-statusbar-overlay .login-screen,
	html.with-statusbar-overlay .popup.tablet-fullscreen {
		top: 20px;
		height: calc(100% - 20px)
	}
	
	.com-comment-popup .comment-popup-hd {
		position: relative;
		height: 44px;
		background-color: #262626;
		text-align: center;
		font-size: 17px;
		line-height: 44px
	}
	
	.com-comment-popup .comment-popup-hd .left {
		position: absolute;
		top: 0;
		left: 10px;
		left: .5rem;
		width: 44px;
		text-align: left
	}
	
	.com-comment-popup .comment-popup-hd .right {
		position: absolute;
		top: 0;
		right: 10px;
		right: .5rem;
		width: 44px;
		text-align: right
	}
	
	.com-comment-popup .comment-popup-hd .center,
	.com-comment-popup .comment-popup-hd .left a {
		color: #fff
	}
	
	.com-comment-popup .comment-popup-hd .right a {
		color: #ffc81f
	}
	
	.com-comment-popup .comment-popup-hd .left a,
	.com-comment-popup .comment-popup-hd .right a {
		display: inline-block
	}
	
	.com-comment-popup .comment-popup-bd {
		height: 70%
	}
	
	.com-comment-popup .comment-popup-bd form {
		height: 100%
	}
	
	.com-comment-popup .comment-popup-bd form textarea {
		padding: 15px;
		padding: .75rem;
		width: 100%;
		height: 100%;
		border: none;
		font-size: 14px;
		font-size: .7rem;
		resize: none
	}
	
	.menu-overlay-show .menu-overlay {
		display: block;
		opacity: 1;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"
	}
	
	.menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 98;
		display: none;
		width: 100%;
		height: 100%;
		background: transparent;
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"
	}
	
	.com-header {
		position: relative;
		z-index: 99;
		padding: 3px 15px;
		height: 44px;
		background-color: #000;
		color: #fff;
		line-height: 44px
	}
	
	.com-header .header-left {
		float: left;
		height: 100%
	}
	
	.com-header .header-left .logo {
		display: inline-block;
		height: 100%
	}
	
	.com-header .header-left .logo img {
		max-height: 100%;
		height: 100%
	}
	
	.com-header .header-right {
		float: right;
		height: 100%
	}
	
	.com-header .header-right .user {
		position: relative;
		height: 100%
	}
	
	.com-header .header-right .user .user-hd {
		display: inline-block;
		overflow: hidden;
		max-width: 160px;
		height: 100%;
		color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		line-height: 38px
	}
	
	.com-header .header-right .user .user-hd .iconfont {
		position: relative;
		top: 1px;
		margin-right: 4px;
		font-size: 22px
	}
	
	.com-header .header-right .user .user-hd .name {
		position: relative
	}
	
	.com-header .header-right .user .user-bd {
		position: absolute;
		top: 41px;
		right: -15px;
		z-index: 100;
		width: 125px;
		background-color: #1a1a1a;
		text-align: center
	}
	
	.com-header .header-right .user .user-bd .items {
		list-style: none;
		text-align: center
	}
	
	.com-header .header-right .user .user-bd .items .item {
		line-height: 40px
	}
	
	.com-header .header-right .user .user-bd .items .item .iconfont {
		margin-right: 10px;
		width: 22px;
		color: #999;
		vertical-align: middle;
		font-size: 22px;
		line-height: 22px
	}
	
	.com-header .header-right .user .user-bd .items .item a {
		display: inline-block;
		padding: 0 10px;
		border-bottom: 1px solid #313131;
		color: #fff
	}
	
	.com-header .header-right .user .user-bd .items .item:last-child a {
		border-bottom: none
	}
	
	.com-header .header-right .explore {
		position: relative;
		height: 100%
	}
	
	.com-header .header-right .explore .explore-hd {
		position: relative;
		display: inline-block;
		overflow: hidden;
		max-width: 160px;
		height: 100%;
		color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		line-height: 38px
	}
	
	.com-header .header-right .explore .explore-hd .iconfont {
		position: relative;
		margin-right: 4px;
		font-size: 22px
	}
	
	.show {
		display: block
	}
	
	.com-login-popup {
		overflow: auto;
		background-color: #fff;
		color: gray
	}
	
	.com-login-popup .login-popup-hd {
		position: relative;
		padding-top: 50px;
		padding-top: 2.5rem;
		text-align: center
	}
	
	.com-login-popup .login-popup-hd .icon-login-logo {
		display: inline-block;
		margin: 0 auto;
		width: 120px;
		width: 6rem;
		height: 49px;
		height: 2.45rem;
		background: transparent url(/images/icon-login-logo.png) 0 0 no-repeat;
		background-size: contain
	}
	
	.com-login-popup .login-popup-hd .icon-close {
		position: absolute;
		top: 20px;
		top: 1rem;
		right: 20px;
		right: 1rem;
		color: gray;
		font-size: 22px;
		font-size: 1.1rem
	}
	
	.com-login-popup .login-popup-bd {
		margin-top: 40px;
		margin-top: 2rem;
		padding: 0 35px;
		padding: 0 1.75rem;
		font-size: 14px;
		font-size: .7rem
	}
	
	.com-login-popup .login-popup-bd form {
		display: none
	}
	
	.com-login-popup .login-popup-bd form .small-title {
		position: relative;
		color: #b3b3b3;
		text-align: center
	}
	
	.com-login-popup .login-popup-bd form .small-title:before {
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #ccc;
		content: ''
	}
	
	.com-login-popup .login-popup-bd form .small-title span {
		position: relative;
		padding: 0 10px;
		background-color: #fff
	}
	
	.com-login-popup .login-popup-bd form .social-login {
		padding: 16px 0;
		padding: .8rem 0;
		text-align: center;
		font-size: 0
	}
	
	.com-login-popup .login-popup-bd form .social-login .social {
		display: inline-block;
		overflow: hidden;
		margin-left: 20px;
		margin-left: 1rem;
		width: 40px;
		width: 2rem;
		height: 40px;
		height: 2rem;
		border-radius: 50%;
		line-height: 40px;
		line-height: 2rem
	}
	
	.com-login-popup .login-popup-bd form .social-login .social.iconfont {
		color: #fff;
		font-size: 20px;
		font-size: 1rem
	}
	
	.com-login-popup .login-popup-bd form .social-login .social.icon-weibo {
		background-color: #f3543f
	}
	
	.com-login-popup .login-popup-bd form .social-login .social.icon-qq {
		background-color: #198ef2
	}
	
	.com-login-popup .login-popup-bd form .social-login .social:first-child {
		margin-left: 0
	}
	
	.com-login-popup .login-popup-bd form .form-control {
		margin-top: 10px;
		margin-top: .5rem
	}
	
	.com-login-popup .login-popup-bd form .form-control input {
		padding: 10px 14px;
		padding: .5rem .7rem;
		width: 100%;
		border: 1px solid #e5e5e5;
		border-radius: 0;
		font-size: 14px;
		font-size: .7rem
	}
	
	.com-login-popup .login-popup-bd form .form-control input[type=radio] {
		display: inline-block;
		width: auto
	}
	
	.com-login-popup .login-popup-bd form .form-control a {
		border-bottom: 1px solid #d6d6d6;
		color: #b3b3b3;
		font-size: 12px;
		font-size: .6rem
	}
	
	.com-login-popup .login-popup-bd form .form-control:first-child {
		margin-top: 0
	}
	
	.com-login-popup .login-popup-bd form .form-action {
		margin-top: 20px;
		margin-top: 1rem;
		font-size: 12px;
		font-size: .6rem
	}
	
	.com-login-popup .login-popup-bd form .form-action .btn {
		display: block;
		padding: 0;
		width: 100%;
		height: 45px;
		height: 2.25rem;
		background-color: #ffc81f;
		color: #fff;
		text-align: center;
		font-size: 17px;
		font-size: .85rem;
		line-height: 45px;
		line-height: 2.25rem
	}
	
	.com-login-popup .login-popup-bd form .form-action .btn.cancel {
		margin-top: 10px;
		margin-top: .5rem;
		border: 1px solid #eaeaea;
		background-color: #fff;
		color: gray
	}
	
	.com-login-popup .login-popup-bd form .form-links {
		font-size: 12px;
		font-size: .6rem;
		line-height: 44px
	}
	
	.com-login-popup .login-popup-bd form .form-links a {
		color: gray
	}
	
	.com-login-popup .login-popup-bd form .form-links a:first-child {
		float: left
	}
	
	.com-login-popup .login-popup-bd form .form-links a:last-child {
		float: right
	}
	
	.com-login-popup .login-popup-bd form.active {
		display: block
	}
	
	.com-grid-article {
		position: relative;
		display: inline-block;
		width: 100%;
		height: 100%
	}
	
	.com-grid-article .grid-article-hd {
		position: relative;
		height: 105px;
		height: 5.25rem
	}
	
	.com-grid-article .grid-article-hd .imgcover img {
		height: 100%
	}
	
	.com-grid-article .grid-article-hd .category {
		position: absolute;
		bottom: 8px;
		left: 4px;
		padding: 0 5px;
		height: 16px;
		background-color: #000;
		background-color: rgba(0, 0, 0, .4);
		line-height: 16px
	}
	
	.com-grid-article .grid-article-hd .category span {
		float: left;
		padding: 2px 0;
		color: #ffc81f;
		font-size: 12px;
		line-height: 12px
	}
	
	.com-grid-article .grid-article-hd .category span:before {
		margin-right: 3px
	}
	
	.com-grid-article .grid-article-hd .ribbon {
		position: absolute;
		right: 4px;
		bottom: 8px;
		height: 16px;
		line-height: 16px;
		-webkit-transform: scale(.83333333);
		transform: scale(.83333333)
	}
	
	.com-grid-article .grid-article-hd .ribbon .iconfont {
		margin-right: 5px;
		color: #fff;
		font-size: 12px
	}
	
	.com-grid-article .grid-article-hd .ribbon .iconfont:before {
		margin-right: 2px
	}
	
	.com-grid-article .grid-article-hd .ribbon .iconfont:last-child {
		margin-right: 0
	}
	
	.com-grid-article .grid-article-bd {
		padding: 8px 8px 4px
	}
	
	.com-grid-article .grid-article-bd h1 {
		overflow: hidden;
		max-height: 60px;
		max-height: 3rem;
		height: 60px;
		height: 3rem;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		line-height: 1rem
	}
	
	.com-grid-article .grid-article-bd .smart-date {
		color: #b2b2b2;
		font-size: 12px
	}
	
	.baseslide-container .baseslide-wrapper {
		position: relative;
		overflow: hidden;
		height: auto;
		-webkit-transition: height .5s;
		transition: height .5s
	}
	
	.baseslide-container .baseslide-wrapper .baseslide {
		position: absolute;
		top: 0;
		left: 0;
		visibility: visible;
		width: 100%;
		opacity: 1;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
		backface-visibility: hidden;
		will-change: transform
	}
	
	.baseslide-container .baseslide-wrapper .baseslide.animate {
		-webkit-transition: -webkit-transform .5s ease;
		transition: -webkit-transform .5s ease;
		transition: transform .5s ease;
		transition: transform .5s ease, -webkit-transform .5s ease
	}
	
	.baseslide-container .baseslide-wrapper .baseslide.left {
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%)
	}
	
	.baseslide-container .baseslide-wrapper .baseslide.right {
		-webkit-transform: translateX(100%);
		transform: translateX(100%)
	}
	
	.baseslide-container .baseslide-wrapper .baseslide.mid {
		-webkit-transform: translateX(0);
		transform: translateX(0)
	}
	
	.com-users-center-radar .users-center-radar-hd {
		position: relative;
		width: 375px;
		width: 16rem;
		height: 240px;
		height: 10.24rem;
		background: url(../../../assets/images/radar.png) no-repeat;
		background-size: 100%;
		text-align: center
	}
	
	.com-users-center-radar .users-center-radar-hd .mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		background-color: rgba(0, 0, 0, .5);
	}
	
	.com-users-center-radar .users-center-radar-hd .radar {
		position: relative;
		width: 240px;
		width: 10.24rem;
		height: 240px;
		height: 10.24rem
	}
	
	.com-users-center-radar .users-center-radar-hd .avatar {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -26px;
		margin-top: -1.10933333rem;
		margin-left: -26px;
		margin-left: -1.10933333rem;
		width: 52px;
		width: 2.21866667rem;
		height: 52px;
		height: 2.21866667rem
	}
	
	.com-users-center-radar .users-center-radar-ft {
		padding: 0 20px 6px;
		padding: 0 .85333333rem .256rem;
		background-color: #fff
	}
	
	.com-users-center-radar .users-center-radar-ft .introduce {
		overflow: hidden;
		width: 100%;
		height: 50px;
		height: 2.13333333rem;
		border-bottom: 1px solid #c7c7c7;
		color: #000;
		line-height: 50px;
		line-height: 2.13333333rem
	}
	
	.com-users-center-radar .users-center-radar-ft .record {
		height: 40px;
		height: 1.70666667rem;
		color: #bdbdbd;
		font-size: 12px;
		font-size: .512rem;
		line-height: 40px;
		line-height: 1.70666667rem
	}
	
	.com-users-center-switch {
		margin-top: 5px;
		margin-top: .25rem
	}
	
	.com-users-center-switch .baseslide-bullets {
		margin-bottom: 5px;
		margin-bottom: .25rem;
		background: #fff
	}
	
	.com-users-center-switch .baseslide-bullets ul li {
		float: left;
		width: 50%;
		text-align: center
	}
	
	.com-users-center-switch .baseslide-bullets ul li a {
		position: relative;
		display: inline-block;
		width: 102px;
		width: 5.1rem;
		height: 46px;
		height: 2.3rem;
		text-align: center;
		line-height: 46px;
		line-height: 2.3rem
	}
	
	.com-users-center-switch .baseslide-bullets ul li.active a:after {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		height: .1rem;
		background: #ffc81f;
		content: ''
	}
	
	.com-users-center-switch .baseslide-wrapper,
	.com-users-center-switch .baseslide-wrapper .baseslide {
		width: 100%
	}
	
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container {
		position: relative
	}
	
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container .packery-item {
		margin-top: 2px;
		margin-top: .1rem
	}
	
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container .packery-item.combo .com-grid-article,
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container .packery-item.combo .com-grid-makemoney {
		width: 159px;
		width: 7.95rem;
		height: 195px;
		height: 9.75rem;
		background-color: #fff;
		vertical-align: top
	}
	
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container .packery-item.combo .com-grid-article:nth-child(2n),
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container .packery-item.combo .com-grid-makemoney:nth-child(2n) {
		margin-left: 2px;
		margin-left: .1rem
	}
	
	.com-users-center-switch .baseslide-wrapper .baseslide .packery-container .packery-item.single .com-grid-key-article {
		height: 195px;
		height: 9.75rem;
		background-color: #fff;
		vertical-align: top
	}
	
	.users.center {
		background-color: #f2f2f2
	}
	
	.users.center .page-content {
		width: 100%
	}
	
	.users.center .page-content .collect-article .packery-container {
		position: relative
	}
	
	.users.center .page-content .collect-article .packery-container .packery-item {
		margin-top: 2px;
		margin-top: .1rem
	}
	
	.users.center .page-content .collect-article .packery-container .packery-item.combo .com-grid-article,
	.users.center .page-content .collect-article .packery-container .packery-item.combo .com-grid-makemoney {
		width: 159px;
		width: 7.95rem;
		height: 195px;
		height: 9.75rem;
		background-color: #fff;
		vertical-align: top
	}
	
	.users.center .page-content .collect-article .packery-container .packery-item.combo .com-grid-article:nth-child(2n),
	.users.center .page-content .collect-article .packery-container .packery-item.combo .com-grid-makemoney:nth-child(2n) {
		margin-left: 2px;
		margin-left: .1rem
	}
	
	.users.center .page-content .collect-article .packery-container .packery-item.single .com-grid-articles-banner {
		height: 180px;
		height: 9rem;
		background-color: #fff;
		vertical-align: top
	}
	
	.users.center .page-content .collect-article .packery-container .packery-item.single .com-grid-key-article {
		height: 195px;
		height: 9.75rem;
		background-color: #fff;
		vertical-align: top
	}
</style>