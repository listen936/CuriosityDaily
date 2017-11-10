<template>
	<div class="page-content">
		<div class="packery-container articles clearfix" v-scroll="loadMore">
			<div class="packery-item single" v-for="a in arr">
				<a href="#" class="com-grid-key-article" data-initialized="true" :data-guid="a.id">
					<div class="grid-key-article-hd">
						<div class="imgcover pic"><img class=" lazyloaded"  :alt="a.title" :src="a.img"></div>
					</div>
					<div class="grid-key-article-bd">
						<p class="category"> <span class="iconfont icon-shangye"></span> <span>{{a.classify}}</span> </p>
						<h1 class="title">{{a.title}}</h1>
						<div class="ribbon"> <span class="iconfont icon-message">{{a.message}}</span> <span class="iconfont icon-heart">{{a.heart}}</span> </div>
					</div>
				</a>
			</div>
		</div>
		<div class="com-loader loading " data-guid="2" data-initialized="true">
			<div class="loader-bd">
				<p class="notext" :style="{display: bool?'none':'block'}">没有更多啦</p>
				<a rel="nofollow" href="#" class="btn showtext ripple" v-show = "bool">加载更多</a>
				<div class="spinner" v-show = "bool">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				arr:[],
				n:0,
				bool:true
			}
		},
		methods:{
			loadMore:function(){
				self = this;
				this.$http.get("../assets/json/news.json").then(function(data){
					self.arr = self.arr.concat(data.body.splice(self.n*10,10));
					self.n = self.n + 1;
					if(self.n >= 8){
						self.bool = false;
					}
				})
			}
		},
		mounted(){
			this.loadMore();
		},
		directives:{
			scroll:{
				bind:function(el,binding){
					window.onscroll = function(){
						if(document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
							binding.value();
						}
					}
				}
			}
		}
	}
</script>

<style>

</style>