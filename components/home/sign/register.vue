<template>
   <div>
      <form class="register active" action="" style="display: block;">
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
   </div>
</template>