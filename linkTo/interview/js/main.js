// JavaScript Document

$(function(){

  $(window).scroll(function(){
    $(".secondview h1,.secondview section,.soloexhibition").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight + 500){
        $(this).addClass("fadein");
      };
    });
  });

  $('a[href^="#"]').on("click",function(){
    var speed = 1500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  

});