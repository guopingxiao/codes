/*
IE������汾���
*/
var user_agent = navigator.userAgent.toLowerCase();
var b = false;
var c = '';

if (user_agent.indexOf("msie 9.0")>-1&&user_agent.indexOf("trident/6.0")>-1){
    //IE10������ģʽ��
    b = false;
    c = 'IE10������ģʽ��';
}else if (user_agent.indexOf("msie 8.0")>-1&&user_agent.indexOf("trident/6.0")>-1){
    //IE10������ģʽ��
    b = false;
    c = 'IE10������ģʽ��';
}else if (user_agent.indexOf("msie 7.0")>-1&&user_agent.indexOf("trident/6.0")>-1){
    //IE10������ģʽ��
    b = false;
    c = 'IE10������ģʽ��';
}else if(user_agent.indexOf("msie 9.0")>-1) {
    //IE9
    b = false;
    c = 'IE9';
}else if (user_agent.indexOf("msie 7.0")>-1&&user_agent.indexOf("trident/5.0")>-1){
    //IE9������ģʽ��
    b = false;
    c = 'IE9������ģʽ��';
}else if (user_agent.indexOf("msie 8.0")>-1&&user_agent.indexOf("trident/5.0")>-1){
    //IE9������ģʽ��
    b = false;
    c = 'IE9������ģʽ��';
}else if(user_agent.indexOf("msie 8.0")>-1) {
    //IE8
    b = true;
    c = 'IE8';
}else if(user_agent.indexOf("msie 7.0")>-1&&user_agent.indexOf("trident/4.0")>-1){
    //IE8������ģʽ��
    b = true;
    c = 'IE8������ģʽ��';
}else if(user_agent.indexOf("msie 7.0")>-1){
    //IE7
    b = true;
    c = 'IE7';
}else if(user_agent.indexOf("msie 6.0")>-1){
    //IE6
    b = true;
    c = 'IE6';
}          

if(b){
    if(confirm('��ʾ������ǰIE������汾Ϊ'+c+'��Ϊ��ȡ����չʾЧ��������������IE9')){
        window.open('http://rj.baidu.com/soft/detail/23356.html?ald');
    }
}