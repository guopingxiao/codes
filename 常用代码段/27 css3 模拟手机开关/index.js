function toogle(th) {
    var ele = $(th).children(".move");
    if (ele.attr("data-state") == "on") {
        ele.animate({
            left: "0"
        }, 300, function() {
            ele.attr("data-state", "off");
        });
        $(th).removeClass("on").addClass("off");
    } else if (ele.attr("data-state") == "off") {
        ele.animate({
            left: '60px'
        }, 300, function() {
            $(this).attr("data-state", "on");
        });
        $(th).removeClass("off").addClass("on");
    }
}