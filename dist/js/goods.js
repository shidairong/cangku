"use strict";$(function(){var i=cookie.get("uid");$("#item_cover").on("mouseenter","ul li",function(){$(this).attr("class","current").siblings().removeAttr("class"),$("#item_cover .view_bd img").eq($(this).index()).show().siblings().hide(),$("#zoomdiv img").eq($(this).index()).show().siblings().hide()}),$("#item_cover").on("mouseenter",".view_bd",function(){$("#zoompop").show(),$("#zoomdiv").show()}),$("#item_cover").on("mouseleave",".view_bd",function(){$("#zoompop").hide(),$("#zoomdiv").hide()}),$("#item_cover").on("mousemove",".view_bd",function(i){var n=i.clientX-$("#item_cover .view_bd").offset().left-$("#zoompop").outerWidth()/2+window.scrollX,t=i.clientY-$("#item_cover .view_bd").offset().top-$("#zoompop").outerHeight()/2+window.scrollY;n=(n=n<=0?0:n)>=$("#item_cover .view_bd").outerWidth()-$("#zoompop").outerWidth()?$("#item_cover .view_bd").outerWidth()-$("#zoompop").outerWidth():n,t=(t=t<=0?0:t)>=$("#item_cover .view_bd").outerHeight()-$("#zoompop").outerHeight()?$("#item_cover .view_bd").outerHeight()-$("#zoompop").outerHeight():t,$("#zoompop").css({left:n,top:t});var e=n/($("#item_cover .view_bd").outerWidth()-$("#zoompop").outerWidth()),o=t/($("#item_cover .view_bd").outerHeight()-$("#zoompop").outerHeight());$("#zoomdiv img").css({left:($("#zoomdiv").outerWidth()-$("#zoomdiv img").outerWidth())*e,top:($("#zoomdiv").outerHeight()-$("#zoomdiv img").outerHeight())*o})});var n=location.search;console.log(location);var t=decodeURI(n.slice(1));function e(){$.ajax({type:"post",url:"../api/shopcart.php",data:{p:"cart",uid:i},success:function(i){var n=JSON.parse(i);if(n.code){var t=0;n.con.map(function(i){t+=1*i.num,$("#sidebar_cartnum,.cartnum").html(t).css({visibility:"visible",opacity:1,transform:"scale(1)"})})}else $("#sidebar_cartnum,.cartnum").html(0).css({visibility:"visible",opacity:1,transform:"scale(1)"})}})}function o(i){var n=1*i.parent().find("input").val(),t=1*i.parent().parent().parent().prev().find(".gray").html();t<=n?(n=t,i.parent().find(".add").addClass("disabled"),i.parent().find(".minus").removeClass("disabled")):n<=0?(n=0,i.parent().find(".minus").addClass("disabled"),i.parent().find(".add").removeClass("disabled")):i.parent().find(".minus,.add").removeClass("disabled"),i.parent().find("input").val(n)}$.ajax({type:"post",url:"../api/goodslist.php",data:{p:"goodshow",name:t},success:function(i){var n=JSON.parse(i),t='<div class="view_bd">\n            <img style="display:block;" alt="" src="'+n.con[1].url1+'">\n            <img class="" alt="" src="'+n.con[0].url2+'">\n            <img class="" alt="" src="'+n.con[0].url3+'">\n            <img class="" alt="" src="'+n.con[0].url4+'">\n            <div id="zoompop" class="zoompop"></div>\n        </div>\n        <div id="zoomdiv" class="zoomdiv" style="width: 400px; height: 400px; display: none;">\n            <img alt="" style="display:block;" src="'+n.con[0].url1+'">\n            <img alt="" src="'+n.con[0].url2+'">\n            <img alt="" src="'+n.con[0].url3+'">\n            <img alt="" src="'+n.con[0].url4+'">\n        </div>\n        <div class="view_thumbs">\n            <ul class="cle" style="width: 240px;">\n                <li class="current">\n                    <img class="view" alt="" src="'+n.con[0].url1+'">\n                    <i class="iconfont icon-fold arrow"></i></li>\n                <li class="">\n                    <img class="view" alt="" src="'+n.con[0].url2+'">\n                    <i class="iconfont icon-fold arrow"></i></li>\n                <li class="">\n                    <img class="view" alt="" src="'+n.con[0].url3+'">\n                    <i class="iconfont icon-fold arrow"></i></li>\n                <li class="">\n                    <img class="view" alt="" src="'+n.con[0].url4+'">\n                    <i class="iconfont icon-fold arrow"></i></li>\n            </ul>\n        </div>\n\n        <div class="item_favbox">\n\n            <span class="fav_btn">\n                <a href="javascript:;" id="fav_btn"><i class="iconfont icon-xin"></i>&nbsp;收藏商品(<em>26</em>)</a>\n            </span>\n        </div>';$("#item_cover").html(t);var e='<div class="item_brand">\n                                <span>'+n.con[0].brand+"</span>\n                            </div>\n                            <h1>"+n.con[0].name+'</h1>\n                            <div class="desc">'+n.con[0].brief+"</div>";$(".item_title").html(e),$(".brand_logo img").attr("src",n.con[0].logo);var o='<p class="price"> <cite class="gray">批发价：</cite> <span class="nologin">￥<b>'+n.con[0].price+'</b></span></p>\n                            <p class="minimum"> <cite class="gray">起批量：</cite>&nbsp;&nbsp;<em>'+n.con[0].least+"</em> 件 </p>";$(".item_info").html(o);var s=n.con.map(function(i){return'<tr data-gid="'+i.gid+'" class="reserve_tr">\n                            <td>\n                                <div class="spec">\n                                    <p>'+i.speci+'</p>\n                                    <p class="gray">条码：'+i.bar+'</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div class="price">\n                                    <p class="nologin">'+i.volume+'</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div class="unit">\n                                    <p class="gray">'+i.carton+'</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div class="storage">\n                                    <p class="gray">'+i.invon+'</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div class="num can_reserve">\n                                    <div class="skunum"> <span class="num_op minus disabled" title="减少1个数量"><i             class="iconfont                    icon-move"></i></span>\n                                        <input type="text" value="0" data-storage="0"> <span class="num_op add" title="增加1个数            量                 "><i class="iconfont icon-add"></i></span> </div>\n                                </div>\n                            </td>\n                        </tr>'}).join(""),a=$("#sku_table tbody").html();a+=s,$("#sku_table tbody").html(a);var l="<li>\n                                <cite>品牌：</cite>\n                                <em>"+n.con[0].brand+"</em>\n                            </li>\n                            <li>\n                                <cite>包装：</cite>\n                                <em>"+n.con[0].pack+"</em>\n                            </li>\n                            <li>\n                                <cite>单位：</cite>\n                                <em>"+n.con[0].unit+"</em>\n                            </li>\n                            <li>\n                                <cite>保质期：</cite>\n                                <em>"+n.con[0].shelf+"</em>\n                            </li>\n                            <li>\n                                <cite>中文标签：</cite>\n                                <em>"+n.con[0].chinese+"</em>\n                            </li>";$("#part_options ul").html(l)}}),$.ajax({type:"post",url:"../api/goodslist.php",data:{p:"tuijian",num:randomNum(0,58)},success:function(i){var n=JSON.parse(i).con.map(function(i){return'<li>\n                            <p class="img">\n                                <a href="javascript:;" target="_blank">\n                                <img width="150" height="150"\n                                        title="'+i.name+'" alt="'+i.name+'"\n                                        src="'+i.url1+'"\n                                        style="display: inline;">\n                                </a>\n                            </p>\n                            <p class="name">\n                                <a href="javascript:;" target="_blank">'+i.name+'</a>\n                            </p>\n                            <span class="nologin">'+i.price+"</span>\n                        </li>"}).join("");$("#detail_page .md_box ul").html(n)}}),$("#detail_page .md_box ul").on("click","li",function(){location.href=location.origin+location.pathname+"?"+$.trim($(this).find(".name a").html())}),e(),$("#sku_table tbody").on("click",".add",function(){var i=1*$(".minimum em").html(),n=1*$(this).prev().val();n=0==n?i:++n,$(this).prev().val(n),o($(this))}),$("#sku_table tbody").on("click",".minus",function(){var i=1*$(".minimum em").html(),n=1*$(this).next().val();n=n==i?0:--n,$(this).next().val(n),o($(this))}),$("#sku_table tbody").on("blur","input",function(){var i=1*$(".minimum em").html(),n=1*$(this).val();n=0<n&&n<i?i:n,$(this).val(n),o($(this))}),$(".item_info_wrap").on("click",".shop_cart",function(){var c=cookie.get("uid"),r=$.trim($(".topbar_user .red").html()),m=$.trim($(".item_title h1").html()),d=1*$(".nologin b").html(),p=$.trim($(".view_bd img:eq(0)").attr("src")),v=1*$(".minimum em").html();$(".reserve_tr").each(function(i,n){var t=$.trim($(".reserve_tr").eq(i).attr("data-gid")),e=$.trim($(".reserve_tr .spec").eq(i).find("p:eq(0)").html()),o=$.trim($(".reserve_tr .spec").eq(i).find(".gray:eq(0)").html().slice(3)),s=1*$(".reserve_tr .nologin").eq(i).html(),a=1*$(".reserve_tr .storage").eq(i).find("p").html(),l=$.trim($(".reserve_tr .num").eq(i).find("input").val());0!=l&&$.ajax({type:"post",url:"../api/shopcart.php",data:{p:"join",uid:c,idname:r,name:m,price:d,img:p,speci:e,bar:o,volume:s,invon:a,least:v,num:l,gid:t},success:function(i){var n=JSON.parse(i);n.code,console.log(n.message)}})}),e()})});