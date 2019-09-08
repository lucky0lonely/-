<template>
	<div class="movie_body">
		<div class="wrapper">
			<ul class="movie-list">
				<router-link tag='li' :to='{name : "Page",query:{id:item.id}}' class="movie-list-item" v-for='(item,index) in movieArr' :key='item.nm'>
					<div class="movie-img">
						<img :src="movieImg[index]" alt="">
					</div>
					<div class="movie-content">
						<h2 class="movie-title">{{item.nm}}
							<img v-if='item.version' :src="max3d" alt="">
						</h2>
						<p>{{item.wish}} 人相看</p>
						<p class="movie-info">主演: {{item.star}}</p>
						<p>{{item.showInfo}}</p>
					</div>
					<div class="btn_buy">购票</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name : 'playing',
		data(){
			return {
				movieArr : [],
				movieImg : ['http://p0.meituan.net/128.180/movie/b8821d597382e319f9679b7e24e49d113204356.jpg','http://p0.meituan.net/128.180/movie/6bec0f311e6360e40ee9d9dbd1a1de4b2721386.jpg','http://p1.meituan.net/128.180/movie/485a8513b1e87d2765f5d4010321dc732283866.jpg','http://p0.meituan.net/128.180/moviemachine/3d3a63746eff582126729bb6826d8bed5470111.jpg','http://p0.meituan.net/128.180/movie/b10c922d23d085b4b326e6e0f6796b012904873.jpg','http://p0.meituan.net/128.180/movie/766818ae08cfa77e394d1f26feb4b8545016600.jpg','http://p0.meituan.net/128.180/movie/7c47821fcd6e0aadfe44d24a1fbf61ba2576528.jpg','http://p0.meituan.net/128.180/movie/f3b1ed117870e8c85c63f0920a166b374606146.jpg','http://p0.meituan.net/128.180/movie/de7698fef6ee9034f427334a6b8e2006191451.jpg','http://p1.meituan.net/128.180/movie/f04be2732cd0cc16952be782c412bbda7730519.jpg'],
				max3d : 'data:image/png;base64,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',
				id : 296
			}
		},
		created(){
			var storage = localStorage.getItem('curCity');
		    if(storage){
		       var obj = JSON.parse(storage);
		       this.id = obj.id;
		    }
		},
		mounted(){
			this.axios.get('/api/movieComingList?cityId='+this.id).then(result=>{
				if(result.status === 200){
					this.movieArr = result.data.data.comingList;
				}
			})
		}
	}
</script>
<style scoped>
	.movie_body{
		flex:1;
		overflow: auto;
	}
	.movie_body .wrapper{
		height: 100%;
	}
	.movie_body .wrapper .movie-list{
		margin:0 12px;
		overflow: hidden;
	}
	.movie_body .wrapper .movie-list .movie-list-item{
		margin-top:12px;
		display: flex;
		padding-bottom: 10px;
		border-bottom: 1px solid #e6e6e6;
		align-items:center;
	}
	.wrapper .movie-list .movie-list-item .movie-img{
		width:64px;
		height: 90px;
	}
	.movie-list .movie-list-item .movie-img img{
		width:100%;
		height: 100%;
	}
	.wrapper .movie-list .movie-list-item .movie-content{
		flex:1;
		margin-left: 10px;
		position: relative;
		text-align: left;
	}
	.movie-list .movie-list-item .movie-content .movie-title{
		font-size: 17px;
		width:150px;
		line-height: 24px;
	}
	.movie-list-item .movie-content .movie-title img{
		position: absolute;
		width: 50px;
		top:5px;
		right: 10px;
	}
	.movie-list .movie-list-item .movie-content p{
		font-size: 14px;
		color:#666;
		width:200px;
		line-height: 22px;
	}
	.movie-list .movie-list-item .movie-content h2,
	.movie-list .movie-list-item .movie-content p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.movie-list .movie-list-item .btn_buy{
		width:47px;
		height: 27px;
		line-height: 28px;
		border-radius: 4px;
		font-size: 12px;
		color:#fff;
		cursor: pointer;
		background-color: #3c9fe6;
		text-align: center;
	}
</style>