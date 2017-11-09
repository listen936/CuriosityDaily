<template>
   <div class="mobile homes index" :class="{'with-panel-left-cover':isShow}">
      <xtop></xtop>
      <xsidebar></xsidebar>
      <xsign></xsign>
      <router-view></router-view>
   </div>
</template>

<script>
   import xsidebar from './sidebar.vue'; 
   import xtop from './top.vue';
   import xsign from './sign/sign.vue';
   export default {
      data(){
         return {
            isShow: false
         }
      },
      components: {
         xtop,
         xsidebar,
         xsign
      }   
   }
</script>

<style scoped>

</style>
