$(function(){

	// $(document).ready(function(){//页面准备好之后就执行的函数
 //        $("textarea").val("留言信息");
 //    });

	$("#business .list-wrapper .business-list").each(function(){
		var index = $(this).index() + 1;
		if (index%2 == 0) {
			$(this).css("marginRight","0");
		}
	});

	

    $("#navbtn").click(function(){
		$("#nav").css("opacity","1");
		$("#nav").css("visibility","visible");
	});

	 $("#nav .close").click(function(){
		$(this).parent().css("opacity","0");
		$(this).parent().css("visibility","hidden");
	});




	$("#online form .xx").on("click",function(){
		$("#online form .xx").removeClass("on");
		$(this).addClass("on");
	});


	$(".honor-list .honorimg").each(function(){
		var index = $(this).index() + 1;
		if (index%2 == 0) {
			$(this).css("marginRight","0");
		}
	});

	 $(".team-list").each(function(){
            var index = $(this).index() + 1;
            if (index%2 == 0) {
                $(this).css("marginRight","0");
            }
    });


	 $("#business-menu ul li").each(function(){
          var height = $(this).height();
          if (height>32) {
            $(this).find("a").css("paddingTop","15px");
            $(this).find("a").css("paddingBottom","15px");
          }else{
                $(this).find("a").css("paddingTop","29px");
                $(this).find("a").css("paddingBottom","30px");
          }
      });

	 
})