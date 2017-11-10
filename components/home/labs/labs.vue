<template>
	<div class="page-content">
		<div class="papers clearfix" data-lastkey="1509210040"  v-scroll="loadMore">
			<a v-for="a in arr" href="#" class="com-grid-paper small" data-initialized="true" :data-guid="a.id">
				<div class="grid-paper-bd">
					<div class="imgcover pic"> <img class=" lazyloaded" :src="a.img"> </div>
					<p class="category clearfix circle x44"> <img class=" lazyloaded" alt="投票" :src="a.pic"> </p>
					<div class="count new" data-publishdate="2017-11-09 01:00:37 +0800"><span class="iconfont icon-join"></span> <span class="text" style="display: block;">NEW</span></div>
				</div>
				<div class="grid-paper-ft">
					<div class="title-description">
						<h1 class="title">{{a.title}}</h1>
						<p class="description">{{a.desc}}</p>
					</div>
				</div>
			</a>
		</div>

		<div class="com-loader loading " data-guid="2" data-initialized="true">
			<div class="loader-bd">
				<p class="notext" :style="{display: bool?'none':'block'}">没有更多啦</p>
				<a rel="nofollow" href="#" class="btn showtext ripple" v-show="bool">加载更多</a>
				<div class="spinner" v-show="bool">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [],
				n: 1,
				bool:true
			}
		},
		methods: {
			loadMore: function() {
				self = this;
				this.$http.get("../assets/json/labs.json").then(function(data) {
					 self.arr = self.arr.concat(data.body.splice((self.n-1)*10,10));
					self.n = self.n + 1;
				})
			}
		},
		mounted() {
			this.loadMore();
		},
		directives: {
					scroll: {
						bind: function(el, binding) {
							window.onscroll = function(){			
								if(document.documentElement.scrollTop + document.documentElement.clientHeight>= document.documentElement.scrollHeight) {
									binding.value()
									if(self.n >= 6){
										self.bool = false;
									}
								}
							}
						}
					}
				}
	}
</script>

<style>
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
		/*background: transparent url(/images/icon-login-logo.png) 0 0 no-repeat;*/
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
	
	.panel-overlay {
		z-index: 5999;
		display: none;
		background: #000;
		background: rgba(0, 0, 0, .4);
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"
	}
	
	.panel,
	.panel-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-transition-duration: .4s;
		transition-duration: .4s
	}
	
	.panel {
		z-index: 1000;
		background: #111
	}
	
	.panel.panel-left {
		top: 0;
		width: 293px;
		width: 12.50133333rem
	}
	
	.panel.panel-left.panel-cover {
		left: -294px;
		left: -12.544rem;
		z-index: 6000
	}
	
	.panel.panel-left.panel-reveal {
		left: 0
	}
	
	.panel.panel-right {
		top: 0;
		width: 293px;
		width: 12.50133333rem
	}
	
	.panel.panel-right.panel-cover {
		right: -293px;
		right: -12.50133333rem;
		z-index: 6000
	}
	
	.panel.panel-right.panel-reveal {
		right: 0
	}
	
	.panel.panel-bottom {
		left: 0;
		height: 293px;
		height: 12.50133333rem
	}
	
	.panel.panel-bottom.panel-cover {
		bottom: -293px;
		bottom: -12.50133333rem;
		z-index: 6000
	}
	
	.panel.panel-bottom.panel-reveal {
		bottom: 0
	}
	
	body.with-panel-bottom-cover .panel-overlay,
	body.with-panel-left-cover .panel-overlay,
	body.with-panel-right-cover .panel-overlay {
		display: block;
		opacity: 1;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"
	}
	
	body.with-panel-bottom-reveal .views,
	body.with-panel-left-reveal .views,
	body.with-panel-right-reveal .views {
		-webkit-transition-duration: .4s;
		transition-duration: .4s;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform
	}
	
	body.with-panel-bottom-reveal .panel-overlay,
	body.with-panel-left-reveal .panel-overlay,
	body.with-panel-right-reveal .panel-overlay {
		display: block;
		opacity: 1;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"
	}
	
	body.with-panel-left-reveal .views {
		-webkit-transform: translate3d(12.50133333px, 0, 0);
		-webkit-transform: translate3d(12.50133333rem, 0, 0);
		transform: translate3d(12.50133333px, 0, 0);
		transform: translate3d(12.50133333rem, 0, 0)
	}
	
	body.with-panel-left-reveal .panel-overlay {
		margin-left: 293px;
		margin-left: 12.50133333rem
	}
	
	body.with-panel-left-cover .panel-left {
		-webkit-transform: translate3d(12.50133333px, 0, 0);
		-webkit-transform: translate3d(12.50133333rem, 0, 0);
		transform: translate3d(12.50133333px, 0, 0);
		transform: translate3d(12.50133333rem, 0, 0)
	}
	
	body.with-panel-right-reveal .views {
		-webkit-transform: translate3d(-12.50133333px, 0, 0);
		-webkit-transform: translate3d(-12.50133333rem, 0, 0);
		transform: translate3d(-12.50133333px, 0, 0);
		transform: translate3d(-12.50133333rem, 0, 0)
	}
	
	body.with-panel-right-reveal .panel-overlay {
		margin-left: -293px;
		margin-left: -12.50133333rem
	}
	
	body.with-panel-right-cover .panel-right {
		-webkit-transform: translate3d(-12.50133333px, 0, 0);
		-webkit-transform: translate3d(-12.50133333rem, 0, 0);
		transform: translate3d(-12.50133333px, 0, 0);
		transform: translate3d(-12.50133333rem, 0, 0)
	}
	
	body.with-panel-bottom-reveal .views {
		-webkit-transform: translate3d(12.50133333px, 0, 0);
		-webkit-transform: translate3d(12.50133333rem, 0, 0);
		transform: translate3d(12.50133333px, 0, 0);
		transform: translate3d(12.50133333rem, 0, 0)
	}
	
	body.with-panel-bottom-reveal .panel-overlay {
		margin-top: -293px;
		margin-top: -12.50133333rem
	}
	
	body.with-panel-bottom-cover .panel-bottom {
		-webkit-transform: translate3d(0, -12.50133333px, 0);
		-webkit-transform: translate3d(0, -12.50133333rem, 0);
		transform: translate3d(0, -12.50133333px, 0);
		transform: translate3d(0, -12.50133333rem, 0)
	}
	
	body.panel-closing .views {
		-webkit-transition-duration: .4s;
		transition-duration: .4s;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform
	}
	
	.com-sidebar-panel {
		display: -webkit-box!important;
		display: -moz-box!important;
		height: 100%;
		background-color: #1e1e1e;
		background-color: rgba(30, 30, 30, .99);
		color: hsla(0, 0%, 100%, .3);
		-webkit-box-orient: vertical;
		box-orient: vertical
	}
	
	.com-sidebar-panel .open-panel {
		position: absolute;
		right: -54px;
		right: -2.304rem;
		bottom: 16px;
		bottom: .68266667rem;
		width: 40px;
		width: 1.70666667rem;
		height: 40px;
		height: 1.70666667rem;
		border-radius: 50%;
		background-color: #000;
		background-color: rgba(0, 0, 0, .8);
		-webkit-transition: -webkit-transform .5s;
		transition: -webkit-transform .5s;
		transition: transform .5s;
		transition: transform .5s, -webkit-transform .5s
	}
	
	.com-sidebar-panel .iscroll-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		-webkit-box-flex: 1;
		box-flex: 1
	}
	
	.com-sidebar-panel .iscroll-container .iscroll {
		z-index: 99;
		width: 100%;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0)
	}
	
	.com-sidebar-panel .sidebar-panel-hd {
		padding-bottom: 10px;
		padding-bottom: .42666667rem;
		text-align: center
	}
	
	.com-sidebar-panel .sidebar-panel-hd .radar {
		display: block;
		margin: 0 auto;
		width: 223px;
		width: 9.51466667rem;
		height: 213px;
		height: 9.088rem
	}
	
	.com-sidebar-panel .sidebar-panel-hd .avatar {
		position: absolute;
		top: 86px;
		top: 3.66933333rem;
		left: 50%;
		margin-left: -20px;
		margin-left: -.85333333rem;
		width: 40px;
		width: 1.70666667rem;
		height: 40px;
		height: 1.70666667rem
	}
	
	.com-sidebar-panel .sidebar-panel-hd .name-description {
		position: relative;
		margin: 0 30px;
		margin: 0 1.28rem
	}
	
	.com-sidebar-panel .sidebar-panel-hd .name-description .name {
		display: block;
		overflow: hidden;
		padding: 0 8px 10px;
		padding: 0 .34133333rem .42666667rem;
		width: 100%;
		height: 30px;
		height: 1.28rem;
		color: #ffc81f;
		white-space: nowrap;
		font-size: 14px;
		font-size: .59733333rem
	}
	
	.com-sidebar-panel .sidebar-panel-hd .name-description .description {
		overflow: hidden;
		padding: 0 0 15px;
		padding: 0 0 .64rem;
		height: 27px;
		height: 1.152rem;
		color: hsla(0, 0%, 100%, .3);
		font-size: 12px;
		font-size: .512rem;
		line-height: 12px;
		line-height: .512rem
	}
	
	.com-sidebar-panel .sidebar-panel-hd .name-description:after {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: hsla(0, 0%, 100%, .4);
		content: '';
		transform: scaleY(.5);
		-webkit-transform: scaleY(.5)
	}
	
	.com-sidebar-panel .sidebar-panel-hd.logined .name-description .name {
		color: #fff
	}
	
	.com-sidebar-panel .sidebar-panel-hd.logined .name-description .description {
		display: block
	}
	
	.com-sidebar-panel .sidebar-panel-bd {
		padding: 0 30px;
		padding: 0 1.28rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item {
		padding-left: 20px;
		padding-left: .85333333rem;
		height: auto
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a {
		position: relative;
		display: inline-block;
		padding: 16px 0 16px 62px;
		padding: .68266667rem 0 .68266667rem 2.64533333rem;
		width: 100%;
		height: 50px;
		height: 2.13333333rem;
		color: hsla(0, 0%, 100%, .5);
		font-size: 18px;
		font-size: .768rem;
		line-height: 18px;
		line-height: .768rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont {
		position: absolute;
		top: 17px;
		top: .72533333rem;
		left: 0;
		width: 22px;
		text-align: center;
		font-size: 25px
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-toDown,
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-toTop {
		position: relative;
		top: -.5px;
		top: -.02133333rem;
		left: 0;
		left: 2px;
		left: .08533333rem;
		font-weight: 400
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-toDown:before,
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-toTop:before {
		font-size: 12px;
		font-size: .512rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-logo,
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-shoucang {
		top: 18px;
		top: .768rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .iconfont.icon-fenlei {
		top: 19px;
		top: .81066667rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .min {
		font-size: 12px;
		font-size: .512rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item a .word {
		font-size: 18px;
		font-size: .768rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item.current a {
		color: #ffc81f
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item.news .news-items {
		display: none;
		overflow: hidden
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item.news .news-items .news-item a {
		padding: 12px 0 12px 62px;
		padding: .512rem 0 .512rem 2.64533333rem;
		height: 42px;
		height: 1.792rem;
		color: hsla(0, 0%, 100%, .4);
		font-size: 18px;
		font-size: .768rem;
		line-height: 18px;
		line-height: .768rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item.news .news-items .news-item a .iconfont {
		top: 10px;
		top: .42666667rem
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item.news .news-items .news-item a .iconfont:before {
		font-size: 18px
	}
	
	.com-sidebar-panel .sidebar-panel-bd .items .item.news .news-items .news-item.current a {
		color: #ffc81f
	}
	
	.com-sidebar-panel .sidebar-panel-ft {
		position: relative;
		margin: 0 30px;
		margin: 0 1.28rem;
		padding: 25px 0 22px;
		padding: 1.06666667rem 0 .93866667rem
	}
	
	.com-sidebar-panel .sidebar-panel-ft .aboutus,
	.com-sidebar-panel .sidebar-panel-ft .mock-input {
		height: 28px;
		height: 1.19466667rem;
		border-radius: 28px;
		border-radius: 1.19466667rem;
		font-size: 12px;
		line-height: 28px;
		line-height: 1.19466667rem
	}
	
	.com-sidebar-panel .sidebar-panel-ft .aboutus {
		text-align: center;
		line-height: 26px;
		line-height: 1.10933333rem
	}
	
	.com-sidebar-panel .sidebar-panel-ft .search {
		position: relative;
		float: left;
		width: 133px;
		width: 5.67466667rem;
		color: hsla(0, 0%, 100%, .3)
	}
	
	.com-sidebar-panel .sidebar-panel-ft .search .mock-input {
		padding: 0 12px;
		padding: 0 .512rem;
		background-color: #333
	}
	
	.com-sidebar-panel .sidebar-panel-ft .search .icon-search {
		position: absolute;
		top: 0;
		right: 12px;
		right: .512rem
	}
	
	.com-sidebar-panel .sidebar-panel-ft .search:after {
		position: absolute;
		top: -15px;
		top: -.64rem;
		left: 0;
		width: 233px;
		width: 9.94133333rem;
		height: 1px;
		background-color: hsla(0, 0%, 100%, .4);
		content: '';
		transform: scaleY(.5);
		-webkit-transform: scaleY(.5)
	}
	
	.com-sidebar-panel .sidebar-panel-ft .aboutus {
		float: right;
		padding: 0 9px;
		padding: 0 .384rem;
		width: 82px;
		width: 3.49866667rem;
		border: 1px solid hsla(0, 0%, 100%, .3);
		color: hsla(0, 0%, 100%, .3)
	}
	
	.com-sidebar-panel .open-panel .menu {
		position: absolute;
		top: 50%;
		right: auto;
		bottom: auto;
		left: 50%;
		width: 22px;
		height: 2px;
		background-color: #fff;
		-webkit-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%)
	}
	
	.com-sidebar-panel .open-panel .menu:after,
	.com-sidebar-panel .open-panel .menu:before {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: inherit;
		content: '';
		-webkit-transition: -webkit-transform .5s, width .5s, top .3s;
		-webkit-transition: width .5s, top .3s, -webkit-transform .5s;
		transition: width .5s, top .3s, -webkit-transform .5s;
		transition: transform .5s, width .5s, top .3s;
		transition: transform .5s, width .5s, top .3s, -webkit-transform .5s;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden
	}
	
	.com-sidebar-panel .open-panel .menu:before {
		-webkit-transform: translateY(-6px);
		transform: translateY(-6px);
		-webkit-transform-origin: right top;
		transform-origin: right top
	}
	
	.com-sidebar-panel .open-panel .menu:after {
		-webkit-transform: translateY(6px);
		transform: translateY(6px);
		-webkit-transform-origin: right bottom;
		transform-origin: right bottom
	}
	
	.com-sidebar-panel.active .open-panel {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg)
	}
	
	.com-sidebar-panel.active .open-panel .menu:after,
	.com-sidebar-panel.active .open-panel .menu:before {
		width: 50%;
		-webkit-transition: -webkit-transform .5s, width .5s;
		-webkit-transition: width .5s, -webkit-transform .5s;
		transition: width .5s, -webkit-transform .5s;
		transition: transform .5s, width .5s;
		transition: transform .5s, width .5s, -webkit-transform .5s
	}
	
	.com-sidebar-panel.active .open-panel .menu:before {
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg)
	}
	
	.com-sidebar-panel.active .open-panel .menu:after {
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg)
	}
	
	.papers.index {
		background-color: #f2f2f2
	}
	
	.papers.index .page-content .papers {
		position: relative
	}
	
	.papers.index .page-content .papers .com-grid-paper {
		margin-bottom: 2px;
		margin-bottom: .1rem;
		width: 320px;
		width: 16rem
	}
	
	.papers.index .page-content .papers .com-grid-paper:nth-child(2n) {
		margin-right: 0
	}
</style>