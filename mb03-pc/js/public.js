$(function(){
   // $(window).on("scroll",function(){
   //      if ($(this).scrollTop()>=110) {
   //          $("#header").addClass("mini");
   //      }else{
   //          $("#header").removeClass("mini");
   //      }
   //  });

	//在线咨询
    $("#online_open").on("click",function(){
        $(this).animate({"right":-40},300);
        $(this).next("#online_lx").animate({"right":10},500);
    });

    $("#online_close").click(function(){
        $(this).parents("#online_lx").animate({"right":-200},300);
        $(this).parents("#online_lx").prev("#online_open").animate({"right":22},500);
    });


     //二维码遮罩
    $("#sweixin").on("click",function(){
        $(this).parent("#shares").next("#fixed_weixin").addClass("show");
    });

    $("#mpbtn").on("click",function(){
        $("#fixed_weixin").addClass("show");
    });

     $("#fixed_weixin").on("click",function(e){
        var target  = $(e.target);           
        if(target.closest(".fixed-container").length == 0){               
        $("#fixed_weixin").removeClass("show");         
        }e.stopPropagation();
    });
})