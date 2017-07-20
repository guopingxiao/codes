$(function() {
    var istop = true
    $('#loutiNav li').click(function() {
        istop = false
        $("li span").removeClass("active")

        $(this).find("span").addClass("active")

        var index = $(this).index()

        var target = $("#main div").eq(index).offset().top //当前点击的对象相对于页面的高度就是滚动条的高度

        //滚动条动画 达到目标值
        $('body,html').stop().animate({
            'scrollTop': target
        }, 300, function() {
            istop = true
        })
    })

    $(window).scroll(function() {

        if (istop) {
            var top = $(window).scrollTop()

            var index = 0
            //利用每次循环作比较  用一个变量来接收当前的下标值	
            $("#main div").each(function(ind, obj) {
                if (top >= $(obj).offset().top - 100) {
                    index = ind
                }
            })
            $("li span").removeClass("active")
            $("li span").eq(index).addClass("active")
        }
    })
})