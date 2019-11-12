$(document).ready(function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
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
        if($(this).scrollTop()>=750){
            $(".content-left").show();
            var height=Math.floor( ($(this).scrollTop()-600)/480)
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
    });
        $(".content-left a").click(function () {
            var m = $(".f1").eq($(this).index()).offset().top;
            $("body,html").animate({
                scrollTop: m
            }, "slow");      
       })
    $(".S-btn").click(function(){
        $("body,html").animate({
            scrollTop: 0,
        },"slow");
    })
    if(scrollTop>380 ) {
        $(".S-btn.goTop").css("display", "block");
       }else{
        $(".S-btn.goTop").css("display", "none");   
       }
    $(".slider-wrap").mouseover(function(){
        $(".bicon").css("display","block");
    });
    $(".slider-wrap").mouseout(function(){
        $(".bicon").css("display","none");
    });
    $(".f-listLeft1").mouseover(function(){
        $(".f-listH").css("display","block");
    });
    $(".f-listLeft1").mouseout(function(){
        $(".f-listH").css("display","none");
    });
    // $(".f-listLeft").click(function(){
    //     $(".f-listLeft2 ul").css("display","block");
    // })
    $(".f-listLeft").click(function() {
        $(".f-listH").slideToggle(10);
    })
    // $(window).resize(function() {
    //     if($(window).width() < 1600) {
    //     $(".content-left").css({"display":"none"})
    //     console.log(111111)
    // } else {
    //     $(".content-left").show();
    // }
    // })
    
    
        
})