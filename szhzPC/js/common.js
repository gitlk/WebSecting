//banner切换图
	$(document).ready(function() {$(".banner").slide({mainCell:".bd ul",titCell:".header_news ul li",trigger:"mouseover",autoPlay:true,pnLoop:false});});

//首页导航栏select事件	
$(".top_select").on("click",function(){
	var _ul = $(this).children("ul");
	if(_ul.css("display")=="none"){
		_ul.stop().slideDown(100);
	}else{
		_ul.stop().slideUp(100);
	}
})
$(".top_select ul li").on("click",function(){
	var text = $(this).text();
	$(this).closest(".top_select").find("span").html(text);	
})

//首页banner浮动层select事件	
$(".select_one").on("click",function(){
	var _ul = $(this).children("ul");
	if(_ul.css("display")=="none"){
		_ul.stop().slideDown(100);
	}else{
		_ul.stop().slideUp(100);	
	}
})
$(".select_one ul li").on("click",function(){
	var text = $(this).text();
	$(this).closest(".select_one").find("span").html(text);	
})
	
//zhangguan2.html开始
$(function() {
	//pages_pic切换
	$(".slideBox").slide({mainCell:".bd ul",effect:"leftLoop",easing:"easeOutCirc"});
	//选择切换
	$(".pages_list_box").slide({titCell:".hd ul",mainCell:".bd .ulWrap",autoPage:true,effect:"leftLoop",autoPlay:false,vis:1});
});	


$(".pages_mainbox_tit>ul>li").on("mouseout mouseover",function(){
	$(this).addClass("on").siblings().removeClass("on");
	var index = $(this).index();
	var _div =  $(".pages_list").find(".box").eq(index);
	$(_div).addClass("on").siblings().removeClass("on");
})	


$(".pages_list_select>ul>li").on("click",function(){
	$(this).addClass("on").siblings().removeClass("on");
})	



//会展百问 点击事件
$(".baiwen_table tr").on("click",function(){
	var _next = $(this).next(".tr_hidden");	
	if($(_next).css("display")=="none"){
		$(_next).fadeIn("fast");
		$(this).find("i").html("－");
	}else{
		$(_next).fadeOut("fast");
		$(this).find("i").html("＋");
	}			
})	



//注册弹窗
function newwindow() {
    $(".body_bg").fadeIn("fast");
};
$(document).ready(function(e) {
    $(".xieyi_close").click(function(){
		$(".body_bg").fadeOut("fast");
		})
});

//登录弹窗
function login() {
    $(".login_bg").fadeIn("fast");
};

$(function(){
	$(".login_bg").click(function(e){
		var target = $(e.target);
		if(target.is(".login_bg")){
			target.fadeOut();
		}
	})
})

//登录弹窗
function xuqiu() {
    $(".xuqiu_bg").fadeIn("fast");
};

$(function(){
	$(".xuqiu_bg").click(function(e){
		var target = $(e.target);
		if(target.is(".xuqiu_bg")){
			target.fadeOut();
		}
	})
})

//服务商管理、基本资料
$(".bianji").click(function(){
	$(this).hide();
	$("#xiugai").css("display","block");
	$(".main_form1 ul li input").css("border","1px solid #cceeff");
	$(".main_form1 ul li input").removeAttr("disabled");	
})

//服务商管理、公司宣传图片点击
$(".pic_del").on("click",function(){
	$(this).parent(".pic_pic").hide();
})
//服务商管理、服务类型选中点击、服务地区
$(".fwmenu1_label i img").on("click",function(){
	if($(this).attr("src")=="images/non.png"){
		$(this).attr("src","images/has.png");
	}else{
		$(this).attr("src","images/non.png");
	}
})
	//判断服务商管理、服务类型是否选中		
	$(function(){
		$(".fwmenu1_label label").each(function() {
            if($(this).find("input").attr("checked")){
				$(this).css("display","block");	
			}
        });
	})


//服务商管理、业务标签
$(".fwmenu2 label img").on("click",function(){
	$(this).parent("label").remove();
})
//服务商管理、点击编辑
$(".bianji1").click(function(){
	$(this).hide();
	$("#xiugai1").css("display","block");
	$(".aup_pic").css("display","block");
	$(".pic_del").css("display","block");
	$(".pic_picup").css("display","block");
	$(".main_form2 ul li label").addClass("on");
	$(".tianjia").css("display","block");
	$(".fwmenu2 label img").css("display","block");
	$(".tianjia").css("display","block");
	$(".fwmenu3 textarea").removeAttr("disabled");
})


//服务商管理、需求管理
$(".xuqiu_3 span").click(function(){
	$(this).parent().parent().parent("li").find(".xuqiu_text").slideToggle("fast");
	if($(this).find("img").attr("src")=="images/down.png"){
		$(this).find("img").attr("src","images/top.png");
	}else{
		$(this).find("img").attr("src","images/down.png");
	}
})

$(".xuqiu_3 a img").click(function(){
	$(this).parent().parent().parent().parent("li").remove();
})


//返回顶部
/*$(document).ready(function(e) {
    if ($(window).scrollTop() < 300) {
		$(".returntop").hide();
	}
});

$(window).scroll(function(){
	if ($(window).scrollTop() > 300) {
		$(".returntop").slideDown(300);
	}else{
		$(".returntop").slideUp(100);
	};

});*/
function returnTop(){
	$('html,body').animate({'scrollTop':0},500);
};

$(".returntop_2").hover(function(){
	$(this).find("span").stop().fadeToggle("fast");
})
$(".returntop_3").hover(function(){
	$(this).find("span").stop().fadeToggle("fast");
})
$(".returntop_4").hover(function(){
	$(this).find("img").stop().fadeToggle("fast");
})
$(".returntop_5").hover(function(){
	$(this).find("span").stop().fadeToggle("fast");
})




