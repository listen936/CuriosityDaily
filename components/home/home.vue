<template>
   <div class="mobile homes index" :class="{'with-panel-left-cover':isShow}">
      <xtop></xtop>
      <xsidebar></xsidebar>
      <router-view></router-view>
   </div>
</template>

<script>
   import xsidebar from './sidebar.vue'; 
   import xtop from './top.vue';
   export default {
      data(){
         return {
            isShow: false
         }
      },
      components: {
         xtop,
         xsidebar
      }   
   }
</script>

<style scoped>

</style>
