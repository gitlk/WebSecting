$(function(){
	$('#navbtn').click(function(){
		$('nav').removeClass('hide');
		$('.mask').removeClass('hide');
		$('body').addClass('open');
	});
	$('nav .close').click(function(){
		$('nav').addClass('hide');
		$('.mask').addClass('hide');
		$('body').removeClass('open');
	});

	$('nav ul li a').click(function(){
		$(this).children('span').addClass('on');
	});

	 $(".mask").on("click",function(e){
		var target  = $(e.target);           
		if(target.closest(".innerInfo").length == 0){               
		    $('nav').addClass('hide');
			$('.mask').addClass('hide');
			$('body').removeClass('open');          
		}e.stopPropagation();
	});
})