"use strict";$(function(){$("#header .logo").click(function(){location.href=location.origin+location.pathname});var t=null,n=0;function a(t){i(n="next"==t?++n>$("#index-slide ul li").size()-1?0:n:--n<0?$$("#index-slide ul li").size()-1:n)}function i(t){$("#index-slide ul li").eq(t).stop().animate({opacity:1,zIndex:4},300).siblings().stop().animate({opacity:0,zIndex:0},300),$("#index-slide .triggers a").eq(t).attr("class","current").siblings().attr("class","")}t=setInterval(function(){a("next")},2e3),$("#index-slide .triggers a").click(function(){$(this).attr("class","current").siblings().attr("class",""),i(n=$(this).index())}),$("#slide_next").click(function(){a("next")}),$("#slide_prev").click(function(){a("prev")}),$("#index-slide").hover(function(){clearInterval(t),$("#slide_prev,#slide_next").css("display","block")},function(){t=setInterval(function(){a("next")},2e3),$("#slide_prev,#slide_next").css("display","none")}),$("#brand_tab a").mouseenter(function(){$(this).attr("class","current").siblings().attr("class",""),$("#brand_list ul").eq($(this).index()).show().siblings().hide()});var e=0;$("#hot_prve").click(function(){e=0<(e+=1150)?-2300:e,console.log(),$("#hot_items>.itemlist>.cle").stop().animate({left:e},300)}),$("#hot_next").click(function(){e=(e-=1150)<-2300?0:e,$("#hot_items>.itemlist>.cle").stop().animate({left:e},300)}),$("#main_nav").hover(function(){$("#main_nav").addClass("class","main_cate_hover")},function(){$("#main_nav").removeClass("class","main_cate_hover"),$("#sub_cate .sub_view").hide(),$("#sub_cate").stop().animate({opacity:0,left:100},200),$("#main_cate li").attr("class","")}),$("#main_cate li").mouseenter(function(){$(this).attr("class","current").siblings().attr("class",""),$("#sub_cate").stop().animate({opacity:1,left:220},200),$("#sub_cate .sub_view").eq($(this).index()).show().siblings().hide()}),$("#g_sidebar li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")}),$("#g_sidebar li").eq(2).click(function(){$("html").animate({scrollTop:0,scrollLeft:0},500)});var l=cookie.get("uid");l&&($.ajax({type:"post",url:"api/checkname.php",data:"p=logging&uid="+l,success:function(t){JSON.parse(t).str.map(function(t){$("#top_bar .bar_fl .red").html(t.name).attr("data-uid",t.uid)})}}),$("#top_bar .bar_fl a:eq(1)").html("退出账号"),$(".right_part .cle:eq(0)").hide().next().show()),$("#top_bar .bar_fl .red").click(function(){"请登录"==$.trim($("#top_bar .bar_fl .red").html())&&(location.href="html/login.html")}),$(".right_part .cle:eq(0)").click(function(){location.href="html/login.html"}),$("#top_bar .bar_fl a:eq(1)").on("click",function(t){console.log($("#top_bar .bar_fl .red").html(),$.trim($("#top_bar .bar_fl a:eq(1)"))),"退出账号"==t.target.innerHTML?(cookie.set("uid","",{expires:-1,path:"/"}),location.href=location.origin+location.pathname):"免费注册"==t.target.innerHTML&&(location.href="html/reg.html")}),$(".right_part .cle:eq(1)").click(function(){location.href="html/reg.html"}),$(".icon-cart").parent().click(function(){getCookie("uid")?location.href="html/cart.html":($("#tanchuang").show(),$("#tanchuang span").html("请先登录"),$(".ui-dialog-autofocus").html("登录").click(function(){location.href="html/login.html"}))}),$.ajax({type:"post",url:"api/goodslist.php",data:{p:"floor",num1:0,num2:15},success:function(t){var n=JSON.parse(t);if(n.code){var a=n.con.map(function(t){return'<li>\n                                <div class="pic">\n                                    <a href="javascript:;" target="_blank">\n                                        <img src="'+t.index+'"            data-lazyload="'+t.index+'"        alt="'+t.name+'">\n                                    </a>\n                                </div>\n                                <p class="name"><a href="javascript:;" target="_blank">\n                                '+t.name+'\n                                    </a></p>\n                                <p class="price">\n                                    <span class="nologin">￥'+t.price+'</span>\n                                    <span class="sale">已售：'+t.volume+'件</span>\n                                </p>\n                                <p class="brand">品牌：'+t.brand+"</p>\n\n                            </li>"}).join("");$("#hot_items ul:eq(0)").html(a)}}});var s=16,c=0;$(".floor_box ul.cle").size();for(var o=0;o<$(".floor_box ul.cle").size();o++)$.ajax({type:"post",url:"api/goodslist.php",async:!1,data:{p:"floor",num1:s,num2:8},success:function(t){var n=JSON.parse(t).con.map(function(t){return'<li>\n                                <div class="pic">\n                                    <a href="javascript:;" target="_blank">\n                                        <img src="'+t.index+'" data-lazyload="'+t.index+'" alt="'+t.name+'">\n                                    </a>\n                                </div>\n                                <div class="info">\n                                    <p class="name">\n                                        <a href="javascript:;" target="_blank">\n                                        '+t.name+'\n                                        </a>\n                                    </p>\n                                    <p class="price">\n                                        <span class="nologin">￥'+t.price+'</span>\n                                    </p>\n                                    <p class="sale">已售：'+t.volume+'件</p>\n                                    <p class="minnum">起批量&gt;'+t.least+'件</p>\n                                    <p class="label">\n                                    </p>\n                                </div>\n                            </li>'}).join("");$(".floor_box ul.cle").eq(c).html(n),s+=8,c++}});$(".main_nav_link").click(function(){location.href="html/list.html"}),$("#main_cate,#sub_cate dl").on("click","a",function(t){location.href="html/list.html?data="+t.target.innerHTML}),$("#websearch button").click(function(){val=$.trim($("#websearch input:eq(0)").val()),val?location.href="html/list.html?data="+val:location.href="html/list.html"}),$("#hot_items ul:eq(0),.floor_box ul.cle").on("click","li",function(){location.href="html/goods.html?"+$.trim($(this).find(".name a").html())}),$.ajax({type:"post",url:"api/shopcart.php",data:{p:"cart",uid:l},success:function(t){var n=JSON.parse(t);if(n.code){var a=0;n.con.map(function(t){a+=1*t.num,console.log(t.num)})}else $("#sidebar_cartnum,.cartnum").html(a).css({visibility:"visible",opacity:1,transform:"scale(1)"})}})});