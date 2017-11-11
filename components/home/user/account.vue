<template>
	<div>
		<div class="page-content">
			<form class="com-account-setting" role="form" id="edit_user_1178632" enctype="multipart/form-data" action="/mobile/users/1178632" accept-charset="UTF-8" method="post" data-initialized="true" data-guid="2"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="pYOh3xsW8LFECwUekThqSlhTruPR45dd5U1btmKldrsI/vAeLPYSQfqQwMmqiFaXCMiU7pilWSBqcMI/V0heHQ==">
				<div class="account-setting-bd">
					<p class="tip">个人信息</p>
					<div class="info">
						<div class="form-group fileupload"><label for="">头像</label> <input type="file" name="user[face_pic]" id="user_face_pic"> <span class="iconfont icon-right"></span>
							<div class="preview"><img src="http://m.qdaily.com/images/missing_face.png" alt="Lisen"></div>
						</div>
						<div class="form-group"><label for="">姓名</label> <input type="text" :value="name" name="user[username]" id="user_username"> </div>
						<div class="form-group"><label for="">简介</label> <input type="text" name="user[description]" id="user_description" :value="desc"> </div>
					</div>
					<p class="tip">联系方式</p>
					<div class="contact">
						<div class="form-group"><label for="">邮箱</label> <input type="text" :value="email" name="user[email]" id="user_email"> </div>
					</div>
					<a href="/mobile/users/password" class="password">
						<div class="form-group"><label for="">修改密码</label><span class="iconfont icon-right"></span></div>
					</a>
				</div>
				<div class="account-setting-ft">
					<div class="btn-wrapper"><button type="submit" class="btn save">保存</button></div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				email:'',
				desc:'',
				username:''
			}
		},
		computed:{
			name: function(){
				return this.$cookie.get('username');
			}	
		},
		mounted(){
			var self = this;
			this.$http.post("http://10.30.152.84:3000/users/getInfo",{
				username:this.$cookie.get('username'),
			}).then(function(data){
				self.email = data.body.email;
				self.desc = data.body.description;
			})
		}
	}
</script>

<style>
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
	
	.com-account-setting {
		background-color: #ededed;
		color: gray;
		font-size: 14px;
		font-size: .7rem
	}
	
	.com-account-setting .tip {
		padding-left: 10px;
		padding-left: .5rem;
		height: 38px;
		height: 1.9rem;
		color: #b2b2b2;
		line-height: 38px;
		line-height: 1.9rem
	}
	
	.com-account-setting .account-setting-bd .contact,
	.com-account-setting .account-setting-bd .info,
	.com-account-setting .account-setting-bd .password {
		position: relative;
		display: block;
		padding-left: 10px;
		padding-left: .5rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		background-color: #fff
	}
	
	.com-account-setting .account-setting-bd .password {
		margin-top: 38px;
		margin-top: 1.9rem;
		color: gray
	}
	
	.com-account-setting .account-setting-bd .form-group {
		padding-right: 10px;
		padding-right: .5rem;
		height: 41px;
		height: 2.05rem;
		border-bottom: 1px solid #d9d9d9;
		background-color: #fff;
		line-height: 41px;
		line-height: 2.05rem
	}
	
	.com-account-setting .account-setting-bd .form-group input[type=text] {
		float: right;
		margin-top: 5px;
		margin-top: .25rem;
		width: 225px;
		width: 11.25rem;
		height: 31px;
		height: 1.55rem;
		border: none;
		color: #b2b2b2;
		text-align: right;
		font-size: 14px;
		font-size: .7rem;
		line-height: 31px;
		line-height: 1.55rem
	}
	
	.com-account-setting .account-setting-bd .form-group .icon-right {
		float: right;
		width: 16px
	}
	
	.com-account-setting .account-setting-bd .form-group.fileupload {
		position: relative;
		height: 70px;
		height: 3.5rem;
		line-height: 70px;
		line-height: 3.5rem
	}
	
	.com-account-setting .account-setting-bd .form-group.fileupload .preview {
		float: right;
		overflow: hidden;
		margin-top: 10px;
		margin-top: .5rem;
		margin-right: 7px;
		margin-right: .35rem;
		width: 50px;
		width: 2.5rem;
		height: 50px;
		height: 2.5rem;
		border-radius: 50%
	}
	
	.com-account-setting .account-setting-bd .form-group.fileupload .preview img {
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%
	}
	
	.com-account-setting .account-setting-bd .form-group.fileupload input[type=file] {
		position: absolute;
		right: 10px;
		right: .5rem;
		width: 150px;
		width: 7.5rem;
		height: 70px;
		height: 3.5rem;
		opacity: 0;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
		filter: alpha(opacity=0)
	}
	
	.com-account-setting .account-setting-bd .form-group:last-child {
		border-bottom: none
	}
	
	.com-account-setting .account-setting-ft {
		margin-top: 38px;
		margin-top: 1.9rem
	}
	
	.com-account-setting .account-setting-ft .btn-wrapper {
		position: relative;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
		text-align: center
	}
	
	.com-account-setting .account-setting-ft .btn-wrapper .btn {
		padding: 0;
		width: 240px;
		width: 12rem;
		height: 40px;
		height: 2rem;
		background-color: transparent;
		color: gray;
		font-size: 15px;
		font-size: .75rem;
		line-height: 40px;
		line-height: 2rem
	}
	
	.com-account-setting .account-setting-ft .btn-wrapper:last-child {
		margin-bottom: 0
	}
	
	body {
		background-color: #eee
	}
	
	body .page-content {
		width: 100%
	}
</style>