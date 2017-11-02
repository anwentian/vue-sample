<template>
    <div class="warp">
        <div id="back">
            <span onclick="window.history.go(-1)">返回</span>
        </div>
        <article>
            <h1>{{articleItem.title}}</h1>      
            <div class="address">
                <span>{{articleItem.date}}</span>
                <span>{{articleItem.quote}}</span>
            </div>
            <img class="article-pic" :src="articleItem.image" alt="articleItem.alt" />
            <blockquote class="text" v-html="articleItem.contents">
            </blockquote >        
            
        </article>
        <!--
        <div class= "footer-container">
        
        <div class=" comment">
            <a href="#">
                <img src="/src/assets/images/comment.png"/>
            </a>
            <span>0</span>
        </div>
        <div class="like">
            <a href="#">
                <img src="/src/assets/images/like.png"/>
            </a>
            <span>0</span>
        </div>
    </div>-->
    </div>
</template>
<script>
var pEles=document.getElementsByTagName("p");

export default {
    data(){
        return {
            articleItem:{},
            articleId:0,
            target:""
        }
       
    },
    mounted(){
        this.target = this.$route.params.tp;
        this.articleId=this.$route.params.id || 0;
        this.getDate(this.target);       
    },
    watch:{
        $route(to){
            var pattern=/(news|social|military|ent|sport)\/article\/\d+$/;        
            this.articleId=this.$route.params.id || 0;
            // this.getDate(this.$route.params.tp);
            if(pattern.exec(to.path)){
                this.target = pattern.exec(to.path)[1];
                this.getDate(this.target);

            }


        }
	},
    methods: {
         getDate(para){
            var _this=this;
            var pattern=/(news|social|military|ent|sport)\/article\/\d+$/;               
            this.articleId=this.$route.params.id || 0;
            this.$http.get("/src/data/"+para+".data").then(function(res){
               _this.articleItem=res.data[_this.articleId];
             
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
    article h1 { font-size:1.4rem;}
    

       
</style>