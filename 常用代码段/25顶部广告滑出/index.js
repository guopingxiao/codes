$(function() {
    $('#ad').animate({
        'marginTop': '0px'
    }, 3000, function() {
        setInterval(function() {
            $('#ad').animate({
                'marginTop': '-355px'
            }, 3000)
        }, 3000);
    })
})