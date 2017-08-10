// JavaScript Document
//banner切换图
$(document).ready(function() {
   $(".slideBox").slide({mainCell:".bd ul",autoPlay:true,pnLoop:false}); 
});

//注册弹窗
function newwindow() {
    $(".body_bg").fadeIn("fast");
};
$(document).ready(function(e) {
    $(".xieyi_close").click(function(){
		$(".body_bg").fadeOut("fast");
		})
});

//top返回顶部按钮
$(document).ready(function(e) {
    $(".bottom_top_l").hover(function topk(){
		$(".bottom_top_r").stop().animate({'width':'toggle'},500);
	})
});

//返回顶部
$(function returnTop(){
		$(window).scroll(function(){
			if ($(window).scrollTop() > 300) {
				$(".bottom_top").slideDown(600);
			}else{
				$(".bottom_top").slideUp(200);
			};

		});
		$('.bottom_top').on('click',function(){
			$('html,body').animate({'scrollTop':0},500);
		});
});

//楼盘分享JiaThis
$(document).ready(function(e) {
    $(".jiathis_style_32x32").hover(function(){
		$(this).find(".jiathis_style_32x32_display").stop().slideDown();	
	},function(){
		$(this).find(".jiathis_style_32x32_display").stop().slideUp();	
	})
});

//导航栏电话
$(document).ready(function(e) {
    $(".navico_l_a1").hover(function(){
		$(this).parent().parent().find(".navico_phone").stop(true).fadeIn();
	},function(){
		$(this).parent().parent().find(".navico_phone").stop(true).fadeOut();
	})
});
