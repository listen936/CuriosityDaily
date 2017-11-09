<template>
   <div>
      <div class="login-popup-bd">
         <form class="login active" action="">
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
               <a href="#" data-toform=".findpassword">忘记密码</a>
               <a href="#" data-toform=".register">新用户</a>
            </div>
         </form>
         <form class="register" action="">
            <div class="form-control">
               <input type="text" name="user[email]" placeholder="电子邮箱">
            </div>
            <div class="form-control">
               <input type="password" name="user[password]" placeholder="创建密码">
            </div>
            <div class="form-control">
               <input type="password" name="user[password_confirmation]" placeholder="确认密码">
            </div>
            <div class="form-control agree" style="display:none">
               <input type="radio">
               <a href="#">我已阅读并同意《用户注册协议》</a>
            </div>
            <div class="form-action">
               <a href="#" class="btn submit">下一步</a>
               <a href="#" class="btn cancel close-popup">取消</a>
            </div>
            <div class="form-links clearfix">
               <a href="#" data-toform=".findpassword">忘记密码</a>
               <a href="#" data-toform=".login">已有账号</a>
            </div>
         </form>
         <form class="info" action="">
            <div class="form-control">
               <input type="text" name="user[username]" placeholder="我的昵称">
            </div>
            <div class="form-control">
               <input type="text" name="user[description]" placeholder="一句话介绍自己">
            </div>
            <div class="form-action">
               <a href="#" class="btn submit">完成</a>
               <a href="#" class="btn cancel close-popup">取消</a>
            </div>
         </form>
         <form class="findpassword" action="">
            <div class="form-control">
               <input type="text" name="user[email]" placeholder="输入电子邮箱">
            </div>
            <div class="form-action">
               <a href="#" class="btn submit">发送</a>
               <a href="#" class="btn cancel close-popup">取消</a>
            </div>
            <div class="form-links clearfix">
               <a href="#" data-toform=".register">新用户</a>
               <a href="#" data-toform=".login">已有账号</a>
            </div>
         </form>
      </div>
   </div>
</template>