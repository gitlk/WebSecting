$(function(){

	    
        // 首页及子网站diy.html效果start

        // banner
        var mySwiper = new Swiper ('.banner-swiper', {
            pagination: '.pagination',
            direction: 'horizontal',
            loop: true,
            autoplay: 3000
        });


        // section1
        var swiper1 = new Swiper('.section1-swiper',{
            speed:500,
            slidesPerView :1,
            onSlideChangeStart: function(){
                $(".section1 .tabs a").removeClass('active')
                $(".section1 .tabs a").eq(swiper1.activeIndex).addClass('active')  
            }
        });
        $(".section1 .tabs a").on('touchstart mousedown',function(e){
            e.preventDefault()
            var index = $(this).index()
            $(".section1 .head .more-list .more").removeClass("on")
            $(".section1 .tabs a").removeClass('active')
            $(this).addClass('active')
            $(".section1 .head .more-list .more").eq(index).addClass("on")
            swiper1.slideTo( $(this).index() )
        });
        $(".section1 .tabs a").click(function(e){
            e.preventDefault()
        });

        // section2
        var swiper2 = new Swiper('.section2-swiper',{
            speed:500,
            slidesPerView :1,
            onSlideChangeStart: function(){
                $(".section2 .tabs a").removeClass('active')
                $(".section2 .tabs a").eq(swiper2.activeIndex).addClass('active')  
            }
        });
        $(".section2 .tabs a").on('touchstart mousedown',function(e){          
            e.preventDefault()
            var index = $(this).index()
            $(".section2 .head .more-list .more").removeClass("on")
            $(".section2 .tabs a").removeClass('active')
            $(this).addClass('active')
            $(".section2 .head .more-list .more").eq(index).addClass("on")
            swiper2.slideTo( $(this).index() )
        });
        $(".section2 .tabs a").click(function(e){
            e.preventDefault()
        });

        // section3
        var swiper3 = new Swiper('.section3-swiper',{
            speed:500,
            slidesPerView :1,
            onSlideChangeStart: function(){
                $(".section3 .tabs a").removeClass('active')
                $(".section3 .tabs a").eq(swiper3.activeIndex).addClass('active')  
            }
        });
        $(".section3 .tabs a").on('touchstart mousedown',function(e){
            e.preventDefault()
            var index = $(this).index()
            $(".section3 .head .more-list .more").removeClass("on")
            $(".section3 .tabs a").removeClass('active')
            $(this).addClass('active')
            $(".section3 .head .more-list .more").eq(index).addClass("on")
            swiper3.slideTo( $(this).index() )
        });
        $(".section3 .tabs a").click(function(e){
            e.preventDefault()
        });


        // section4
        var swiper4 = new Swiper('.section4-swiper',{
            speed:500,
            slidesPerView :1,
            onSlideChangeStart: function(){
                $(".section4 .tabs a").removeClass('active')
                $(".section4 .tabs a").eq(swiper4.activeIndex).addClass('active')  
            }
        });
        $(".section4 .tabs a").on('touchstart mousedown',function(e){
            e.preventDefault()
            var index = $(this).index()
            $(".section4 .head .more-list .more").removeClass("on")
            $(".section4 .tabs a").removeClass('active')
            $(this).addClass('active')
            $(".section4 .head .more-list .more").eq(index).addClass("on")
            swiper4.slideTo( $(this).index() )
        });
        $(".section4 .tabs a").click(function(e){
            e.preventDefault()
        });

        // section5
        var swiper5 = new Swiper('.section5-swiper',{
            speed:500,
            slidesPerView :1,
            onSlideChangeStart: function(){
                $(".section5 .tabs a").removeClass('active')
                $(".section5 .tabs a").eq(swiper5.activeIndex).addClass('active')  
            }
        });
        $(".section5 .tabs a").on('touchstart mousedown',function(e){
            e.preventDefault()
            var index = $(this).index()
            $(".section5 .head .more-list .more").removeClass("on")
            $(".section5 .tabs a").removeClass('active')
            $(this).addClass('active')
            $(".section5 .head .more-list .more").eq(index).addClass("on")
            swiper5.slideTo( $(this).index() )
        });
        $(".section5 .tabs a").click(function(e){
            e.preventDefault()
        });

        $(".section5-swiper .slide-con a.item").click(function(){
            if ($(this).hasClass("on")) {
                $(this).removeClass("on")
            }else{
                $(this).addClass("on")
            }
        })

    
})