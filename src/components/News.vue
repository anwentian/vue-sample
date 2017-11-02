<template>
    <div id="news">
        <nav>            
            <ul class="nav-bar" id="news-nav"> 
                <li v-for="(link,index) in navList" @click = "changeView(index)">
                    {{link}}
                </li>
            </ul>     
        </nav>
       <div id="news-list">
            <router-link tag="div" :to="'/'+news.type+'/article/'+index" class = "news-list-item" v-for="(news,index) in newsList">
                <div class="news-list-mian" >
                    <div class="news-item-text">
                        <div class="news-item-title">
                            {{news.title}}
                        </div>
                        <div class="news-item-date">
                            <span>{{news.date}}</span>
                        </div>
                    </div>
                    <div class="news-item-image">
                        <img :src="news.image" alt="news.alt" />
                    </div>
                </div>                    
            </router-link>    
        </div>            
    </div>
</template> 
<script>

export default{
    data(){
        return {
            navList:["推荐","社会","军事","娱乐","体育"],
            newsList:[],
            dataList:["news","social","military","ent","sport"],
            curr:0
        }
    },
    mounted(){
        this.getData();
        this.showActive();
    },
    methods: {
        showActive(){
            let newsLink = document.getElementById("news-nav").getElementsByTagName("li");
            let activeEle = newsLink[this.curr];
            
            const len = newsLink.length;
            for(let i=0;i<len;i++) {               
                newsLink[i].className='';
            }
            activeEle.className="nav-active";
        },
        changeView(index){
            
            this.curr=index;
            this.showActive();
            this.getData();
        },
        getData(){
            var  _this=this;
            var currentLink=_this.dataList[_this.curr];
            this.$http.get("/src/data/"+currentLink+".data").then(function(res){
               _this.newsList=res.data;
            }).catch(function(err){
                console.log(err);

            })
        }
    }

}
</script>