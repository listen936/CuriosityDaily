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
      </div>
   </div>
</template>

<script>
   import xswiper from './swiper.vue';
   export default {
      components: {
         xswiper,
      }
   }
</script>