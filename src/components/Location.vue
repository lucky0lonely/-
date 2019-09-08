<template>
	<div class="message" ref='message'>
		<h2>{{title}}</h2>
		<p>{{city}}</p>
		<div class="btns">
			<div class="cancle" @touchstart='cancle'>取消</div>
			<div class="change" @touchstart='changeCity'>切换位置</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'location',
		props : {
			title : {
				type : String,
				default : '定位'
			},
			city : {
				type : String,
				default : '玉林'
			},
			id : {
				type : Number,
				default : 296
			}
		},
		methods : {
			changeCity(){
				var storage = localStorage.getItem('curCity');
				if(storage){
					var obj = JSON.parse(storage);
					obj.city = this.city;
					obj.id = this.id;
					localStorage.setItem('curCity',JSON.stringify(obj));
				}
				location.reload();
			},
			cancle(){
				this.$refs.message.style.display = 'none';
			}
		}
	}
</script>

<style scoped>
	.message{
		width:200px;
		height: 120px;
		border:1px solid #ccc;
		position: absolute;
		top:50%;
		left: 50%;
		border-radius: 4px;
		background-color: #fff;
		margin:-60px 0 0 -100px;
		box-shadow: 3px 3px 3px 3px #ccc;
		font-size: 18px;
	}
	.message h2,
	.message p{
		text-align: center;
		line-height: 40px;
	}
	.message .btns{
		display: flex;
		position: absolute;
		bottom: 0;
		width: 100%;
		border:1px solid #ccc;
	}
	.message .btns div{
		flex: 1;
		text-align: center;
		line-height: 30px;
		border-right: 1px solid #ccc;
	}
	.message .btns .change{
		border:none;
	}
</style>