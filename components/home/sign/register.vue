<template>
   <form class="register" :class="switchNum == 1 ? 'appear' : 'rehidden' " action="">
      <div class="form-control">
         <input type="text" name="email" placeholder="电子邮箱" v-model="username" onblur="confirm">
      </div>
      <div class="form-control">
         <input type="password" name="password" placeholder="创建密码" v-model="pwd">
      </div>
      <div class="form-control">
         <input type="password" name="password_confirmation" placeholder="确认密码">
      </div>
      <div class="form-control agree" style="display:none">
         <input type="radio">
         <a href="#">我已阅读并同意《用户注册协议》</a>
      </div>
      <div class="form-action">
         <a href="#" class="btn submit" @click="changeNum3">下一步</a>
         <a href="#" class="btn cancel close-popup">取消</a>
      </div>
      <div class="form-links clearfix">
         <a href="#" @click="changeNum2">忘记密码</a>
         <a href="#" @click="changeNum0">已有账号</a>
      </div>
   </form>
</template>

<script>
   export default {
   	data(){
   		return {
   			username:"",
   			pwd:""
   		}
   		
   	},
      methods: {
         changeNum0: function () {
            this.$store.state.switchNum = 0
         },
         changeNum2: function () {
            this.$store.state.switchNum = 2
         },
         changeNum3: function () {
            this.$store.state.switchNum = 3
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