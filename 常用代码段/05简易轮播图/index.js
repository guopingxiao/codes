$(document).ready(function() {

    function Slide(sTime) {
        var $arrow = true; //是否启用左右箭头 true为启用
        var $numb = false; //是否启用数字 true为启用
        $('#slide,#slide img').css('width', '500px').css('height', '300px'); //容器宽高
        //创建li
        $('#slide').append('<ul class="dotted"></ul><div class="left"><</div><div class="right">></div>');
        for (var j = 0; j < $('.slide_img li').length; j++) {
            if ($numb) {
                $('.dotted').append('<li>' + (j + 1) + '</li>');
            } else {
                $('.dotted').append('<li><span></span></li>');
            }
        }
        $('.slide_img li').first().show();
        $('.dotted li').first().addClass('active');
        //通过点击li 切换
        $('.dotted li').mouseover(function() {
            $(this).addClass("active").siblings('li').removeClass('active');
            var index = $(this).index();
            i = index;
            $('.slide_img li').eq(index).fadeIn().siblings('li').fadeOut();
        });

        //移动函数
        function move() {
            i++;
            if (i == $('.dotted li').length) {
                i = 0;
            }
            change()
        }

        function change() {
            $('.dotted li').eq(i).addClass("active").siblings('li').removeClass('active');
            $('.slide_img li').eq(i).fadeIn().siblings('li').fadeOut();
        }
        //自动轮播
        //alert(($('#slide').height()-$('.left').height()));
        var i = 0;
        var t = setInterval(move, sTime);
        //鼠标移动到容器内
        $('#slide').hover(function() {
            clearInterval(t);
            if ($arrow) {
                $('.left,.right').css('top', ($('#slide').height() - $('.left').height()) / 2);
                $('.left,.right').fadeIn();
            }
        }, function() {
            t = setInterval(move, sTime);
            $('.left,.right').fadeOut();
        });
        //左箭头
        $('.left').click(function() {
            i = i - 1;
            if (i == -1) {
                i = $('.slide_img li').length - 1;
            }
            change()
        });
        //右箭头
        $('.right').click(function() {
            i = i + 1;
            if (i == $('.slide_img li').length) {
                i = 0;
            }
            change()
        });

    }
    Slide(3000);
});