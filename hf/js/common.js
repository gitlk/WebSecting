$(function(){

    // 页面加载动画效果
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    };

    var aheight = $('#nav li a').height();
    var navHeight = $('#nav').height()/2;
    var navWidth = $('#nav').width()/2;
    $('#nav li a').css('lineHeight',aheight+'px');
    $('#nav').css('marginLeft',-navWidth+'px');
    $('#nav').css('marginTop',-navHeight+'px');


    // 导航展开
    $('#navbtn').click(function(){
        $('.mask').removeClass('hide1');
    });

    $('#navclose').click(function(){
        $('.mask').addClass('hide1');
    });

    $(".mask").on("click",function(e){
        var target  = $(e.target);           
        if(target.closest(".innerInfo").length == 0){               
           $(this).addClass('hide1');    
        }e.stopPropagation();
    });

    // banner轮播
    var swiper1 = new Swiper ('#banner', {
        pagination: '.pagination',
        loop: true,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 3000
    });  

    // 关闭浮动新闻
    $('.floatBar .floatCancel').click(function(){
        $(this).parents('.floatBar').css('display','none');
    });

    // 内页头部导航切换
    var swiper = new Swiper('.headnav .swiper-container', {
        speed: 600,
        nextButton: '.headnav .next',
        slidesPerView: 4
    });

    swiper.slideTo($('.headnav .swiper-container a.on').index());

    var aLength = $('.headnav .swiper-slide').length;
    if (aLength<=4) {
        $('.headnav .next').css('display','none');
    }

    var dheight = $('.project-detail .detail-top .right div p').height();
    if (dheight<144) {
        $('#more').css('display','none')
    }else{
        $('#more').css('display','block')
    }


    $('#more').click(function(){
        if ($(this).html()=='【展开查看更多】') {
            $('.project-detail .detail-top .right div p').css('maxHeight','none');
            $('.project-detail .detail-top .right div p').css('height','auto');
            $(this).html('【收回】');
        }else{
            $('.project-detail .detail-top .right div p').css('maxHeight','144px');
            $('.project-detail .detail-top .right div p').css('overflow','hidden');
            $(this).html('【展开查看更多】');
        }
    });

    var liLength = $('.project-detail .detail-middle ul li').length;


    $('.detail-middle a.detail-more').click(function(){
        if ($(this).html()=='展开查看更多') {
            $('.project-detail .detail-middle ul').css('maxHeight','none');
            $('.project-detail .detail-middle ul').css('height','auto');
            $('.project-detail .detail-middle .item').css('opacity','1');
            $(this).html('收回');
        }else{
            $('.project-detail .detail-middle ul').css('maxHeight','356px');
            $('.project-detail .detail-middle .item').eq(13).css('opacity','0');
            $('.project-detail .detail-middle .item').eq(14).css('opacity','0');
            $('.project-detail .detail-middle .item').eq(15).css('opacity','0');
            $('.project-detail .detail-middle .item').eq(16).css('opacity','0');
            $(this).html('展开查看更多');
        }
    });

    $('.aboutus .about-item a.item').click(function(){
        if($(this).next('.detail-con').hasClass('hide')){
            $(this).next('.detail-con').removeClass('hide');
            $(this).children('i').html('-');
        }else{
            $(this).next('.detail-con').addClass('hide');
            $(this).children('i').html('+');
        }
        
    });

    $('.recruitbtn').click(function(){
        if($(this).next().next('.upload').hasClass('on')){
            $(this).next().next('.upload').removeClass('on');
        }else{
            $(this).next().next('.upload').addClass('on');
        }
    });

    $('.recruitbtn0').click(function(){
        if ($('.mask2').hasClass('hide2')) {
            $('.mask2 .upload').addClass('on');
            $('.mask2').removeClass('hide2');
        }else{
            $('.mask2 .upload').removeClass('on');
            $('.mask2').addClass('hide2');
        }
    });


     $(".mask2 .bg").on("click",function(e){
        var target  = $(e.target);           
        if(target.closest(".innerInfo").length == 0){               
           $(this).parent().addClass('hide2');
           $(this).prev('.upload').removeClass('on');     
        }e.stopPropagation();
    });

     $('.recruit .recruit-item').click(function(){
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
        }else{
            $(this).addClass('on')
        }
     });
    

})