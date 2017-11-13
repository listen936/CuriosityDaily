<template>
   <div>
      <form class="info" action="" :class="switchNum == 3 ? 'appear' : 'rehidden' " action="">
         <div class="form-control">
            <input type="text" placeholder="我的昵称" v-model="username">
         </div>
         <div class="form-control">
            <input type="text" placeholder="一句话介绍自己" v-model="description">
         </div>
         <div class="form-action">
            <a href="#" class="btn submit" @click="confirm">完成</a>
            <a href="#" class="btn cancel close-popup" @click="changeNum0">取消</a>
         </div>
         <div class="com-notification" style="left: 133.5px; top: 273px;opacity: 0;transition: all 1s;">
            <div class="notification-bd">
               <p class="msg">昵称和介绍不能为空!</p>
            </div>
         </div>
      </form>
   </div>
</template>

<script>
   import bus from '../../bus';
   export default {
      data() {
         return {
            username: '',
            description: ""
         }
      },
      methods: {
         changeNum0: function () {
            this.$store.state.switchNum = 0
         },
         confirm: function () {
            if (this.username && this.description) {
               this.$http.post("http://10.30.152.84:3000/users/reg", {
                  username: this.username,
                  password: this.$store.state.pwd,
                  email: this.$store.state.email,
                  description: this.description
               }).then(function (status) {
                  this.$store.state.switchNum = 0;
                  this.$store.state.signShow = false;
                  this.$cookie.set('username', this.username);
                  bus.$emit("statusChange", 1);
               })
            } else {
               var oDiv = document.querySelectorAll(".com-notification")[1];
               oDiv.style.opacity = 1;
               setTimeout(function () {
                  oDiv.style.opacity = 0;
               }, 3000)
               console.log(3)
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