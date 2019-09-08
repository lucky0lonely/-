<template>
	<footer>
		<ul class="nav-list">
			<router-link tag='li' :to='{name : "App"}' :class='current === 1 ? "active" : ""'>
				<i class="icon iconfont icon-dianying"></i>
				<p>电影</p>
			</router-link>
			<router-link tag='li' :to='{name : "Cinema"}' :class='current === 2 ? "active" : ""'>
				<i class="icon iconfont icon-yingyuana"></i>
				<p>影院</p>
			</router-link>
			<router-link tag='li' :to='{name : "Mine"}' :class='current === 3 ? "active" : ""'>
				<i class="icon iconfont icon-wode"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</footer>
</template>
<script>
	export default{
		name : 'footers',
		props : {
			current : {
				type : Number,
				default : 1
			}
		}
	}
</script>
<style scoped>
	@import './font/iconfont.css';
	footer ul,
	footer ul li{
		list-style:none;
	}
	.active{
		color:#f03d37;
	}
	footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width:100%;
		height: 50px;
		background-color: #fff;
		border-top: 2px solid #ebe8e3;
		text-align:center;
	}
	footer .nav-list{
		display: flex;
		align-items: center;
		height: 100%;
	}
	footer .nav-list li{
		flex: 1;
		height: 40px;
	}
	footer .nav-list li i.iconfont{
		font-family: 'iconfont' !important;
		display: inline-block;
		font-size: 20px;
	}
	footer .nav-list li p{
		font-size: 12px;
	}
</style>