/***kaneshiro add***/

/*present page*/
(function ($) {
    var page_id = 'default';
    MAEHARA = {};
    //common
    MAEHARA.COMMON = {
        init: function () {
            page_id = $('main').attr('id');
        }
    }
    MAEHARA.PRESENT = {
        init: function () {
            if (page_id === 'present') {
                //body Class add
                $('body').addClass('pr_mae-present-page');
                //jaounal only
            }
            /*slider001*/
            $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
    		    auto: true,
                infiniteLoop: true,
                pager:false,
    		    pause: 5000,
    		    speed: 1500,
                slideWidth: 200,
                slideMargin: 20,
    		    controls: false,
    		    captions: true,
    		    mode: 'horizontal',
                responsive: true,
			});
            $('.slick-test').slick({
                infinite: true,
                dots:true,
                arrows: false,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                pauseOnFocus: false,
                pauseOnHover:false,
                // adaptiveHeight:true,
                prevArrow: '<span class="pr_atr-top-slide-arrow-prev js-pr_height-adj"></span>',
                nextArrow: '<span class="pr_atr-top-slide-arrow-next js-pr_height-adj"></span>'
            });
        },
        slide: function () {
            $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
                pager:false,
                slideWidth: slide_resize,
            });
        }
    }
    var win_w = $(window).width();
    var slide_resize = (win_w / 100) * 53;
    $(document).ready(function () {
        win_w = $(window).width();
        slide_resize = (win_w / 100) * 53;
        MAEHARA.COMMON.init();
        MAEHARA.PRESENT.init();
    });
    $(window).on('resize', function () {
        win_w = $(window).width();
        slide_resize = (win_w / 100) * 53;
        // console.log(win_w,slide_resize);
        // MAEHARA.PRESENT.slide();
    });
})(jQuery);

/***end***/