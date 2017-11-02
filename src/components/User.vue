<template>
    <div class="warp">
        <div id="user-info">
            <div id="user-pic"><img src="/src/assets/images/user-pic.png"/></div>
            <span id="logon">登录</span>
            <span id="register">注册</span>
            
            
        </div>
    </div>
</template>
<style scoped>
    #user-info  {
        height: 100px;
        background: url("/src/assets/images/user-bg.jpg");
        padding-left:25px;
        padding-right:25px;
        display:-webkit-flex;
        display: flex;      
        align-items: center;
    } 
    #user-pic{
        height:50px;
        width:50px;
        border-radius:50%;
        overflow:hidden;
        margin-right:3rem;
    }
    #logon,#register {
        color: #fff;
        padding-right:2rem;
    }
</style>