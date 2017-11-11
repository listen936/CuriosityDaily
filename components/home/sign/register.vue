<template>
	<form class="register" :class="switchNum == 1 ? 'appear' : 'rehidden' " >
		<div class="form-control">
			<input type="text" placeholder="电子邮箱" v-model="email">
		</div>
		<div class="form-control">
			<input type="password"  placeholder="创建密码" v-model="pwd">
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
		<div class="com-notification" style="left: 133.5px; top: 273px;opacity: 0;transition: all 1s;">
			<div class="notification-bd">
				<p class="msg">邮箱和密码不能为空!</p>
			</div>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				pwd: ""
			}

		},
		methods: {
			changeNum0: function() {
				this.$store.state.switchNum = 0
			},
			changeNum2: function() {
				this.$store.state.switchNum = 2
			},
			changeNum3: function() {
				var oDiv = document.querySelectorAll(".com-notification")[2];
				var oP = document.querySelectorAll(".msg")[2];
				if(this.email && this.pwd) {
					
					this.$store.state.email = this.email;
					this.$store.state.pwd = this.pwd;
					
					this.$http.post("http://10.30.152.84:3000/users/vertify",{
						email:this.email
					}).then(function(data){
						if(data.body == "0"){
							oDiv.style.opacity = 1
						setTimeout(function(){
							oDiv.style.opacity = 0;
						},3000)
							oP.innerHTML = "该邮箱已被注册！"
						}else{
							this.$store.state.switchNum = 3;
						}
					})
					console.log(2);
				}else{
					oDiv.style.opacity = 1
						setTimeout(function(){
							oDiv.style.opacity = 0;
						},3000)
						console.log(1)
				}

			}
		},
		computed: {
			switchNum: function() {
				return this.$store.state.switchNum
			}
		}
	}
</script>

<style scoped>

</style>