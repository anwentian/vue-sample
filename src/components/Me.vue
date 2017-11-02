<template>
    <div id="my-logo">
        <div id = "my-name">
            <span>anwentian</span>
        </div>
    </div>
</template>
<style scoped>
    #my-logo {
        height: 40px;
        line-height: 40px;
        font-size:1.4rem;
        color: #ccc;
        text-align: center;
        padding-bottom: 60px;
    }
    #my-name {
        display: inline-block;
       
    }
    #my-name span {
        padding-left: 1rem;
        padding-right: 1rem;

    }
    #my-name::before, #my-name::after {
	content: "";
	display: inline-block;
	width: 20px;
	height: 1px;
	background: #ccc;
	line-height:40px;
    vertical-align: middle;
}

</style>