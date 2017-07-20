$(function() {
    changePage($("#inp_allPage").val(), $("#inp_page").val());
});

function changePage(allPage, thisPage) {
    $(".ul_btn").text("");
    var allPage = parseInt(allPage);
    var thisPage = parseInt(thisPage);
    var page_html = '';
    page_html += '<li onclick="firstPage()" class="firstPage noneBtn">首页</li>';
    page_html += '<li onclick="lastPage()" class="lastPage noneBtn">上一页</li>';
    if (thisPage - 3 > 0) {
        page_html += '<li onclick="normalPage(this)">1</li>';
        if (thisPage - 4 > 0) {
            page_html += '<li class="otherLi">...</li>';
        }
    }
    if (thisPage - 2 > 0) {
        page_html += '<li onclick="normalPage(this)">' + (thisPage - 2) + '</li>';
    }
    if (thisPage - 1 > 0) {
        page_html += '<li onclick="normalPage(this)">' + (thisPage - 1) + '</li>';
    }
    page_html += '<li onclick="normalPage(this)" class="active">' + thisPage + '</li>';
    if (thisPage + 1 <= allPage) {
        page_html += '<li onclick="normalPage(this)">' + (thisPage + 1) + '</li>';
    }
    if (thisPage + 2 <= allPage) {
        page_html += '<li onclick="normalPage(this)">' + (thisPage + 2) + '</li>';
    }
    if (thisPage + 3 <= allPage) {
        if (thisPage + 3 < allPage) {
            page_html += '<li class="otherLi">...</li>';
        }
        page_html += '<li onclick="normalPage(this)">' + allPage + '</li>';
    }
    page_html += '<li onclick="nextPage()" class="nextPage">下一页</li>';
    page_html += '<li onclick="endPage()" class="endPage">尾页</li>';
    $(".ul_btn").append(page_html);
}

function lastPage() {
    var allPage = parseInt($("#inp_allPage").val());
    var thisPage = parseInt($("#inp_page").val());
    if ((thisPage - 1) > 0) {
        thisPage--;
        $("#inp_page").val(thisPage);
        changePage(allPage, thisPage);
        $(".firstPage").removeClass("noneBtn");
        $(".lastPage").removeClass("noneBtn");
        if ((thisPage - 1) == 0) {
            $(".firstPage").addClass("noneBtn");
            $(".lastPage").addClass("noneBtn");
        }
        $(".nextPage").removeClass("noneBtn");
        $(".endPage").removeClass("noneBtn");
    }
}

function nextPage() {
    var allPage = parseInt($("#inp_allPage").val());
    var thisPage = parseInt($("#inp_page").val());
    if (thisPage < allPage) {
        thisPage++;
        $("#inp_page").val(thisPage);
        changePage(allPage, thisPage);
        if ((allPage - thisPage) == 0) {
            $(".nextPage").addClass("noneBtn");
            $(".endPage").addClass("noneBtn");
        }
        $(".firstPage").removeClass("noneBtn");
        $(".lastPage").removeClass("noneBtn");
    }
}

function firstPage() {
    var allPage = parseInt($("#inp_allPage").val());
    thisPage = 1;
    $("#inp_page").val("1");
    changePage(allPage, thisPage);
    $(".firstPage").addClass("noneBtn");
    $(".lastPage").addClass("noneBtn");
    $(".nextPage").removeClass("noneBtn");
    $(".endPage").removeClass("noneBtn");
}

function endPage() {
    var allPage = parseInt($("#inp_allPage").val());
    var thisPage = allPage;
    $("#inp_page").val(allPage);
    changePage(allPage, thisPage);
    $(".firstPage").removeClass("noneBtn");
    $(".lastPage").removeClass("noneBtn");
    $(".nextPage").addClass("noneBtn");
    $(".endPage").addClass("noneBtn");
}

function normalPage(o) {
    var allPage = parseInt($("#inp_allPage").val());
    var thisPage = parseInt($(o).text());
    $("#inp_page").val($(o).text());
    changePage(allPage, thisPage);
    if (thisPage == 1) {
        $(".firstPage").addClass("noneBtn");
        $(".lastPage").addClass("noneBtn");
    } else {
        $(".firstPage").removeClass("noneBtn");
        $(".lastPage").removeClass("noneBtn");
    }
    if (thisPage == allPage) {
        $(".nextPage").addClass("noneBtn");
        $(".endPage").addClass("noneBtn");
    }
}