//开关
var flag = 1;
//点击
$('li').click(function(){
	if (flag) {
		flag = 0;
	} else{
		flag = 1;
	}
});
//移入			
$('li').mouseover(function(){
	//开关打开时
	if (flag) {
		//选中自己
		$(this).css('backgroundPosition','0 -28px')
		//选中自己以上的所有
			 .prevAll().css('backgroundPosition','0 -28px');
		//文字输出
		$('span').html($(this).attr('title'));
	} 
});
//移出
$('li').mouseout(function(){
	//开关关闭时
	if (!flag) {
		return ;
	} else{
	//开关打开时
		//选中自己
		$(this).css('backgroundPosition','0 0')
		//选中除自己以外的所有
			 .siblings().css('backgroundPosition','0 0');
	}
});