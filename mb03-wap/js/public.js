$(function(){

	$("#openlc").click(function(){
		$(this).parents().find("body").addClass("open");
		$(this).parents().find(".scrollView").children("#bgmask").removeClass("hide");
	});
	$("#bgmask").click(function(){
		$(this).addClass("hide");
		$(this).parents().find("body").removeClass("open");
	});

	$("#nav .navitem").bind("click",function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).children(".subnav").css("height","0px");	
		}else{
			var num = $(".subnav li").length;
			var height = $(".subnav li").height()*num;
			$(this).addClass("active");
			$(this).children(".subnav").css("height",height);
		}
	});

	// 引入wow.js插件
    var wow = new WOW({
    　　boxClass: 'wow',
    　　animateClass: 'animated',
    　　offset: 0,
    　　mobile: true,
    　　live: true
    });
    wow.init();

	$("#category").click(function(){
		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$(this).children(".transform").css("height","0px");
		}else{
			var num = $(this).find(".transform li").length;
			var height = $(".transform li").height()*num;
			$(this).addClass("open");
			$(this).children(".transform").css("height",height);
		}
	});

})