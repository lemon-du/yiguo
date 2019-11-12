$(function() {
    // 图片tab切换  stop()结束动画积累
    $(".pic-thumb ul li").mouseenter(function() {
       var num= $(this).index();
       $(".pic-big img").eq(num).stop(true,true).fadeIn("slow").siblings().hide();
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
        $(this).children("a").addClass("pro-active").parent().siblings().children("a").removeClass("pro-active");
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
	// 最近浏览
    var recordarr=[];
    if(localStorage.arr) {
        var newarr=[];
        recordarr=JSON.parse(localStorage.arr);
        for(var i=0; i<recordarr.length; i++) {
            if(newarr.indexOf(JSON.stringify(recordarr[i]))==-1){
                newarr.push(JSON.stringify(recordarr[i])); 
            }
         } 
        for(var i=0; i<newarr.length; i++) {
            $(".RecentView .bd").append(`
                <div class="p">
                    <div class="img">${JSON.parse(newarr[i]).img_src}
                        <a class="del" href="javascript:void(0)"></a>
                    </div>
                    <div class="txt">${JSON.parse(newarr[i]).product_name}</div>
                </div>
            `);
        }
        $(".RecentView .p:last").css({"border-bottom":"none","overflow":"hidden"})
    }else {
        $(".RecentView").html("");
    }  
    $(".p_img,.p_info").click(function() {
        console.log($(this))
        var img_src=$(this).parent().children(".p_img").children("a").html();
        var product_name=$(this).parent().children(".p_info").children(".p_name").html();
        recordstr={img_src,product_name};
        localStorage.setItem("local_arr",JSON.stringify(recordstr));
        recordarr.push(JSON.parse(localStorage.local_arr));
        localStorage.setItem("arr",JSON.stringify(recordarr));
        if(localStorage.arr) {
            var viewarr=[];
            for(var i=0; i<recordarr.length; i++) {
                console.log(typeof(recordarr[i]))
                if(viewarr.indexOf(JSON.stringify(recordarr[i]))==-1){
                    viewarr.push(JSON.stringify(recordarr[i])); 
                }
            } 
            var liulan_text=viewarr;
            for(var i=0; i<liulan_text.length; i++) {
                    $(".RecentView .bd").append(`
                    <div class="p">
                        <div class="img">${JSON.parse(liulan_text[i]).img_src}
                            <a class="del" href="javascript:void(0)"></a>
                        </div>
                        <div class="txt">${JSON.parse(liulan_text[i]).product_name}</div>
                    </div>
                     `);
            }
            $(".RecentView .p:last").css({"border-bottom":"none","overflow":"hidden"})
        }else {
            $(".RecentView").html("")
        }   
    })
    // 清空最近浏览
    $(".RecentView .clearRecentView").click(function() {
            localStorage.removeItem("local_arr");
            localStorage.removeItem("arr");
            recordarr=[];
        $(".RecentView").html("")
    })
    // 删除某一个最近浏览
    $(".RecentView .bd .del").click(function() {
        if($(".RecentView .bd").children().length<=1) {
            $(".RecentView").remove()
        }
        $(this).parent().parent().remove()
    })
})