$(function(){
	$("#online form input").each(function(){
		var index = $(this).index() + 1;
		if (index%2 == 0) {
			$(this).css("marginRight","0");
		}
	});

	$("#news .news .newslist li").each(function(){
		var index = $(this).index() + 1;
		if (index%2 == 0) {
			$(this).css("marginRight","0");
		}
	});

	$("#team .team li").each(function(){
		var index = $(this).index() + 1;
		if (index%4 == 0) {
			$(this).css("marginRight","0");
		}
	});

	$("#container .subcon .product-list li").each(function(){
		var index = $(this).index() + 1;
		if (index%4 == 0) {
			$(this).css("marginRight","0");
		}
	});


})