  //鼠标移动上去的事件
  $(function() {
      $("ul li").hover(function() {
          $(this).addClass("hover");
      }, function() {
          $(this).removeClass("hover");
      });

      var mark = 1;
      //鼠标点击事件
      $("ul li").click(function() {
          $(this).find("span").addClass("cli");
          $(this).siblings().find('span').removeClass("cli"); //siblings为找到该li的所有同辈元素；
      });
      //鼠标点击跳转效果
      $("ul li").click(function() {
          mark = 2;
          var index = $(this).index();
          var h = $(".louti").eq(index).offset().top; //offset为获取匹配元素在当前视口的相对偏移，有top和left；
          $('body').animate({
              scrollTop: h
          }, 500, function() { //scrollTop为获取匹配元素相对滚动条顶部的偏移。
              mark = 1
          })
      });

      $(window).scroll(function() {
          var H = $(this).scrollTop(); //获取滚动条的高度
          if (mark == 1) {
              $(".louti").each(function() {
                  index = $(this).index();
                  h = $(".louti").eq(index).offset().top;
                  if (H >= h) {
                      $("li").eq(index).find("span").addClass("cli");
                      $("li").eq(index).siblings().find("span").removeClass("cli")
                  }
              });
          }
          //当滚动到一定高度时楼梯式导航消失与显示
          var $height = $(window).scrollTop();
          var $main_h = $(".main").offset().top;
          console.log($height);
          console.log($main_h);
          if ($height > $main_h) {
              $("ul").fadeIn(600);
          } else {
              $("ul").fadeOut(600);
          }
      })
  })