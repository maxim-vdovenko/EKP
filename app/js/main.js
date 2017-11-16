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
    fix: 'fix',    
    active: 'active',
     
    tab: '.product .table',
    let: 'thead td b', 
    str: 'thead td span',
    
    head: '.tabHeader',
    headCont: '.tabHeader__cont'
};

table.init = function(){
  
    this.sticking();
};

table.events = function(){
    
    
                 
};

table.sticking = function(){
    var x = null, h = null;
    
    $(window).on('scroll', this.button, function(event){
        table.head_height();
        
        x = $(table.head).offset().top;
        h = $(table.head).innerHeight();
        
        if(x >= $(window).scrollTop()){
            $(table.head).removeClass(table.fix);
        }else{
            $(table.head).addClass(table.fix);
        } 
    });
};

table.header = function(){
    var td = $('.product .table').eq(0);
    $(table.head + ' tr:nth-child(1) td:nth-child(1)').width(td.find('tbody tr:first-child td:nth-child(1)').outerWidth() + 1);
    $(table.head + ' tr:nth-child(1) td:nth-child(2)').width(td.find('tbody tr:first-child td:nth-child(2)').outerWidth());
    $(table.head + ' tr:nth-child(2) td:nth-child(1)').width(td.find('tbody tr:first-child td:nth-child(3)').outerWidth());
    $(table.head + ' tr:nth-child(2) td:nth-child(2)').width(td.find('tbody tr:first-child td:nth-child(4)').outerWidth());
    $(table.head + ' tr:nth-child(2) td:nth-child(3)').width(td.find('tbody tr:first-child td:nth-child(5)').outerWidth());  
    this.head_height();
};

table.head_height = function(){
    $(table.head).height($(table.headCont).height());
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












