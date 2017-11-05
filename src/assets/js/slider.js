export default function Slider(options){
    this.default ={banner: "banner", width: 320,minDis:50 };
    this._options = extend(this.default,options);
    this.banner =  document.getElementById(this._options.banner);
    this.carosel = this.banner.getElementsByClassName('carousel-list')[0]
    this.indicators =  this.banner.getElementsByClassName('carousel-generic');
    this.carouselItem = this.carosel.getElementsByClassName('carousel-item');
    this.itemsCount = this.carouselItem.length;
    this.timer=null;
    this.timer1 = null;
   /* touch event param */
    this.startX = 0;
    this.currentX = 0;
    this.endX=0;
    this.dis=0;
     
    this.current =0;
    this.target = 0;
    
    this.initial();
    this.indicatorHandle();
    this.autoPlay();
    this.touchEvent();
}

Slider.prototype.initial = function(){
    for(let i =0;i<this.itemsCount;i++){
        this.carouselItem[i].style.left = i*this._options.width+"px";
    }
    for(let i =0;i<this.itemsCount;i++){
        this.carouselItem[i].style.position = "absolute"
    }
}

Slider.prototype.autoPlay = function(){
    
    clearTimeout(this.timer);
    let transform = "translate3d("+-320*this.target+"px, 0px,0px)";
    this.current = this.target;
    this.changeActiveIndicator(); 
    let duration = "300ms";
    this.carosel.style['-webkit-transform'] = transform;
    this.carosel.style.transform = transform;
    this.carosel.style.transitionDuration = duration;
    this.carosel.style['-webkit-transition-duration'] = duration;
    this.target++;
    if(this.target==this.itemsCount){
        this.target=0;               
    }
    this.timer = setTimeout(this.autoPlay.bind(this),4000);
}

Slider.prototype.touchEvent = function(){
    var _this = this;
    
    this.banner.addEventListener("touchstart",function(ev){        
        _this.startX = ev.changedTouches[0].pageX;
        clearTimeout(_this.timer);

    },false)
    this.banner.addEventListener("touchmove",function(ev){ 
       
        _this.currentX = ev.changedTouches[0].pageX;       
        _this.dis = _this.currentX-_this.startX;  
        if( 0 < _this.currentX < 320){
            _this.carosel.style['-webkit-transform']="translate3d("+(-320*_this.current+_this.dis)+"px, 0px,0px)";
            _this.carosel.style.transform = "translate3d("+(-320*_this.current+_this.dis)+"px, 0px,0px)";
            _this.carosel.style.transitionDuration = "0ms";                     
       };      
    },false)
   
    this.banner.addEventListener("touchend",function(ev){
       clearTimeout(_this.timer1);
      
        _this.endX = ev.changedTouches[0].pageX; 
        _this.dis = _this.endX - _this.startX;

        if(_this.dis > _this._options.minDis){
            _this.target = _this.current-1;
            _this.current==0?_this.target=0:_this.target;
        } else if (_this.dis <  -_this._options.minDis) {
            _this.target = _this.current+1;
            _this.current==2?_this.target=2:_this.target;
        }

        _this.carosel.style['-webkit-transform']="-translate3d("+-(320*_this.target)+"px, 0px,0px)";
        _this.carosel.style.transform = "translate3d("+-(320*_this.target)+"px, 0px,0px)";
        _this.carosel.style.transitionDuration = "300ms"; 
        _this.current = _this.target;                  
        _this.changeActiveIndicator();          
        _this.timer1 = setTimeout(_this.autoPlay.bind(_this),4000)

    },false)
}

Slider.prototype.indicatorHandle = function(){
    
    clearTimeout(this.timer)
    var _this = this;
    console.log(this.indicators);
    for (let i = 0;i<this.itemsCount;i++) {     
        this.indicators[i].addEventListener("click",function(){          
            _this.current=i;
            let transform = "translate3d("+-320*_this.current+"px, 0px,0px)";           
            let duration = "300ms";
            _this.carosel.style['-webkit-transform'] = transform;
            _this.carosel.style.transform = transform;
            _this.carosel.style['-webkit-transition-duration'] = duration;
            _this.carosel.style.transitionDuration = duration;
            _this.changeActiveIndicator();
            _this.target = _this.current           
            _this.autoPlay();

        },false)
    }
}

Slider.prototype.changeActiveIndicator = function(){
    for(let i = 0;i<this.itemsCount;i++ ){
        removeClass(this.indicators[i],'active')
    }
    addClass(this.indicators[this.current],'active');

}

function extend(target,opt){
    for (var key in opt) {
        target[key] = opt[key];
    }
    return target;
}

function addClass(obj,name){
    if (typeof obj == "undefined") return;
    if(obj.className == ""){
        obj.className=name;
    }else {
        if(hasClass(name,obj.className)) return;             
        obj.className+=" "+name;
    }
}
function removeClass(obj,name){
    if(typeof obj == "undefined" || !hasClass(name,obj.className)) return;
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
