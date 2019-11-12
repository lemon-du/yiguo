$(function () {
    text = JSON.parse(localStorage.list)
    for (var i = 0; i < text.length; i++) {
        $(".cart-alert").append(
            `<table class="cart-table">
        <tbody>
            <tr>
                <td class="cart-t-check">
                    <input type="checkbox" checked="checked" comid="6dfbd0f2-1af1-40f7-b527-06498e1c81bd|1" class="check" name="checkAll">    
                </td>
                <td class="cart-t-img">
                    <a href="">
                        <img src="${text[i].img}"">    
                    </a>
                </td>
                <td class="cart-t-info">
                    <a href="">${text[i].title}</a>    
                    <p class="red"></p>
                </td>
                <td class="cart-t-ub" style="width:75px;"></td>
                <td class="cart-t-price">${text[i].money}</td>
                <td class="cart-t-num">
                    <div class="quantity-form">
                        <a href="javascript:void(0)" class="decrement"></a>  
                        <input type="text" class="itxt" value="${text[i].num}"> 
                        <a href="javascript:void(0)" class="increment"></a>   
                    </div>    
                </td>
                <td class="cart-t-total">
                ¥<span>${text[i].money.slice(1,)*text[i].num}</span>
                </td>
                <td class="cart-t-spec"></td>
                <td class="cart-t-opera">
                    <a href="javascript:void(0);">移入收藏</a><br>
                    <a href="javascript:void(0);" class="delete-goods">删除</a>
                </td> 
            </tr>
        </tbody>
    </table>`
        )
    }
    var $all=$(":checkbox[name=checkAll]")
    var $length=$all.length
    //计算总价
    function totalPrice(){
        var total_price=0
        for(var i=0;i<$(".check:checked").length; i++){
            total_price=parseInt(total_price)+parseInt($(".check:checked").eq(i).parent().parent().children(".cart-t-total").children("span").html())
        }
        $(".fs14 span").html(total_price)
    }
    //全选
    $(".chkAll").click(function(){
        totalPrice()
        
        if($(".check:checked").length==$length){
            $(".chkAll").prop("checked",false)
            $(".check").prop("checked",false)
        }else{
            $(".chkAll").prop("checked",true)
            $(".check").prop("checked",true)
        }
    })
    //点击取消选择
    $(".check").click(function(){
        totalPrice()
        if($(".check:checked").length==$length){
            $(".chkAll").prop("checked",true)
        }else{
            $(".chkAll").prop("checked",false)
        }
    })
    //数量减
    $(".decrement").click(function(){
        var total_price=0
        if($(this).next().val()==1){
            $(".layer_global").fadeIn(300)
            $(".layer_global").css("display","block")
            var tr=$(this).parent().parent().parent()
            var title=tr.children(".cart-t-info").children("a").html()
            text1=JSON.parse(localStorage.arr)
            ind=text1.indexOf(title)
            $(".btn_strong").one("click",function(){
                console.log(ind)
                console.log($(".cart-table").eq(ind))
                text1.splice(ind,1)
                text.splice(ind,1)
                localStorage.arr=JSON.stringify(text1)
                text1=JSON.parse(localStorage.arr)
                localStorage.list=JSON.stringify(text);
                text=JSON.parse(localStorage.list)
                $(".cart-table")[ind+1].remove()
                $(".layer_global").fadeOut(300)
                $(".layer_global").css("display","none")
            })
        }else{
            $(this).next().val($(this).next().val()-1)
            $(this).parent().parent().next().children("span").html($(this).next().val()*$(this).parent().parent().prev().html().slice(1,))
            text1=JSON.parse(localStorage.arr)
            index_t=text1.indexOf($(this).parent().parent().parent().children(".cart-t-info").children("a").html())
            text=JSON.parse(localStorage.list)
            text[index_t].num=text[index_t].num-1
            localStorage.list=JSON.stringify(text);
            text=JSON.parse(localStorage.list)
            for(var i=0;i<$(".check:checked").length; i++){
                total_price=parseInt(total_price)+parseInt($(".check:checked").eq(i).parent().parent().children(".cart-t-total").children("span").html())
            }
            $(".fs14 span").html(total_price)
        }
    })
    //数量加
    $(".increment").click(function(){
        $(this).prev().val(parseInt($(this).prev().val())+1)
        $(this).parent().parent().next().children("span").html($(this).prev().val()*$(this).parent().parent().prev().html().slice(1,))
        text1=JSON.parse(localStorage.arr)
        index_t=text1.indexOf($(this).parent().parent().parent().children(".cart-t-info").children("a").html())
        text=JSON.parse(localStorage.list)
        text[index_t].num=text[index_t].num+1
        localStorage.list=JSON.stringify(text);
        text=JSON.parse(localStorage.list)
        totalPrice()
    })
    //删除
    $(".delete-goods").click(function(){
        console.log(1111)
        $(".layer_global").fadeIn(300)
        $(".layer_global").css("display","block")
        text1=JSON.parse(localStorage.arr)
        var indexn=text1.indexOf($(this).parent().parent().children(".cart-t-info").children("a").html())
        $(".btn_strong").one("click",function(){
            text1.splice(indexn,1)
            text.splice(indexn,1)
            localStorage.arr=JSON.stringify(text1)
            text1=JSON.parse(localStorage.arr)
            localStorage.list=JSON.stringify(text);
            text=JSON.parse(localStorage.list)
            $(".cart-table")[indexn+1].remove()
            $(".layer_global").fadeOut(300)
            $(".layer_global").css("display","none")
			if($(".cart-alert").children().length==1){
				$(".wrap").css("display","none")
				$(".wrap1").css("display","block")
			}
        })
    })
    var len=$(".check:checked").length
    totalPrice()
    //点击关闭
    $(".layer_global_title button").click(function(){
        $(".layer_global").fadeOut(300)
        $(".layer_global").css("display","none")
    })
    //点击取消
    $(".btn_common").click(function(){
        $(".layer_global").fadeOut(300)
        $(".layer_global").css("display","none")
    })
    //点击确定删除
    $(".delete-check").click(function(){
        var layer_global_tit=document.getElementsByClassName("layer_global_tit")[0]
        layer_global_tit.innerHTML="确定删除选中的商品吗？"
        $(".layer_global").fadeIn(300)
        $(".layer_global").css("display","block")
        $(".btn_strong").one("click",function(){
            text1=JSON.parse(localStorage.arr)
            text=JSON.parse(localStorage.list)
            for(var i=0; i<$(".check:checked").length; i++){
                list=text1.indexOf($(".check:checked").eq(i).parent().parent().children(".cart-t-info").children("a").html())
                text1.splice(list,1)
                text.splice(list,1)
            }
            localStorage.arr=JSON.stringify(text1)
            text1=JSON.parse(localStorage.arr)
            localStorage.list=JSON.stringify(text);
            text=JSON.parse(localStorage.list)
            $(".check:checked").parent().parent().parent().parent().remove()
            $(".check").prop("checked",true)
            $(".chkAll").prop("checked",true)
            totalPrice()
            $(".layer_global").fadeOut(300)
            $(".layer_global").css("display","none")
        })
    })
    //确定清空购物车
    $(".empty").click(function(){
        var layer_global_tit=document.getElementsByClassName("layer_global_tit")[0]
        layer_global_tit.innerHTML="确定清空购物车？"
        $(".layer_global").fadeIn(300)
        $(".layer_global").css("display","block")
        $(".btn_strong").click(function(){
            $(".check").parent().parent().parent().parent().remove()
            $(".cart").children(".wrap").css("display","none")
            $(".wrap1").css("display","block")
            $(".layer_global").fadeOut(300)
            $(".layer_global").css("display","none")
            // text1=JSON.parse(localStorage.arr)
            // text=JSON.parse(localStorage.list)
            localStorage.removeItem(arr)
            localStorage.removeItem(text1)
            localStorage.arr=JSON.stringify(text1)
            localStorage.list=JSON.stringify(text);
        })
    })
    if($(".cart-alert").children().length==1){
        $(".cart").children(".wrap").css("display","none")
    }
})