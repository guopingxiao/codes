
;(function ($) {
    var rateHelper = {
        value: 0,
    }
    var rateMethods = {
        init: function (options) {
            var that = this;
            var settings = $.extend({
                size: 30,
                default: 0,
                onClick:function(v){
                }
            }, options);
            var id = this.attr('id');
            var $starPanel = $('<div class="wyh-rate-starPanel"></div>');
            
            //填充内容
            this.addClass('wyh-rate');
            this.append($starPanel);
            for (var i = 0; i < 5; i++) {
                $starPanel.append('<span class="wyh-rate-star wyh-rate-star-on"></span>');
            }

            //设置星星大小
            settings.size = (settings.size > 50) ? 50 : settings.size;
            $('.wyh-rate-star').width(settings.size);
            $('.wyh-rate-star').height(settings.size);

            //绑定事件
            $starPanel.on('click', function (e) {
                var $tar = $(e.target);
                if ($tar.hasClass('wyh-rate-star')) {
                    var v = $tar.prevAll().length + 1;
                    $('#' + id).rate('setValue', v);
                    settings.onClick(v);
                }
            });

            // 鼠标移入事记录
            $starPanel.on('mouseover', function (e) {
                var $tar = $(e.target);
                if ($tar.hasClass('wyh-rate-star')) {
                    // 获得当前hover的星星index，前面active，后面not active
                    var v = $tar.prevAll().length;
                    var $star = that.find('.wyh-rate-star:eq(' + v + ')').addClass('wyh-rate-star-on');
                    $star.prevAll().addClass('wyh-rate-star-on');
                    $star.nextAll().removeClass('wyh-rate-star-on');
                }
            }).on('mouseout', function () {
                $('#' + id).rate('setValue', rateHelper.value);
            });
            
            //设置初始值
            $('#' + id).rate('setValue', settings.default);
            return this;
        },
        setValue: function (v) {
            var rex = /^[1-5]$/;
            if (rex.test(v)) {
                var index = v-1;
                var $star = this.find('.wyh-rate-star:eq(' + index + ')').addClass('wyh-rate-star-on');
                $star.prevAll().addClass('wyh-rate-star-on');
                $star.nextAll().removeClass('wyh-rate-star-on');
                rateHelper.value = v;
            } else {
                this.find('.wyh-rate-star-on').removeClass('wyh-rate-star-on');
                rateHelper.value = 0;
            }
        },
        getValue: function () {
            return rateHelper.value;
        },
        destroy: function () {
            //移除事件
            this.find('.wyh-rate-starPanel').off('click').off('mouseover').off('mouseout');
            //清空dom
            this.removeClass('wyh-rate').empty();
            return null;
        }
    }
    $.fn.rate = function (method) {
        if (!method || typeof method == 'object') {
            return rateMethods.init.apply(this, arguments);
        } else if (rateMethods[method]) {
            return rateMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            console.error(method + '不存在');
        }
    }
})(jQuery)