<template>    
    <div  id="banner">            
        <div class="carousel" >
            <ul class="carousel-list" id = "hb">
                <li class="carousel-item">                      
                    <img src="/src/assets/images/banner1.jpg"/>                       
                </li>
                <li class="carousel-item">                       
                    <img src="/src/assets/images/banner2.jpg"/>                       
                </li>
                <li class="carousel-item">   
                    <img src="/src/assets/images/banner3.jpg"/>   
                </li>           
            </ul>
        </div>  
        <ol class="carousel-indicators">
            <li class="carousel-generic active"></li>
            <li class="carousel-generic"></li>
            <li class="carousel-generic"></li>
        </ol>         
    </div>
</template>
<script>
import Slider from '../assets/js/slider.js' 
export default {
    data(){
        return {slider:null}
    },
    methods:{
        clearTimer(){
            clearTimeout(this.slider.timer);
            return;
        }
    },
    mounted(){      
        this.slider = new Slider(); 
    },
    destroyed(){
        this.clearTimer();
    }

}
</script>