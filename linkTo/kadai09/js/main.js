// JavaScript Document

$(function () {
	$('#example').vegas({
		slides: [{
			src: '../image/top_slider.jpg'
		}, {
			src: '../image/top_slider2.png'
		}, {
			src: '../image/top_slider3.png'
		}, {
			src: '../image/top_slider4.png'
		},],
		delay: 10000,
		timer: true,
		loop: true,
		autoplay: true,
		transition: 'fade',
	});
});
/*--slider_auto-*/



$(function(){
  $('a.fadeout').on("click",function() {
    var url = $(this).attr('href');
    if (url != '') {
      $('body').fadeOut(500);
      setTimeout(function(){
        location.href = url;
      }, 500);
    }
    return false;
  });
});

$(function(){
$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
	responsive: [{
               breakpoint: 1400,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
               }
          }]
});
});