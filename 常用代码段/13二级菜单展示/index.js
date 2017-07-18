$(function() {
    $(".top-nav li").hover(function() {
        $(this).has("ul").children("ul").fadeIn();
    },
    function() {
        $(this).has("ul").children("ul").hide();
    });
})