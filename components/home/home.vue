<template>
   <div>
      <xtop></xtop>
      <xsidebar></xsidebar>
      <router-view></router-view>
   </div>
</template>

saadw
<script>
   import xsidebar from './sidebar.vue'; 
   import xtop from './top.vue';
   export default {
      components: {
         xtop,
         xsidebar
      }   
   }
</script>

<style scoped>

</style>
