<template>
	<div>
		<div v-for="a in arr1" v-scroll="loadMore">		
			<div class="packery-item combo">
				<a v-for="aa in a.arr" href="/mobile/articles/47107.html" class="com-grid-article" data-initialized="true" data-guid="5">
					<div class="grid-article-hd">
						<div class="imgcover pic"><img class=" lazyloaded" data-src="http://img.qdaily.com/article/article_show/20171110094118iRods3U9c4E6N5mv.jpg?imageMogr2/auto-orient/thumbnail/!240x158r/gravity/Center/crop/240x158/quality/85/format/webp/ignore-error/1" alt="看图：这里是过去24小时内发生的重要的事" :src="aa.img"></div>
						<p class="category clearfix"> <span :class="aa.icon"></span> <span>{{aa.icon1}}</span> </p>
						<div class="ribbon"> <span :class="aa.vx">{{aa.vx1}}</span> <span :class="aa.red">{{aa.red1}}</span> </div>
					</div>
					<div class="grid-article-bd">
						<h1>{{aa.desc}}</h1><span class="smart-date" data-origindate="2017-11-10 09:53:11 +0800">{{aa.time}}</span></div>
				</a>
			</div>
			<div class="packery-item single">
				<a href="/mobile/articles/47108.html" class="com-grid-key-article" data-initialized="true" data-guid="25">
					<div class="grid-key-article-hd">
						<div class="imgcover pic"><img class=" lazyloaded" data-src="http://img.qdaily.com/article/article_show/20171110095539N7GYZeAlc8TBS5Ok.jpg?imageMogr2/auto-orient/thumbnail/!480x293r/gravity/Center/crop/480x293/quality/85/format/webp/ignore-error/1" alt="adidas 北美销售大涨，以及，Moschino 出了款天价“干洗袋” | 浮华日报" :src="a.img"></div>
					</div>
					<div class="grid-key-article-bd">
						<p class="category"> <span :class="a.icon"></span> <span>{{a.icon1}}</span> </p>
						<h1 class="title">{{a.desc}}</h1>
						<div class="ribbon"> <span :class="a.vx">{{a.vx1}}</span> <span :class="a.red">{{a.red1}}</span> </div>
					</div>
				</a>
			</div>
		</div>
		<div class="com-loader loading " data-guid="3" data-initialized="true">
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
</template>

<script>
	export default {
		data() {
			return {
				arr1: [],
				n: 1
			}
		},
		methods: {
			loadMore: function() {
				self = this;
				this.$http.get("../assets/json/mix.json").then(function(data) {					
						self.arr1 = self.arr1.concat(data.body.splice((self.n - 1) * 1, 1));
						self.n = self.n + 1;					
				})
			}
		},
		mounted: function() {
			this.loadMore()
		},
		directives: {
			scroll: {
				bind: function(el, binding) {
					window.onscroll = function() {
						if(document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
								setTimeout(function() {
									binding.value()
								}, 2000)

						}
					}
				}

			}
		}
	}
</script>

<style scoped>

</style>