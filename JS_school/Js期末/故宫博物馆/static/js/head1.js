$(function(){
    $('.child').hide();
    $('.nav2 ul .nav-li').hover(function(){//鼠标移入
	   //获取当前点击的li的下标位置
        var index=$(this).index();
        
        //让h-nav-x部分 .box1（第n个）显示,其他box1隐藏
        $('.nav-child').children('.child').eq(index).show('slow').siblings().hide();
        
    });
	$('.head').mouseleave(function(){
		$('.child').hide();
	});
});