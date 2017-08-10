


$(function(){
    /*��ҳ------------------------------------------------------------------------------------------*/
    /*��������*/
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
    //��������Բ�Ǳ任
    $('.select-search').click(function(){
        $(this).parent().css('border-bottom-left-radius','0');
        $('ul li',this).click(function(){
            $(this).parent().parent().parent().css('border-bottom-left-radius','5px');
        })
    });
    //����123
 
    //��ҳ--�����ֲ�
    jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
    //tab
    jQuery(".tab1").slide();
    jQuery(".tab2").slide();
    /* �ڲ�inBox�����л���ע��titCell��mainCell�Ȳ����������ͬ */
    jQuery(".inBox").slide({ titCell:".inHd li",mainCell:".inBd" });
    /* ���outBox������л� */
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
    /*��ע��ť*/

    //��������
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
    //��ֹnav-rightð��
    $('.nav-right').hover(function(e){e.stopPropagation();});
    //nav-xiala
    $('.xiala').hover(
        function(){$('.nav-xiala').show();},
        function(){$('.nav-xiala').hide();}
    );



















});