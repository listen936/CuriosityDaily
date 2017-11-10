<template>
   <div>
      <form class="info" action="" :class="switchNum == 3 ? 'appear' : 'rehidden' " action="">
         <div class="form-control">
            <input type="text" name="user[username]" placeholder="我的昵称">
         </div>
         <div class="form-control">
            <input type="text" name="user[description]" placeholder="一句话介绍自己">
         </div>
         <div class="form-action">
            <a href="#" class="btn submit">完成</a>
            <a href="#" class="btn cancel close-popup" @click="changeNum0">取消</a>
         </div>
      </form>
   </div>
</template>

<script>
   export default {
      methods: {
         changeNum0: function () {
            this.$store.state.switchNum = 0
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