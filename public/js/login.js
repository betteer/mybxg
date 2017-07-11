define(["jquery", "cookie"], function ($) {
     console.log(1)
    //实现登录功能
    $("#btn").click(function () {
        console.log(1)
        $.ajax({
            type: "post",
            url: "/api/login",
            data: $("form").serialize(),
            dataType:"json",
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href = "/index/index";
                }
            }
        })
        return false;
    })

});