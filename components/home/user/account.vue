<template>
	<div>
		<div class="page-content">
			<form class="com-account-setting" role="form" id="edit_user_1178632" enctype="multipart/form-data" action="/mobile/users/1178632" accept-charset="UTF-8" method="post" data-initialized="true" data-guid="2"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="pYOh3xsW8LFECwUekThqSlhTruPR45dd5U1btmKldrsI/vAeLPYSQfqQwMmqiFaXCMiU7pilWSBqcMI/V0heHQ==">
				<div class="account-setting-bd">
					<p class="tip">个人信息</p>
					<div class="info">
						<div class="form-group fileupload"><label for="">头像</label> <input type="file" name="user[face_pic]" id="user_face_pic"> <span class="iconfont icon-right"></span>
							<div class="preview"><img src="http://m.qdaily.com/images/missing_face.png" alt="Lisen"></div>
						</div>
						<div class="form-group"><label for="">姓名</label> <input type="text" value="Lisen" name="user[username]" id="user_username"> </div>
						<div class="form-group"><label for="">简介</label> <input type="text" name="user[description]" id="user_description"> </div>
					</div>
					<p class="tip">联系方式</p>
					<div class="contact">
						<div class="form-group"><label for="">邮箱</label> <input type="text" value="f0b76ca5fdf6f27561b525f1be84e62a1510127227@qdaily.com" name="user[email]" id="user_email"> </div>
					</div>
					<a href="/mobile/users/password" class="password">
						<div class="form-group"><label for="">修改密码</label><span class="iconfont icon-right"></span></div>
					</a>
				</div>
				<div class="account-setting-ft">
					<div class="btn-wrapper"><button type="submit" class="btn save">保存</button></div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	
</script>

<style>

</style>