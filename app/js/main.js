$(document).ready(function(){ /* ... */ });

window.onload = function(){
     
    page.init();
    table.init();
    filters.init();
    cart.init();    
    schedule.init();
    
    
    
    $('.selectpicker').selectpicker({
        size: 4
    });

    $('.cartBlock__list').scrollbar();
     
     //$('.circlestat').circliful();
     
     
     
     
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




/* filters ------------------------------------*/
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




/* table --------------------------------------*/
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




/* cart ---------------------------------------*/
var cart = {
    title: '.cartBlock__title b',
    list: '.cartBlock__list',
    listUl: '.cartBlock__list ul'
};

cart.init = function(){
    cart.quantity();
    
    $('body').on('DOMSubtreeModified', this.list, function(event){
        cart.quantity();
    });
    
    $('body').on('click', this.list + ' .btn-cartClose', function(event){
        $(this).parents('ul').remove();
    });
};

cart.quantity = function(){
    var siz = $(this.listUl).length;
    $(this.title).text(siz);
};




/* schedule -----------------------------------*/
var schedule = {
    active: 'active',
    modal: '#product',
    bl: '.conditions',
    cont: '.conditions__cont',
    
    average: '.conditions__cont--average .schedule circle',
    popular: '.conditions__cont--popular .schedule circle',
    junior: '.conditions__cont--junior .schedule circle'
};

schedule.init = function(){

    $('body').on('shown.bs.modal', this.modal, function(event){
        schedule.circleInit(schedule.average, true);
        schedule.circleInit(schedule.popular, true);
        schedule.circleInit(schedule.junior, true);
    });
    
    $('body').on('hidden.bs.modal', this.modal, function(event){
        schedule.circleInit(schedule.average, false);
        schedule.circleInit(schedule.popular, false);
        schedule.circleInit(schedule.junior, false);
    });
    
    $('body').on('click', '.btn-conditions', function(event){
        $(this).parents(schedule.bl).find(schedule.cont).removeClass(schedule.active);
        $(this).parents(schedule.cont).addClass(schedule.active);
    });

};

schedule.circleInit = function(th, init){
    
    var v = 0;
    if(init){
        v = $(th).attr('value');
    }
    
    var rad = 2 * parseInt($(th).attr('r'), 10) * Math.PI;
    var val = (v / 100) * rad;
    $(th).css('stroke-dasharray', val + ',' + rad);
};




