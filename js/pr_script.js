/***kaneshiro add***/

/*present page*/
(function ($) {
    var page_id = 'default';
    MAEHARA = {};
    //common
    MAEHARA.COMMON = {
        init: function () {
            page_id = $('main').attr('id');
            console.log(page_id);
        }
    }   
    MAEHARA.PRESENT = {
        init: function () {
            //body Class add
            $('body').addClass('pr_mae-present-page');
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
    MAEHARA.BEGINER = {
        init: function () {
            $('body').addClass('pr_mae-beginer-page');
            /*SP*/
            if(window.matchMedia('screen and (max-width: 768px)').matches) {
                console.log('SP!!!');
                $('.pr_mae-beg-base-slide001').bxSlider({
                    auto: true,
                    infiniteLoop: true,
                    pager:true,
                    pause: 5000,
                    speed: 1500,
                    controls: true,
                    captions: true,
                    mode: 'horizontal',
                    prevText: '',
                    nextText: '',
                    prevSelector: '.pr_mae-beg-arrow-left',
                    nextSelector: '.pr_mae-beg-arrow-right',
                    responsive: true,
                });
            }
            /*PC*/
            else {
                console.log('PC!!!');
                $('.pr_mae-beg-base-slide001').bxSlider({
                    auto: true,
                    infiniteLoop: true,
                    pager:true,
                    pause: 5000,
                    speed: 1500,
                    controls: true,
                    captions: true,
                    mode: 'horizontal',
                    minSlides: 3,
                    maxSlides: 3,       //画面に表示する最大要素数
                    moveSlides: 3,      //一回のスクロールで動かす要素数
                    slideWidth: slide_resize,    //一つの要素の幅
                    prevText: '',
                    nextText: '',
                    prevSelector: '.pr_mae-beg-arrow-left',
                    nextSelector: '.pr_mae-beg-arrow-right',
                    responsive: true,
                }); 
            }
        },
        slide: function () {
            // $('.pr_mae-beg-base-slide001').destroySlider();
            $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
                slideWidth: slide_resize,
            });
        }
    }
    $(document).ready(function () {
        win_w = $(window).width();
        slide_resize = (win_w / 100) * 53;
        MAEHARA.COMMON.init();
        if (page_id === 'present') {
            MAEHARA.PRESENT.init();
        }
        else if (page_id === 'beginer') {
            slide_resize = $('.pr_mae-beg-slide-box').width() / 3;
            MAEHARA.BEGINER.init();
            sliderFlag = true;
        }
    });
    $(window).on('resize', function () {
        slide_resize = (win_w / 100) * 53;
        // console.log(win_w,slide_resize);
        if (page_id === 'present') {
            MAEHARA.PRESENT.slide();
        }
        else if (page_id === 'beginer') {
            slide_resize = $('.pr_mae-beg-slide-box').width() / 3;
            MAEHARA.BEGINER.slide();
        }
    });
})(jQuery);

/***end***/