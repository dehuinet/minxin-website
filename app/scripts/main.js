$(function() {
	//初始化弹窗
	$('.btn-popup').magnificPopup({
		type: 'inline',
		closeBtnInside: true
	});

	//初始化幻灯片
	$('.slide-box').unslider({
		delay: 10000
	});
});