$(function() {
    // 图片tab切换  stop()结束动画积累
    $(".pic-thumb ul li").mouseenter(function() {
       var num= $(this).index();
       $(".pic-big img").eq(num).stop(true,true).fadeIn("slow").siblings().hide()
    })
    // 商品数量加减
    // 减
    $(".spinner .decrease").click(function() {
        $(this).removeAttr("disabled");
        var num=$("#p_number").val();
        num--;
        console.log(num)
        if(num<=0) {
            $(this).attr("disabled","disabled")
        }else {
            $(this).removeAttr("disabled");
            $("#p_number").val(num)
        }
    })
    // 加
    $(".spinner .increase").click(function() {
        var num=$("#p_number").val();
        num++;
            $(".spinner .decrease").removeAttr("disabled");
            $("#p_number").val(num)
    })
    // 猜你喜欢 出现购物车
    $(".j_product").hover(function() {
        $(this).children(".add").css({"display":"block"})
    }, function() {
        $(this).children(".add").css({"display":"none"})
    })
    // 商品详情与用户评论 tab 切换
    $(".detail-ul").on("click","li",function() {
        $(this).children("a").addClass("active").parent().siblings().children("a").removeClass("active");
        var num=$(this).index();
        $(".detail-content .detail-item").eq(num).css("display","block").siblings().css("display","none")
    })
    // 评论切换
    $(".comment-tab ._votetype").click(function() {
        var num=$(this).index()
        $(this).addClass("on").siblings().removeClass("on");
        $("#ProductCommentVote>div").eq(num).css("display","block").siblings().css("display","none")
    })
    // 商品详情及用户评论固定位置显示
    $(document).scroll(function() {
        if($(document).scrollTop()>=$(".detail-content").offset().top) {
            $(".addcart, .shopping-cart").addClass("fixed");
            $(".product-detail .detail-tab").css({
                position: "fixed",
                "z-index": "2",
                "top": 0
            })
        }else {
            $(".detail-tab .addcart,.detail-tab .shopping-cart").removeClass("fixed");
            $(".product-detail .detail-tab").css({
                position: "relative",
                "z-index": "0",
                "top": 0,
            })
        }
    })
    // 爱心数量增加   背景颜色改变
    $(".right-con>.list>.bd>a").click(function() {
        $(this).addClass("selectCategory").siblings().removeClass("selectCategory")
    })
    $(".news-box .like").click(function() {
        var people=Number($(this).children("span").text());
        people++;
        $(this).children("span").text(people)
    })
	//侧边导航  云吞面
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
    // var height=$(".side-guide").offset().top;
    // var left=$(".side-guide").offset().left;
    // $(document).scroll(function() {
    //    console.log(height)
    //     if($(document).scrollTop()>height) {
    //         $(".side-guide").css({
    //             position: "fixed",
    //             top: "-40px",
    //             left: left,
    //             "z-index": 2
    //         })
    //         $(".recipe-guide a").eq(1).addClass("current").siblings().removeClass("current");
    //     }else {
    //         $(".side-guide").css({
    //             position: "relative",
    //             top: 0,
    //             left: 0
    //         })
    //         $(".recipe-guide a").eq(0).addClass("current").siblings().removeClass("current");
    //     }
    // })
    // 最近浏览
    window.recordarr=[];
    var newarr=[];
    var recordstr;
    $(".js_product").click(function() {
        var img_src=$(this).children().children(".js_product_img").html();
        var product_name=$(this).children(".js_product_title").html();
        recordstr={img_src,product_name};
        window.recordarr.push(recordstr);
        console.log(window.recordarr);
        localStorage.setItem("local_arr",JSON.stringify(window.recordarr)); 
    })
    if(localStorage.local_arr) {
        for(var i=0; i<JSON.parse(localStorage.local_arr).length; i++) {
            JSON.stringify(JSON.parse(localStorage.local_arr)[i])
            if(newarr.indexOf(JSON.stringify(JSON.parse(localStorage.local_arr)[i]))==-1) {
                newarr.push(JSON.stringify(JSON.parse(localStorage.local_arr)[i])); 
            }
        } 
        var liulan_text=newarr;
        for(var i=0; i<liulan_text.length; i++) {
            $(".RecentView .bd").get(0).innerHTML+=`
                <div class="p">
                    <div class="img">${JSON.parse(liulan_text[i]).img_src}
                        <a class="del" href="javascript:void(0)"></a>
                    </div>
                    <div class="txt">${JSON.parse(liulan_text[i]).product_name}</div>
                </div>
            `;
        }
        $(".RecentView .p:last").css("border-bottom","none")
    }else {
        $(".RecentView").html("")
    }
    // 清空最近浏览
   $(".RecentView .clearRecentView").click(function() {
       localStorage.removeItem("local_arr");
       recordarr=[];
	 recordarr1=[];
       $(".RecentView").html("")
   })
    // 删除某一个最近浏览
   $(".RecentView .bd .del").click(function() {
       if($(".RecentView .bd").children().length<=1) {
        $(".RecentView").remove();
       }
       $(this).parent().parent().remove();
   })
})