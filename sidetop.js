//  出现置顶键 
$(document).scroll(function () {
    var totop = $(this).scrollTop();
    if (totop >= 500) {
        $(".s-btn1").addClass("show");
    } else {
        $(".s-btn1").removeClass("show");
    };
});
// 置顶
$(".s-btn1").click(function(){
    $("html,body").animate({
        scrollTop : 0
    },1000);
})
// 友情链接
$("#btn").click(function(){
    var patt=/^.{1,}$/;
    if(patt.test($("#company").val())==false) {
        $(".popout").css("display", "block");
        $(".popout4").text("公司名不能为空");
    }else if(patt.test($("#web").val())==false) {
        $(".popout").css("display", "block");
        $(".popout4").text("网站不能为空");
    }else if(patt.test($("#linkman").val())==false) {
        $(".popout").css("display", "block");
        $(".popout4").text("联系人不能为空");
    }else if(patt.test($("#e_mail").val())==false) {
        $(".popout").css("display", "block");
        $(".popout4").text("QQ/手机/邮箱不能为空");
    }else if(patt.test($("#reason").val())==false) {
        $(".popout").css("display", "block");
        $(".popout4").text("申请原因不能为空");
    }else{
        $(".popout").css("display", "block");
        $(".popout4").text("您的申请已经收到,我们会尽快与您取得联系");
    };    
});
$("#btn1").click(function(){
        $(".popout").css("display", "");
        $(".popout4").text();
})