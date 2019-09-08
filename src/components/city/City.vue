<template>
	<div class="city-body">
		<div class="city-list" ref='position'>
			<div class="wrapper">
				<div class="city-hot">
					<h2 class="hot-title">热门城市</h2>
					<ul class="hot-list" @touchstart='handleCity($event)'>
						<router-link tag='li' :to='{name : "App"}' v-for='item in hotList' :key='item.id' :id='item.id'>{{item.name}}</router-link>
					</ul>
				</div>
				<div class="city-sort">
					<div v-for='item in cityList' :key='item.index'>
						<h2 class="char" :ref='item.index'>{{item.index}}</h2>
						<ul class="area-list" @touchstart='handleCity($event)'>
							<router-link tag='li' :to='{name : "App"}' v-for='itemName in item.list' :key='itemName.id' :id='itemName.id'>{{itemName.nm}}</router-link>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="city-index">
			<ul class="char-list" @touchstart='getTarget($event)'>
				<li v-for='item in charCode' :key='item'>{{item }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'city',
		data(){
			return {
				charCode : [],
				hotList : [],
				cityList : [],
				dom : ''
			}
		},
		mounted(){
			var cityStorage = localStorage.getItem('cityList');
			var hotStorage = localStorage.getItem('hotList');
			if(cityStorage && hotStorage){
				this.getData(JSON.parse(cityStorage));
			}else{
				this.axios.get('/api/cityList').then(result=>{
					var data = result.data.data.cities;
					localStorage.setItem('cityList',JSON.stringify(data));
					this.getData(data);
					localStorage.setItem('hotList',JSON.stringify(this.hotList));
				});
			}
			this.getCharCode();
			this.auto();
		},
		methods : {
			getData(data){
				for(var i = 0, len = data.length; i < len; i++){
					this.getCity(data[i].nm,data[i].py,data[i].id);
					if(data[i].isHot === 1){
						this.hotList.push({name : data[i].nm,id : data[i].id});
					}
				}
			},
			getCharCode(){
				for(var i = 65; i <= 90; i++){
					this.charCode.push(String.fromCharCode(i));
				}
			},
			getCity(name,word,id){
				var initials = word.slice(0,1).toUpperCase();
				if(this.addCity(initials)){
					this.cityList.push({index : initials, list : [{nm : name,id}]});
				}else{
					for(var i = 0; i < this.cityList.length; i++){
						if(this.cityList[i].index === initials){
							this.cityList[i].list.push({nm : name, id});
						}
					}
				}
				this.cityList.sort((a,b)=>{
					if(a.index > b.index){
						return 1;
					}else if(a.index < b.index){
						return -1;
					}else{
						return 0;
					}
				});
			},
			addCity(name){
				for(var i = 0; i < this.cityList.length; i++){
					if(this.cityList[i].index === name){
						return false;
					}
				}
				return true;
			},
			getTarget(e){
				var word = e.target.innerText;
				var target = this.$refs[word][0].offsetTop;
				this.dom.scrollTo(0,target);
			},
			auto(){
				this.dom = document.querySelector('.'+this.$refs.position.className);
				this.dom.onscroll = function(e){}
			},
			handleCity(e){
				var target = e.target;
				if(target.tagName !== 'LI')return;
				var storage = localStorage.getItem('curCity');
				if(storage){
					var obj = JSON.parse(storage);
					obj.city = target.innerText;
					obj.id = parseInt(target.id);
					localStorage.setItem('curCity',JSON.stringify(obj));
				}else{
					var obj = {city : target.innerText, id : parseInt(target.id)};
					localStorage.setItem('curCity',JSON.stringify(obj));
				}
			}
		}
	}
</script>

<style scoped>
	.char-list li{
		font-size: 16px;
	}
	.city-sort div{
		margin-top: 20px;
	}
	.city-sort div .char{
		padding-left: 15px;
		line-height: 30px;
		font-size: 14px;
		background-color: #f0f0f0;
		font-weight: 400;
	}
	.city-sort div .area-list{
		padding-left: 10px;
		margin-top: 10px;
	}
	.city-sort div .area-list li{
		line-height: 30px;
	}
	.city-body{
		margin-top: 45px;
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		width: 100%;
	}
	.city-body .city-list{
		flex:1;
		overflow: auto;
		background-color: #fff5f0;
	}
	.city-body .city-list .wrapper{
		height: 100%;
	}
	.city-body .city-list .wrapper .city-hot{
		margin-top: 20px;
	}
	.city-list .wrapper .city-hot .hot-title{
		padding-left: 15px;
		line-height: 30px;
		font-size: 14px;
		background-color: #f0f0f0;
		font-weight: 400;
		text-align: left;
	}
	.wrapper .city-hot .hot-list li{
		float:left;
		width:29%;
		height: 33px;
		margin-top: 15px;
		margin-left: 3%;
		padding:0 4px;
		border:1px solid #e6e6e6;
		border-radius: 3px;
		line-height: 33px;
		text-align: center;
		box-sizing:border-box;
		background-color: #fff;
	}
	.city-body .city-index{
		width:20px;
		display: flex;
		border-left: 1px solid #e6e6e6;
		justify-content: center;
		text-align: center;
		flex-direction: column;
	}
	.wrapper .city-hot .hot-list::after{
		display: block;
		content: "";
		clear:both;
	}
</style>