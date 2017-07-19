$(".container").find($(".aa")).each(function() {
    $(this).on("mouseover",
    function() {
        var index = $(this).index();
        var $this = $(this);
        $this.addClass("sel");
        $this.siblings().removeClass("sel");
        $this.parent().siblings().removeClass("sel");
        $this.parent().siblings().eq(index).addClass("sel");
    })
})