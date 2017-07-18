$(function() {
    // ☆ ★
    var wjx_all = "★"; // 实心五角星
    var wjx_none = "☆"; // 空心五角星
    // 1. 给所有的li元素绑定鼠标键入的事件
    $(".comment").on("mouseenter", "li",
    function() {
        /*// 2. 让当前元素内容变为实心五角星，
                // 并且让当前这个素元之前的所有元素的内容也变为实心五角星
                // prevAll() 表示：获取指定元素之前所有元素
                $(this).text(wjx_all).prevAll("li").text(wjx_all);
                // 3. 让当前这个元素之后的所有元素变为空心五角星
                $(this).nextAll("li").text(wjx_none);*/

        $(this).text(wjx_all).prevAll("li") // 此处，修改了链式编程的结构
        .text(wjx_all).end() // end() 恢复链式编程被修改之前的一个状态
        .nextAll("li").text(wjx_none);
    });

    // 让鼠标离开所有的li元素的时候，变为空心五角星
    $(".comment").on("mouseleave",
    function() {
        $(this).children("li").text(wjx_none);

        /*// 让具有标识类的元素 以及之前的所有元素都设置为实心五角星*/
        /*$(".clicked").text(wjx_all).prevAll("li").text(wjx_all); */
        /*// 让具有标识类的元素后面的所有元素都设置空心五角星*/
        /*$(".clicked").nextAll("li").text(wjx_none);*/
        $(".clicked").text(wjx_all).prevAll("li").text(wjx_all).end().nextAll("li").text(wjx_none);

    });

    // 单击评分：鼠标离开ul的时候，如何知道单击了哪一个元素？
    // addClass -> 添加类
    $(".comment").on("click", "li",
    function() {
        // 给当前元素添加类，这个类的作用： 标识
        // 要给 其他的兄弟元素移除掉这个类
        $(this).addClass("clicked").siblings("li").removeClass("clicked");
    });
});