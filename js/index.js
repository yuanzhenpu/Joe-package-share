$('.mobile_unfold_nav').click(function () {
    if(!$('.mobile_top_nav_main').hasClass('mobile_top_nav_show')){
        $('.mobile_top_nav_main').addClass('mobile_top_nav_show')
    }else{
        $('.mobile_top_nav_main').removeClass('mobile_top_nav_show')
    }

})

// 点击目标区域外执行的操作
$(document).mouseup(function (e) {
    var con = $(".mobile_top_nav_main,.mobile_unfold_nav");   // 目标区域设置
    if (!con.is(e.target) && con.has(e.target).length === 0) {
         $('.mobile_top_nav_main').removeClass('mobile_top_nav_show')
    }
});