$(function(){
	$('.side-content .info a.choose').click(function(){
		if ($(this).hasClass('on')) {
			$('.side-content .info a.choose').removeClass('on');
			$(this).removeClass('on')
		}else{
			$('.side-content .info a.choose').removeClass('on');
			$(this).addClass('on')
		}
	});

	
})