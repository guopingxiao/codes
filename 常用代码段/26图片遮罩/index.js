$(function(){
    $(".con ul li .btn").click(function(){
 		$(this).parent().addClass('current').siblings().removeClass("current");
 		$(this).removeClass("bounceIn").addClass('swing').parent().siblings().children('.btn').removeClass("swing");
    })
})