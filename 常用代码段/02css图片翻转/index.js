$(function() {
    $('.rating > span').on('click', function() {
        $(this).prevAll('span').removeClass('active'); // 合理的利用prevAll,nextAll()
        $(this).addClass('active').nextAll('span').addClass('active');
    })
})

// $(function() {
//     $('span').click(function() {
//         $(this).siblings().each(function() {
//             $(this).removeClass('reds');
//         })
//         $(this).addClass('reds');
//         $(this).nextAll().addClass('reds');
//     })
// })