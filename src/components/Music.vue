<template>
    <div class="warp">
        <div id="back">
            <span onclick="window.history.go(-1)">返回</span>
        </div>
        <article class="article">
            <h1>{{musicItem.title}}</h1>      
            <p class="address">{{musicItem.singer}}</p>          
            <img class="article-pic" :src="musicItem.image" :alt="musicItem.alt" />
            <div class="text lyric" v-html="musicItem.contents"></div>        
        </article>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            musicId:0,
            musicItem:{}         
        }
    },
    mounted(){
         this.musicId=this.$route.params.id;
         this.getDate();     
    },
   watch:{
        $route(to){
            var pattern=/music\/\d+$/;    
            if(pattern.test(to.path)){     
                this.musicId=this.$route.params.id || 0;
                this.getDate()
            }
            
        }
	},
    methods: {
        getDate(){
            var _this=this;
            this.$http.get("/src/data/column.data").then(function(res){
               _this.musicItem=res.data[_this.musicId];
            }).catch(function(err){
                console.log(err);

            })
        }
    }
}
</script>
<style scoped>
    .warp {         
        background: #fff;
        padding: 1rem 1rem 2rem;
        color: rgb(34, 34, 34);
        box-sizing: border-box;      
    }
    
    .article-pic {
        max-width: 100%;
    }
    .address {
        margin-top:1rem;
        margin-bottom: 1.4rem;
        font-size: 1rem;
        color: rgb(170, 170, 170);
    }
    
    
    
  
</style>