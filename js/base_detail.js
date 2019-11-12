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
    $(".mobile-a,.con1").hover(function () {
        $(".mobile-a,.con1").css("display", "block").addClass("my-Fruits");
    }, function () {
        $(".con1").css("display", "none");
        $(".mobile-a,.con1").removeClass("my-Fruits");
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
    var emailpatt=/^\w+@[0-9 a-z A-Z]+\.[a-z A-Z]{2,4}$/;
    //表单验证
    var timer;
    $("#checkbtn").click(function(){
        if(!$(this).prop("checked")) {
            $(".register #signupbtn").css("background","");
        }else {
            $("#signupbtn").removeAttr("disabled");
            $(".register #signupbtn").css("background","#008422");
            $("#signupbtn").click(function(){
                if($(".forms .phone").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
                    if(!$(".forms .phone").next().is("span")) {
                        $(".forms .phone").parent().append(`
                            <span class="pass-tip">
                                <i></i>
                                手机号不能为空
                            </span>
                        `)
                    }else {
                        $(".forms .phone").next().attr("class","pass-tip");
                        $(".forms .phone").next().html("<i></i>手机号不能为空");
                    }
                }else {
                    if (!phonepatt.test($(".phone").val())) {
                        if(!$(".phone").next().is("span")) {
                            $(".phone").parent().append(`
                                <span class="pass-error">
                                    <i></i>
                                    手机号格式不正确
                                </span>
                            `)
                        }else {
                            $(".phone").next().attr("class","pass-error");
                            $(".phone").next().html("<i></i>手机号格式不正确"); 
                        }
                    }else {
                        if($(".ver-code").val().replace(/(^\s*)|(\s*$)/g, "")=='') {
                            if(!$(".forms .phone").next().is("span")) {
                                $(".forms .phone").parent().append(`
                                    <span class="pass-tip">
                                        <i></i>
                                        图形验证码不能为空
                                    </span>
                                `)
                            }else {
                                $(".forms .phone").next().attr("class","pass-tip");
                                $(".forms .phone").next().html("<i></i>请输入图形验证码");
                            }
                        }else {
                            if($(".forms .ver-code").val().toUpperCase()!=$(".codes").html().toUpperCase()){
                                if(!$(".forms .phone").next().is("span")) {
                                    $(".forms .phone").parent().append(`
                                        <span class="pass-error">
                                            <i></i>
                                            图形验证码不正确
                                        </span>
                                    `)
                                }else {
                                    $(".forms .phone").next().attr("class","pass-error");
                                    $(".forms .phone").next().html("<i></i>图形验证码不正确");
                                }
                            }else{
                                $(".forms .phone").next().remove();
                                if($(".forms .password").val().replace(/(^\s*)|(\s*$)/g, "")==''||$(".forms .confirm-password").val().replace(/(^\s*)|(\s*$)/g, "")=='') {
                                    if(!$(".forms .confirm-password").next().is("span")) {
                                        $(".forms .confirm-password").parent().append(`
                                            <span class="pass-tip">
                                                <i></i>
                                                密码不能为空
                                            </span>
                                        `)
                                    }
                                }else {
                                    if(!passwordpatt.test($(".password").val())) {
                                        if(!$(".forms .confirm-password").next().is("span")) {
                                            $(".forms .confirm-password").parent().append(`
                                                <span class="pass-error">
                                                    <i></i>
                                                    密码不能小于6位
                                                </span>
                                            `)
                                        }else {
                                            $(".forms .confirm-password").next().attr("class","pass-error");
                                            $(".forms .confirm-password").next().html("<i></i>密码不能小于6位");
                                        }
                                    } else {
                                        if($(".password").val()!=$(".confirm-password").val()) {
                                            if(!$(".forms .confirm-password").next().is("span")) {
                                                $(".confirm-password").parent().append(`
                                                    <span class="pass-error">
                                                        <i></i>
                                                        两次密码不一致
                                                    </span>
                                                `)
                                            }else {
                                                $(".forms .confirm-password").next().attr("class","pass-error");
                                                $(".forms .confirm-password").next().html("<i></i>两次密码不一致");
                                            }
                                        }else {
                                            if(!$(".forms .confirm-password").next().is("span")) {
                                                $(".forms .confirm-password").parent().append(`
                                                    <span class="pass">
                                                        <i></i>
                                                    </span>
                                                `)
                                            }else {
                                                $(".forms .confirm-password").next().attr("class","pass");
                                                $(".forms .confirm-password").next().html("<i></i>");
                                            }
                                            $.ajax({
                                                type:"POST",
                                                url: "http://localhost/register.php",
                                                data: {
                                                    phone:$(".forms .phone").val(),
                                                    password:$(".forms .password").val(),
                                                },
                                                dataType:"json",
                                                success:function(data){
                                                    if(data==1){
                                                        $(".forms .confirm-password").next().remove();
                                                        $(".forms .phone").parent().append(`
                                                            <span class="pass-error">
                                                                <i></i>
                                                                该手机号已被注册
                                                            </span>
                                                        `)
                                                    }else {
                                                        if(!$(".forms .confirm-password").next().is("span")) {
                                                            $(".forms .confirm-password").parent().append(`
                                                                <span class="pass">
                                                                    <i></i>
                                                                </span>
                                                            `)
                                                        }else {
                                                            $(".forms .confirm-password").next().attr("class","pass");
                                                        }
                                                        timer=setTimeout(function(){
                                                                window.location.href="login.html";
                                                            },1000)
                                                    }
                                                }
                                            })
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
    clearTimeout(timer);
     // 控制确认密码输入框失去焦点时提示信息
    $(".forms .confirm-password").blur(function(){
        if($(".confirm-password").val().replace(/(^\s*)|(\s*$)/g, "")=='') {
            if(!$(this).next().is("span")) {
                $(".confirm-password").parent().append(`
                    <span class="pass-tip">
                        <i></i>
                        密码不能为空
                    </span>
                `)
            }
        }
    })
    $(".forms .phone").blur(function(){
        if($(".forms .phone").val().replace(/(^\s*)|(\s*$)/g, "")=='') {
            if(!$(this).next().is("span")) {
                $(".phone").parent().append(`
                    <span class="pass-tip">
                        <i></i>
                        手机号不能为空
                    </span>
                `)
            }
        }
    })
    createCode();
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
    // 点击获取验证码出现倒计时
    var text=60;
    var timer1;
    $(".register .getCode").click(function(){
        if($(".forms .phone").val().replace(/(^\s*)|(\s*$)/g, "")!=''&&phonepatt.test($(".phone").val())){
            $(this).next().remove();
            count();
        }else {
            if(!$(this).next().hasClass("pass-tip")) {
                $(this).after(`
                    <span class="pass-tip">
                        <i></i>
                        请输入正确手机号
                    </span>
                `)
            }
        }
    })
    function count(){
        if(!timer1){
            timer1=setInterval(function(){
                if(text>=0) {
                    $(".getCode").html("还剩下<span>"+text+"</span>s");
                    text-=1;
                }else {
                    $(".getCode").html("获取验证码");
                    clearInterval(timer1);
                }
            },1000);
        }
    }
    // 忘记密码页面验证身份短信验证码
    $(".resetpass .getCode").click(function(){
        count();
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
        $(".popoutbox .popout").eq($(this).index()).show();
        $(".mask").show();
    })
    // 控制协议弹框下方按钮
    $(".btn-gn").click(function(){
        $(".popoutbox .popout").hide();
        $(".mask").hide();
    })
    // 控制协议弹框右侧叉号
    $(".close").click(function(){
        $(".popoutbox .popout").hide();
        $(".popout-code").hide();
        $(".mask").hide();
    })
    // 登录页面第三方图片按钮
    $(".pop-up").click(function(){
        $(".popout-code").show();
        $(".mask").show();
    })
    $(".signinbtn").click(function(){
        if($(".VerifyCode").val().replace(/(^\s*)|(\s*$)/g, "")==""||$(".VerifyCode").val().toUpperCase()!=$(".logincode").html().toUpperCase()){
            $("#msg-wrap").addClass("msg-wrap");
            $("#msg-wrap div").addClass("msg-error");
            $(".msg-error").html("请输入正确的验证码");
        }else {
            if($(".input-phone").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
                $("#msg-wrap").addClass("msg-wrap");
                $("#msg-wrap div").addClass("msg-error");
                $(".msg-error").html("用户名不能为空");
            }else {
                if($(".input-key").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
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
                            if(data==1) {
                                localStorage.setItem("value",$(".input-phone").val());
                                window.location.href="index.html";
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
    // 输入账号
    $(".resetpass .btn-green1").click(function(){
        if($(".resetpass .input-user").val().replace(/(^\s*)|(\s*$)/g, "")==""){
            if(!$(".resetpass .input-user").next().is("span")){
                $(".resetpass .input-user").parent().append(`
                    <span class="pass-tip">
                        <i></i>
                        请输入您的手机号或邮箱
                    </span>`
                )
            }else {
                $(".resetpass .input-user").next().attr("class","pass-tip");
                $(".resetpass .input-user").next().html("<i></i> 请输入您的手机号或邮箱");
            }
        }else {
            $(".resetpass .input-user").next().remove();
            if($(".resetpass .ver-code").val().replace(/(^\s*)|(\s*$)/g, "")==""){
                if(!$(".resetpass .ver-code").next().next().next().is("span")){
                    $(".resetpass .ver-code").parent().append(`
                        <span class="pass-tip">
                            <i></i>
                            请输入验证码
                        </span>` 
                    )
                }else {
                    $(".resetpass .ver-code").next().next().next().attr("class","pass-tip");
                    $(".resetpass .ver-code").next().next().next().html("<i></i>请输入验证码");
                }
            }else {
                $(".resetpass .ver-code").next().next().next().remove();
                if($(".resetpass .ver-code").val().toUpperCase()!=$(".codes").html().toUpperCase()){
                    if(!$(".resetpass .ver-code").next().next().next().is("span")) {
                        $(".resetpass .ver-code").parent().append(`
                            <span class="pass-error">
                                <i></i>
                                校验码错误
                            </span>
                        `)
                    }else {
                        $(".resetpass .ver-code").next().next().next().attr("class","pass-error");
                        $(".resetpass .ver-code").next().next().next().html("<i></i>校验码错误");
                    }
                }else{
                    $(".resetpass .ver-code").next().next().remove();
                    $.ajax({
                        type:"POST",
                        url:"http://localhost/FindPwd.php",
                        data: {
                            phone:$(".resetpass .input-user").val()
                        },
                        success:function(data){
                            if(data==1){
                                $(".resetpass .input-user").next().remove();
                                localStorage.setItem("user-name",$(".resetpass .input-user").val());
                                window.location.href="resetpass2.html";
                            }else {
                                if(!$(".resetpass .input-user").next().next().is("span")){
                                    $(".resetpass .input-user").parent().append(`
                                        <span class="pass-error">
                                            <i></i>
                                            您输入手机/邮箱不存在;
                                        </span>`
                                    )
                                }else {
                                    $(".resetpass .input-user").next().attr("class","pass-error");
                                    $(".resetpass .input-user").next().html("<i></i> 您输入手机/邮箱不存在")
                                }
                            }
                        }
                    })
                }
            }
        }
    })
    var userid=localStorage.getItem("user-name")
    if(userid) {
        var phone=[];
        phone.push(userid.slice(0,3));
        phone.push(userid.slice(7,11));
        var value=phone.join("****");
        $(".resetpass .user-id").html(value);
    }
    // 失去焦点
    $(".resetpass .input-user").blur(function(){
        if($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
            if(!$(this).next().is("span")){
                $(this).parent().append(`
                    <span class="pass-tip">
                        <i></i>
                        请输入您的手机号或邮箱
                    </span>`
                )
            }else {
                $(this).next().attr("class","pass-tip");
                $(this).next().html("<i></i> 请输入您的手机号或邮箱");
            }
        }else{
            $(this).next().remove();
        }
    })
    $(".resetpass .ver-code").blur(function(){
        if($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
            if(!$(this).next().next().next().is("span")){
                $(this).parent().append(`
                    <span class="pass-tip">
                        <i></i>
                        请输入验证码
                    </span>`
                )
            }else {
                $(this).next().next().next().attr("class","pass-tip");
                $(this).next().next().next().html("<i></i> 请输入验证码")
            }
        }else{
            $(this).next().next().next().remove();
        }
    })
    // 忘记密码 重置密码 点击按钮
    $(".resetpass .btn-green2").click(function(){
        if($(".resetpass .newpass").val().replace(/(^\s*)|(\s*$)/g, "")==""){
           if(!$(".resetpass .newpass").next().is("span")){
                $(".resetpass .newpass").parent().append(`
                        <span class="pass-error">
                            <i></i>
                            请输入密码
                        </span>`
                )
            }else {
                $(this).next().html("<i></i> 请输入密码");
            }
        }
        if($(".resetpass .newpass").val().replace(/(^\s*)|(\s*$)/g, "")!=""&&$(".resetpass .cfmpass").val().replace(/(^\s*)|(\s*$)/g, "")!=""&&$(".resetpass .newpass").val()==$(".resetpass .cfmpass").val()){
            $.ajax({
                type:"POST",
                url:"http://localhost/reset.php",
                data:{
                    phone:localStorage.getItem("user-name"),
                    Newpassword: $(".resetpass .newpass").val()
                },
                dataType:"json",
                success:function(data){
                    if(data==1){
                        window.location.href="resetpass4.html"
                    }
                }
            })
        }
    })
    // 失去焦点设置密码框
    $(".resetpass .newpass").blur(function(){
         if( $(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
            if(!$(this).next().hasClass("pass-error")){
                $(this).parent().append(`
                    <span class="pass-error">
                        <i></i>
                        请输入密码
                    </span>`
                )
            }else {
                $(this).next().html("<i></i> 请输入密码");
            }
         }else {
            if(!passwordpatt.test($(this).val())){
                if(!$(this).next().hasClass("pass-error")){
                    $(this).parent().append(`
                        <span class="pass-error">
                            <i></i>
                            密码不能小于6位
                        </span>`
                    )
                }else {
                    $(this).next().html("<i></i> 密码不能小于6位");
                }
            }else{
                $(this).next().remove();
            }
         }
     })
    //  失去焦点确认密码框
    $(".resetpass .cfmpass").blur(function(){
        if($(this).val().replace(/(^\s*)|(\s*$)/g, "")==""){
           if(!$(this).next().hasClass("pass-error")){
               $(this).parent().append(`
                   <span class="pass-error">
                       <i></i>
                       请输入密码
                   </span>`
               )
           }else {
               $(this).next().html("<i></i> 请输入密码");
            }
        }else {
            if($(this).val()!=$(".resetpass .newpass").val()){
                if(!$(this).next().hasClass("pass-error")){
                    $(this).parent().append(`
                        <span class="pass-error">
                           <i></i>
                           两次密码不一致
                        </span>`
                    )
                }else {
                   $(this).next().html("<i></i> 两次密码不一致");
                }
            }else {
               $(this).next().remove();
           }
        }
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
        $(".user-info .name").html(key);
        $(".userphone").html(key);
        var keyArr=[];
        keyArr.push(key.slice(0,3));
        keyArr.push(key.slice(7,11));
        var phonevalue=keyArr.join("****");
        $(".myphone strong").html(phonevalue);
        $(".user-info .telNum a").html(phonevalue);
        // ****手机号
        $(".controls .conls-phonetel").html(key);
        $(".EidtGroup .EidtGroup-tel").html(phonevalue);
        // 忘记密码页面验证身份手机号
        $(".resetpass .user-id").html(phonevalue);
    }
    $("#out").click(function(){
        key=localStorage.removeItem("value");
        $(".login-reg").removeClass("tit-hidden");
        $(".loginout").addClass("tit-hidden");
    })
    // 验证登陆跳转
    $(".suggest").click(function(){
        localStorage.setItem("pageNum",$(this).data("list"));
        if(!key) {
            window.location.href="login.html";
        }else {
            window.location.href="myyg.html";
        }
    }) 
    $(".s-btn").click(function(){
        if(!key) {
            window.location.href="login .html";
        }else {
            window.location.href="";
        }
    }) 
    // 水果详情页评论判断
    $(".comment-btn .btn-gn").click(function(){
        localStorage.setItem("pagelist",$(this).data("list"));
        if(key) {
            window.location.href="myyg.html";
        }else {
            alert("请登录!");
        }
    })
    if(localStorage.getItem("pagelist")){
        $(".mygnav .nownav").removeClass("hidden");
        $(".main").eq(localStorage.getItem("pagelist")).removeClass("hidden").siblings().addClass("hidden");
        $(".l-menu a").eq(localStorage.getItem("pagelist")-1).addClass("on");
        $(".mygnav .nownav .m-order").html($(".l-menu a").eq(localStorage.getItem("pagelist")-1).html());
        localStorage.removeItem("pagelist");
    }
    // 首页点击我的易果
    $(".nofollow").click(function(){
        localStorage.setItem("pagenum",$(this).data("list"));
        localStorage.removeItem("page");
        localStorage.setItem("content",$(this).html().slice(0,5));
        if(!key) {
            window.location.href="login.html";
        }else {
            window.location.href="myyg.html";
        }
    })
    if(localStorage.getItem("content")) {
        $(".mygnav .nownav").removeClass("hidden");
        $(".mygnav .nownav .m-order").html(localStorage.getItem("content"));
        localStorage.removeItem("content");
    }
    if(localStorage.getItem("pagenum")) {
        $(".main").eq(localStorage.getItem("pagenum")).removeClass("hidden").siblings().addClass("hidden");
        $(".l-menu a").eq(localStorage.getItem("pagenum")-1).addClass("on");
        localStorage.removeItem("pagenum");
    }
    if(localStorage.getItem("pageNum")){
        $(".mygnav .nownav").removeClass("hidden");
        $(".main").eq(localStorage.getItem("pageNum")).removeClass("hidden").siblings().addClass("hidden");
        $(".l-menu a").eq(localStorage.getItem("pageNum")-1).addClass("on");
        $(".mygnav .nownav .m-order").html($(".l-menu a").eq(localStorage.getItem("pageNum")-1).html());
        localStorage.removeItem("pageNum");
    }
    // 点击我的易果左侧列表
    $(".l-menu a").click(function(){
        $(".mygnav .nownav").removeClass("hidden");
        $(".mYg").removeClass("m-order")
        $(".main").eq($(this).data("list")).removeClass("hidden").siblings().addClass("hidden")
        $(".l-menu a").removeClass("on");
        $(this).addClass("on");
        $(".m-order").html($(this).html());
    })
    // 点击我的易果标题
    $(".myyiguo-a").click(function(){
        localStorage.setItem("page",$(this).data("list"));
        if(!key) {
            window.location.href="login.html";
        }else {
            window.location.href="myyg.html";
        }
    })
    if(localStorage.getItem("page")) {
        $(".mYg").addClass("m-order");
        $(".main").eq(localStorage.getItem("page")).removeClass("hidden").siblings().addClass("hidden");
        localStorage.removeItem("page");
    }
    $(".mYg").click(function(){
        $(".mygnav .nownav").addClass("hidden");
        $(this).addClass("m-order");
        $(".main").eq(0).removeClass("hidden").siblings().addClass("hidden");
    })
    // 我的易果详情页我的易果部分
        $(".user-info .info-lcol .modify,.user-info .u-safe a").click(function(){
            $(".mYg").removeClass("m-order");
            $(".mygnav .nownav").removeClass("hidden");
            $(".m-order").html($(".l-menu .menu-list2").html());
            $(".personal").removeClass("hidden");
            $(".myygcontent").addClass("hidden");
            $(".l-menu a").removeClass("on");
            $(".l-menu .menu-list2").addClass("on");
        })
        $(".myorder .all").click(function(){
            $(".mYg").removeClass("m-order");
            $(".myordercontent").removeClass("hidden")
            $(".myygcontent").addClass("hidden");
            $(".mygnav .nownav").removeClass("hidden");
            $(".m-order").html($(".l-menu .menu-list1").html());
            $(".l-menu a").removeClass("on");
            $(".l-menu .menu-list1").addClass("on");
        })
        $(".mod-buy .all").click(function(){
            $(".mYg").removeClass("m-order");
            $(".goodscontent").removeClass("hidden");
            $(".myygcontent").addClass("hidden");
            $(".mygnav .nownav").removeClass("hidden");
            $(".m-order").html($(".l-menu .menu-list3").html());
            $(".l-menu a").removeClass("on");
            $(".l-menu .menu-list3").addClass("on");
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
    $(".IRA .edit,.email-btn,.editphone-btn").click(function(){
        $(".mygnav .nownav").removeClass("hidden");
        $(".m-order").html($(".l-menu .menu-list2").html());
        $(".IRA").addClass("hidden");
        $(".personal").removeClass("hidden");
        $(".l-menu a").removeClass("on");
        $(".l-menu .menu-list2").addClass("on");
    })
    // 点击账户安全中的修改密码按钮
    $(".editpass-btn").click(function(){
        $(".mygnav .nownav").addClass("hidden");
        $(".IRA").addClass("hidden");
        $(".editpass").removeClass("hidden");
    })
    // 点击账户安全中设置密码按钮
    $(".setpass-btn").click(function(){
        $(".mygnav .nownav").addClass("hidden");
        $(".IRA").addClass("hidden");
        $(".setpass").removeClass("hidden");
    })
    $(".edit-cont .input").blur(function(){
        if($(this).val().replace(/(^\s*)|(\s*$)/g, "")=="") {
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
        if($(".edit-cont .input").val().replace(/(^\s*)|(\s*$)/g, "")==""||$(".edit-cont .input").val().length<6) {
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
                        if($("#NewPassword").val().replace(/(^\s*)|(\s*$)/g, "")!="") {
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
                                    url:"http://localhost/reset.php",
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
        if($(".qiyelogin .inp1").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
            $(".popout-content>.content>p").text("请输入企业编号");
            $(".Dailog-poput").css("display","block");
        }else if($(".qiyelogin .inp2").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
            $(".popout-content>.content>p").text("请输入姓名");
            $(".Dailog-poput").css("display","block");
        }else if($(".EmailValidate").css("display")=="block") {
            if($(".qiyelogin .inp3").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
                $(".popout-content>.content>p").text("请输入邮箱");
                $(".Dailog-poput").css("display","block");
            }
        }else if($(".MobileValidate").css("display")=="block"){
            if($(".qiyelogin .inp4").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
                $(".popout-content>.content>p").text("请输入手机号");
                $(".Dailog-poput").css("display","block");
            }else if($(".qiyelogin .inp5").val().replace(/(^\s*)|(\s*$)/g, "")=="") {
                $(".popout-content>.content>p").text("请输入验证码");
                $(".Dailog-poput").css("display","block");
            }
        }
        if((!$(".qiyelogin .inp1").val().replace(/(^\s*)|(\s*$)/g, "")==""&& !$(".qiyelogin .inp2").val().replace(/(^\s*)|(\s*$)/g, "")==""&& !$(".qiyelogin .inp3").val().replace(/(^\s*)|(\s*$)/g, "")=="")||(!$(".qiyelogin .inp1").val().replace(/(^\s*)|(\s*$)/g, "")==""&& !$(".qiyelogin .inp2").val().replace(/(^\s*)|(\s*$)/g, "")==""&& !$(".qiyelogin .inp4").val().replace(/(^\s*)|(\s*$)/g, "")==""&& !$(".qiyelogin .inp5").val().replace(/(^\s*)|(\s*$)/g, "")=="")) {
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
    // 我的资料中未验证，出现的input框
    $(".EidtGroup .edits").click(function(){
        $(this).addClass("hidden");
        $(".EidtGroup .input").removeClass("hidden");
    })
    $(".controls .bindEmail").click(function(){
        if(!emailpatt.test($(".EidtGroup .input").val())){
            $(".myMessage-mark").fadeIn(200);
            $(".popout-wrap").removeClass("hidden");
            $(".popout-cons .cons p").html("邮箱格式不正确！");
            $(".btnbox .confirm").click(function(){
                $(".myMessage-mark").fadeOut(200);
                $(".popout-wrap").addClass("hidden");
            })
        }else {
            var inputVal=$(".EidtGroup .input").val();
            var emailArr=[];
            emailArr.push(inputVal.slice(0,1));
            emailArr.push(inputVal.slice(inputVal.length-8,inputVal.length+1));
            var emailvalue=emailArr.join("****");
            $(".EidtGroup .span-email").html(emailvalue);
            $(".myemail strong").html(emailvalue);
            $(".EidtGroup .input").addClass("hidden");
            $(".EidtGroup .span-edit").addClass("hidden");
            $(".span-bindEmail").addClass("hidden");
            $(".EidtGroup .a-change").removeClass("hidden");
        }
    })
    $(".EidtGroup .a-change").click(function(){
        $(this).addClass("hidden");
        $(".EidtGroup .span-email").addClass("hidden");
        $(".EidtGroup .input").removeClass("hidden");
    })
    // 实现出生日期的联动效果
    $("#Birthday-month").change(function(){
        $("#Birthday-day").empty();
        var month=$(this).val();
        var day;
        if(month==4||month==6||month==9||month==11){
            day=30;
        }else {
            if(month==2){
                day=28;
            }else {
                day=31;
            }
        }
        var staOption=$("<option value='' selected>请选择</option>");
        $("#Birthday-day").append(staOption);
        for(var i=1;i<day+1;i++){
            var option=$("<option value=" + i + ">" + i + "</option>");
            $("#Birthday-day").append(option);
        }
    })
    // 确定按钮功能实现
    $(".controls .btn-green").click(function(){
        var fillNames=$(".EidtGroup #RealName").val();
        var fillName=fillNames.replace(/(^\s*)|(\s*$)/g, "");
        var inputVal=$(".EidtGroup .input").val();
        if(!inputVal==""&&emailpatt.test($(".EidtGroup .input").val())){
            var emailArr=[];
            emailArr.push(inputVal.slice(0,1));
            emailArr.push(inputVal.slice(inputVal.length-8,inputVal.length+1));
            var emailvalue=emailArr.join("****");
            $(".EidtGroup .span-email").html(emailvalue);
            $(".EidtGroup .span-email").removeClass("hidden");
            $(".EidtGroup .a-change").removeClass("hidden");
            $(".EidtGroup .input").addClass("hidden");
            $(".span-bindEmail").addClass("hidden");
        }
        if(fillName.length>10){
            $(".EidtGroup .passlen-tip").removeClass("hidden");
            $(".EidtGroup .passlen-tip").html($(".EidtGroup .passlen-tip").html().replace("必填","长度不能超过10个汉字"))
        }else {
            if(fillName.length==0){
                $(".EidtGroup .passlen-tip").html($(".EidtGroup .passlen-tip").html().replace("长度不能超过10个汉字","必填"));
                $(".EidtGroup .passlen-tip").removeClass("hidden");
            }else {
                $(".EidtGroup .passlen-tip").addClass("hidden");
                if(!emailpatt.test($(".EidtGroup .input").val())){
                    $(".myMessage-mark").fadeIn(200);
                    $(".popout-wrap").removeClass("hidden");
                    $(".popout-cons .cons p").html("邮箱格式不正确！");
                    $(".btnbox .confirm").click(function(){
                        $(".myMessage-mark").fadeOut(200);
                        $(".popout-wrap").addClass("hidden");
                    })
                }else {
                    $(".EidtGroup .span-realname").html($(".EidtGroup #RealName").val());
                    $(".EidtGroup .span-realname").removeClass("hidden");
                    $(".myMessage-mark").fadeIn(200);
                    $(".popout-cons .cons p").html("保存成功");
                    $(".popout-wrap").removeClass("hidden");
                    $(".btnbox .confirm").click(function(){
                        $(".myMessage-mark").fadeOut(200);
                        $(".popout-wrap").addClass("hidden");
                    })
                    $(".EidtGroup .span-realname").html($(".EidtGroup #RealName").val());
                    $(".EidtGroup #RealName").addClass("hidden");
                    $(".EidtGroup .passlen-tip").addClass("hidden");
                    $(".EidtGroup .b-change").removeClass("hidden");
                    $(".EidtGroup .b-change").click(function(){
                        $(".EidtGroup .b-change").addClass("hidden");
                        $(".EidtGroup .span-realname").addClass("hidden");
                        $(".EidtGroup #RealName").removeClass("hidden");
                    })
                }
            }
        }
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
        var infocodes=$(".infoCode").val();
        var infocode=infocodes.replace(/(^\s*)|(\s*$)/g, "");
        if(infocode=="") {
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
                            $(".popout-content>.content>p").text("密码设置成功");
                            $(".Dailog-poput").css("display","block");
                            $(".Dailog-poput .confirmlast").click(function() {
                                $(".Dailog-poput").css("display","none");
                                $(".IRA").removeClass("hidden");
                                $(".setpass").addClass("hidden");
                            })
                            $(".safe-info .si-paypass").attr("class","si-paypass finshsp clearfix");
                            $(".safe-info .setpass-btn").html("修改密码");
                            $(".safe-info .setpass-btn").css({
                                color: "#008422",
                                background: "#ffff",
                                border:"1px solid #008422" 
                            })
                        }
                    }
                }
            }
        }
    })
    var iNum1;
    var iNum2;
    var city = ['北京', '上海', '天津', '重庆', '黑龙江', '河南', '山东', '河北', '吉林', '辽宁', '宁夏', '山西', '陕西', '安徽', '江苏', '浙江', '福建', '广东', '江西', '海南', '广西', '贵州', '湖南', '湖北', '四川', '云南', '西藏', '青海', '新疆'];
    var aCity = [['海淀区', '东城区', '西城区', '宣武区', '丰台区', '朝阳区', '崇文区', '大兴区', '石景山区', '门头沟区', '房山区', '通州区', '顺义区', '怀柔区', '昌平区', '平谷区', '密云县', '延庆县'],
    ['黄浦区', '卢湾区', '徐汇区', '长宁区', '静安区', '普陀区', '闸北区', '杨浦区', '虹口区', '闵行区', '宝山区', '嘉定区', '浦东新区', '金山区', '松江区', '青浦区', '南汇区', '奉贤区', '崇明县'],
    ['和平区', '河西区', '河北区', '河东区', '南开区', '红桥区', '北辰区', '津南区', '武清区', '塘沽区', '西青区', '汉沽区', '大港区', '宝坻区', '东丽区', '蓟县', '静海县', '宁河县'],
    ['渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区', '北碚区', '万盛区', '双桥区', '渝北区', '巴南区', '万州区', '涪陵区', '黔江区', '长寿区', '江津区', '永川区', '南川区', '綦江县', '潼南县', '铜梁县', '大足县', '荣昌县', '璧山县', '垫江县', '武隆县', '丰都县', '城口县', '梁平县', '开县', '巫溪县', '巫山县', '奉节县', '云阳县', '忠县', '石柱土家族自治县', '彭水苗族土家族自治县', '酉阳苗族自治县', '秀山土家族苗族自治县'],
    ['哈尔滨市', '伊春市', '牡丹江市', '大庆市', '鸡西市', '鹤岗市', '绥化市', '齐齐哈尔市', '黑河市', '富锦市', '虎林市', '密山市', '佳木斯', '双鸭山市', '海林市', '铁力市', '北安市', '五大连池市', '阿城市', '尚志市', '五常市', '安达市', '七台河市', '绥芬河市', '双城市', '海伦市', '宁安市', '讷河市', '穆棱市', '同江市', '肇东市'],
    ['郑州市', '洛阳市', '焦作市', '商丘市', '信阳市', '周口市', '鹤壁市', '安阳市', '濮阳市', '驻马店市', '南阳市', '开封市', '漯河市', '许昌市', '新乡市', '济源市', '灵宝市', '偃师市', '邓州市', '登封市', '三门峡市', '新郑市', '禹州市', '巩义市', '永城市', '长葛市', '义马市', '林州市', '项城市', '汝州市', '荥阳市', '平顶山市', '卫辉市', '辉县市', '舞钢市', '新密市', '孟州市', '沁阳市', '郏县'],
    ['济南市', '青岛市', '威海市', '潍坊市', '菏泽市', '济宁市', '莱芜市', '东营市', '烟台市', '淄博市', '枣庄市', '泰安市', '临沂市', '日照市', '德州市', '聊城市', '滨州市', '乐陵市', '兖州市', '诸城市', '邹城市', '滕州市', '肥城市', '新泰市', '胶州市', '胶南市', '即墨市', '龙口市', '平度市', '莱西市'],
    ['石家庄市', '保定市', '唐山市', '邯郸市', '邢台市', '沧州市', '衡水市', '廊坊市', '承德市', '迁安市', '鹿泉市', '秦皇岛市', '南宫市', '任丘市', '叶城市', '辛集市', '涿州市', '定州市', '晋州市', '霸州市', '黄骅市', '遵化市', '张家口市', '沙河市', '三河市', '冀州市', '武安市', '河间市', '深州市', '新乐市', '泊头市', '安国市', '双滦区', '高碑店市'],
    ['长春市', '吉林市', '通化市', '白城市', '四平市', '辽源市', '松原市', '白山市', '集安市', '梅河口市', '双辽市', '延吉市', '九台市', '桦甸市', '榆树市', '蛟河市', '磐石市', '大安市', '德惠市', '洮南市', '龙井市', '珲春市', '公主岭市', '图们市', '舒兰市', '和龙市', '临江市', '敦化市'],
    ['沈阳市', '葫芦岛市', '大连市', '盘锦市', '鞍山市', '铁岭市', '本溪市', '丹东市', '抚顺市', '锦州市', '辽阳市', '阜新市', '调兵山市', '朝阳市', '海城市', '北票市', '盖州市', '凤城市', '庄河市', '凌源市', '开原市', '兴城市', '新民市', '大石桥市', '东港市', '北宁市', '瓦房店市', '普兰店市', '凌海市', '灯塔市', '营口市'],
    ['银川市', '固原市', '石嘴山市', '青铜峡市', '中卫市', '吴忠市', '灵武市'],
    ['太原市', '大同市', '阳泉市', '长治市', '临汾市', '晋中市', '运城市', '忻州市', '朔州市', '吕梁市', '古交市', '高平市', '永济市', '孝义市', '侯马市', '霍州市', '介休市', '河津市', '汾阳市', '原平市', '潞城市'],
    ['西安市', '咸阳市', '榆林市', '宝鸡市', '铜川市', '渭南市', '汉中市', '安康市', '商洛市', '延安市', '韩城市', '兴平市', '华阴市'],
    ['合肥市', '毫州市', '芜湖市', '马鞍山市', '池州市', '黄山市', '滁州市', '安庆市', '淮南市', '淮北市', '蚌埠市', '巢湖市', '宿州市', '宣城市', '六安市', '阜阳市', '铜陵市', '明光市', '天长市', '宁国市', '界首市', '桐城市'],
    ['南京市', '无锡市', '常州市', '扬州市 ', '徐州市', '苏州市', '连云港市', '盐城市', '淮安市', '宿迁市', '镇江市', '南通市', '泰州市', '兴化市', '东台市', '常熟市', '江阴市', '张家港市', '通州市', '宜兴市', '邳州市', '海门市', '大丰市', '溧阳市', '泰兴市', '昆山市', '启东市', '江都市', '丹阳市', '吴江市', '靖江市', '扬中市', '新沂市', '仪征市', '太仓市', '姜堰市', '高邮市', '金坛市', '句容市', '灌南县'],
    ['杭州市', '宁波市', '绍兴市', '温州市', '台州市', '湖州市', '嘉兴市', '金华市', '舟山市', '衢州市', '丽水市', '余姚市', '乐清市', '临海市', '温岭市', '永康市', '瑞安市', '慈溪市', '义乌市', '上虞市', '诸暨市', '海宁市', '桐乡市', '兰溪市', '龙泉市', '建德市', '富德市', '富阳市', '平湖市', '东阳市', '东阳市', '嵊州市', '奉化市', '临安市', '江山市'],
    ['福州市', '厦门市', '泉州市', '漳州市', '南平市', '三明市', '龙岩市', '莆田市', '宁德市', '建瓯市', '武夷山市', '长乐市', '福清市', '晋江市', '南安市', '福安市', '龙海市', '邵武市', '石狮市', '福鼎市', '建阳市', '漳平市', '永安市'],
    ['广州市', '深圳市', '珠海市', '汕头市', '佛山市', '韶关市', '湛江市', '肇庆市', '江门市', '茂名市', '惠州市', '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市'],
    ['南昌市', '赣州市', '上饶市', '宜春市', '景德镇市', '亲余市', '九江市', '萍乡市', '抚州市', '鹰潭市', '吉安市', '丰城市', '樟树市', '德兴市', '瑞金市', '井冈山市', '高安市', '乐平市', '南康市', '贵溪市', '瑞昌市', '东乡县', '广丰县', '信州区', '三清山'],
    ['海口市', '三亚市', '万宁市', '文昌市', '儋州市', '琼海市', '东方市', '五指山市'],
    ['南宁市', '贺州市', '玉林市', '桂林市', '柳州市', '梧州市', '北海市', '钦州市', '百色市', '防城港市', '贵港市', '河池市', '崇左市', '来宾市', '东兴市', '桂平市', '北流市', '岑溪市', '合山市', '凭祥市', '宜州市'],
    ['贵阳市', '安顺市', '遵义市', '六盘水市', '兴义市', '都匀市', '凯里市', '毕节市', '清镇市', '铜仁市', '赤水市', '仁怀市', '福泉市'],
    ['长沙市', '郴州市', '益阳市', '娄底市', '株洲市', '衡阳市', '湘潭市', '岳阳市', '常德市', '邵阳市', '永州市', '张家界市', '怀化市', '浏阳市', '醴陵市', '湘乡市', '耒阳市', '沅江市', '涟源市', '常宁市', '吉首市', '冷水江市', '临湘市', '汨罗市', '武冈市', '韶山市', '安化县湘西州'],
    ['武汉市', '荆门市', '咸宁市', '襄樊市', '荆州市', '黄石市', '宜昌市', '随州市', '鄂州市', '孝感市', '黄冈市', '十堰市', '枣阳市', '老河口市', '恩施市', '仙桃市', '天门市', '钟祥市', '潜江市', '麻城市', '洪湖市', '汉川市', '赤壁市', '松滋市', '丹江口市', '武穴市', '广水市', '石首市', '大冶市', '枝江市', '应城市', '宜城市', '当阳市', '安陆市', '宜都市', '利川市'],
    ['昆明市', '玉溪市', '大理市', '曲靖市', '昭通市', '保山市', '丽江市', '临沧市', '楚雄市', '开远市', '个旧市', '景洪市', '安宁市', '宣威市'],
    ['拉萨市', '日喀则市'],
    ['西宁市', '格尔木市', '德令哈市'],
    ['乌鲁木齐市', '石河子市', '喀什市', '阿勒泰市', '阜康市', '库尔勒市', '阿克苏市', '阿拉尔市哈密市']];
    var aCountry = [[['海淀区'], ['东城区'], ['西城区'], ['宣武区'], ['丰台区'], ['朝阳区'], ['崇文区'], ['大兴区'], ['石景山区'], ['门头沟区'], ['房山区'], ['通州区'], ['顺义区'], ['怀柔区'], ['昌平区'], ['平谷区'], ['密云县'], ['延庆县']],
    [['黄浦区'], ['卢湾区'], ['徐汇区'], ['长宁区'], ['静安区'], ['普陀区'], ['闸北区'], ['杨浦区'], ['虹口区'], ['闵行区'], ['宝山区'], ['嘉定区'], ['浦东新区'], ['金山区'], ['松江区'], ['青浦区'], ['南汇区'], ['奉贤区'], ['崇明县']],
    [['和平区'], ['河西区'], ['河北区'], ['河东区'], ['南开区'], ['红桥区'], ['北辰区'], ['津南区'], ['武清区'], ['塘沽区'], ['西青区'], ['汉沽区'], ['大港区'], ['宝坻区'], ['东丽区'], ['蓟县'], ['静海县'], ['宁河县']],
    [['渝中区'], ['大渡口区'], ['江北区'], ['沙坪坝区'], ['九龙坡区'], ['南岸区'], ['北碚区'], ['万盛区'], ['双桥区'], ['渝北区'], ['巴南区'], ['万州区'], ['涪陵区'], ['黔江区'], ['长寿区'], ['江津区'], ['永川区'], ['南川区'], ['綦江县'], ['潼南县'], ['铜梁县'], ['大足县'], ['荣昌县'], ['璧山县'], ['垫江县'], ['武隆县'], ['丰都县'], ['城口县'], ['梁平县'], ['开县'], ['巫溪县'], ['巫山县'], ['奉节县'], ['云阳县'], ['忠县'], ['石柱土家族自治县'], ['彭水苗族土家族自治县'], ['酉阳苗族自治县'], ['秀山土家族苗族自治县']],
    [['哈尔滨市'], ['伊春市'], ['牡丹江市'], ['大庆市'], ['鸡西市'], ['鹤岗市'], ['绥化市'], ['齐齐哈尔市'], ['黑河市'], ['富锦市'], ['虎林市'], ['密山市'], ['佳木斯'], ['双鸭山市'], ['海林市'], ['铁力市'], ['北安市'], ['五大连池市'], ['阿城市'], ['尚志市'], ['五常市'], ['安达市'], ['七台河市'], ['绥芬河市'], ['双城市'], ['海伦市'], ['宁安市'], ['讷河市'], ['穆棱市'], ['同江市'], ['肇东市']],
    [['郑州市'], ['洛阳市'], ['焦作市'], ['商丘市'], ['信阳市'], ['周口市'], ['鹤壁市'], ['安阳市'], ['濮阳市'], ['驻马店市'], ['南阳市'], ['开封市'], ['漯河市'], ['许昌市'], ['新乡市'], ['济源市'], ['灵宝市'], ['偃师市'], ['邓州市'], ['登封市'], ['三门峡市'], ['新郑市'], ['禹州市'], ['巩义市'], ['永城市'], ['长葛市'], ['义马市'], ['林州市'], ['项城市'], ['汝州市'], ['荥阳市'], ['平顶山市'], ['卫辉市'], ['辉县市'], ['舞钢市'], ['新密市'], ['孟州市'], ['沁阳市'], ['郏县']],
    [['济南市'], ['青岛市'], ['威海市'], ['潍坊市'], ['菏泽市'], ['济宁市'], ['莱芜市'], ['东营市'], ['烟台市'], ['淄博市'], ['枣庄市'], ['泰安市'], ['临沂市'], ['日照市'], ['德州市'], ['聊城市'], ['滨州市'], ['乐陵市'], ['兖州市'], ['诸城市'], ['邹城市'], ['滕州市'], ['肥城市'], ['新泰市'], ['胶州市'], ['胶南市'], ['即墨市'], ['龙口市'], ['平度市'], ['莱西市']],
    [['石家庄市'], ['保定市'], ['唐山市'], ['邯郸市'], ['邢台市'], ['沧州市'], ['衡水市'], ['廊坊市'], ['承德市'], ['迁安市'], ['鹿泉市'], ['秦皇岛市'], ['南宫市'], ['任丘市'], ['叶城市'], ['辛集市'], ['涿州市'], ['定州市'], ['晋州市'], ['霸州市'], ['黄骅市'], ['遵化市'], ['张家口市'], ['沙河市'], ['三河市'], ['冀州市'], ['武安市'], ['河间市'], ['深州市'], ['新乐市'], ['泊头市'], ['安国市'], ['双滦区'], ['高碑店市']],
    [['长春市'], ['吉林市'], ['通化市'], ['白城市'], ['四平市'], ['辽源市'], ['松原市'], ['白山市'], ['集安市'], ['梅河口市'], ['双辽市'], ['延吉市九'], ['台市'], ['桦甸市'], ['榆树市'], ['蛟河市'], ['磐石市'], ['大安市'], ['德惠市'], ['洮南市'], ['龙井市'], ['珲春市'], ['公主岭市'], ['图们市'], ['舒兰市'], ['和龙市'], ['临江市'], ['敦化市']],
    [['沈阳市'], ['葫芦岛市'], ['大连市'], ['盘锦市'], ['鞍山市'], ['铁岭市'], ['本溪市'], ['丹东市'], ['抚顺市'], ['锦州市'], ['辽阳市'], ['阜新市'], ['调兵山市'], ['朝阳市'], ['海城市'], ['北票市'], ['盖州市'], ['凤城市'], ['庄河市'], ['凌源市'], ['开原市'], ['兴城市'], ['新民市'], ['大石桥市'], ['东港市'], ['北宁市'], ['瓦房店市'], ['普兰店市'], ['凌海市'], ['灯塔市'], ['营口市']],
    [['银川市'], ['固原市'], ['石嘴山市'], ['青铜峡市'], ['中卫市'], ['吴忠市'], ['灵武市']],
    [['太原市'], ['大同市'], ['阳泉市'], ['长治市'], ['临汾市'], ['晋中市'], ['运城市'], ['忻州市'], ['朔州市'], ['吕梁市'], ['古交市'], ['高平市'], ['永济市'], ['孝义市'], ['侯马市'], ['霍州市'], ['介休市'], ['河津市'], ['汾阳市'], ['原平市'], ['潞城市']],
    [['西安市'], ['咸阳市'], ['榆林市'], ['宝鸡市'], ['铜川市'], ['渭南市'], ['汉中市'], ['安康市'], ['商洛市'], ['延安市'], ['韩城市'], ['兴平市'], ['华阴市']],
    [['合肥市'], ['毫州市'], ['芜湖市'], ['马鞍山市'], ['池州市'], ['黄山市'], ['滁州市'], ['安庆市'], ['淮南市'], ['淮北市'], ['蚌埠市'], ['巢湖市'], ['宿州市'], ['宣城市'], ['六安市'], ['阜阳市'], ['铜陵市'], ['明光市'], ['天长市'], ['宁国市'], ['界首市'], ['桐城市']],
    [['南京市'], ['无锡市'], ['常州市'], ['扬州市'], ['徐州市'], ['苏州市'], ['连云港市'], ['盐城市'], ['淮安市'], ['宿迁市'], ['镇江市'], ['南通市'], ['泰州市'], ['兴化市'], ['东台市'], ['常熟市'], ['江阴市'], ['张家港市'], ['通州市'], ['宜兴市'], ['邳州市'], ['海门市'], ['大丰市'], ['溧阳市'], ['泰兴市'], ['昆山市'], ['启东市'], ['江都市'], ['丹阳市'], ['吴江市'], ['靖江市'], ['扬中市'], ['新沂市'], ['仪征市'], ['太仓市'], ['姜堰市'], ['高邮市'], ['金坛市'], ['句容市'], ['灌南县']],
    [['杭州市'], ['宁波市'], ['绍兴市'], ['温州市'], ['台州市'], ['湖州市'], ['嘉兴市'], ['金华市'], ['舟山市'], ['衢州市'], ['丽水市'], ['余姚市'], ['乐清市'], ['临海市'], ['温岭市'], ['永康市'], ['瑞安市'], ['慈溪市'], ['义乌市'], ['上虞市'], ['诸暨市'], ['海宁市'], ['桐乡市'], ['兰溪市'], ['龙泉市'], ['建德市'], ['富德市'], ['富阳市'], ['平湖市'], ['东阳市'], ['东阳市'], ['嵊州市'], ['奉化市'], ['临安市'], ['江山市']],
    [['福州市'], ['厦门市'], ['泉州市'], ['漳州市'], ['南平市'], ['三明市'], ['龙岩市'], ['莆田市'], ['宁德市'], ['建瓯市'], ['武夷山市'], ['长乐市'], ['福清市'], ['晋江市'], ['南安市'], ['福安市'], ['龙海市'], ['邵武市'], ['石狮市'], ['福鼎市'], ['建阳市'], ['漳平市'], ['永安市']],
    [['广州市'], ['深圳市'], ['珠海市'], ['汕头市'], ['佛山市'], ['韶关市'], ['湛江市'], ['肇庆市'], ['江门市'], ['茂名市'], ['惠州市'], ['梅州市'], ['汕尾市'], ['河源市'], ['阳江市'], ['清远市'], ['东莞市'], ['中山市'], ['潮州市'], ['揭阳市'], ['云浮市']],
    [['南昌市'], ['赣州市'], ['上饶市'], ['宜春市'], ['景德镇市'], ['亲余市'], ['九江市'], ['萍乡市'], ['抚州市'], ['鹰潭市'], ['吉安市'], ['丰城市'], ['樟树市'], ['德兴市'], ['瑞金市'], ['井冈山市'], ['高安市'], ['乐平市'], ['南康市'], ['贵溪市'], ['瑞昌市'], ['东乡县'], ['广丰县'], ['信州区'], ['三清山']],
    [['海口市'], ['三亚市'], ['万宁市'], ['文昌市'], ['儋州市'], ['琼海市'], ['东方市'], ['五指山市']],
    [['南宁市'], ['贺州市'], ['玉林市'], ['桂林市'], ['柳州市'], ['梧州市'], ['北海市'], ['钦州市'], ['百色市'], ['防城港市'], ['贵港市'], ['河池市'], ['崇左市'], ['来宾市'], ['东兴市'], ['桂平市'], ['北流市'], ['岑溪市'], ['合山市'], ['凭祥市'], ['宜州市']],
    [['贵阳市'], ['安顺市'], ['遵义市'], ['六盘水市'], ['兴义市'], ['都匀市'], ['凯里市'], ['毕节市'], ['清镇市'], ['铜仁市'], ['赤水市'], ['仁怀市'], ['福泉市']],
    [['长沙市'], ['郴州市'], ['益阳市'], ['娄底市'], ['株洲市'], ['衡阳市'], ['湘潭市'], ['岳阳市'], ['常德市'], ['邵阳市'], ['永州市'], ['张家界市'], ['怀化市'], ['浏阳市'], ['醴陵市'], ['湘乡市'], ['耒阳市'], ['沅江市'], ['涟源市'], ['常宁市'], ['吉首市'], ['冷水江市'], ['临湘市'], ['汨罗市'], ['武冈市'], ['韶山市'], ['安化县湘西州']],
    [['武汉市'], ['荆门市'], ['咸宁市'], ['襄樊市'], ['荆州市'], ['黄石市'], ['宜昌市'], ['随州市'], ['鄂州市'], ['孝感市'], ['黄冈市'], ['十堰市'], ['枣阳市'], ['老河口市'], ['恩施市'], ['仙桃市'], ['天门市'], ['钟祥市'], ['潜江市'], ['麻城市'], ['洪湖市'], ['汉川市'], ['赤壁市'], ['松滋市'], ['丹江口市'], ['武穴市'], ['广水市'], ['石首市'], ['大冶市'], ['枝江市'], ['应城市'], ['宜城市'], ['当阳市'], ['安陆市'], ['宜都市'], ['利川市']],
    [['昆明市'], ['玉溪市'], ['大理市'], ['曲靖市'], ['昭通市'], ['保山市'], ['丽江市'], ['临沧市'], ['楚雄市'], ['开远市'], ['个旧市'], ['景洪市'], ['安宁市'], ['宣威市']],
    [['拉萨市'], ['日喀则市']],
    [['西宁市'], ['格尔木市'], ['德令哈市']],
    [['乌鲁木齐市'], ['石河子市'], ['喀什市'], ['阿勒泰市'], ['阜康市'], ['库尔勒市'], ['阿克苏市'], ['阿拉尔市哈密市']]];
    // 三级联动 //
    for (var i = 0; i < city.length; i++) {
        $('#sel').append('<option>' + city[i] + '</option>');
    };
    $('#sel').change(function () {
        $('#selCity').children().not(':eq(0)').remove();
        $('#selCountry').children().not(':eq(0)').remove();
        iNum1 = $(this).children('option:selected').index();
        var aaCity = aCity[iNum1 - 1];
        for (var j = 0; j < aaCity.length; j++) {
            $('#selCity').append('<option>' + aaCity[j] + '</option>');
        };
    });
    $('#selCity').change(function () {
        $('#selCountry').children().not(':eq(0)').remove();
        iNum2 = $(this).children('option:selected').index();
        var aaCountry = aCountry[iNum1 - 1][iNum2 - 1];
        for (var k = 0; k < aaCountry.length; k++) {
            $('#selCountry').append('<option>' + aaCountry[k] + '</option>');
        };
    });
    // 整体 //
    $(".addConsignee").click(function () {
        $(".modal").removeClass("hidden");
        $(".modal-backdrop1").removeClass("hidden");
    });
    $(".close").click(function () {
        $(".modal").addClass("hidden");
        $(".modal-backdrop1").addClass("hidden");
    });
    // 动态添加 //
    $(".btn-save").click(function () {
        $(".input-l").val() == "" ? $(".Must-fill1").show() : $(".Must-fill1").hide();
        $("#selCountry").val() == "" ? $(".Must-fill3").show() : $(".Must-fill3").hide();
        $(".input-xl").val() == "" ? $(".Must-fill4").show() : $(".Must-fill4").hide();
        $("#NewMobile").val() == "" ? $(".Must-fill2").show() : $(".Must-fill2").hide();
        !phonepatt.test($("#NewMobile").val())? $(".Must-fill2").show() : $(".Must-fill2").hide();
        if (!$(".input-l").val() == "" && !$("#selCountry").val() == "" && $(".Controls .adrtag").hasClass("selected") && !$(".input-xl").val() == "" && !$("#NewMobile").val() == ""&&phonepatt.test($("#NewMobile").val())) {
            $(".addressList").append(`
                <ul>
                    <li>
                        <p  class="Default-Address">默认地址</p>
                        <dl>
                            <dt>
                                <div class="name">${$(".input-l").val()}
                                    <div class="del-btn">X</div>
                                </div>
                            </dt>
                            <dd><span>收货人：</span>${$(".input-l").val()}</dd>
                            <dd><span>所在地区：</span>${$("#sel").val()} ${$("#selCity").val()} ${$("#selCountry").val()}</dd>
                            <dd><span>地址：</span> ${$(".input-xl").val()}</dd>
                            <dd><span>手机：</span>${$("#NewMobile").val()}</dd>
                        </dl>
                        <div class="btns">
                            <a href="javascript:" class="a1 addressList-a1">设为默认地址</a>
                            <a href="javascript:" class="a2 addressList-a2">编辑</a>
                        </div>
                    </li>
                </ul>
            `);
            $(".input-l").val("");
            $("#sel").val("");
            $("#selCity").val("");
            $(".bb").hide();
            $(".input-m").val("");
            $("#selCountry").val("");
            $(".input-xl").val("");
            $(".modal").addClass("hidden");
            $(".modal-backdrop1").addClass("hidden");
            $(".adrtag").removeClass("selected");
            $(".page").removeClass("hidden");
            $(".consigneeCount").text($("li").length);
        };
        $(".addressList-a1").click(function () {
            $(".Dailog-poput").removeClass("hidden");
            console.log(1)
            $(".replace-p1,.confirm-a").show();
            $(".confirm-a1,.replace-p").hide();
            var test = $(this).parent().parent().children().first();
            $(".confirm-a").on("click", function () {
                test.css("display", "block");
                $(".Dailog-poput").removeClass("hidden");
            });
        });
        $(".addressList-a2").click(function () {
            $("#myModal1").removeClass("hidden");
            $(".modal-backdrop").addClass("modal-backdrop1");
        });
        // 删除当前元素//
        $(".del-btn").click(function () {
            $(".replace-p1,.confirm-a").hide();
            $(".confirm-a1,.replace-p").show();
            $(".Dailog-poput").removeClass("hidden");
            var list = $(this).parent().parent().parent().parent();
            $(".confirm-a1").on("click", function () {
                list.remove();
                $(".consigneeCount").text($("li").length);
                $(".Dailog-poput").removeClass("hidden");
                $(".page").addClass("hidden");
            });
        });
    });
    // 判断是否设置为默认地址 //
    $(".cancel").click(function () {
        $(".Dailog-poput").addClass("hidden");
    });
    $(".adrtag").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).index() == 0) {
            $(".b-1").show();
            $(".b-2").hide();
        } else {
            $(".b-2").show();
            $(".b-1").hide();
        };
    });
})
    