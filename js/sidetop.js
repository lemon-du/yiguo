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
            $(".popout7").css("display", "block");
            $(".popout4").text("公司名不能为空");
        }else if(patt.test($("#web").val())==false) {
            $(".popout7").css("display", "block");
            $(".popout4").text("网站不能为空");
        }else if(patt.test($("#linkman").val())==false) {
            $(".popout7").css("display", "block");
            $(".popout4").text("联系人不能为空");
        }else if(patt.test($("#e_mail").val())==false) {
            $(".popout7").css("display", "block");
            $(".popout4").text("QQ/手机/邮箱不能为空");
        }else if(patt.test($("#reason").val())==false) {
            $(".popout7").css("display", "block");
            $(".popout4").text("申请原因不能为空");
        }else{
            $(".popout7").css("display", "block");
            $(".popout4").text("您的申请已经收到,我们会尽快与您取得联系");
        };    
    });
    $("#btn1").click(function(){
            $(".popout7").css("display","");
            $(".popout4").text();
    })
    // 客服验证
    $(".s-btn").click(function(){
        if(!key) {
            window.location.href="login .html";
       }else {
            $(".waiter").show();
        }
    }) 
    // 客服
    $(".data").text("今天"+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds());
   $(".wkit-msg-send-btn").click(function() {
       if($(".wkit-textarea").val().replace(/^\s+|\s+$/g, '')) {
                $(".waiter12").append(
                    `
                        <li>
                            <div class="waiter9">
                                <img class="img2" src="https://img.alicdn.com/tps/TB1BsZ6JpXXXXaZXpXXXXXXXXXX-81-81.png" alt="">
                                <p class="data1">${"今天"+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()}</p>
                                <i class="trilateral1"></i>
                                <p class="Conversation1">${$(".wkit-textarea").val()}</p>
                            </div>
                        </li>   
                    `
                )
            $(".waiter12").append(
                `
                    <li>
                        <div class="waiter9">
                            <img class="img1" src="https://gw.alicdn.com/tps/TB10C4vKXXXXXa_aXXXXXXXXXXX-420-420.jpg_200x200.jpg" alt="">
                            <p class="data">${"今天"+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()}</p>
                            <i class="trilateral"></i>
                            <p class="Conversation">在的，亲！</p>
                        </div>
                    </li>
                `
            ) 
                $(".waiter12").append(
                `
                    <li>
                        <div class="waiter9">
                            <img class="img1" src="https://gw.alicdn.com/tps/TB10C4vKXXXXXa_aXXXXXXXXXXX-420-420.jpg_200x200.jpg" alt="">
                            <p class="data">${"今天"+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()}</p>
                            <i class="trilateral"></i>
                            <p class="Conversation">有什么能帮助您的吗？</p>
                        </div>
                    </li>
                `
            ) 
       }
      $(".wkit-textarea").val("");
   })
   // 隐藏
   $(".waiter-span").click(function() {
       $(".waiter").hide();
   })
   // 关闭
   $(".waiter-span1").click(function() {
       var estimate=confirm("如离开将无法接收客服回复的消息，确认离开？");
           if(estimate==true) {               
              $(".waiter").hide();
           }else{
               $(".waiter").show();
           }
   })
   
