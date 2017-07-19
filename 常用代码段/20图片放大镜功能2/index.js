var $mark = $("#mark");
var $box1 = $("#box1");
var $box2 = $("#box2");
var $img = $box2.children("img");
$box1.on("mouseenter",
function(e) {
    //首先让mark遮罩显示
    $mark.stop().show();
    //再让box2显示
    $box2.stop().show();
    move(e)
}).on("mousemove",
function(e) {
    $mark.stop().show();
    $box2.stop().show();
    move(e);
}).on("mouseleave",
function(e) {
    $mark.stop().hide();
    $box2.stop().hide();
})

function move(e) {
    var l = e.clientX - $box1.offset().left - $mark.outerWidth() / 2;
    var t = e.clientY - $box1.offset().top - $mark.outerHeight() / 2;
    var minL = 0,
    minT = 0;
    var maxL = $box1.outerWidth() - $mark.outerWidth();
    var maxT = $box1.outerHeight() - $mark.outerHeight();
    l = l <= minL ? 0 : (l >= maxL ? maxL: l);
    t = t <= minT ? 0 : (t >= maxT ? maxT: t);
    $mark.css({
        left: l,
        top: t
    });
    $img.css({
        marginLeft: -3 * l,
        marginTop: -3 * t
    });
}