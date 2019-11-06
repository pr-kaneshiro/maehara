/***kaneshiro add***/

/*present page*/
jQuery.noConflict();
jQuery(function ($) {
    var page_id = 'default';
    MAEHARA = {};
    //common
    MAEHARA.COMMON = {
        init: function () {
            page_id = $('main').attr('id');
            console.log(page_id);
            //smoothscroll
            //SP
            if (window.matchMedia('screen and (max-width: 768px)').matches) {
                var headerHeight = $('.header-middle').outerHeight();
            }
            //PC
            else {
                var headerHeight = $('#header').outerHeight();
            }
            var urlHash = location.hash; //URLハッシュを取得
            var animeSpeed = 500; //スクロールのアニメーションスピード
            if (urlHash) {
              $('body,html').stop().scrollTop(0);
              setTimeout(function () {
                var target = $(urlHash);
                var position = target.offset().top - headerHeight; //ヘッダー固定の場合：headerHeight、そうでない場合：0
                $('body,html').stop().animate({
                  scrollTop: position
                }, animeSpeed);
              }, 100);
            }
            $('a[href^="#"]').on({
              'click': function () {
                console.log('OK!!!!!');
                var href = $(this).attr("href");
                var target = $(href);
                var position = target.offset().top - headerHeight; //ヘッダー固定の場合：headerHeight、そうでない場合：0
                $('body,html').stop().animate({
                  scrollTop: position
                }, animeSpeed);
              }
            });
        }
    }
    MAEHARA.PRESENT = {
        init: function () {
            //body Class add
            $('body').addClass('pr_mae-present-page');
            /*slider001*/
            $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
                auto: false,
                infiniteLoop: false,
                pager:false,
                pause: 5000,
                speed: 500,
                slideWidth: 200,
                slideMargin: 20,
                controls: false,
                captions: true,
                mode: 'horizontal',
                responsive: true,
            });
            // console.log(present_slider001);
            // present_slider001.reloadSlider();
            // $('.slick-test').slick({
            //     autoplay: false,
            //     speed: 1000,
            //     variableWidth: true,
            //     centerMode: false,
            //     centerPadding: "0",
            //     infinite: false,
            //     dots:true,
            //     arrows: false,
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //     autoplaySpeed: 3000,
            //     pauseOnFocus: false,
            //     pauseOnHover:false,
            //     // adaptiveHeight:true,
            //     prevArrow: '<span class="pr_atr-top-slide-arrow-prev js-pr_height-adj"></span>',
            //     nextArrow: '<span class="pr_atr-top-slide-arrow-next js-pr_height-adj"></span>'
            // });
        },
        slide: function () {
            // present_slider001 = $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
            //     auto: false,
            //     infiniteLoop: false,
            //     pager:false,
            //     pause: 5000,
            //     speed: 500,
            //     slideWidth: 200,
            //     slideMargin: 20,
            //     controls: false,
            //     captions: true,
            //     mode: 'horizontal',
            //     responsive: true,
            //     slideWidth: slide_resize,
            // });
            // function slide_resize() {
            //     present_slider001 = $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
            //         auto: false,
            //         infiniteLoop: false,
            //         pager:false,
            //         pause: 5000,
            //         speed: 500,
            //         slideWidth: 200,
            //         slideMargin: 20,
            //         controls: false,
            //         captions: true,
            //         mode: 'horizontal',
            //         responsive: true,
            //         slideWidth: slide_resize,
            //     });
            //     present_slider001.reloadSlider();
            // }
            // slide_resize();
            // setTimeout(function(){
            //     present_slider001.reloadSlider();
            // },1000);
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
                    maxSlides: 3,
                    moveSlides: 3,
                    slideWidth: slide_resize,
                    prevText: '',
                    nextText: '',
                    prevSelector: '.pr_mae-beg-arrow-left',
                    nextSelector: '.pr_mae-beg-arrow-right',
                    responsive: true,
                }); 
            }
        },
        slide: function () {
            $('.pr_mae-pre-sc-bsbox-slider').bxSlider({
                slideWidth: slide_resize,
            });
        }
    }
    var win_w = $(window).width();
    var slide_resize = 0;
    // $(document).ready(function () {
    //     win_w = $(window).width();
    //     slide_resize = (win_w / 100) * 53;
    //     MAEHARA.COMMON.init();
    //     if (page_id === 'present') {
    //         MAEHARA.PRESENT.init();
    //     }
    //     else if (page_id === 'beginer') {
    //         slide_resize = $('.pr_mae-beg-slide-box').width() / 3;
    //         MAEHARA.BEGINER.init();
    //         sliderFlag = true;
    //     }
    // });
    $(window).on('load', function () {
        win_w = $(window).width();
        slide_resize = (win_w / 100) * 53;
        MAEHARA.COMMON.init();
        if (page_id === 'present') {
            MAEHARA.PRESENT.init();
        }
        else if (page_id === 'beginer') {
            slide_resize = $('.pr_mae-beg-slide-box').width() / 3;
            MAEHARA.BEGINER.init();
        }
    });
    $(window).on('resize', function () {
        slide_resize = (win_w / 100) * 53;
        if (page_id === 'present') {
            MAEHARA.PRESENT.slide();
        }
        else if (page_id === 'beginer') {
            slide_resize = $('.pr_mae-beg-slide-box').width() / 3;
            MAEHARA.BEGINER.slide();
        }
    });
    var present_slider001;
    var present_slider001_flg = 'default';
    var slide_resize_test = 0;
    var slide_resize_test_height = 0;
    // var resize_option = {
    //     slideWidth: slide_resize_test / 100,
    // }
    function fn_slide_resize() {
        if(present_slider001_flg === 'default' ) {
            present_slider001 = $('.pr_mae-pre-sc-bsbox-slider-test').bxSlider({
                auto: true,
                infiniteLoop: false,
                pager:false,
                pause: 1000,
                speed: 500,
                // slideMargin: 20,
                controls: false,
                captions: true,
                mode: 'horizontal',
                responsive: true,
                adaptiveHeight:true,
            });
            present_slider001_flg = 'settings';
        }
        else {
            // console.log('slide_resize_test' + slide_resize_test);
            present_slider001.reloadSlider();
        }
    }
    $(window).on('orientationchange load resize', function () {
        win_w = $(window).width();
        slide_resize_test = (win_w / 100) * 53;
        // $('.pr_mae-pre-sc-bsbox-slider-test li').css('width',slide_resize_test + 'px !important');
        fn_slide_resize();
        // slide_resize_test_height = $('.pr_mae-pre-sc-bsbox-slider-test li').innerHeight();
        // $('.pr_mae-pre-sc-bsbox-slider-test').css('height',slide_resize_test_height);
    });
});

/***end***/