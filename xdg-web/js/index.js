// JavaScript Document
//==========PC导航栏图标==========
$(".navimg").hover(
	function(){
		$(this).find(".hidden").fadeIn();
		$(".seachm").hide();
		$("#pcseach").hide();
		},
	function(){
		$(this).find(".hidden").hide();
})
	
$(".navseach").click(
	function(){
		$(this).find(".hidden").fadeToggle("fast");
		$("#pcseach").fadeToggle("fast");
})

$(".navwx").hover(
	function(){
		$(this).find(".hidden").fadeIn();
		$(".seachm").hide();
		$("#pcseach").hide();
		},
	function(){
		$(this).find(".hidden").hide();
})

//==========PC导航栏下拉==========

$(document).ready(function(e) {
    $(".pcheader ul li").hover(function(){
		$(this).parent().find(".pcdl").hide();
		
		$(this).find(".pcdl").stop().slideDown("slow");	
	},function(){
		$(this).find(".pcdl").stop().slideUp();
		})
});


$(".bb").click(function(){
	$(".wapnavbar").show();
	})
$(".wapclose").click(function(){
	$(".wapnavbar").hide();
	})
//==========wap导航子菜单==========

	
$(document).ready(function(){
$(".wapline").click(function(){
		var _this = $('.wapdl',this);
		$(this).parent().find('dl').slideUp("fast");
		$(this).parent().find("span").removeClass("wap_down");
		if($(_this).is(':hidden')){
			$(this).find("span").addClass("wap_down");
			$(_this).slideDown("fast");
		}else{
			$(this).find("span").removeClass("wap_down");
			$(_this).slideUp();
		}
	}
)
})

//==========服务领航==========
$(function(){
/*	if(window.innerWidth){
		winWidth = window.innerWidth;
	}
	else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}//==========获取当前屏幕宽度==========
	if(winWidth>=1110){*/
	$(".one_list ul li").hover(function(){
		$(this).find(".fwly_hover").stop(false,true).slideDown("fast");
		},function(){
		$(this).find(".fwly_hover").stop(false,true).slideUp("fast");	
	})
	
})

