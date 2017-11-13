<template>
	<div style="background:#fff;overflow: hidden;">
		<div class="page-content">
			<div class="com-search-form" data-initialized="true" data-guid="1">
				<div class="search-form-bd">
					<form action="/mobile/searches" target="_self">
						<input type="text" name="key" value="" id="TEXT">
						<p class="submit" id="submit"><span class="iconfont icon-search"></span> <span class="text" id="text">搜索</span></p>
					</form>
				</div>
			</div>
			<div class="com-hotwords">
				<div class="hotwords-bd">
					<p class="tip">大家都在搜</p>
					<ul class="items words clearfix">
						<li class="item word" v-for="a in arr">
							<a href="/mobile/searches?key=a">{{a}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				arr: []
			}
		},
		methods:{
			Show: function(){
				var oText = document.getElementById("TEXT");
				var oSubmit = document.getElementById("submit");
				var otext1 = document.getElementById("text");
				oText.onfocus = function(){
					oSubmit.className += " " + 'enabled';
					otext1.innerHTML = '';
				}
				oText.onblur = function(){
					oSubmit.className = "submit";
					otext1.innerHTML = '搜索';
				}
				
			},
			localMore: function(){
				var _this = this;
				this.$http.get('../components/home/search/search.json').then(function(data){
					_this.arr = _this.arr.concat(data.body[0].title);
				})
			}
		},
		mounted(){
			this.Show();
			this.localMore();
		}
	}
</script>

<style scoped>
	*, :after, :before {
    box-sizing: border-box;
}
	body .page-content {
    padding: 0 15px;
    padding: 0 .75rem;
}
.com-search-form {
    margin: 10px -5px 0;
    margin: .5rem -.25rem 0;
}
.com-search-form .search-form-bd form {
    position: relative;
    height: 28px;
    height: 1.4rem;
}



.com-search-form .search-form-bd form input {
    padding: 7px 10px;
    padding: .35rem .5rem;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;
    background-color: #efefef;
    color: #000;
}


.com-search-form .search-form-bd form .submit, .com-search-form .search-form-bd form input {
    padding: 7px 0;
    padding: .35rem 0;
    font-size: 14px;
    font-size: .7rem;
    line-height: 14px;
    line-height: .7rem;
}

input, option, select, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

body, button, input, select, textarea {
    font-size: 14px;
    font-family: Arial,STHeiti,华文黑体,Microsoft YaHei,微软雅黑,SimSun,宋体,Helvetica,Tahoma,Arial sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-backface-visibility: hidden;
}

input {
    line-height: normal;
}

button, input, optgroup, select, textarea {
    margin: 0;
    color: inherit;
    font: inherit;
}
.com-search-form .search-form-bd form .submit.enabled{
	right:0;
	margin-right:0;
	padding:7px 10px;
	padding:.35rem .5rem;
}
.com-search-form .search-form-bd form .submit {
    position: absolute;
    top: 0;
    right: 50%;
    margin-right: -24px;
    margin-right: -1.2rem;
    height: 100%;
    transition: all .2s;
    -webkit-transition: all .2s;
}
.com-search-form .search-form-bd form .submit, .com-search-form .search-form-bd form input {
    padding: 7px 0;
    padding: .35rem 0;
    font-size: 14px;
    font-size: .7rem;
    line-height: 14px;
    line-height: .7rem;
}
p {
    word-break: break-word;
}

p, ul {
    margin: 0;
}
.com-search-form .search-form-bd form .submit .icon-search {
    color: gray;
}


.iconfont {
    font-style: normal;
    font-size: 16px;
    font-family: iconfont!important;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
}
.com-search-form .search-form-bd form .submit .icon-search:before {
    position: relative;
    top: -1px;
    top: -.05rem;
    margin-right: 2px;
    font-size: 15px;
    font-size: .75rem;
}

.icon-search:before {
    content: "\E620";
}
.com-search-form .search-form-bd form .submit .text {
    color: gray;
}

.com-hotwords {
    margin-top: 15px;
    margin-top: .75rem;
}
.com-hotwords .hotwords-bd .tip {
    font-size: 17px;
    font-size: .85rem;
}
.com-hotwords .hotwords-bd .words {
    margin-top: 14px;
    margin-top: .7rem;
    padding-top: 14px;
    padding-top: .7rem;
    border-top: 1px solid #e6e6e6;
    font-size: 12px;
    font-size: .6rem;
}
.clearfix:after, .clearfix:before {
    display: table;
    content: " ";
}
.com-hotwords .hotwords-bd .words .word {
    float: left;
    margin-bottom: 8px;
    margin-bottom: .4rem;
    width: 33.33333333%;
}
</style>