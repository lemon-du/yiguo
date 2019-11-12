$(function () {
    $(".shopping-cart").mouseover(function () {
        $(".shopping-list").fadeIn()
    })
    $(".shopping-cart").mouseleave(function () {
        $(".shopping-list").fadeOut()
    })
    $(".product_item").mouseover(function () {
        $(this).children(".p-buy").addClass("show").siblings().removeClass("show")
    })
    $(".product_item").mouseleave(function () {
        $(this).children(".p-buy").removeClass("show")
    })
    arr = [];
    arr1 = [];
    var total = 0
    if ((localStorage.list)) {
        text = JSON.parse(localStorage.list)

        text1 = JSON.parse(localStorage.arr)
        if (text.length > 0) {
            for (var i = 0; i < text.length; i++) {
                $(".nogoods").css("display", "none")
                $(".goods ul").css("display", "block")
                $(".goods ul").append(
                    `<li>
                    <div class='l'>
                        <a href="javascript:void(0);">
                            <img src="${text[i].img}" width='42' height='42'>
                        </a>
                    </div>
                    <div class='c'>
                        <a href="javascript:void(0);">${text[i].title}</a>
                    </div>
                    <div class='r'>
                        <b>${text[i].money}</b>*
                        <span>${text[i].num}</span>
                        <a href="javascript:void(0);" class="delete">删除</a>
                    </div>
                </li>`)
            }
            if ($(".goods li").length > 0) {
                totalPrice1 = 0
                for (var i = 0; i < $(".goods ul").children("li").length; i++) {
                    total = parseInt(total) + parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                    var txt = parseFloat($(".goods ul").children("li").eq(i).children(".r").children("b").html().slice(1))
                    var txt1 = parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                    totalPrice1 +=txt * txt1;
                    console.log(typeof(totalPrice1))
                    // totalPrice1+=(txt * txt1).toString().slice((txt * txt1).toString())
                }
                $(".shopping-list .price-total").css("display", "block")
            }
            $(".totalNum").children("b").html(total)
            var textAll = document.getElementsByClassName("totleNum")[0].firstElementChild
            textAll.innerHTML = $(".totalNum b").html()
            var money = document.getElementsByClassName("totlePrice")[0]
            money.innerHTML = "¥" + totalPrice1
            var money1 = document.getElementsByClassName("totalPrice")[0]
            money1.innerHTML = "¥" + totalPrice1

            //点击删除购物车中的商品
            $(".delete").click(function () {
                list = JSON.parse(localStorage.arr)
                text1=JSON.parse(localStorage.arr)
                index1 = text1.indexOf($(this).parent().parent().children(".c").children().html())
                text1.splice(index1, 1)
                arr.splice(index1, 1)
                text.splice(index1, 1)
                localStorage.arr = JSON.stringify(text1);
                text1 = JSON.parse(localStorage.arr)
                localStorage.list = JSON.stringify(text);
                text = JSON.parse(localStorage.list)
                $(".goods ul").children($(this).parent().parent())[index1].remove()
                var total2 = 0;
                var totalPricel2 = 0;
                for (var i = 0; i < $(".goods ul").children("li").length; i++) {
                    total2 = parseInt(total2) + parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                    var txt4 = parseFloat($(".goods ul").children("li").eq(i).children(".r").children("b").html().slice(1))
                    var txt5 = parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                    totalPricel2 += ptxt4 * txt5
                }
                $(".totalNum").children("b").html(total2)
                var text2 = document.getElementsByClassName("totleNum")[0].firstElementChild
                text2.innerHTML = $(".totalNum b").html()
                var money4 = document.getElementsByClassName("totlePrice")[0]
                money4.innerHTML = "¥" + totalPricel2
                var money5 = document.getElementsByClassName("totalPrice")[0]
                money5.innerHTML = "¥" + totalPricel2
                if ($(".goods ul").children("li").length == 0) {
                    $(".nogoods").css("display", "block")
                    $(".price-total").css("display", "none")
                }
            })
        }
    }
    //点击添加购物车
    $(".btn-buys").click( function () {
        if(localStorage.list){
            localStorage.list=JSON.stringify(text);
            arr=JSON.parse(localStorage.list)
        }
        var total = 0
        $(".nogoods").css("display", "none")
        $(".goods ul").css("display", "block")
        var connect = $(this).parent().parent()
        test = {
            img: connect.children('.p_img').children('a').children('img')[0].src,
            title: connect.children('.p_info').children('.p_name').children('a').html(),
            num: 1,
            money: connect.children(".p_info").children(".p_price").children(".price").children("strong").html()
        }
        if (arr.length == 0) {
            arr.push(test)
            list1 = arr[0].title
            arr1.push(list1)
            localStorage.arr = JSON.stringify(arr1);
            arr1 = JSON.parse(localStorage.arr)


            localStorage.list = JSON.stringify(arr)
            text = JSON.parse(localStorage.list)
            for (var i = 0; i < text.length; i++) {
                $(".goods ul").append(
                    `<li>
                        <div class='l'>
                            <a href="javascript:void(0);">
                                <img src="${text[i].img}" width='42' height='42'>
                            </a>
                        </div>
                        <div class='c'>
                            <a href="javascript:void(0);">${text[i].title}</a>
                        </div>
                        <div class='r'>
                            <b>${text[i].money}</b>*
                            <span>${text[i].num}</span>
                            <a href="javascript:void(0);" class="delete">删除</a>
                        </div>
                    </li>`)
            }
        } else {
            if(localStorage.list){
                arr1=JSON.parse(localStorage.arr)
            }
            if (arr1.indexOf(test.title) != -1) {
                text1=JSON.parse(localStorage.arr)
                localStorage.arr=JSON.stringify(text1)
                text1=JSON.parse(localStorage.arr)
                arr[arr1.indexOf(test.title)].num += 1
                localStorage.list = JSON.stringify(arr)
                text = JSON.parse(localStorage.list)
                $(".goods ul").children("li").eq(arr1.indexOf(test.title)).children(".r").children("span").html(text[arr1.indexOf(test.title)].num)
            } else {
                $(".goods ul").empty()
                text = JSON.parse(localStorage.list)
                localStorage.list = JSON.stringify(text)
                localStorage.arr = JSON.stringify(arr1);
                text1 = JSON.parse(localStorage.arr)
                arr.push(test)
                localStorage.list = JSON.stringify(arr)
                text = JSON.parse(localStorage.list)
                // console.log(text)
                $(".goods ul").empty()
                for (var i = 0; i < text.length; i++) {
                    $(".goods ul").append(
                        `<li>
                            <div class='l'>
                                <a href="javascript:void(0);">
                                    <img src="${text[i].img}" width='42' height='42'>
                                </a>
                            </div>
                            <div class='c'>
                                <a href="javascript:void(0);">${text[i].title}</a>
                            </div>
                            <div class='r'>
                                <b>${text[i].money}</b>*
                                <span>${text[i].num}</span>
                                <a href="javascript:void(0);" class="delete">删除</a>
                            </div>
                        </li>`)
                }
                for (var i = 0; i < arr.length; i++) {
                    title1 = arr[i].title
                }
                arr1.push(title1)
                localStorage.arr = JSON.stringify(arr1);
            }
        }
        // 购物车里面的数字发生改变
        if ($(".goods li").length > 0) {
            totalPrice1 = 0
            for (var i = 0; i < $(".goods ul").children("li").length; i++) {
                total = parseInt(total) + parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                var txt = parseFloat($(".goods ul").children("li").eq(i).children(".r").children("b").html().slice(1))
                var txt1 = parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                totalPrice1 += txt * txt1
            }
            $(".shopping-list .price-total").css("display", "block")
        }
        $(".totalNum").children("b").html(total)
        var textAll = document.getElementsByClassName("totleNum")[0].firstElementChild
        textAll.innerHTML = $(".totalNum b").html()
        var money = document.getElementsByClassName("totlePrice")[0]
        money.innerHTML = "¥" + totalPrice1
        var money1 = document.getElementsByClassName("totalPrice")[0]
        money1.innerHTML = "¥" + totalPrice1

        //点击删除购物车中的商品
        $(".delete").click(function () {
            index1 = arr1.indexOf($(this).parent().parent().children(".c").children().html())
            arr1.splice(index1, 1)
            arr.splice(index1, 1)
            text.splice(index1, 1)
            localStorage.arr = JSON.stringify(arr1);
            text1 = JSON.parse(localStorage.arr)
            localStorage.list = JSON.stringify(text);
            text = JSON.parse(localStorage.list)
            $(".goods ul").children($(this).parent().parent())[index1].remove()

            var total2 = 0;
            var totalPricel2 = 0;
            for (var i = 0; i < $(".goods ul").children("li").length; i++) {
                total2 = parseInt(total2) + parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                var txt4 = parseFloat($(".goods ul").children("li").eq(i).children(".r").children("b").html().slice(1))
                var txt5 = parseInt($(".goods ul").children("li").eq(i).children(".r").children("span").html())
                totalPricel2 +=txt4 * txt5
            }
            $(".totalNum").children("b").html(total2)
            var text2 = document.getElementsByClassName("totleNum")[0].firstElementChild
            text2.innerHTML = $(".totalNum b").html()
            var money4 = document.getElementsByClassName("totlePrice")[0]
            money4.innerHTML = "¥" + totalPricel2
            var money5 = document.getElementsByClassName("totalPrice")[0]
            money5.innerHTML = "¥" + totalPricel2
            if ($(".goods ul").children("li").length == 0) {
                $(".nogoods").css("display", "block")
                $(".price-total").css("display", "none")
            }
        })
    })
})