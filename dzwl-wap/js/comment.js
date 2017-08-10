$(function(){
	ServiceImages.Init();
});



var ServiceImages={
	Index:0,
	AllCount:0,
    Init:function(){
		ServiceImages.AllCount=$(".service .lungun .container .item").length;
		var mWidth=ServiceImages.AllCount*$(".service .lungun").width()+"px";
		$(".service .lungun .container .item").width($(".service .lungun").width()+"px");
		$(".service .lungun .container").width(mWidth);
	},
	Left:function(){
		if(ServiceImages.Index<ServiceImages.AllCount-1)
		    ServiceImages.Index++;
			else
			ServiceImages.Index=0;	
		ServiceImages.Move();
	},
	Right:function(){
		if(ServiceImages.Index==0)
		    ServiceImages.Index=ServiceImages.AllCount-1;
			else
			ServiceImages.Index--;
		ServiceImages.Move();
	},
	Move:function(){
	$(".service .lungun .container").animate({marginLeft:-ServiceImages.Index*$(".service .lungun").width()+"px"},500);
	}
}


    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });

	$('.select_box').click(function(e){
		$('.select_box').find(".son_ul").slideUp(10);
		$(this).find(".son_ul").stop().slideToggle(300);
		e.stopPropagation();
		})

	window.onload = function(){
		$('body').click(function(e){
			e.stopPropagation()
			$('.son_ul').slideUp(200);
		})	
	}
	
		$(function () {
		  $(".mobile-inner-header-icon").click(function(){
		  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
		  	$(".mobile-inner-nav").slideToggle(250);
		  });
		  $(".mobile-inner-nav a").each(function( index ) {
		  	$( this ).css({'animation-delay': (index/10)+'s'});
		  });
		});