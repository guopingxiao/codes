$(function(){
    var div = $(".div");
    var font_s = parseInt(div.css("font-size"));
    var line_h = parseInt(div.css("line-height")); 
    var div_h = div.height();			
    var div_w = div.width();
    var len = Math.floor(div_w/font_s);		
    var con = div.text();
    var con2 = con; 
    var con_new = Math.floor(div_h/line_h);
    con2 = con2.replace(con2.substring(len*(con_new-1)+6,con2.length),"...");//替换
    div.text(con2)
    $(".radio").click(function(){				
        $(this).attr("checked","checked").siblings().removeAttr("checked");
	div.height(this.value);
	div_h = div.height();				
	var con_new = Math.floor(div_h/line_h);
	con3 = con.substring(0,len*(con_new-1)+6);//截取
	div.text(con3 + "...")				
    })
})