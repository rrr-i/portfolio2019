// JavaScript Document
/*
$('.slider_wrap img:gt(0)').hide();
//タイマー
setInterval(function() {
     //フェードインとアウトを繰り返す
    $('.slider_wrap :first-child').fadeOut().next('img').fadeIn().end().appendTo('.slider_wrap');
}, 4500);
*/

(function(){
	var slideWidth = $('.slide').outerWidth();	// .slideの幅を取得して代入
	var slideNum = $('.slide').length;	// .slideの数を取得して代入
    var slideSetWidth = slideWidth * slideNum;	// .slideの幅×数で求めた値を代入
    
	$('.slideset').css('width', slideSetWidth);	// .slideSetのスタイルシートにwidth: slideSetWidthを指定
 
	var slideCurrent = 0;	// 現在地を示す変数
	var sliding = function(){
		$('.slideset').stop().animate({
			left: slideCurrent * -slideWidth //現在地 * -leftへslidewidth
		});
    }
    
	$('.slider-first').click(function(){
		slideCurrent = 0;
        sliding();
	});
	$('.slider-second').click(function(){
		slideCurrent = 1;
		sliding();
    });
    $('.slider-third').click(function(){
		slideCurrent = 2;
		sliding();
    });

}());