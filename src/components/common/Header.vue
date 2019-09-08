<template>
	<header>
		<template v-if='this.$route.name === "Page"'>
			<i @touchstart='back'><</i>
		</template>
		<h1 class="title">{{ title }}</h1>
	</header>
</template>
<script>
	export default {
		name : 'headers',
		props : {
			title : {
				type : String,
				default : '喵喵电影'
			}
		},
		methods : {
			back(){
				this.$router.back(-1);
			}
		}
	}
</script>
<style scoped>
	header{
		position: relative;
		width: 100%;
		height: 50px;
		background-color: #e54847;
		color:#fff;
	}
	header .title{
		font-size: 18px;
		text-align: center;
		line-height: 50px;
		font-weight: 400;
	}
	header i{
		position: absolute;
		left: 5px;
		top:50%;
		margin-top:-13px;
		font-size: 26px;
	}
</style>