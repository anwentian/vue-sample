<template>
    <div class="warp" >       
        <div  id="column-banner">                                  
            <img src="src/assets/images/BobDylan.jpg"/>                                               
        </div>
        <div id="songs-list">
            <router-link  v-for="(item,index) in musicList" tag="div" :to="'/'+item.type+'/music/'+index" class = "news-list-item" >
                <div class="news-list-mian">
                    <div class="news-item-text">
                        <div class="news-item-title">
                            {{item.title}}
                        </div>
                        <div class="singer">
                            <span>{{item.singer}}</span>
                        </div>
                    </div>
                    <div class="news-item-image">
                        <img :src="item.image" :alt="item.alt" />
                    </div>
                                    
                </div>
            </router-link>
            
                
        </div>
    
        
    </div>
</template>

<script>

    import ColumnBanner from "./ColumnBanner.vue"

    export default {
        data(){
            return {
                musicList:[]
            }
        },
        components: {
            ColumnBanner          
        },
        mounted(){       
            this.getData();
        },
        methods:{
            getData(){
            var  _this=this;       
            this.$http.get("/src/data/column.data").then(function(res){
               _this. musicList=res.data;
            }).catch(function(err){
                console.log(err);
            })
        }

        }
        
    }
    
</script>