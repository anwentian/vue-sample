<template>
    <div class="warp" >
        <HomeBanner></HomeBanner>
        <keep-alive>
          <News></News> 
        </keep-alive>  
    </div>
</template>

<script>
import HomeBanner from './HomeBanner.vue'
import News from './News.vue'

export default {
  components :{
    HomeBanner,
    News   
  }

}

</script>
