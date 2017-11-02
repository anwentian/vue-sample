export default function CarouselPlugin(options){
   
    var Banner =  document.getElementById(options.banner),
    Indicators = Banner.getElementsByClassName('carousel-indicators')[0],
    Carousel = Banner.getElementsByClassName('carousel-list')[0],
    Generics = document.getElementsByClassName('carousel-generic'),
    carouselItem = document.getElementsByClassName('carousel-item'),
    index =0,
    timer = null,  
    hover = false;    
    const itemW = options.width;
    const len = options.len;
    setPos(carouselItem);
    setTimeout(autoSlid,options.interval);
    control();
   
    function autoSlid(){

        if(!hover){
            clearTimeout(timer);
            Carousel.style.cssText +="transform: translate3d("+-(itemW*index)+"px, 0px,0px);transition-duration: 300ms;"
            for(let i = 0;i<len;i++ ){
                removeClass(Generics[i],'active')
            }
            addClass(Generics[index],'active');
            index++;
            if(index==len){
                Carousel.style.left = "0";
                index=0;               
            }
            timer = setTimeout(autoSlid,options.interval)
        }           
    }
    
    function control() {      
        Banner.onmouseenter =function(ev) {
            hover = true;              
        };
        Banner.onmouseleave =function(ev) {
           hover = false;
           setTimeout(autoSlid,2000);
        }
       
        for (let i = 0;i<len;i++) {
            Generics[i].onclick =function(){
                index=i;
                Carousel.style.cssText +="transform: translate3d("+-(itemW*index)+"px, 0px,0px);transition-duration: 300ms;"
                for(let i = 0;i<len;i++ ){
                    removeClass(Generics[i],'active')
                }
                addClass(Generics[index],'active');
            };
        }
    }
    
    function setPos(eleList){
        for(let i =0;i<len;i++){
            eleList[i].style.left = i*itemW+"px";
        }
        for(let i =0;i<len;i++){
            eleList[i].style.position = "absolute"
        }
    }
    
    function addClass(obj,name){
        if (typeof obj == 'undefined') { return }
        if(obj.className == ""){
           //console.log(1)
            obj.className=name;
        }else {
            if(hasClass(name,obj.className)) return;             
            obj.className+=" "+name;
        }
    }
    function removeClass(obj,name){
        if (typeof obj == 'undefined') { return }
        if(!hasClass(name,obj.className)) return;
        var classArray=obj.className.split(" ");
        var names="";
        for( var i=0;i<classArray.length;i++){
            if(classArray[i]==name){
                classArray.splice(i,1);
            }		  
        }
        names=classArray.join(" ");
        obj.className=names;
    }
    
    function hasClass(name,names) {
        var re = new RegExp("^"+name+"$|^"+name+"\\s|\\s"+name+"\\s|\\s"+name+"$","g")
        return re.test(names);
    } 
}

