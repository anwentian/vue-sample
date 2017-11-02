<template>
  <div id="app">
  
    <Header v-show="show"></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <Me></Me>
    <Footer v-show="show"></Footer>   
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Me from "./components/Me.vue"
import Footer from "./components/Footer.vue"
import {mapGetters,mapActions} from "vuex"
import Article from "./components/Article.vue"
export default {

  computed: mapGetters([
    "show" 
  ]),
  methods:mapActions({
    
  }),
  mounted(){
			var path=this.$route.path.substring(1);
			this.showToggle(path);
		},
  watch:{
			$route(to){
				var path=to.path.substring(1);   
				this.showToggle(path);       
			}
		},
  methods:{
			showToggle(path){
				if(path.indexOf('article')!=-1||path.indexOf('music')!=-1){
					this.$store.dispatch('hideIt')
				}else{
					this.$store.dispatch('showIt')
				}
			}
		},
  components :{
    Article,
    Header,
    Me,
    Footer
   
  }
}
</script>
<style>
@import '/src/assets/css/global.css';
@import '/src/assets/css/index.css';
</style>


