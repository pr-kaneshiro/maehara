/***kaneshiro add***/

/*present page*/
jQuery.noConflict();
jQuery(function ($) {
    var page_id = 'default';
    page_id = $('main').attr('id');
    var MAEHARA = {};

    MAEHARA.ATHAND = {}
    MAEHARA.ATHAND.init = function () {
        $('.pr_mae-athand-book-listTtl').on('click', function () {
            $(this).toggleClass('pr_js-active');
            $(this).next().stop().slideToggle();
        });
    }

    if (page_id === 'hand-picturebook') {
        MAEHARA.ATHAND.init();
    }
    if (page_id === 'repair') {

    }
});

/***end***/
