<template>
	<div class="detail">
		<div v-for='item in detail'>
			<div class="detail_list">
				<div class="detail_list_bg" :style='{backgroundImage : "url("+item.videoImg+")"}'></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="img">
						<img :src="item.videoImg" alt="">
					</div>
					<div class="detail_list_info">
						<h2>{{item.nm}}</h2>
						<p>{{item.enm}}</p>
						<p>{{item.sc}}</p>
						<p>{{item.cat}}</p>
						<p>{{item.src}} / {{item.dur}}</p>
						<p>{{item.pubDesc}}</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>{{item.dra}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'page',
		data(){
			return {
				detail : []
			}
		},
		created(){
			this.axios.get('/api//detailmovie?movieId='+this.$route.query.id).
			then(result =>{
				if(result.status === 200){
					this.detail.push(result.data.data.detailMovie);
				}
			});
		}
	}
</script>

<style scoped>
	.detail_list{
		height: 200px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.detail_list .detail_list_bg{
		width: 100%;
		height: 100%;
		background:0 40%;
		filter:blur(20px);
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
	}
	.detail_list .detail_list_filter{
		width: 100%;
		height: 100%;
		background-color: #40454d;
		opacity: 0.55;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.detail_list .detail_list_content{
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top:0;
		z-index: 2;
	}
	.detail_list .detail_list_content .img{
		width:108px;
		height: 150px;
		border:1px solid #f0f2f3;
		margin:20px;
	}
	.detail_list .detail_list_content .img img{
		width:100%;
		height: 100%;
	}
	.detail_list .detail_list_content .detail_list_info{
		margin-bottom: 20px;
	}
	.detail_list .detail_list_content .detail_list_info h2{
		font-size: 20px;
		color:#fff;
		font-weight: 400;
		line-height: 40px;
	}
	.detail_list .detail_list_content .detail_list_info p{
		line-height: 20px;
		font-size: 14px;
		color: #ccc;
	}
	.detail_intro{
		padding: 10px;
	}
</style>