<template>
   <div>
      <div class="com-header clearfix">
         <div class="header-left">
            <a data-ga-event="mobile:click:logo" href="#/home" class="logo">
               <img src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABHCAMAAADFn96TAAABKVBMVEUAAAD/////yB//////////////////////////////////////////////////////////////////////////////////////////////5Jn/////////////////////////////////////////yB//////yB//////////////yB//////////////////////////////////////////////////////////////yB//yB//yB//////////yB//yB//////////////yB//////////yB//yB//////////yB//yB//////yB//yB//yB//////yB//yB//////yB//yB//yB//yB//yB//////yB//yB//yB//////yB//yB/////fmQesAAAAYXRSTlMAVR7S7uFplqUheA+HEfHdS0T792aqWrQLzQOZiHYywwWt156NKx3zyMFx4byQg2JHQiYYFfTrsFAp59SXTjsH69u4gF9Ck3xqWj42CvnKtK2johXMs5SFX1c2LcHAvZh3hDyVkAAABUdJREFUaN7t2mlXomAYxvHLREULNchSy8Y9930fs32Z9mX23fv7f4hBRNCg7GBOvOj/4kk5nMMvlocThLfeeku/+6/dX9mtfn9r7/fnr/cwU9u/+hP9/BaESTr62Nf0/gim6LSv21+YoG/9R/qAV+9iV+XsXV+/V7/tXuCJHGTF81oiGx5kJQee01cF8zEBscRPZcHpq+NuRpTsvbwrs6MlNy+DW/U5jOL2RpQvkPurcA3itBnFbY0oR8rMMlqy9eq4/qgE5BLKIui3bI0Wg3+0uMUNa8e6wRk6rAXfoTh6fXF93ALkFqbhrETECBpc+IoaeRtFd4xcED66E8c47c+Ks5GnWmE0uB7RIbxELSO4JUqLY4Qcs+M2AFaDE11tOInsRnBF8ojjFWVmx7kAhx4uiaRB3BnxQaBDrXnizg3ikkRV7BC154QrezxVZAziINA5KkT+eeDkkh2juChZUBbXnB/uzENGcZ8ogyKl54arxUhIG8XlKY8Dis0L5xfnv3bQKM5OEcTINS/cMlEJMIrzUgD7ZMH8phLOOK5CHURpc464ReO4ME87AnHmxMFGPWJgUlyOmpQyK26diNiXwJ0AsZfGhYio8BK4fYSjergeNg3jWkR0ODvOQxSIkgZXIqrn6oZxFSLqzY47IPrkjTDvMBlnI2Gp3GCKmOyE0dzo3jFx6MwlVJ0dh6QTevl/cJghG9UxK84yl9qDs8UK+MXPBnDzbpnIBynT4SpRnshuVlwgcBXzmxQ37A33irggHmuHg6bF/4sr8TXol2G0K7udmNbaOlBzyiVnw2Ua4hDyyMUgllyWanqGP6vjf/Y0MZ6NUSuO7mYswJKcdTacIy0O5ytSaTqGWJEZVCc3I2WBmoVKGMsdWZHLkH0ct89J5dMz3b5WrKmVlVVIFSivnoFOK/lKYYzlz5UBa3R8mdulnIwyLhTyBEIWdk3+zddmebL5jqE6I9ikbUd4ZVKvWe743GFEYGJe1bJIq8CqOAQ3H8f5fA2bzzXAxeMbebdD75nwNuS2pzwTrlIZhQDE7OKnYSsNYtizwRaLOZ6Rt18oSrhwCQjxbX2celhF3HEu1yxwUHuveZr+RXn/9djF6sddZIgbTSHtg1KNk/uxZOGknddZGuCkODc7HaftVtlPC/Ipp7zSuYVuJwEgEN8UW6LByAEumkwyVcir4FDgnTKOtcgdjuF6LZZn5KC23R+V3b4AgtvZvnqgdds/xo5QmIBwzrGaTafTP9ivPKfiasK6jBOYUTJup2UjirMpO+8VZyFfB2rBsbddl3t7W+q3Pf07QbhuxzJV1cMq5bQMA8Cy8tQagIpDTKjpH9Z2nfhUUjyswYYXgHUdY30XPXpdfoc+bt3digXwAGcXAmIeUnF+YWkcd04H+rhqyCmfc/kcUH7wuORoV8+2dYTHCvH8igZng5h3DNeinoqzZ5CpTrsgnEIrHG1isoVbre1m4al7Ia1xU3GVeFDFRVJ4xtV60Gi6k3hY4vPE3tvtJvBEdnIxnsoDXN0n9k7Gyam4VOw5uMUGuaBTMHH6+fpSfOl63T1NBPFULt6FH77B9ZgRVBwTkhrspTsoCexgveCZkFFwqXW5mIJLD3HlqG2Nj9egnziL3GNaB3SCQfF0zp1Slm4ON1T+s5EXTqAUp2HRmoJLb8jlZVwk4j4WcakIrS9itSMcQ7f32rfT2toWSBV97IbmBNm0WlMOP9TOLYPO1Ntt+hBy/oAFgz5dsU4Rt+9blpYWetDt9+CeddPtdr/DfHVN9I8Rmr6ZGXeRNTEOidvspWlxb7013/4BM/90Rnys9tYAAAAASUVORK5CYII="
                  alt="">
            </a>
         </div>
         <div class="header-right">
            <div class="user signin" :class="{'hidden':!loginStatus}">
               <a rel="nofollow"  class="user-hd" @click="funcDropDown">
                  <i class="iconfont icon-user"></i>
                  <span class="name">{{username}}</span>
               </a>
               <div class="user-bd" :class="{'hidden':isDropShow}">
                  <ul class="items">
                     <li class="item">
                        <a rel="nofollow" href="#/home/user/center" target="_self" @click="funcDropDown">
                           <i class="iconfont icon-user"></i>
                           个人中心
                        </a>
                     </li>
                     <li class="item account-setting-link">
                        <a rel="nofollow" href="#/home/user/account" target="_self" @click="funcDropDown">
                           <i class="iconfont icon-setting"></i>
                           账号设置
                        </a>
                     </li>
                     <li class="item account-logout">
                        <form action="" method="" @click="logout">
                           <input type="hidden" name="_method" value="delete">
                           <input type="hidden" name="authenticity_token">
                           <a rel="nofollow" href="#/home/content" @click="funcDropDown">
                              <i class="iconfont icon-logout"></i>
                              退出登录
                           </a>
                        </form>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="user unsign" :class="{'hidden':loginStatus}">
               <a data-ga-event="mobile:open:login_popup" href="#" data-popup=".com-login-popup" class="user-hd open-popup" @click="changeShow">
                  <i class="iconfont icon-user"></i>
                  登录
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import bus from '../bus'
   export default {
      data() {
         return {
            isDropShow: true,
            loginStatus: false,
            username: "",
            statusChange: 0
         }
      },
      methods: {
         changeShow: function () {
            this.$store.state.signShow = !this.$store.state.signShow;

         },
         funcDropDown: function () {
            this.isDropShow = !this.isDropShow;
         },
         userStatus: function () {
            var cookie = this.$cookie.get("username");
            if (cookie == '' || !cookie) {
               this.loginStatus = false;
            } else {
               this.loginStatus = true;
               this.username = cookie;
            }
         },
         logout: function () {
            this.$cookie.set("username", '');
            this.$http.get("http://10.30.152.84:3000/logout",'logout').then(function(data){
               if(data.body == '1'){
                  console.log("注销成功");
                  this.statusChange = this.statusChange + 1;
               }else{
                  console.log('err');
               }
            })
         }
      },
      watch: {
         statusChange: function () {
            this.userStatus();
         }
      },
      mounted: function () {
         this.userStatus();
         var self = this;
         bus.$on('statusChange', function (data) {
            self.statusChange = self.statusChange + data;
         })
      }
   }
</script>

<style scoped>

</style>