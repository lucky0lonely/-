<template>
	<div class="login_body">
		<div class="userBox">
			<input type="text" placeholder="请输入手机号码" class="user">
		</div>
		<div class="passBox">
			<input type="password" placeholder="请输入密码" class="pass">
		</div>
		<div class="login_btn">
			<button class="login">登录</button>
		</div>
		<div class="login_link">
			<a href="javascript:void(0)">立即注册</a>
			<a href="javascript:void(0)">找回密码</a>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'mine'
	}
</script>

<style scoped>
	.login_body{
		width:100%;
	}
	.login_body .userBox .user,
	.login_body .passBox .pass{
		width:100%;
		height: 40px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 5px;
		text-indent: 10px;
		outline: none;
	}
	.login_body .login_btn{
		height: 50px;
		margin:10px;
	}
	.login_body .login_btn .login{
		width:100%;
		height: 100%;
		background-color: #e54847;
		border-radius: 3px;
		display: block;
		color: #fff;
		font-size: 20px;
	}
	.login_body .login_link{
		display: flex;
		justify-content: space-between;
	}
	.login_body .login_link a{
		margin:0 5px;
		font-size: 12px;
		color:#e54847;
	}
</style>