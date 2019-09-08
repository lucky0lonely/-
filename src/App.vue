<template>
  <div id="app">
    <headers :title='title'></headers>
    <div id="content">
      <template v-if='this.$route.name === "Mine"'>
      </template>
      <template v-else-if='this.$route.name === "Cinema"'></template>
      <template v-else-if='this.$route.name !== "Page"'>
        <t-menus></t-menus>
      </template>
      <router-view></router-view>
    </div>
    <footers v-if='this.$route.name !== "Page"' :current='num'></footers>
    <template>
      <location v-show='cur' title='位置' :city='city' :id='id'></location>
    </template>
  </div>
</template>

<script>
  import Headers from '@/components/common/Header'
  import Footers from '@/components/common/Footer'
  import TMenus from '@/components/Menu'
  import Mine from '@/components/Mine'
  import Location from '@/components/Location'
export default {
  name: 'App',
  data(){
    return {
      num : 1,
      title : '喵喵电影',
      cur : false,
      city : '玉林',
      id : 296
    }
  },
  created(){
    this.changeRoute(this.$route.name);
    setTimeout(()=>{
      this.axios.get('/api/getLocation')
      .then(result=>{
        if(result.status === 200){
          var area = result.data.data;
          this.city = area.nm;
          this.id = area.id;
          var storage = localStorage.getItem('curCity');
          if(storage){
            var obj = JSON.parse(storage);
            if(obj.city === area.nm){
              this.cur = false;
              return;
            }
            this.cur = true;
          }
        }
      });
    },3000);
  },
  components : {
    Headers,
    Footers,
    TMenus,
    Mine,
    Location
  },
  methods : {
    changeRoute(name){
      if(name === 'Mine'){
        this.title = '我的喵喵';
        this.num = 3;
      }else if(name === 'Cinema'){
        this.title = '喵喵影院';
        this.num = 2;
      }else if(name === 'Page'){
        this.title = '影片详情';
      }else{
        this.title = '喵喵电影';
        this.num = 1;
      }
    }
  },
  watch : {
    $route(val,oldVal){
      this.changeRoute(val.name);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100%;
  flex-direction: column;
}
#content{
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 50px;
  overflow: auto;
  position: relative;
}
</style>
