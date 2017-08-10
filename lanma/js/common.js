


$(function(){
    /*首页------------------------------------------------------------------------------------------*/
    /*搜索下拉*/
    $('.select-search').click(function(e){
        $('ul',this).toggle();
        e.stopPropagation();
        var _this = this;

        $('ul li',this).click(function(e){
            e.stopPropagation();
            $('.address',_this).hide();
            $('span',_this).html($(this).html());
            console.log($('.address',_this));
        })
    });
    //下拉左下圆角变换
    $('.select-search').click(function(){
        $(this).parent().css('border-bottom-left-radius','0');
        $('ul li',this).click(function(){
            $(this).parent().parent().parent().css('border-bottom-left-radius','5px');
        })
    });
    //排名123
    $('.inHd li').mouseenter(function(){
        var rel=$(this).attr('rel');
        if(rel==1){
            $(this).parent().parent().parent().parent().parent().find('.img123').attr('src','images/tab3-r-1.png')
        }if(rel==2){
            $(this).parent().parent().parent().parent().parent().find('.img123').attr('src','images/tab3-r-1-2.png')
        }if(rel==3){
            $(this).parent().parent().parent().parent().parent().find('.img123').attr('src','images/tab3-r-1-3.png')
        }
    });
    //首页--顶部轮播
    jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
    //tab
    jQuery(".tab1").slide();
    jQuery(".tab2").slide();
    /* 内层inBox渐显切换，注意titCell、mainCell等不能与外层相同 */
    jQuery(".inBox").slide({ titCell:".inHd li",mainCell:".inBd" });
    /* 外层outBox左滚动切换 */
    jQuery(".tab3-l").slide();
    jQuery(".tab3-r").slide();


    /*院校选择*/
    $('.select').click(function(e){
        $('ul',this).toggle();
        e.stopPropagation();
        var _this = this;

        $('ul li',this).click(function(e){
            e.stopPropagation();
            $('.address',_this).hide();
            $('span',_this).html($(this).html());
            console.log($('.address',_this));
        })
    });
    /*关注按钮*/
    $('.focus').click(function(){
        $(this).hide();
       $(this).next().show();
    });
    $('.focusNo').click(function(){
        $(this).hide();
        $(this).prev().show();
    });
    //友情连接
    jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",scroll:10,vis:10,trigger:"click"});
    //nav-left
    $('.nav-big .firstLi').hover(function(){
        $('.nav-left-no').show();
        $('.nav-onoff').removeClass('navicon22');
        $('.nav-onoff').addClass('navicon2');
    },function(){
        $('.nav-left-no').hide();
        $('.nav-onoff').removeClass('navicon2');
        $('.nav-onoff').addClass('navicon22');
    });
    //阻止nav-right冒泡
    $('.nav-right').hover(function(e){e.stopPropagation();});
    //nav-xiala
    $('.xiala').hover(
        function(){$('.nav-xiala').show();},
        function(){$('.nav-xiala').hide();}
    );



















});