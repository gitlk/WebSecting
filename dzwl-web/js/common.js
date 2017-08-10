// JavaScript Document
$(function() {
	nav ();
	function nav(){
		$("#header nav .box0").hover(function(){
			$(this).find(".lis1").stop(true,true).slideToggle();
		},function(){
			$(this).find(".lis1").stop(true,true).slideToggle();
		});
		$("#header nav .box1").hover(function(){
			$(this).find(".lis2").stop(true,true).show();
		},function(){
			$(this).find(".lis2").stop(true,true).hide();
		});
	}

    $(".banner").slide({titCell:".hd span",mainCell:".bd ul",effect:"fold",autoPlay:true});
    $(".weixin").hover(function(){
        $(this).find("i").fadeIn("500");
    },function(){
        $(this).find("i").fadeOut("100");
    });

    srxx();
    function srxx () {
        $(".index-srxx .main").slide({titCell:".hd span",effect:"fold"});
        var uls =$(".index-srxx .main .bd ul");
        uls.each(function(){
            $(this).find("li:first").find(".qj-tu").css("background","url('images/srxx-mb-l.png') no-repeat");
            $(this).find("li:eq(2)").find(".qj-tu").css("background","url('images/srxx-mb-r.png') no-repeat");
            $(this).find("li:eq(1)").addClass("open");
        })
        $(".index-srxx .main .bd ul li").hover(function(){
            $(this).find(".imgs i").toggle();
            $(this).find(".txt i").toggle();
            $(this).toggleClass("open");
        },function(){
            $(this).find(".imgs i").toggle();
            $(this).find(".txt i").toggle();
            $(this).toggleClass("open");
        });
        $(".index-srxx .main .bd ul li.open").hover(function(){
            $(this).find(".txt i").css("display","block");
        },function(){
            $(this).find(".txt i").css("display","none");
        });
    };

    ywrs();
    function ywrs () {
        $(".index-ywrs .left .imgs").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
        $(".index-ywrs .left .main .text li span").click(function(){
            $(this).nextAll(".box").animate({
                    width: '590px'
                    },500);
            $(this).nextAll(".box").find(".box-box").show();
        });
        $(".index-ywrs .left .main .text li i.icon-r").click(function(){
            $(this).parents(".box").animate({
                    width: '0'
                    }, 300);
            $(this).parents(".box-box").hide();
        });

        $(".index-ywrs .left .main .text li span").click(function(){
            $(this).parents("li").siblings().find(".box").animate({
                    width: '0'
                    }, 300);
            $(this).parents("li").siblings().find(".box-box").hide();
        });
        $(".index-ywrs .left .main .text li:eq(0)").css("z-index","99");       
        $(".index-ywrs .left .main .text li:eq(1)").css("z-index","66");
        $(".index-ywrs .left .main .text li:eq(1)").css("background","#543902") ;
        $(".index-ywrs .left .main .text li:eq(2)").css("z-index","33");
        $(".index-ywrs .left .main .text li:eq(2)").css("background","#4c300e");   
        $(".index-ywrs .left .main .text li:eq(2)").css("box-shadow","none") ;
    };

    ywkt ();
    function ywkt () {
        $(".index-yekt .main .text").slide({effect:"fold"});
        $(".index-yekt .main .imgs").slide({titCell:".hd span",mainCell:".bd ul",effect:"fold",autoPlay:true});
    }

    foot ();
    function foot (){
        $(".footer .main dl:eq(4)").css("margin-left","280px");
        $(".footer .main dl:eq(5)").css("margin-right","20px");

    }
    suspension ();
    function suspension (){
    	$(".suspension li").hover(function(){
    		$(this).find(".box").stop(true,true).fadeToggle();
    	},function(){
    		$(this).find(".box").stop(true,true).fadeToggle();
    	});
    }
});
