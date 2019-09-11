// JavaScript Document


$(function(){
   $('a[href^="#"]').click(function() {
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
/*スムーススクロール*/



$(function(){
  $('a.fadeout').on("click",function() {
    var url = $(this).attr('href');
    if (url != '') {
      $('body').fadeOut(300);
      setTimeout(function(){
        location.href = url;
      }, 300);
    }
    return false;
  });
});
