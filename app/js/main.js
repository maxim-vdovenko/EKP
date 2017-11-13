$(document).ready(function(){ /* ... */ });

window.onload = function(){
     
    
    //table.init();
    filters.init();
     
     
     
     
     
     $('.selectpicker').selectpicker({
          size: 4
     });
     
     
     
     $('.cartBlock__list').scrollbar();

};






var filters = {
    active: 'active',
    bl: '.filters',
    box: '.filters__box',
    button: '.filters__box > span',
    list: '.filters__box > ul',
    tim: 250
};

filters.init = function(){
     
     this.events();
};

filters.events = function(){
     
    $('body').on('click', this.button, function(event){
      
        if($(this).parents(filters.box).hasClass(filters.active)){
            
            $(this).parents(filters.box).removeClass(filters.active);
            $(this).parents(filters.box).find(' > ul').slideUp(filters.tim);
        }else{
            
            $(this).parents(filters.box).addClass(filters.active);
            $(this).parents(filters.box).find(' > ul').slideDown(filters.tim);
        }
        
    });
    
};










var table = {
    tab: '.product .table',
    let: 'thead td b', 
    str: 'thead td span'
};

table.init = function(){
  
    this.letter();
    this.events();
};

table.letter = function(){
    
    //var firstChar = $(this.str).substr(0, 1).toUpperCase();
    
    /*
    for(var i=0; i<$(this.tab).length; i++){
        
        var t = $(table.tab).eq(i).first(table.str).substr(0, 1).toUpperCase();
        
        console.log( t );
        
    }
    */
    
    
    /*
    var st = "1123цетамиприд 777 G 0";
    
    st = String(st);
    
    console.log( String(st) );
    */
    

    
};


table.events = function(){

};















/* page ---------------------------------------*/
var page = {
    x: 0, 
    lg: 1141, //1140
    md: 992,
    sm: 768,
    xs: 500
};

page.init = function(){
    page.events();
    
    $(window).resize(function(){
        page.events();
    });
};

page.events = function(){
    this.x = window.innerWidth;
    
    if(this.lg <= this.x){
        canvas.resNormal();
    }else{
        canvas.resMobile();
    } 
    
    if(this.md <= this.x){
        menuMobile.close();
        news.resNormal();
    }else { 
        news.resMobile(); 
    }
};












