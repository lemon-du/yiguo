$(function() {
    $("img").lazyload({
        effect: "fadeIn"
    })
    // 易食谱切换
    $(".list_cate").click(function() {
        $(this).addClass("cate_on").siblings().removeClass("cate_on")
        $(".menu_all").eq($(this).index()).addClass("menu_on").siblings().removeClass("menu_on")
    })
    $(".like_num").click(function() {
        var num = $(this).children(".like_num_item").text()
        var number = Number(num)
        var likeNum = ++number
        $(this).children(".like_num_item").text(likeNum)
    })
})