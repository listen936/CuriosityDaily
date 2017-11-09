<template>
   <form class="login" :class="switchNum == 0 ? 'appear' : 'rehidden' " action="">
      <p class="small-title">
         <span>社交账号登录</span>
      </p>
      <div class="social-login">
         <a data-ga-event="mobile:login:weibo" href="http://m.qdaily.com/oauth_sessions/weibo_token" class="social iconfont icon-weibo"></a>
         <a data-ga-event="mobile:login:qq" href="http://m.qdaily.com/oauth_sessions/qq_token" class="social iconfont icon-qq"></a>
      </div>
      <p class="small-title">
         <span>或者</span>
      </p>
      <div class="form-control">
         <input type="text" name="user[email]" placeholder="电子邮箱">
      </div>
      <div class="form-control">
         <input type="password" name="user[password]" placeholder="密码">
      </div>
      <div class="form-action">
         <a data-ga-event="mobile:login:account" href="#" class="btn submit">登录</a>
      </div>
      <div class="form-links clearfix">
         <a href="#" @click="changeNum2">忘记密码</a>
         <a href="#" @click="changeNum1">新用户</a>
      </div>
   </form>
</template>

<script>
   export default {
      methods: {
         changeNum1: function () {
            this.$store.state.switchNum = 1
         },
         changeNum2: function () {
            this.$store.state.switchNum = 2
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