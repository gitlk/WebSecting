$(function(){
    //cherome的头部logo
    function myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (userAgent.indexOf("Chrome") > -1){
            return "Chrome";
        }
    };
//以下是调用上面的函数
    var mb = myBrowser();
    if ("Chrome" == mb) {
        $('.header-body').append('<div class="box active"> <img id="image" class="image clip" src="images/logo1.png"> </div>');
        var eleText = document.getElementById('text'),
            eleImage = document.getElementById('image');
        // 碎片特效初始化
        clipPath(eleText);
        clipPath(eleImage);
    }else{
        $('.ie').show().animate({'left':0},500);
    };

    /*wow*/
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    };




});