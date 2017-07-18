var idTimer = 0;
    //回车键
    document.onkeydown = function (e) {
        if (!e) e = window.event; //火狐中是 window.event
        if ((e.keyCode || e.which) == 13) {
            var btlogin = document.getElementById("btnLogin");
            btlogin.focus();
            btlogin.click();
        }
    };
    $('#btnLogin').click(function(){
        var userName = $('#txtAccount').val();
        var password = $('#txtPassword').val();
        if(userName == ''|| password == ''){
            formMessage('用户名或密码不能为空','warning')
        }
        else{
            formMessage('正在登录...', 'succeed');
            window.setTimeout(function(){
                if(userName != 'aa'){
                    formMessage('用户名输入错误.', 'error');
                }
                else if(password != '11'){
                    formMessage('密码输入错误.', 'error');
                }
                else{
                    formMessage('登录验证成功，正在跳转.', 'succeed');
                    idTimer = 1;
                    Load(idTimer);
                }
            },500);
        }
    });
    //登录加载
    function Load(flag) {
        if (idTimer == 1) {
            window.location.href = "";
        }
        return false;
    }
    //提示信息
    function formMessage(msg, type) {
        $('.form-message').html('');
        $('.form-message').append('<div class="form-' + type + '-text">' + msg + '</div>');
    }
