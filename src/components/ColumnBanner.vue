<template>
    <div  id="column-banner"> 
        <div class="carousel" >             
            <ul class="carousel-list">
                <li class="carousel-item">                      
                    <img src="src/assets/images/BobDylan.jpg"/>                       
                </li>
                <li class="carousel-item">                       
                    <img src="src/assets/images/JoniMitchell.jpg"/>                       
                </li>
                <li class="carousel-item">   
                    <img src="src/assets/images/Beatles.jpg"/>   
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
            return {slider:null};
        },
        methods:{
            clearTimer(){
                clearTimeout(this.slider.timer);
                return;
            }
        },
        mounted(){      
            this.slider = new Slider({banner:'column-banner'}); 
        },
        destroyed(){
            this.clearTimer();
        }

    }
</script>