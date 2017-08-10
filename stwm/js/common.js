$(function(){
    //if(Modernizr.cssanimations){
    //    function adwow(){
    //        $('nav').addClass('wow mw');
    //        $('.telnum').addClass('wow mw');
    //        $('.floor ul').addClass('wow mw');
    //        $('.example').addClass('wow mw');
    //        $('.customers').addClass('wow mw');
    //        $('.index_info').addClass('wow mw');
    //        $('.cooperation').addClass('wow mw');
    //        $('footer').addClass('wow mw');
    //    }
    //    adwow();
    //    $('.wow').each(function(index, element) {
    //        $(this).attr({'data-wow-duration':'600ms', 'data-wow-delay':'300ms'});
    //        if($(this).hasClass('mw')) $(this).addClass('fadeInUp');
    //    });
    //    new WOW().init();
    //}

    var s = $('.changetype .infoList li[class="on"]').index();
    jQuery(".floor01slide").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,easing:"easeInQuint"});
    jQuery(".imgslide").slide({mainCell:".bd ul",effect:"left",autoPlay:true,easing:"easeInQuint"});
    jQuery(".imgslidetwo").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,easing:"easeInQuint"});
    jQuery(".changetype").slide({titCell:".hd ul",mainCell:".bd ul",effect:"left",vis:3,defaultIndex:s});
    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3});
    
    $('.insidenav .heade li').click(function(){
        var _index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.insidenav .changecon .containt').eq(_index).show().siblings().hide();
    });


    $('.changetype ul li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.pagechange .select select').change(function(){
        $('.pagechange .select span').html($('option:selected',this).text())
    });

    $(window).scroll(function(){
       var _top = $(this).scrollTop();
        if(_top >= 362){
            $('.insidenav').addClass('fixedcon')
        }else{
            $('.insidenav').removeClass('fixedcon')
        }
    })

});

