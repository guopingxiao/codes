var numstr = "22,690";
numGrow($('.block2 .num b'), numstr, 2000, 10);
//数字增长
function numGrow(obj, str, time, delay) {
    var num = numstr.replace(/[^0-9]/ig, "");
    var g = 0;
    obj.text(g);
    var step = Math.ceil(num / (time / delay));
    var time = setInterval(function() {
        if (g <= num - step) {
            g += step;
        } else {
            g = num;
        }
        obj.text(formatNum(g.toString()));
        if (g >= num) {
            clearInterval(time);
            return;
        }
    }, delay);
}
//数值处理
function formatNum(str) {
    var newStr = "";
    var count = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        if (count % 3 == 0 && count != 0) {
            newStr = str.charAt(i) + "," + newStr;
        } else {
            newStr = str.charAt(i) + newStr;
        }
        count++;
    }
    return newStr;
}