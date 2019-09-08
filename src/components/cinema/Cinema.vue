<template>
	<div>
		<div class="cinema_menu">
			<div class="city_switch nav">
				全城
				<i class="icon iconfont icon-xiala"></i>
			</div>
			<div class="bran_switch nav">
				品牌
				<i class="icon iconfont icon-xiala"></i>
			</div>
			<div class="feature_switch nav">
				特色
				<i class="icon iconfont icon-xiala"></i>
			</div>
		</div>
		<div class="cinema_body">
			<div class="wrapper">
				<ul class="cinema_list">
					<li v-for='item in cinemas'>
						<div class="cinema">
							<span>{{item.nm}}</span>
							<span class="sale">
								<span class="price">{{item.sellPrice}}</span>元起
							</span>
						</div>
						<div class="address">
							<span>{{item.addr}}</span>
							<span class="distance">{{item.distance}}</span>
						</div>
						<div class="card">
							<div>改签</div>
							<div>退</div>
							<div class="or">{{item.tag.vipTag}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'cinema',
		data(){
			return {
				id : 296,
				cinemas : []
			}
		},
		created(){
			var storage = localStorage.getItem('curCity');
		    if(storage){
		       var obj = JSON.parse(storage);
		       this.id = obj.id;
		    }
			this.axios.get('/api/cinemaList?cityId='+this.id)
			.then(result =>{
				if(result.status === 200){
					this.cinemas = result.data.data.cinemas;
				}
			});
		}
	}
</script>
<style scoped>
	@import '../common/font/iconfont.css';
	.cinema_menu{
		display: flex;
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #e6e6e6;
		justify-content: space-around;
		align-items:center;
		background-color: #fff;
	}
	.cinema_body{
		flex: 1;
		overflow:auto;
	}
	.cinema_body .wrapper{
		margin-bottom: 10px;
	}
	.cinema_body .wrapper .cinema_list{
		padding: 20px;
	}
	.cinema_body .wrapper .cinema_list li{
		border-bottom: 1px solid #e6e6e6;
		margin-bottom: 20px;
	}
	.wrapper .cinema_list li div{
		margin-bottom: 10px;
	}
	.cinema_list li .cinema .sale{
		font-size: 11px;
		color:#f03d37;
	}
	.cinema_list li .cinema .sale .price{
		font-size: 18px;
	}
	.wrapper .cinema_list li .address{
		font-size: 13px;
		color:#666;
	}
	.cinema_list li .address .distance{
		float:right;
	}
	.wrapper .cinema_list li .card{
		display: flex;
	}
	.cinema_list li .card div{
		padding: 0 3px;
		height: 15px;
		line-height: 15px;
		border-radius: 2px;
		color:#589daf;
		border:1px solid #589daf;
		font-size: 13px;
		margin-right: 5px;
	}
	.cinema_list li .card div.or{
		color:#f90;
		border:1px solid #f90;
	}
</style>