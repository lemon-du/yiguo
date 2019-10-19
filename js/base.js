$(function(){
    // 网页弹框判断
    $(document).scroll(function () {
        $(document).scrollTop() > 100 ? $(".hide-Bounced-content").css("display", "block") : $(".hide-Bounced-content").css("display", "none");
    });
    $(".city,.city-con").on({
        mouseover: function() {
            $(".city-con").show();
            $(".city-name").css({
                "background": "#008842",
                "color": "#ffffff"
            });
            $(".s-1").css("border-color", "#ffffff transparent transparent");
        },
        mouseout: function() {
            $(".city-con").hide();
            $(".s-1").css("border-color", "#008842 transparent transparent");
            $(".city-name").css({
                "background": "#f7f9f8",
                "color": "#008842"
            });
        }
    });
    $(".active").hover(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $(".citylist").eq($(this).index()).show().siblings().hide();
    });
    $("#shanghai").click(function () {
        hide();
        $(".citylist-tab-S44").show();
    });
    // 修改城市选项 //
    $(".site-nav,.site-nav1,#city-Navigation").click(function () {
        $(".city-name-modify").text($(this).text());
        $(".city-con,.citylist-tab").hide();
    });
    // A //
    $(".a-style-A").click(function () {
        hide();
        $(".citylist-tab-A").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-A1").click(function () {
        hide();
        $(".citylist-tab-A1").show();
    });
    // B //
    $(".a-style-B").click(function () {
        hide();
        $(".citylist-tab-B").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-B1").click(function () {
        hide();
        $(".citylist-tab-B1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-B2").click(function () {
        hide();
        $(".citylist-tab-B2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-B3").click(function () {
        hide();
        $(".citylist-tab-B3").eq($(this).index() - 18).show();
    });
    // C //
    $(".a-style-C").click(function () {
        hide();
        $(".citylist-tab-C").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-C1").click(function () {
        hide();
        $(".citylist-tab-C1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-C2").click(function () {
        hide();
        $(".citylist-tab-C2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-C3").click(function () {
        hide();
        $(".citylist-tab-C3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-C4").click(function () {
        hide();
        $(".citylist-tab-C4").eq($(this).index() - 24).show();
    });
    // D //
    $(".a-style-D").click(function () {
        hide();
        $(".citylist-tab-D").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-D1").click(function () {
        hide();
        $(".citylist-tab-D1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-D2").click(function () {
        hide();
        $(".citylist-tab-D2").eq($(this).index() - 12).show().siblings().hide();
    });
    // E //
    $(".a-style-E").click(function () {
        hide();
        $(".citylist-tab-E").eq($(this).index()).show().siblings().hide();
    });
    // F //
    $(".a-style-F").click(function () {
        hide();
        $(".citylist-tab-F").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-F1").click(function () {
        hide();
        $(".citylist-tab-F1").eq($(this).index() - 6).show().siblings().hide();
    });
    // G //
    $(".a-style-G").click(function () {
        hide();
        $(".citylist-tab-G").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-G1").click(function () {
        hide();
        $(".citylist-tab-G1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-G2").click(function () {
        hide();
        $(".citylist-tab-G2").eq($(this).index() - 12).show().siblings().hide();
    });
    // H //
    $(".a-style-H").click(function () {
        hide();
        $(".citylist-tab-H").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-H1").click(function () {
        hide();
        $(".citylist-tab-H1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-H2").click(function () {
        hide();
        $(".citylist-tab-H2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-H3").click(function () {
        hide();
        $(".citylist-tab-H3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-H4").click(function () {
        hide();
        $(".citylist-tab-H4").eq($(this).index() - 24).show().siblings().hide();
    });
    $(".a-style-H5").click(function () {
        hide();
        $(".citylist-tab-H5").eq($(this).index() - 30).show().siblings().hide();
    });
    $(".a-style-H6").click(function () {
        hide();
        $(".citylist-tab-H6").eq($(this).index() - 36).show().siblings().hide();
    });
    // J //
    $(".a-style-J").click(function () {
        hide();
        $(".citylist-tab-J").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-J1").click(function () {
        hide();
        $(".citylist-tab-J1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-J2").click(function () {
        hide();
        $(".citylist-tab-J2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-J3").click(function () {
        hide();
        $(".citylist-tab-J3").eq($(this).index() - 18).show().siblings().hide();
    });
    // K //
    $(".a-style-K").click(function () {
        hide();
        $(".citylist-tab-K").eq($(this).index()).show().siblings().hide();
    });
    // L //
    $(".a-style-L").click(function () {
        hide();
        $(".citylist-tab-L").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-L1").click(function () {
        hide();
        $(".citylist-tab-L1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-L2").click(function () {
        hide();
        $(".citylist-tab-L2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-L3").click(function () {
        hide();
        $(".citylist-tab-L3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-L4").click(function () {
        hide();
        $(".citylist-tab-L4").eq($(this).index() - 24).show().siblings().hide();
    });
    // M //
    $(".a-style-M").click(function () {
        hide();
        $(".citylist-tab-M").eq($(this).index()).show().siblings().hide();
    });
    // N //
    $(".a-style-N").click(function () {
        hide();
        $(".citylist-tab-N").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-N1").click(function () {
        hide();
        $(".citylist-tab-N1").eq($(this).index() - 6).show().siblings().hide();
    });
    // P //
    $(".a-style-P").click(function () {
        hide();
        $(".citylist-tab-P").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-P1").click(function () {
        hide();
        $(".citylist-tab-P1").eq($(this).index() - 6).show().siblings().hide();
    });
    // Q //
    $(".a-style-Q").click(function () {
        hide();
        $(".citylist-tab-Q").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-Q1").click(function () {
        hide();
        $(".citylist-tab-Q1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-Q2").click(function () {
        hide();
        $(".citylist-tab-Q2").eq($(this).index() - 12).show().siblings().hide();
    });
    // R //
    $(".a-style-R").click(function () {
        hide();
        $(".citylist-tab-R").eq($(this).index()).show().siblings().hide();
    });
    // S //
    $(".a-style-S").click(function () {
        hide();
        $(".citylist-tab-S").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-S1").click(function () {
        hide();
        $(".citylist-tab-S1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-S2").click(function () {
        hide();
        $(".citylist-tab-S2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-S3").click(function () {
        hide();
        $(".citylist-tab-S3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-S4").click(function () {
        hide();
        $(".citylist-tab-S4").eq($(this).index() - 24).show().siblings().hide();
    });
    $(".a-style-S5").click(function () {
        hide();
        $(".citylist-tab-S5").eq($(this).index() - 30).show().siblings().hide();
    });
    // T //
    $(".a-style-T").click(function () {
        hide();
        $(".citylist-tab-T").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-T1").click(function () {
        hide();
        $(".citylist-tab-T1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-T2").click(function () {
        hide();
        $(".citylist-tab-T2").eq($(this).index() - 12).show().siblings().hide();
    });
    // W //
    $(".a-style-W").click(function () {
        hide();
        $(".citylist-tab-W").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-W1").click(function () {
        hide();
        $(".citylist-tab-W1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-W2").click(function () {
        hide();
        $(".citylist-tab-W2").eq($(this).index() - 12).show().siblings().hide();
    });
    // X //
    $(".a-style-X").click(function () {
        hide();
        $(".citylist-tab-X").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-X1").click(function () {
        hide();
        $(".citylist-tab-X1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-X2").click(function () {
        hide();
        $(".citylist-tab-X2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-X3").click(function () {
        hide();
        $(".citylist-tab-X3").eq($(this).index() - 18).show().siblings().hide();
    });
    // Y //
    $(".a-style-Y").click(function () {
        hide();
        $(".citylist-tab-Y").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-Y1").click(function () {
        hide();
        $(".citylist-tab-Y1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-Y2").click(function () {
        hide();
        $(".citylist-tab-Y2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-Y3").click(function () {
        hide();
        $(".citylist-tab-Y3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-Y4").click(function () {
        hide();
        $(".citylist-tab-Y4").eq($(this).index() - 24).show().siblings().hide();
    });
    // Z //
    $(".a-style-Z").click(function () {
        hide();
        $(".citylist-tab-Z").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-Z1").click(function () {
        hide();
        $(".citylist-tab-Z1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-Z2").click(function () {
        hide();
        $(".citylist-tab-Z2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-Z3").click(function () {
        hide();
        $(".citylist-tab-Z3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-Z4").click(function () {
        hide();
        $(".citylist-tab-Z4").eq($(this).index() - 24).show().siblings().hide();
    });
    function hide() {
        $(".citylist-tab-S44").hide();
        $(".citylist-tab").hide();
    };
    // input输入框判断
    $(".input-search").focus(function () {
        $(this).val() == "输入商品名/编号/拼音" ? $(this).val("").css("background", "#f7f9f8").css("color", "#000") : $(this).val() == "输入商品名/编号/拼音";
    });
    $(".input-search").blur(function () {
        $(this).val() == '' ? $(this).val("输入商品名/编号/拼音").css("background", "#e0e0e0").css("color", "rgb(153, 153, 153)") : $(this).val() == '';
    });
    // 手机易果
    $(".mobile-a,.con").hover(function () {
        $(".mobile-a,.con").css("display", "block").addClass("my-Fruits");
    }, function () {
        $(".con").css("display", "none");
        $(".mobile-a,.con").removeClass("my-Fruits");
    });
    // 我的易果
    $(".myyiguo-a,#phone-QR-code").hover(function () {
        $(".myyiguo-a,#phone-QR-code").css("display", "block").addClass("my-Fruits");
    }, function () {
        $("#phone-QR-code").css("display", "none");
        $(".myyiguo-a,#phone-QR-code").removeClass("my-Fruits");
    });
    var phonepatt=/^1[3-9]\d{9}$/;
    var passwordpatt=/^[0-9A-z]{6,20}$/;
    //表单验证
    $("#checkbtn").click(function(){
        if(!$(this).prop("checked")) {
            $(".register #signupbtn").css("background","");
        }else {
            $("#signupbtn").removeAttr("disabled");
            $(".register #signupbtn").css("background","#008422");
            $("#signupbtn").click(function(){
                if($(".phone").val()=="") {
                    $(".pass-error").remove();
                    if(!$("span").hasClass("pass-tip")) {
                        $(".phone").parent().append(`
                            <span class="pass-tip">
                                <i></i>
                                手机号不能为空
                            </span>
                        `)
                    }else {
                        $(".pass-tip").html("<i></i>手机号不能为空");
                    }
                }else {
                    $(".pass-tip").remove();
                    if (!phonepatt.test($(".phone").val())) {
                        if(!$("span").hasClass("pass-error")) {
                            $(".phone").parent().append(`
                                <span class="pass-error">
                                    <i></i>
                                    手机号格式不正确
                                </span>
                            `)
                        }else {
                            $(".pass-error").html("<i></i>手机号格式不正确"); 
                        }
                    }else {
                        $("pass-tip").remove();
                        $(".pass-error").remove();
                        if($(".ver-code").val()=='') {
                            if(!$("span").hasClass("pass-tip")) {
                                $(".phone").parent().append(`
                                    <span class="pass-tip">
                                        <i></i>
                                        图形验证码不能为空
                                    </span>
                                `)
                            }else {
                                $(".pass-tip").html("<i></i>请输入图形验证码");
                            }
                        }else {
                            if($(".ver-code").val().toUpperCase()!=$(".codes").html().toUpperCase()){
                                if(!$("span").hasClass("pass-error")) {
                                    $(".phone").parent().append(`
                                        <span class="pass-error">
                                            <i></i>
                                            图形验证码不正确
                                        </span>
                                    `)
                                }else {
                                    $(".pass-error").html("<i></i>图形验证码不正确");
                                }
                            }else{
                                $(".pass-error").remove();
                                if($(".password").val()==''||$(".confirm-password").val()=='') {
                                    $(".pass-error").remove();
                                    if(!$("span").hasClass("pass-tip")) {
                                        $(".confirm-password").parent().append(`
                                            <span class="pass-tip">
                                                <i></i>
                                                密码不能为空
                                            </span>
                                        `)
                                    }
                                }else {
                                    $(".pass-tip").remove();
                                    if(!passwordpatt.test($(".password").val())) {
                                        if(!$("span").hasClass("pass-error")) {
                                            $(".confirm-password").parent().append(`
                                                <span class="pass-error">
                                                    <i></i>
                                                    密码不能小于6位
                                                </span>
                                            `)
                                        }
                                    } else {
                                        if($(".password").val()!=$(".confirm-password").val()) {
                                            if(!$("span").hasClass("pass-error")) {
                                                $(".confirm-password").parent().append(`
                                                    <span class="pass-error">
                                                        <i></i>
                                                        两次密码不一致
                                                    </span>
                                                `)
                                            }else {
                                                $(".pass-error").html("<i></i>两次密码不一致");
                                            }
                                        }else {
                                            if(!$("span").hasClass("pass")) {
                                                $(".confirm-password").parent().append(`
                                                    <span class="pass">
                                                        <i></i>
                                                    </span>
                                                `)
                                            }
                                            $.ajax({
                                                type:"POST",
                                                url: "http://localhost/register.php",
                                                data: {
                                                    phone:$(".phone").val(),
                                                    password:$(".password").val(),
                                                },
                                                dataType:"json",
                                            })
                                            window.location.href="login.html";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }
    })
     // 控制确认密码输入框失去焦点时提示信息
    $(".confirm-password").blur(function(){
        $(".pass-tip").remove();
        $(".pass-error").remove();
        if($(".confirm-password").val()=='') {
            if(!$("span").hasClass("pass-tip")) {
                $(".confirm-password").parent().append(`
                    <span class="pass-tip">
                        <i></i>
                        密码不能为空
                    </span>
                `)
            }
        }
    })
    // 生成随机验证码
    var code;
    function createCode() {  
        code = "";
        var codeLength = 4; 
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
        for (var i = 0; i < codeLength; i++)
        {
            var charNum = Math.floor(Math.random() * 52);
            code += codeChars[charNum];
        }
        $(".codes").html(code);
    }  
    createCode();
    // 点击获取验证码出现倒计时
    var text=60;
    $(".getCode").click(function(){
        var timer=setInterval(function(){
            if(text>=0) {
                $(".getCode").html("还剩下<span>"+text+"</span>s");
                text-=1;
            }else {
                $(".getCode").html("获取验证码");
                clearInterval(timer);
            }
        },1000);
    })
    // 点击切换验证码
    $(".tab").click(function(){
        createCode();
    })
    // 控制勾选协议
    $("#signupbtn").click(function(){
        if(!$("#checkbtn").prop("checked")) {
          $(".error").show();
          $(".error").attr("class","pass-error");
        }
    })
    // 控制协议弹框
    $(".agreements").click(function(){
        $(".popout").eq($(this).index()).show();
        $(".mask").show();
    })
    // 控制协议弹框下方按钮
    $(".btn-gn").click(function(){
        $(".popout").hide();
        $(".mask").hide();
    })
    // 控制协议弹框右侧叉号
    $(".close").click(function(){
        $(".popout").hide();
        $(".popout-code").hide();
        $(".mask").hide();
    })
    // 登录页面第三方图片按钮
    $(".pop-up").click(function(){
        $(".popout-code").show();
        $(".mask").show();
    })
    $(".signinbtn").click(function(){
        if($(".VerifyCode").val()==""||$(".VerifyCode").val().toUpperCase()!=$(".logincode").html().toUpperCase()){
            $("#msg-wrap").addClass("msg-wrap");
            $("#msg-wrap div").addClass("msg-error");
            $(".msg-error").html("请输入正确的验证码");
        }else {
            if($(".input-phone").val()=="") {
                $("#msg-wrap").addClass("msg-wrap");
                $("#msg-wrap div").addClass("msg-error");
                $(".msg-error").html("用户名不能为空");
            }else {
                if($(".input-key").val()=="") {
                    $("#msg-wrap").addClass("msg-wrap");
                    $("#msg-wrap div").addClass("msg-error");
                    $(".msg-error").html("密码不能为空");
                }else {
                    $.ajax({
                        type:"POST",
                        url:"http://localhost/login.php",
                         data: {
                            phone:$(".input-phone").val(),
                            password:$(".input-key").val()
                        },
                        dataType:"JSON",
                        success: function(data){
                            console.log(data)
                            if(data==1) {
                                localStorage.setItem("value",$(".input-phone").val());
                                window.location.href="head.html";
                            }else {
                                $("#msg-wrap").addClass("msg-wrap");
                                $("#msg-wrap div").addClass("msg-error");
                                $(".msg-error").html("账号或密码错误");
                            }
                            if($("#login-auto").prop("checked")) {
                                localStorage.setItem("username",$(".input-phone").val());
                                localStorage.setItem("pass",$(".input-key").val());
                            } 
                        },
                        error:function(xhr,status,error) {
                            console.log(error)
                        }
                    })    
                }
            }
        }           
    })            
    $(".input-phone").val(localStorage.username);
    $(".input-key").val(localStorage.pass); 
    $(".input-phone").change(function(){
        localStorage.removeItem("username");
        localStorage.removeItem("pass");
    })
    // 密码重置
    $(".gray").click(function(){
       window.location.href="resetpass1.html";
    })
    var key=localStorage.getItem("value");
    //登录到首页
    if(!key) {
        $(".login-reg").removeClass("tit-hidden");
        $(".loginout").addClass("tit-hidden");
    }else {
        $(".loginout").removeClass("tit-hidden");
        $(".login-reg").addClass("tit-hidden");
        $("#tel").html(key);
        $(".userphone").html(key);
        var keyArr=[];
        keyArr.push(key.slice(0,3));
        keyArr.push(key.slice(7,11));
        var phonevalue=keyArr.join("****");
        $(".myphone strong").html(phonevalue);
    }
    $("#out").click(function(){
        key=localStorage.removeItem("value");
        $(".login-reg").removeClass("tit-hidden");
        $(".loginout").addClass("tit-hidden");
    })
    // 首页点击我的易果
    $(".nofollow").click(function(){
        if(!key) {
            window.location.href="login.html";
        }else {
            window.location.href="head.html";
        }
    }) 
    // 点击我的易果左侧列表
    $(".l-menu a").click(function(){
        $(".main").eq($(this).data("list")).removeClass("hidden").siblings().addClass("hidden")
        $(".l-menu a").removeClass("on");
        $(this).addClass("on");
        $(".m-order").html($(this).html());
    })
    // 我的易果详情页优惠券部分
    $(".coupon-type").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".coupon-detail").eq($(this).index()).removeClass("hidden").siblings().addClass("hidden");
    })
    // 在线退还货
    $(".return-type").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".return-detail").eq($(this).index()).removeClass("hidden").siblings().addClass("hidden");
    })
    //评论商品
    $(".comment-type").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(".comment-detail").eq($(this).index()).removeClass("hidden").siblings().addClass("hidden");
    })
    //我的易果点击页码
    $(".pagemask").click(function(){
        $(".pageval").val($(this).html());
        $(this).addClass("Num").siblings().removeClass("Num");
        $(".pasttit").eq($(this).data("index")).removeClass("hidden").siblings().addClass("hidden");
    })
    // 点击上一页
    $(".pre").click(function(){
        var pagenum=$(this).parent().children(".Num").html();
        if(pagenum>1){
           pagenum--;
        }else {
            pagenum=1;
        }
        $(".pageval").val(pagenum);
       $(".pagemask").eq(pagenum).addClass("Num").siblings().removeClass("Num");
       $(".pasttit").eq(pagenum-1).removeClass("hidden").siblings().addClass("hidden");
    })
    // 点击下一页
    $(".pagenext").click(function(){
        var pagenum=$(this).parent().children(".Num").html();
        if(pagenum<3) {
            pagenum++;
        }else {
            pagenum=3;
        }
        $(".pageval").val(pagenum);
        $(".pagemask").eq(pagenum).addClass("Num").siblings().removeClass("Num");
       $(".pasttit").eq(pagenum-1).removeClass("hidden").siblings().addClass("hidden");
    })
    // 点击页码确定按钮
    var inptext;
    $(".pageval").change(function(){
        inptext=$(this).val();
    })
    var nowNum=1;
    $(".pagebtn").click(function(){
        var num=$(this).parent().prev().prev().children(".pagemask").length;
        if(inptext<=num) {
            $(".pagemask").eq(inptext).addClass("Num").siblings().removeClass("Num");
            $(".pasttit").eq(inptext-1).removeClass("hidden").siblings().addClass("hidden");
            nowNum=inptext;
        }else {
            $(".pageval2").val(nowNum);
            $(".pageval1").val(1);
        }  
    })
    // 我的悠币 下拉选项框切换
    var Tabletxt=$(".myyg-table tbody").html()
    $(".ybsel").change(function() {
        if($(this).val()==1) {
            $(".myyg-table tbody").html("记录为空");
        }else {
            $(".myyg-table tbody").html(Tabletxt);
        }
    })
    // 账户安全部分
    // 点击修改,邮箱验证,手机验证跳转到个人资料页面
    $(".edit,.email-btn,.editphone-btn").click(function(){
        $(".IRA").addClass("hidden");
        $(".personal").removeClass("hidden");
    })
    // 点击账户安全中的修改密码按钮
    $(".editpass-btn").click(function(){
        $(".IRA").addClass("hidden");
        $(".editpass").removeClass("hidden");
    })
    $(".edit-cont .input").blur(function(){
        if($(this).val()=="") {
            $(this).next().show();
            if($(".edit-cont label").hasClass("error")) {
                $(this).css("color","#ff0000");
            }
        }else {
            if(!passwordpatt.test($(this).val())){
                $(this).next().show();
                $(this).next().html("密码为6-20位字母、符号或数字");
                if($(".edit-cont label").hasClass("error")) {
                    $(this).css("color","#ff0000");
                }
            }else {
                $(this).next().hide();
                $(this).css("color","");
            }
        }
    })
    // 进行密码验证
    $(".editpass .btn .btn-green").click(function(){
        if($(".edit-cont .input").val()==""&&$(".edit-cont .input").val().length<6) {
            $(".editpass .error").show();
        }else {
              $.ajax({
            type:"POST",
            url:"http://localhost/login.php",
            dataType:"json",
            data:{
                phone:key,
                password:$("#OldPassword").val()
            },
            success:function(data){
                if(data==1){
                    if($("#NewPassword").val()!="") {
                        if($("#NewPassword").val()==$("#ConfirmPassword").val()){
                            $(".popout-content>.content>p").text("修改成功");
                            $(".Dailog-poput").css("display","block");
                            $(".Dailog-poput .confirmlast").click(function() {
                                $(".Dailog-poput").css("display","none");
                                $(".IRA").removeClass("hidden");
                                $(".editpass").addClass("hidden");
                            })
                            $.ajax({
                                type:"POST",
                                url:"http://localhost/register.php",
                                dataType:"json",
                                data:{
                                    phone:key,
                                    Newpassword:$("#NewPassword").val()
                                },
                            })
                        }else{
                            $("#ConfirmPassword").next().html("两次密码输入不一致");
                        }
                    }
                }else {
                    $(".popout-content>.content>p").text("原密码错误");
                    $(".Dailog-poput").css("display","block");
                }
            }
        })
        }
    })
    // 企业福利选项框不能为空
    $(".qiyelogin .bindCorporation").click(function () {
        if($(".qiyelogin .inp1").val()=="") {
            $(".popout-content>.content>p").text("请输入企业编号");
            $(".Dailog-poput").css("display","block");
        }else if($(".qiyelogin .inp2").val()=="") {
            $(".popout-content>.content>p").text("请输入姓名");
            $(".Dailog-poput").css("display","block");
        }else if($(".EmailValidate").css("display")=="block") {
            if($(".qiyelogin .inp3").val()=="") {
                $(".popout-content>.content>p").text("请输入邮箱");
                $(".Dailog-poput").css("display","block");
            }
        }else if($(".MobileValidate").css("display")=="block"){
            if($(".qiyelogin .inp4").val()=="") {
                $(".popout-content>.content>p").text("请输入手机号");
                $(".Dailog-poput").css("display","block");
            }else if($(".qiyelogin .inp5").val()=="") {
                $(".popout-content>.content>p").text("请输入验证码");
                $(".Dailog-poput").css("display","block");
            }
        }
        if((!$(".qiyelogin .inp1").val()==""&& !$(".qiyelogin .inp2").val()==""&& !$(".qiyelogin .inp3").val()=="")||(!$(".qiyelogin .inp1").val()==""&& !$(".qiyelogin .inp2").val()==""&& !$(".qiyelogin .inp4").val()==""&& !$(".qiyelogin .inp5").val()=="")) {
             if($("#IArgee").prop("checked")==false) {
                $(".Dailog-poput").css("display","block");
                $(".popout-content>.content>p").text("请确认阅读并同意《易果企业认证协议》");
            }
        }
    })
    // 企业邮箱与手机号切换
    $(".ValidateType input").click(function() {
        console.log($(this).val())
        if($(this).val()=="0") {
            $(".EmailValidate").css("display","block");
            $(".MobileValidate").css("display","none");
        }
        if($(this).val()=="1") {
            $(".EmailValidate").css("display","none");
            $(".MobileValidate").css("display","block");
        }
    })
    //弹框隐藏
    $(".Dailog-poput .confirm").click(function() {
        $(".Dailog-poput").css("display","none");
    })
    // 协议弹框
    $(".controls .green").click(function () {
        $(".qiye").css("display", "block");
    })
    //点击发送验证码倒计时
    $("#ReSendCode").click(function(){
        $(this).addClass("hidden");
        $("#ReSendCode2").removeClass("hidden");
        var timer=setInterval(function(){
            if(text>=0) {
                $("#ReSendCode2 span").html(text);
                text-=1;
            }else {
                $("#ReSendCode").removeClass("hidden");
                $("#ReSendCode2").addClass("hidden");
                clearInterval(timer);
            }
        },1000);
    })
    // 设置密码验证
    var patt=/^\d{6}$/;
    $(".setpass .btn").click(function(){
        if($(".infoCode").val()=="") {
            $(".popout-content>.content>p").text("请输入验证码");
            $(".Dailog-poput").css("display","block");
        }else {
            if($("#pay-pass").val()=="") {
                $(".popout-content>.content>p").text("请输入支付密码");
                $(".Dailog-poput").css("display","block");
            }else {
                if($("#pay-pass").val()!=$("#con-pay-pass").val()) {
                    $(".popout-content>.content>p").text("确认密码不一致");
                    $(".Dailog-poput").css("display","block");
                }else {
                    if($(".infoCode").val().length<6) {
                        $(".popout-content>.content>p").text("请输入6位验证码");
                        $(".Dailog-poput").css("display","block");
                    }else {
                        if(!patt.test($("#pay-pass").val())) {
                            $(".popout-content>.content>p").text("请输入6位数字支付密码");
                            $(".Dailog-poput").css("display","block");
                        }else {

                        }
                    }
                }
                // if(!patt.test($("#pay-pass").val())) {
                //     $(".popout-content>.content>p").text("请输入");
                //     $(".Dailog-poput").css("display","block");
                // }
            }
        }
    })
})
    