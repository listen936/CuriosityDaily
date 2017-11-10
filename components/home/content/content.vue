<template>
   <div class="page-content">
      <div class="packery-container articles">
         <div class="packery-item single">
            <div class="com-grid-articles-banner">
               <div class="grid-articles-banner-bd">
                  <xswiper></xswiper>
               </div>
            </div>
         </div>
         <xlist></xlist>
      </div>
   </div>
</template>

<script>
   import xswiper from './swiper.vue';
    import xlist from './list.vue';
   export default {
      components: {
         xswiper,
         xlist,
      }
   }
</script>