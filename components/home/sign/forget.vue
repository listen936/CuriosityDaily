<template>
   <form class="findpassword" :class="switchNum == 2 ? 'appear' : 'rehidden' " action="">
      <div class="form-control">
         <input type="text" name="user[email]" placeholder="输入电子邮箱">
      </div>
      <div class="form-action">
         <a href="#" class="btn submit">发送</a>
         <a href="#" class="btn cancel close-popup">取消</a>
      </div>
      <div class="form-links clearfix">
         <a href="#" @click="changeNum1">新用户</a>
         <a href="#" @click="changeNum0">已有账号</a>
      </div>
   </form>
</template>

<script>
   export default {
      methods: {
         changeNum0: function () {
            this.$store.state.switchNum = 0
         },
         changeNum1: function () {
            this.$store.state.switchNum = 1
         }
      },
      computed: {
         switchNum: function () {
            return this.$store.state.switchNum
         }
      }
   }
</script>


<style scoped>

</style>