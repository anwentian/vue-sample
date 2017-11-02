<template>
    <footer class="footer-container">
     
       
     
        <router-link to="/home" tag="div" active-class="footer-active">
            <span id="home-img"></span>
            <p>首页</p>      
        </router-link>
        <router-link to="/column" tag="div" active-class="footer-active">
            <span id="column-img"></span>
            <p>专栏</p>      
        </router-link>
        <router-link to="/user" tag="div" active-class="footer-active">
            <span id="user-img"></span>
            <p>我</p>      
        </router-link>
  
    </footer>
</template>