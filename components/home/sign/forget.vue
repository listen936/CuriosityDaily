<template>
   <div>
      <form class="findpassword active" action="" style="display: block;">
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
</template>
