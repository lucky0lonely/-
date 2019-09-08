<template>
	<div class="search_body">
		<div class="search_input">
			<div class="input_wrapper">
				<i class="icon iconfont icon-sousuo"></i>
				<input type="text" @input='getData($event)'>
			</div>
		</div>
		<div class="search_result">
			<h3>电影/电视剧/综艺</h3>
			<ul>
				<li v-for='item in movies'>
					<div class="img">
						<img :src="item.img" alt="">
					</div>
					<div class="info">
						<p>
							<span>{{item.nm}}</span>
							<span>{{item.sc}}</span>
						</p>
						<p>{{item.enm}}</p>
						<p>{{item.cat}}</p>
						<p>{{item.rt}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'search',
		data(){
			return {
				movies : [],
				timer : null
			}
		},
		created(){

		},
		methods : {
			getData(e){
				clearTimeout(this.timer);
				var self = this;
				this.timer = setTimeout(()=>{
					self.axios.get('/api/searchList?cityId=1&kw='+e.target.value)
					.then(result =>{
						if(result.status === 200){
							self.movies = result.data.data.movies.list;
						}
					});
				},500);
			}
		}
	}
</script>
<style scoped>
	@import './common/font/iconfont.css';
	.search_body{
		flex: 1;
		overflow: auto;
	}
	.search_body .search_input{
		padding: 8px 10px;
		background-color: #f5f5f5;
		border-bottom: 1px solid #e5e5e5;
	}
	.search_body .search_input .input_wrapper{
		padding: 0 10px;
		border: 1px solid #e6e6e6;
		border-radius: 5px;
		background-color: #fff;
		display: flex;
		line-height: 20px;
	}
	.search_body .search_input .input_wrapper i{
		font-size: 16px;
		padding: 4px 0;
	}
	.search_body .search_input .input_wrapper input{
		width: 100%;
		font-size: 13px;
		color:#333;
		padding: 4px 0;
		margin-left: 5px;
		border:none;
		outline: none;
	}
	.search_result h3{
		font-size: 15px;
		color:#999;
		padding: 9px 15px;
		border-bottom: 1px solid #e6e6e6;
	}
	.search_result ul li{
		padding: 10px 15px;
		box-sizing: border-box;
		border-bottom: 1px solid #c9c9c9;
		display: flex;
	}
	.search_result ul li .img{
		width:60px;
		float: left;
	}
	.search_result ul li .img img{
		width: 100%;
	}
	.search_result ul li .info{
		float: left;
		margin-left:15px;
		flex: 1;
	}
	.info p{
		height: 22px;
		display: flex;
		line-height: 22px;
		font-size: 12px;
	}
	.info p:first-child span:first-child{
		font-size: 18px;
		flex: 1;
	}
	.info p:first-child span:first-of-type(2){
		font-size: 16px;
		color:#fc7103;
	}
</style>