$(function () {
    $("#sub").click(function () {
        // 1，非空验证+错误提示
        var user = $("#user").val();
        if (user == "") {
            //alert("用户名不能为空");
            //$("#user").next("span").html('用户名不能为空'); 
            $("#user").next("span").addClass('show'); 
        }

        // 2，长度验证
        var pwd = $('#pwd').val()
        if (pwd.length < 6) {
            alert("密码必须大于或等于6个字符");
            return false;
        }

        //确认密码
        var pwdAgain = $('#pwdAgain').val()
        if (pwdAgain !== pwd) {
            alert("密码不一致，请确认密码");
            return false;
        }

        //3，邮箱验证
        var mail = $("#email").val();
        //indexOf()：指定字符在字符串中首次出现的位置，没找到返回-1
        if (mail.indexOf("@") == -1) {
            alert("Email格式不正确，必须包含@");
            return false;
        }

        //4，数字验证
        // var rel = $("#rel").val(); 
        // for (var i = 0; i < rel.length; i++) {
        //     //substring(start,end)选取字符
        //     var str = rel.substring(i, i + 1);
        //     //isNaN检查其参数是否是 非数字值？
        //     //如果参数值为NaN/字符串/对象/undefined等非数字值则返回 true, 
        //     //如果参数值为数字，返回 false。  
        //     if (isNaN(str) == false) {
        //         alert("紧急联系人不能有数字");
        //         return false;
        //     }
        // } 
    })
})