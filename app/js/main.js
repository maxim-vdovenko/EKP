$(document).ready(function(){ /* ... */ });

window.onload = function(){
     
    page.init();
    table.init();
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


table.header = function(){
    var td = $('.product .table').eq(0);
    $('.tabHeader tr:nth-child(1) td:nth-child(1)').width(td.find('tbody tr:first-child td:nth-child(1)').innerWidth());
    $('.tabHeader tr:nth-child(1) td:nth-child(2)').width(td.find('tbody tr:first-child td:nth-child(2)').innerWidth());
    $('.tabHeader tr:nth-child(2) td:nth-child(1)').width(td.find('tbody tr:first-child td:nth-child(3)').innerWidth());
    $('.tabHeader tr:nth-child(2) td:nth-child(2)').width(td.find('tbody tr:first-child td:nth-child(4)').innerWidth());
    $('.tabHeader tr:nth-child(2) td:nth-child(3)').width(td.find('tbody tr:first-child td:nth-child(5)').innerWidth());    
};















/* page ---------------------------------------*/
var page = {
    x: 0
};

page.init = function(){
    page.events();
    table.header();
    
    $(window).resize(function(){
        page.events();
        table.header();
    });
};

page.events = function(){
    this.x = window.innerWidth;
    
    if(this.x > 768){
       
    }else{
      
    } 
};












