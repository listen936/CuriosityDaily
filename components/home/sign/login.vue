<template>
   <form class="login" :class="switchNum == 0 ? 'appear' : 'rehidden' " action="/user/login">
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
         <input type="text" placeholder="电子邮箱" v-model="email">
      </div>
      <div class="form-control">
         <input type="password" placeholder="密码" v-model="password">
      </div>
      <div class="form-action">
         <a class="btn submit" @click="login">登录</a>
      </div>
      <div class="form-links clearfix">
         <a href="#" @click="changeNum2">忘记密码</a>
         <a href="#" @click="changeNum1">新用户</a>
      </div>
      <div class="com-notification" style="left: 133.5px; top: 273px;opacity: 0;transition: all 1s;">
         <div class="notification-bd">
            <p class="msg">邮箱和密码不能为空!</p>
         </div>
      </div>
   </form>
</template>

<script>
   import bus from '../../bus'
   export default {
      data() {
         return {
            email: "",
            password: ""
         }
      },
      methods: {
         changeNum1: function () {
            this.$store.state.switchNum = 1
         },
         changeNum2: function () {
            this.$store.state.switchNum = 2
         },
         login: function () {
            var oDiv = document.querySelectorAll(".com-notification")[0];
            var oP = document.querySelectorAll(".msg")[0];
            if (this.email && this.password) {
               this.$http.post("http://10.30.152.84:3000/users/login", {
                  email: this.email,
                  password: this.password
               }).then(function (data) {
                  if (data.body != "") {
                     this.$cookie.set("username", data.body);
                     this.$store.state.signShow = false;
                     
                     bus.$emit("statusChange", 1);
                  } else {
                     oDiv.style.opacity = 1
                     oP.innerHTML = "邮箱与密码不符！"
                     setTimeout(function () {
                        oDiv.style.opacity = 0;
                     }, 3000)
                  }
               })
            } else {
               oDiv.style.opacity = 1
               oP.innerHTML = "邮箱和密码不能为空!"
               setTimeout(function () {
                  oDiv.style.opacity = 0;
               }, 3000)
            }
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