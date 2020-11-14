$(function () {
	$(".charge-btns>button").mouseover(function () {
		var index = $(this).index();
		$(".chargeCont").hide();
		$(".chargeCont").eq(index).show();
	});
	$(".charge-btns01>button").mouseover(function () {
		$(this).addClass('btn_bd').siblings("button").removeClass("btn_bd");
		var index = $(this).index();
		$(".chargeCont-right").hide();
		$(".chargeCont-right").eq(index).show();
	});
	
	$('.box1').hide();
	$('.box1-nav').hide();
	$('.box2-nav').hide();
	$('.right-top-nav').hide();
	$('.left-down-nav').hide();
	$('.c01').show();
	$('#down-left-top-header li').mouseover(function(){
		var index=$(this).index();
		$('.container').children('.box1').eq(index).show().siblings().hide();
	});
	$('#box1-header li').mouseover(function(){
		var index=$(this).index();
		$('.container1').children('.box1-nav').eq(index).show().siblings().hide();
	});
	$('#box2-header li').mouseover(function(){
		var index=$(this).index();
		$('.container1').children('.box2-nav').eq(index).show().siblings().hide();
	});
	$('#down-right-top-header li').mouseover(function(){
		var index=$(this).index();
		$('.container2').children('.right-top-nav').eq(index).show().siblings().hide();
		
	});
	$('#down-left-down-header li').mouseover(function(){
		var index=$(this).index();
		$('.container3').children('.left-down-nav').eq(index).show().siblings().hide();
		
	});
	
})

