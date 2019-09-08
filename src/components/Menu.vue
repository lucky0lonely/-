<template>
	<div class="movie_menu">
			<router-link tag='div' :to='{name : "City"}' class="city_name">
				<span>{{city}}</span>
				<i class="icon iconfont icon-xiala"></i>
			</router-link>
		<div class="hot_switch">
			<ul class="hot_list">
				<router-link tag='li' :to='{name : "Movie"}' class="hot_list_item" :class='current === "Movie" ? "hot_active" : ""'>
					<p>正在热映</p>
				</router-link>
				<router-link tag='li' :to='{name : "Playing"}' class="hot_list_item" :class='current === "Playing" ? "hot_active" : ""'>
					<p>即将上映</p>
				</router-link>
			</ul>
		</div>
		<router-link tag='div' :to='{name : "Search"}' class="search_entry" :class='current === "Search" ? "hot_active" : ""'>
			<i class="icon iconfont icon-sousuo"></i>
		</router-link>
	</div>
</template>

<script>
	export default{
		name : 'menus',
		data(){
			return {
				current : 'Movie',
				city : '玉林',
				id : 296
			}
		},
		created(){
			this.getCity();
		},
		methods : {
			getCity(){
				this.current = this.$route.name;
				var storage = localStorage.getItem('curCity');
			    if(storage){
			       var obj = JSON.parse(storage);
			       this.city = obj.city;
			       this.id = obj.id;
			    }
			}
		},
		watch : {
			$route(val,oldVal){
				this.getCity();
			}
		}
	}

</script>

<style scoped>
	@import './common/font/iconfont.css';
	*{
		box-sizing:border-box;
		list-style:none;
	}
	.movie_menu{
		width: 100%;
		height: 45px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e6e6e6;
		z-index: 10;
		background-color:#fff;
	}
	.movie_menu .city_name{
		height: 100%;
		line-height: 45px;
		margin-left:20px;
	}
	.movie_menu .hot_switch{
		height: 100%;
	}
	.movie_menu .hot_list{
		display: flex;
		align-items: center;
		height: 100%;
		line-height: 43px;
	}
	.movie_menu .hot_list .hot_list_item{
		width:80px;
		text-align: center;
		margin:0 12px;
		color:#666;
		font-weight: 700;
		font-size: 15px;
	}
	.movie_menu .hot_list .hot_list_item.hot_active{
		color:#ef4228;
		border-bottom: 2px solid #ef4228;
	}
	.movie_menu .search_entry{
		height: 100%;
		line-height: 45px;
		margin-right: 20px;
	}
	.movie_menu .search_entry .iconfont.icon-sousuo{
		font-size: 24px;
		color: red;
	}
	.hot_active{
		color:#ef4228;
		border-bottom: 2px solid #ef4228;
	}
</style>