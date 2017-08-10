$(function(){

	// 打开导航
	$("#navbtn").click(function(){
		$("#nav").css("opacity","1");
		$("#nav").css("visibility","visible");
	})
	// 关闭导航
	$("#navclose").click(function(){
		$("#nav").css("opacity","0");
		$("#nav").css("visibility","hidden");
	})

	// 智能择校 school

	    // 选择学校
	    var num = 0;
    	$(".school .school-list li").each(function(){
    		var flag = true;
    		$(this).parent().siblings(".top").children(".four").children("i").html(num);
    		$(this).children(".choice").click(function(){
    			if(flag){
    				$(this).parent().addClass("checked");
    				$(this).children().attr("src","images/gou1.png");
    				flag = false;
    			}else{
    				$(this).parent().removeClass("checked");
    				$(this).children().attr("src","images/yuan.png");
    				flag = true;
    			}
    			if($(this).parent().hasClass("checked")){ 
    				num++; 
    			}else{ num-- }
    			$(this).parent().parent().siblings(".top").children(".four").children("i").html(num);
    		})

    	})


        // 在读年级选择
        $("#choose-more .grade a").click(function(){
            $("#choose-more .grade a").removeClass("active");
            $(this).addClass("active");
        })

        // 更多下拉
        var flag = true;
        var str = $(".drop-down");
        $(".choose .aa").on('click',function(){
            $("#sort .sort-list").css("display","none");
            $(".school .shade1").removeClass("hide2");
            $("#subject .shade1").removeClass("hide2");
            if(!$(this).hasClass("active")){ 
                flag = true;
            }
            if($(this).siblings(".nation").length!=0){
                var index = $(this).index()-1;
            }else{
                var index = $(this).index();
            }
            // 下拉超出滚动显示
            var hh = $(".squery").eq(index).height();
            if (hh >= 280) {
                $(".squery").eq(index).css("overflowY","scroll");
            };

            $(".choose a").removeClass("active");
            $(this).addClass("active");
            $(".drop-down").css("display","none");
            $("#nation").css("display","none");
            if (flag) {
                str.eq(index).css("display","block");
                $("#content").children(".shade").addClass("hide");
                flag = false;
            }else{
                str.eq(index).css("display","none");
                $("#content").children(".shade").removeClass("hide");
                flag = true;
            }

            str.eq(index).children("ul").children("li").children("a").click(function(){
                $(".drop-down ul li a").removeClass("on");
                $(this).addClass("on");
                var dropcon = $(this).html();
                $(".choose .aa").eq(index).html(dropcon+'<span class="triangle_border_down a"></span>');
                $(".drop-down").css("display","none");
                $("#content").children(".shade").removeClass("hide");
                flag = true;
            })

            $("#choose-more .apply .btn .sure").click(function(){
                $("#choose-more").css("display","none");
                $("#content").children(".shade").removeClass("hide");
                flag = true;
            });
        })


        // 重置表单 
        $(".apply .btn .reset").click(function(){
            $('#choose-more form')[0].reset();
        })



        // 选择排序方式
    	var flag = true;
    	$("#sort .sortbtn").click(function(){
    		if (flag) {
    			$(this).next(".sort-list").css("display","block");
                $(".school").children(".shade1").addClass("hide2");
                $("#subject").children(".shade1").addClass("hide2");
    			flag = false;
    		}else{
    			$(this).next(".sort-list").css("display","none");
                $(".school").children(".shade1").removeClass("hide2");
                $("#subject").children(".shade1").removeClass("hide2");
    			flag = true;
    		}

    		$(".sort-list li a").click(function(){
    			var con = $(this).html();
    			$(this).parents(".sort-list").prev().html(con+'<span class="triangle_border_down"></span>');
    			$(this).parents(".sort-list").css("display","none");
                $(".school").children(".shade1").removeClass("hide2");
                $("#subject").children(".shade1").removeClass("hide2");
    			flag = true;
    		})
    	})


        // 搜索
        $("#search-category a").click(function(){
            $("#search-category a").removeClass("on");
            $(this).addClass("on");
        })


        // 加关注 专业
        $("#subject ul li").each(function(){
            var flag0 = true;
            $(this).children(".sright").click(function(){
                if (flag0) {
                    $(this).children("img").attr("src","images/xing-on.png");
                    $(this).children("span").html("已关注");
                    flag0 = false;
                }else{
                    $(this).children("img").attr("src","images/xing.png");
                    $(this).children("span").html("加关注");
                    flag0 = true;
                }
            })
        })

         // 加关注 院校
        $(".school .school-list li.item").each(function(){
            var flag0 = true;
            $(this).children(".right").click(function(){
                if (flag0) {
                    $(this).children("img").attr("src","images/xing-on.png");
                    $(this).children("span").html("已关注");
                    flag0 = false;
                }else{
                    $(this).children("img").attr("src","images/xing.png");
                    $(this).children("span").html("加关注");
                    flag0 = true;
                }
            })
        })



})