"use strict";$(function(){var r=cookie.get("uid");function n(e,o,n,a){$("#reg_form .infotip").eq(e).show(),$("#reg_form .infotip cite").eq(e).attr("class",o),$("#reg_form .infotip i").eq(e).attr("class","iconfont "+n),$("#reg_form .infotip span").eq(e).html(a)}$("#tanchuang .ui-dialog-autofocus").click(function(){$("#tanchuang").hide()});var t={telok:!0,psw1ok:!0,psw2ok:!0,nameok:!0,mailok:!0,verifyok:!0};$("#reg_form .text").eq(0).blur(function(){var e=$.trim($("#reg_form .text").eq(0).val());e?checkReg.tel(e)?$.ajax({type:"post",url:"../api/checkname.php",data:"p=regtel&tel="+e,success:function(e){var o=JSON.parse(e);o.code?(n(0,"green","icon-roundcheckfill",o.message),t.telok=!1):(n(0,"red","icon-roundclosefill",o.message),t.telok=!0)}}):(n(0,"red","icon-roundclosefill","手机号不正确"),t.telok=!0):(n(0,"red","icon-roundclosefill","手机号不能为空"),t.telok=!0)}),$("#reg_form .text").eq(1).blur(function(){var e=$.trim($("#reg_form .text").eq(1).val());e?checkReg.psweasy(e)?(n(1,"green","icon-roundcheckfill","密码可用"),t.psw1ok=!1):(n(1,"red","icon-roundclosefill","密码不可用"),t.psw1ok=!0):(n(1,"red","icon-roundclosefill","密码不能为空"),t.psw1ok=!0)}),$("#reg_form .text").eq(2).blur(function(){var e=$.trim($("#reg_form .text").eq(1).val()),o=$.trim($("#reg_form .text").eq(2).val());e&&o?e===o?(n(2,"green","icon-roundcheckfill","密码一致"),t.psw2ok=!1):(n(2,"red","icon-roundclosefill","密码不一致"),t.psw2ok=!0):(n(2,"red","icon-roundclosefill","密码不能为空"),t.psw2ok=!0)}),$("#reg_form .text").eq(3).blur(function(){var e=$.trim($("#reg_form .text").eq(3).val());e?checkReg.chinese(e)?$.ajax({type:"post",url:"../api/checkname.php",data:"p=regname&name="+e,success:function(e){var o=JSON.parse(e);o.code?(n(3,"green","icon-roundcheckfill",o.message),t.nameok=!1):(n(3,"red","icon-roundclosefill",o.message),t.nameok=!0)}}):(n(3,"red","icon-roundclosefill","昵称为中文"),t.nameok=!0):(n(3,"red","icon-roundclosefill","昵称不能为空"),t.nameok=!0)}),$("#reg_form .text").eq(4).blur(function(){var e=$.trim($("#reg_form .text").eq(4).val());e?checkReg.email(e)?$.ajax({type:"post",url:"../api/checkname.php",data:"p=regmail&mail="+e,success:function(e){var o=JSON.parse(e);o.code?(n(4,"green","icon-roundcheckfill",o.message),t.mailok=!1):(n(4,"red","icon-roundclosefill",o.message),t.mailok=!0)}}):(n(4,"red","icon-roundclosefill","E-mail不正确"),t.mailok=!0):(n(4,"red","icon-roundclosefill","E-mail不能为空"),t.mailok=!0)}),$("#reg_form .send_code").click(function(){$("#reg_form .send_code").html(randomCode()),$("#reg_form .text").eq(5).blur(function(){$.trim($("#reg_form .text").eq(5).val().toLowerCase())===$.trim($("#reg_form .send_code").html().toLowerCase())?(n(5,"green","icon-roundcheckfill","验证码正确"),t.verifyok=!1):(n(5,"red","icon-roundclosefill","验证码不正确"),t.verifyok=!0)})}),$("#reg_form a").eq(3).click(function(){if(r)$("#tanchuang").show(),$("#tanchuang span").html("你已登录，无法注册");else if(t.telok)$("#tanchuang").show(),$("#tanchuang span").html("请输入正确的手机号码");else if(t.psw1ok)$("#tanchuang").show(),$("#tanchuang span").html("请输入至少6位密码，以字母开头");else if(t.psw2ok)$("#tanchuang").show(),$("#tanchuang span").html("两次密码输入不一致");else if(t.nameok)$("#tanchuang").show(),$("#tanchuang span").html("昵称不可用");else if(t.mailok)$("#tanchuang").show(),$("#tanchuang span").html("E-mail不可用");else if(t.verifyok)$("#tanchuang").show(),$("#tanchuang span").html("验证码不正确");else if($("#reg_form .web_law input").prop("checked")){var e=$.trim($("#reg_form .text").eq(0).val()),o=$.trim($("#reg_form .text").eq(1).val()),n=$.trim($("#reg_form .text").eq(3).val()),a=$.trim($("#reg_form .text").eq(4).val());$.ajax({type:"post",url:"../api/checkname.php",data:{p:"reg",tel:e,psw:o,name:n,mail:a},success:function(e){var o=JSON.parse(e);o.code?($("#tanchuang").show(),$("#tanchuang span").html(o.message),$("#tanchuang .iconfont").attr("class","iconfont"),location.href="http://localhost:5454/xiangmu/src/html/login.html?tel"):($("#tanchuang").show(),$("#tanchuang span").html(o.message))}})}else $("#tanchuang").show(),$("#tanchuang span").html("请阅读并接受相关协议")})});