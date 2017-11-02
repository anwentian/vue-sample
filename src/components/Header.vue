<template>
    <header id = "head">
    	<p id="page-title">{{title}}</p>
    </header>
</template>
<script>
export default {
  data: function(){
    return {title:"资讯"}
  },
  watch: {
    $route(target){   
      if(target.path.indexOf("/column")!=-1){
        this.title="专栏"
      }else if(target.path.indexOf("/user")!=-1){
        this.title = "用户中心"
      }else if(target.path.indexOf("/home")!=-1){
        this.title = "资讯"
      }
      
    }
  }
}
</script>