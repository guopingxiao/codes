$(function() {
    $(window).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top > 300) {
            $('._top').fadeIn(600);
        } else {
            $('._top').fadeOut(600);
        }
    });
    $("._top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
});