var _click_count = 0;
$(".J-itemcontainer").on("click", function(e) { //直接给body一个事件好了.   
    //var n=Math.round(Math.random()*100);//随机数  
    var $increaseNum = $("<b>").text("+" + (++_click_count)); //添加到页面的元素  
    //alert("+" + (++_click_count))
    var x = e.pageX,
        y = e.pageY; //鼠标点击的位置
        
    // 给定一个初始位置，然后用animate过度上漂，过渡后就移除就好了
    $increaseNum.css({
        "z-index": 10,
        "top": y - 15,
        "left": x,
        "position": "absolute",
        "color": "red"
    });
    $(".J-itemcontainer").append($increaseNum);
    $increaseNum.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $increaseNum.remove();
        }
    );
    e.stopPropagation();
});