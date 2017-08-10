window.onload=function(){
	$('.muen span').click(function(){
		$(this).parents('.muen').find('.muen-down').fadeToggle();
		})
	$('nav .nav >li >a').click(function(){
		$(this).parent('li').toggleClass('on').siblings('li').removeClass('on');
	})
}