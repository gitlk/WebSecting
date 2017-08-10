$(function(){
	$(".menu .nli").click(function(){
		$(".nli").find(".menu-one").removeClass("on");
		$(".nli").find(".sub-nav").slideUp("slow");
		$(".nli").find(".menu-img").attr("src","images/icon2.png");
		$(this).find(".sub-nav").stop().slideToggle("slow");
		$(this).find(".menu-img").attr("src","images/icon1-on.png");
		$(this).find(".menu-one").addClass("on");
		$(this).addClass("on");
	});

	$(".sub-nav ul li").click(function(){
		$(this).addClass("on");
	});
    $(".top").on("click",function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

})