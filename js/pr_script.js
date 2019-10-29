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
            $('.slider-box').bxSlider({
					    auto: true,
					    pause: 5000,
					    speed: 1500,
					    controls: false,
					    captions: true,
					    mode: 'horizontal'
						});
        }
    }
    $(document).ready(function () {
        MAEHARA.COMMON.init();
        MAEHARA.PRESENT.init();
    });
})(jQuery);

/***end***/