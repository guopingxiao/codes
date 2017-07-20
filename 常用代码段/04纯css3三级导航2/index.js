$(document).ready(function() {
    var $elem1 = $(".list1>li");
    var $elem2 = $(".list1>li>ol>li");

    $elem1.mouseenter(function() {
        $(this).children("ol").stop().slideDown();
    }).mouseleave(function() {
        $(this).children("ol").stop().slideUp();
    });

    $elem2.mouseenter(function() {
        $(this).children("ol").stop().fadeIn(1500);
    }).mouseleave(function() {
        $(this).children("ol").stop().fadeOut(1500);
    });
});