$(function(){
	//获得焦点
	$("#user");
	//获得焦点的事件
	// document.getElementById("user").onfocus=function(){
	// 	this.style.width='400px';
	// }
	// //失去焦点的事件
	// document.getElementById("user").onblur=function(){
	// 	this.style.width='260px';
	// }
	
	//获得焦点方法
	$("#user").focus(function(){
		//$(this).animate({"width":"400px"},100);
		$(this).css("border","2px solid red");
		//给出内容填写的提示
	    //$(".tips").html('3-10位小写字母+数字，字母开头').css("color","red");
		$(this).next(".tips").html('3-10位小写字母数字组成').css("color","red");
	});
	$("#pwd").focus(function(){
		$(this).css("border","2px solid red");
		$(this).parent('li').children(".tips").html('6-12位字符，中英文字符组成').css("color","red");
	});
	$("#tel").focus(function(){
		$(this).css("border","2px solid red");
		$(this).parent('li').children(".tips").html('请输入手机号码').css("color","red");
	})
	$("#email").focus(function(){
		$(this).css("border","2px solid red");
		$(this).parent('li').children(".tips").html('请输入邮箱地址').css("color","red");
	});
	$("#rel").focus(function(){
		$(this).css("border","2px solid red");
		$(this).parent('li').children(".tips").html('请输入联系人手机号码').css("color","red");
	});
	
	//失去焦点方法
	$("#user").blur(function(){
		$(this).css("width","260px");
		//给出错误提示
		if($(this).val()==""){
			//$(".tips").html('用户名不能为空').css("color","red");
			$(this).parent('li').children(".tips").html('用户名不能为空').css("color","red");
		}
	});
	
	$("#pwd").blur(function(){
		$(this).css("width","260px");
		if($(this).val()==""){
			$(this).parent('li').children(".tips").html('密码不能为空').css("color","red");
		}
	});
	$("#tel").blur(function(){
		$(this).css("width","260px");
		if($(this).val()==""){
			$(this).parent('li').children(".tips").html('手机号码不能为空').css("color","red");
		}
	});
	$("#email").blur(function(){
		$(this).css("width","260px");
		if($(this).val()==""){
			$(this).parent('li').children(".tips").html('邮箱不能为空').css("color","red");
		}
	});
	$("#rel").blur(function(){
		$(this).css("width","260px");
		if($(this).val()==""){
			$(this).parent('li').children(".tips").html('紧急联系人不能为空').css("color","red");
		}
	});
})