$(document).ready(function(){
    // 所有分类点击当前变色
    $("#line a").click(function(){
        $("#line a").css("color","#777")
        $(this).css("color","#008842");
    })
    // 分类点击进行列表切换
    $("ul #line").click(function(){
        $(".goods_list").children().eq(0).addClass("clickChange");
        var nums=$(this).index();
         $(".goods_list").children().eq(nums+1).removeClass("clickChange").siblings().addClass("clickChange");
    })
    //默认排序效果(点击事件)
    $(".filter a").click(function(){
        $(".filter a").removeClass("color");
        $(this).addClass("color");
    })
    //点击点亮图标
    $(".filter a:first").click(function(){
        $(".up i").removeClass("down1");
        $("#price i").removeClass("down2");
    })
    $(".filter .up").click(function(){
        $(".down").removeClass("down1")
        $(this).children().addClass("down1");
        $("#price i").removeClass("down2");
    })
    $(".filter #price").click(function(){
        $("#price i").addClass("down2");
        $(".up i").removeClass("down1");
    })
    // 精选肉类列表实现点击出现新列表（以此为例）
    $("ul .beef").click(function(){
        $(".porks").addClass("porkHidden");
        $(".beefs").removeClass("beefHidden");
    })
    $("ul .pork").click(function(){
        $(".beefs").addClass("beefHidden");
        $(".porks").removeClass("porkHidden");
    })
    $("ul .allMeat").click(function(){
        $(".porks").addClass("porkHidden");
        $(".beefs").addClass("beefHidden");
    })
    $("ul .beefPai").click(function(){
        $(".porks").addClass("porkHidden");
        $(".beefs").addClass("beefHidden");
    })
})