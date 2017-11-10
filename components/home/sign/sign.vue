<template>
   <div @touchmove.prevent>
      <div class="popup com-login-popup modal-in absolute" :class="signShow ? 'popup-show': 'popup-hide' " style="display: block;">
         <div class="login-popup-hd">
            <a href="#" class="spirt icon-login-logo"></a>
            <a href="#" class="iconfont icon-close close-popup" @click="changeShow"></a>
         </div>
         <div class="login-popup-bd">
            <xforget></xforget>
            <xlogin></xlogin>
            <xinfo></xinfo>
            <xregister></xregister>
         </div>
      </div>
   </div>
</template>

<script>
   import xlogin from './login.vue';
   import xregister from './register.vue';
   import xforget from './forget.vue';
   import xinfo from './info.vue'
   export default {
      data() {
         return {

         }
      },
      components: {
         xlogin,
         xregister,
         xforget,
         xinfo
      },
      methods: {
         changeShow: function () {
            this.$store.state.signShow = !this.$store.state.signShow

         }
      },
      computed: {
         signShow: function () {
            return this.$store.state.signShow
         }
      }
   }
</script>

<style scoped>
   .popup-show {
      top: 0%!important;
      height: 100%!important;
      overflow: hidden!important;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
   }

   .popup-hide {
      top: 100%!important;
      height: 0%!important;
      overflow: hidden!important;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
   }
</style>