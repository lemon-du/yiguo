$(function() {
    $(".recipe-guide a").hover(function() {
        $(this).addClass("current").siblings().removeClass("current");
        $(this).children("span").css({
            "margin-left": "12px"
        })
    },function() {
        $(this).removeClass("current");
        $(this).children("span").css({
            "margin-left": "0px"
        })
    })
    var height=$(".side-guide").offset().top;
    var left=$(".side-guide").offset().left;
    $(document).scroll(function() {
       console.log(height)
        if($(document).scrollTop()>height) {
            $(".side-guide").css({
                position: "fixed",
                top: "-40px",
               	left: left,
                "z-index": 2
            })
            $(".recipe-guide a").eq(1).addClass("current").siblings().removeClass("current");
        }else {
            $(".side-guide").css({
                position: "relative",
                top: 0,
                left: 0
            })
            $(".recipe-guide a").eq(0).addClass("current").siblings().removeClass("current");
        }
    })
})