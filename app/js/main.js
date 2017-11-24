$(document).ready(function(){ /* ... */ });

window.onload = function(){
     
    page.init();
    table.init();
    filters.init();
    cart.init();    
    schedule.init();
    
    dots.init();
    
    //slid.init();
    

    $('.selectpicker').selectpicker({
        // size: 4
    });

    $('.cartBlock__list').scrollbar();
     
    $('.input-phone').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
 
};




/* page ---------------------------------------*/
var page = {
     x: 0,
     screen_md: 992,
     screen_sm: 768
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

     if(this.x > this.screen_md){
          filters.desktop();
     }else{

     } 
     
     if(this.x > this.screen_sm){
       
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
    
    filt: '.filters',
    filtButton: '.filters__title',
    filtCont: '.filters__cont',
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
     
    $('body').on('click', this.filtButton + ' b', function(event){
        
        if(page.x < page.screen_md){
            
            if($(this).parent().hasClass(filters.active)){
               
                $(this).parent().removeClass(filters.active);
                $(this).parents(filters.filt).find(filters.filtCont).slideUp(filters.tim);
            }else{
                
                $(this).parent().addClass(filters.active);
                $(this).parents(filters.filt).find(filters.filtCont).slideDown(filters.tim);
            }
        }
    });   
};

filters.desktop = function(){
     $(this.filtButton).removeClass(filters.active);
     $(this.filtCont).removeAttr('style');
};

filters.mobile = function(){

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
    var x = null, 
        h = null;
     
    if(!$(this.head).length) return;
    
    $(window).on('scroll', function(event){
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
    $(table.head + ' tr:nth-child(1) td:nth-child(1)').width(td.find('tbody tr:first-child td:nth-child(1)').outerWidth() + 4);
    $(table.head + ' tr:nth-child(1) td:nth-child(2)').width(td.find('tbody tr:first-child td:nth-child(2)').outerWidth() + 1);
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
    
    junior: '.conditions__cont--junior .schedule circle',
    popular: '.conditions__cont--popular .schedule circle',
    average: '.conditions__cont--average .schedule circle'
};

schedule.init = function(){

    this.events();
    this.distribution();
};

schedule.events = function(){
    
    $('body').on('shown.bs.modal', this.modal, function(event){
        slid.init();
    });
    
    $('body').on('shown.bs.modal', this.modal, function(event){
        schedule.circleInit(schedule.average, true);
        schedule.circleInit(schedule.popular, true);
        schedule.circleInit(schedule.junior, true);
    });

    $('body').on('hidden.bs.modal', this.modal, function(event){
        schedule.circleInit(schedule.average, false);
        schedule.circleInit(schedule.popular, false);
        schedule.circleInit(schedule.junior, false);

        $(schedule.cont).removeClass(schedule.active);
        $('.conditions__cont--popular').addClass(schedule.active);
        
        slid.reset();
    });

    $('body').on('click', '.btn-conditions', function(event){
        $(this).parents(schedule.bl).find(schedule.cont).removeClass(schedule.active);
        $(this).parents(schedule.cont).addClass(schedule.active);
    });
};

schedule.distribution = function(){
     
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




/* dots ---------------------------------------*/
var dots = {
    cartTable: ['.cart-table tbody td:nth-child(1)', 40],
    prodTable: ['.product .table tbody td:nth-child(1)', 30]
};

dots.init = function(){
    
    $(this.cartTable[0]).each(function() {
        dots.act($(this), dots.cartTable[1]);
    });
     
    $(this.prodTable[0]).each(function() {
        dots.act($(this), dots.prodTable[1]);
    });
};

dots.act = function(th, siz){
    var text = $(th).text(), textClone = '';
    
    if(text.length < siz) return;
    
    for(i=0; i<siz; i++){
        textClone += text[i];
    }
    textClone += '...';
    
    $(th).text(textClone);
};




/* slid ---------------------------------------*/
var slid = {
    bl: '.vueSlider',
    v: null
};

slid.init = function(){
    if(this.v != null) return;
    
    this.v = new Vue({
        el: slid.bl,
        data: {
            direction: "horizontal", 
            value: 20,
            min: 0,
            max: 100,
            eventType: "auto", 
            formatter: '¥{value}',
            speed: 0.5,
            bgStyle: null,
            sliderStyle: null, 
            tooltipStyle: null, 
            processStyle: null, 
            piecewiseStyle: null 
        },
        components: {
            'vueSlider': window['vue-slider-component']
        },
        methods: {
            reset() {
                this.value = 20;
            }
        }
    });
};

slid.reset = function(){
    this.v.reset();
};











