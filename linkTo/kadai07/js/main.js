// JavaScript Document

$(function () {
	$(window).scroll(function () {
		$('#wrapper').each(function () {
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 800) {
					$("#header,#top").addClass('scrollin');
					if (scroll > elemPos - windowHeight + 1400) {
						$("#instraction").addClass('scrollin');
						if (scroll > elemPos - windowHeight + 1800) {
							$("#photo_content").addClass('scrollin');
						
					}
				}
			}
		});
	});
});
