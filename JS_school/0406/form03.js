$(function(){
	var regUser=/^[a-z][a-z0-9]{2,12}$/;
	var regMobile=/^1[3|4|5|7|8|9]\d{9}$/;
	var regPwd=/^[a-zA-Z0-9]{6,12}$/;
	var regEmail=/^[a-zA-Z]|[0-9]\w+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	var regRel=/^1[3|4|5|7|8|9]\d{9}$/;
	
	//1.非空验证
	$("input:required").each(function(){
		$(this).blur(function(){
			var $this=$(this);
			var str=$(this).val();
			
			//1：验证手机号：11位.第一位永远是1
			if($this.is('#tel')){
				if($this.val()==""){
					$this.next("span.tips").html("手机号不能为空").removeClass("red");
				}else if(!regMobile.test(str)){
					$(this).next("span.tips").removeClass("red").html("请输入正确的手机号码");
				}
				else{
					$this.next("span.tips").addClass("red").html("手机号码正确");
				}
			}
			
			//2:验证用户名：不能为空，3-10位小写字母+数字，字母开头
			if($this.is("#user")){
				if($this.val()==""){
					$this.next("span.tips").html("用户名不能为空").removeClass("red");
				}else if(!regUser.test(str)){
					$this.next("span.tips").html("请输入正确的用户名").removeClass("red");
				}else{
					$this.next("span.tips").addClass("red").html("当前用户名正确");
				}
			}
			
			//3:验证密码：6-12位字符，中英文字符组成
			if($this.is("#pwd")){
				if($this.val()==""){
					$this.next("span.tips").html("密码不能为空").removeClass("red");
				}else if(!regPwd.test(str)){
					$this.next("span.tips").html("请输入正确的密码").removeClass("red");
				}else{
					$this.next("span.tips").addClass("red").html("当前密码正确");
				}
			}
			
			//4：验证紧急联系人
			if($this.is('#rel')){
				if($this.val()==""){
					$this.next("span.tips").html("紧急联系人不能为空").removeClass("red");
				}else if(!regRel.test(str)){
					$(this).next("span.tips").removeClass("red").html("请输入正确的手机号码");
				}
				else{
					$this.next("span.tips").addClass("red").html("手机号码正确");
				}
			}
			
			//5:验证邮箱
			if($this.is("#email")){
				if($this.val()==""){
					$this.next("span.tips").html("邮箱不能为空").removeClass("red");
				}else if(!regEmail.test(str)){
					$this.next("span.tips").html("请输入正确的邮箱").removeClass("red");
				}else{
					$this.next("span.tips").addClass("red").html("当前邮箱正确");
				}
			}
		});
	})
})