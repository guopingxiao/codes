/**
 * 主要利用了animate属性，在回调函数中setTimeout()将广告收起
 */
$(function () {
    $('#ad').animate({
        'marginTop': '0px'
    }, 500, function () {
        setTimeout(function () {
            $('#ad').animate({
                'marginTop': '-100px'
            }, 1000)
        }, 3000);
    })
})