/**
 * The jQuery Plugin of star
 * http://kyo4311.github.io/jquery.star/
 * Copyright guosheng
 * Released under the MIT license
 */
(function(hoverClass, defaults) {
    $.fn.star = function(opt) {
        return this.each(function() {
            var my = $(this),
                settings = $.extend({}, defaults, opt),
                index = -1;

            //生成a节点 绑定事件
            var a = $(cerateA(settings.number, settings.score))
                .on('mouseover.star', over)
                .on('mouseout.star', out)
                .on('click.star', click)
                .appendTo(my);

            //移上去
            function over() {
                renderStar($(this));
            }

            //离开
            function out() {
                if (index < 0) {
                    a.removeClass(hoverClass);
                } else {
                    renderStar(a.eq(index));
                }
            }

            //点击事件
            function click() {
                index = $(this).index();
                settings.onSelect.call(my, index + 1, destroy);
            }

            //摧毁事件
            function destroy() {
                my.find('a').off('mouseover.star').off('mouseout.star').off('click.star');
            }

            //控制Star样式
            function renderStar(obj) {
                obj.nextAll('a').removeClass(hoverClass)
                    .end()
                    .prevAll('a').andSelf().addClass(hoverClass);
            }

            //创建a的个数
            function cerateA(n, s) {
                var html = '';
                index = s - 1;
                for (var i = 0; i < n; i++) {
                    html += '<a class="jquery-star-a ' + (i < s ? hoverClass : '') + '"></a>'
                }
                return html;
            }
        });
    };

}('jquery-star-a-hover', {
    number: 5,
    score: 0,
    onSelect: function() {}
}));