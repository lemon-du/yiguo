$(document).ready(function () {

    $(".classify").click(function () {
        $(".navigate-con").fadeToggle(0)
    })
    $("img").lazyload({
        effect: "fadeIn"
    })
    $(".content-left").css("display", "none")
    $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < $(".f1").length; i++) {
            if (scrollTop < $(".f1").eq(0).offset().top) {
                $(".content-left").css("display", "none");
            } else {
                $(".content-left").css("display", "block");
          }
        }
        if($(this).scrollTop()>=500){
            $(".content-left").show();
            var height=Math.floor( ($(this).scrollTop()-600)/450)
            $(".content-left span").css("display","block").not($(".content-left span").eq(height)).css("display","none");
            $(".content-left i").css("display","none").not($(".content-left i").eq(height)).css("display","block");
        }
        $(".content-left a").mouseover(function(){
            $(".content-left span").eq($(this).index()).css("display","block");
            $(".content-left i").eq($(this).index()).css("display","none");
        });
        $(".content-left a").mouseout(function(){
            $(".content-left span").eq($(this).index()).css("display","none");
            $(".content-left i").eq($(this).index()).css("display","block");
        });
        $(".content-left a").click(function(){
            var n=$(this).index();
            $(window).scrollTop(n*450+600);
        })

    })
    $(".S-btn").click(function(){
        $("body,html").animate({
            scrollTop: 0,
        },"slow");
    })
    if(scrollTop>= 0 ) {
        $(".S-btn.goTop").hide();
       }
})