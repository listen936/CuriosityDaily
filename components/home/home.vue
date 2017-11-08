<template>
   <div>
      <xtop></xtop>
      <xsidebar></xsidebar>
      <router-view></router-view>
   </div>
</template>


<script>
   export default {
      xtop: './top.vue',
      xsidebar: './sidebar.vue'
   }
</script>

<style scoped>

</style>
