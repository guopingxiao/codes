/**
 * Created by MHF on 2017/6/30.
 */

/**
 *
 * @param obj {
 *    selector:"#id",
   *    score:'5',
   *    operable:boolean,
   *    star:{
   *        type:'img',//或者font
   *        light:path,
   *        dark:path,
   *        width:'',
   *        height:''
   *    }
 *
 * }
 * @constructor
 */
function starRaty(obj) {
    var scripts = $(document.body).find('script');
    var path = 'imgs/';


    var selector = obj.selector,
        score = obj.score,
        float = obj.float || 'none',
        position = obj.position ||  'relative',
        starMargin = obj.starMargin || 'auto',
        operable = obj.operable || false;

    var star = {
        type:'',
        light:'',
        dark:'',
        lightColor:'',
        darkColor:'',
        fontSize:'',
        height : '',
        width:''
    };


    if(obj && obj.star){
        if(obj.star.type){
            star['type'] = obj.star.type || 'font';
        }else{
            star['type'] = 'font';
        }
    }else if(obj && !obj.star){
        obj.star = {};
        // star['type'] = 'img'
    }




    var htmlTem =
        '<span data-index="0" class=""></span>'+
        '<span data-index="1" class=""></span>'+
        '<span data-index="2" class=""></span>'+
        '<span data-index="3" class=""></span>'+
        '<span data-index="4" class=""></span>';

    $(selector).append(htmlTem);
    $(selector).css({
        'float':float,
        'position':position
    })

    console.log(star.type);
    if(star.type == 'img'){

        star.light = obj.star['light'] || path+'star-light.png';
        star.dark = obj.star.dark || path+'star-dark.png';
        star.width = obj.star.width || '40px';
        star.height = obj.star.height || '38px';

        $(selector).each(function (i,e) {
            var spans = $(e).find('span');
            spans.css({
                'display':'inline-block',
                'width':star.width,
                'height':star.height,
                'background-repeat':'no-repeat',
                'margin':starMargin
            });
            spans.each(function (i,e) {
                if (i == 4) {
                    $(e).css({
                        'margin-right':'0'
                    })

                }

                if (i <= score - 1) {
                    $(e).css({
                        'background-image':'url('+star.light+')'
                    })
                }else{
                    $(e).css({
                        'background-image':'url('+star.dark+')'
                    })
                }
            })
            if (operable) {
                spans.on('mouseover', function () {
                    var index = +($(this).attr('data-index'));
                    spans.each(function (i,e) {
                        if (i <= index) {
                            $(e).css({
                                'cursor':'pointer',
                                'background-image':'url('+star.light+')'
                            })
                        }else{
                            $(e).css({
                                'cursor':'pointer',
                                'background-image':'url('+star.dark+')'
                            })
                        }

                    })

                })
            }
        })
    }else if(star.type == 'font'){
        star.fontPath = obj.star.fontPath || 'fonts/style.css';
        star.light = obj.star.light || 'icon-star-chamfer';
        star.dark = obj.star.dark || 'icon-star-chamfer';
        star['light'] = obj.star.light || 'icon-star-chamfer';
        star['dark']= obj.star.dark || 'icon-star-chamfer';
        star['fontSize'] = obj.star.fontSize || '24px';
        star['lightColor'] = obj.star.lightColor || '#eacd00';
        star['darkColor'] = obj.star.darkColor || '#c4c4c4';

        $(document.head).append('<link rel="stylesheet" href="'+star.fontPath+'">')

        $(selector).each(function (i,e) {
            var spans = $(e).find('span');
            spans.css({
                'display':'inline-block',
                'fontSize':star.fontSize,
                'margin':starMargin
            });
            spans.each(function (i,e) {
                if (i == 4) {
                    $(e).css({
                        'margin-right':'0'
                    })

                }

                if (i <= score - 1) {
                    $(e).addClass(star.light);
                    $(e).css({
                        'color':star.lightColor
                    })
                }else{
                    $(e).addClass(star.dark);
                    $(e).css({
                        'color':star.darkColor
                    })
                }
            })
            if (operable) {
                spans.on('mouseover', function () {
                    var index = +($(this).attr('data-index'));
                    spans.each(function (i,e) {
                        if (i <= index) {
                            $(e).attr('class','');
                            $(e).addClass(star.light);
                            $(e).css({
                                'cursor':'pointer',
                                'color':star.lightColor,
                            })
                        }else{
                            $(e).attr('class','');
                            $(e).addClass(star.dark);
                            $(e).css({
                                'cursor':'pointer',
                                'color':star.darkColor
                            })
                        }

                    })

                })
            }
        })


    }





}