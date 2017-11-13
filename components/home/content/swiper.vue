<template>
   <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <a href="#/article" class="swiper-slide" data-title="把报道改编成电影，这个《太平洋大逃杀》开启的潮流，现在进行得怎样了？"
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
               
               notNextTick: true,
               centeredSlides: true,
               autoplay: 3000,
               autoplayDisableOnInteraction: false,
               loop: true,

               grabCursor: true,
               setWrapperSize: true,

               pagination: '.swiper-pagination',
               paginationClickable: true,

               mousewheelControl: true,
               observeParents: true
            }
         }
      },
      components: {
         swiper,
         swiperSlide
      },

      computed: {
         swiper() {
            return this.$refs.mySwiper.swiper
         }
      },
      mounted() {

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