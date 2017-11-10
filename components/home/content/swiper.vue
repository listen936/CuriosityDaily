<template>
   <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <a href="/mobile/articles/47008.html" class="swiper-slide" data-title="把报道改编成电影，这个《太平洋大逃杀》开启的潮流，现在进行得怎样了？"
         style="background-image: url(&quot;http://img.qdaily.com/article/banner/20171107180111aqtm0W37CeFYly1x.jpg?imageMogr2/auto-orient/thumbnail/!640x360r/gravity/Center/crop/640x360/quality/85/format/jpg/ignore-error/1&quot;); width: 375px;"
         data-swiper-slide-index="4">
         <div class="category-title">
            <p class="category clearfix">
               <span class="iconfont icon-yule"></span>
               <span>娱乐 ⋅ 长文章</span>
            </p>
            <h1 class="title">把报道改编成电影，这个《太平洋大逃杀》开启的潮流，现在进行得怎样了？</h1>
         </div>
      </a>

      <a href="/mobile/articles/47105.html" class="swiper-slide" data-title="越来越像个“小奥运”的电竞，终于吸引传统大品牌们入场了" style="background-image: url(&quot;http://img.qdaily.com/article/banner/20171110060452OK7uxQ9ZymDcgWY3.jpg?imageMogr2/auto-orient/thumbnail/!640x360r/gravity/Center/crop/640x360/quality/85/format/jpg/ignore-error/1&quot;); width: 375px;"
         data-swiper-slide-index="0">
         <div class="category-title">
            <p class="category clearfix">
               <span class="iconfont icon-shangye"></span>
               <span>商业 ⋅ 长文章</span>
            </p>
            <h1 class="title">越来越像个“小奥运”的电竞，终于吸引传统大品牌们入场了</h1>
         </div>
      </a>

      <a href="/mobile/articles/47034.html" class="swiper-slide" data-title="在荷兰，全球最好的设计学校之一是如何运作的？" style="background-image: url(&quot;http://img.qdaily.com/article/banner/20171109160022ZiUXgRKxBD3ypdOQ.jpg?imageMogr2/auto-orient/thumbnail/!640x360r/gravity/Center/crop/640x360/quality/85/format/jpg/ignore-error/1&quot;); width: 375px;"
         data-swiper-slide-index="1">
         <div class="category-title">
            <p class="category clearfix">
               <span class="iconfont icon-sheji"></span>
               <span>设计 ⋅ 长文章</span>
            </p>
            <h1 class="title">在荷兰，全球最好的设计学校之一是如何运作的？</h1>
         </div>
      </a>

      <a href="/mobile/articles/47055.html" class="swiper-slide" data-title="1954年出生，他是中国恢复高考后的第一届大学生 | 房子和我们的生活⑩"
         style="background-image: url(&quot;http://img.qdaily.com/article/banner/20171108213742YS2mv0UQRziWhctZ.jpg?imageMogr2/auto-orient/thumbnail/!640x360r/gravity/Center/crop/640x360/quality/85/format/jpg/ignore-error/1&quot;); width: 375px;"
         data-swiper-slide-index="2">
         <div class="category-title">
            <p class="category clearfix">
               <span class="iconfont icon-chengshi"></span>
               <span>城市 ⋅ 长文章</span>
            </p>
            <h1 class="title">1954年出生，他是中国恢复高考后的第一届大学生 | 房子和我们的生活⑩</h1>
         </div>
      </a>

      <a href="/mobile/articles/47033.html" class="swiper-slide" data-title="硅谷要自己建一个股票交易所挑战华尔街，它会有这 9 个不同" style="background-image: url(&quot;http://img.qdaily.com/article/banner/20171108144325yHhAcgFEaKLsJZnY.jpeg?imageMogr2/auto-orient/thumbnail/!640x360r/gravity/Center/crop/640x360/quality/85/format/jpg/ignore-error/1&quot;); width: 375px;"
         data-swiper-slide-index="3">
         <div class="category-title">
            <p class="category clearfix">
               <span class="iconfont icon-zhineng"></span>
               <span>智能 ⋅ 长文章</span>
            </p>
            <h1 class="title">硅谷要自己建一个股票交易所挑战华尔街，它会有这 9 个不同</h1>
         </div>
      </a>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
   </swiper>
</template>
<script>
   import {
      swiper,
      swiperSlide
   } from 'vue-awesome-swiper'
   export default {
      name: 'carrousel',
      data() {
         return {
            swiperOption: {
               // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
               // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true


               notNextTick: true,
               centeredSlides: true,
               // swiper configs 所有的配置同swiper官方api配置
               autoplay: 3000,
               autoplayDisableOnInteraction: false,
               loop: true,
               // direction : 'vertical',
               // effect: "coverflow",
               grabCursor: true,
               setWrapperSize: true,
               // autoHeight: true,
               // paginationType:"bullets",
               pagination: '.swiper-pagination',
               paginationClickable: true,
               // prevButton: '.swiper-button-prev',
               // nextButton: '.swiper-button-next',
               // scrollbar:'.swiper-scrollbar',
               mousewheelControl: true,
               observeParents: true

               // if you need use plugins in the swiper, you can config in here like this
               // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
               // debugger: true,
               // swiper callbacks
               // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
               // onTransitionStart(swiper){
               //   console.log(swiper)
               // },
               // more Swiper configs and callbacks...
               // ...
            }
         }
      },
      components: {
         swiper,
         swiperSlide
      },
      // you can find current swiper instance object like this, while the notNextTick property value must be true
      // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
      computed: {
         swiper() {
            return this.$refs.mySwiper.swiper
         }
      },
      mounted() {
         // you can use current swiper instance object to do something(swiper methods)
         // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
         // console.log('this is current swiper instance object', this.swiper)
         // this.swiper.slideTo(3, 1000, false)
      }
   }
</script>

<style scoped>
   .banner-item {
      width: 100%;
      height: 100%;
      background: gray;
      color: white;
      margin: 0.1rem 0;
   }
</style>