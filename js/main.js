// JavaScript Document
$(function () {

  $(".header-inner nav").on("click",function(){
    $(this).toggleClass("clicked");
    $("body").toggleClass("hidden");
    $(".humberger-border").toggleClass("active");
    $(".menu-box").toggleClass("menu-box-visible");
  });
  
  $(window).scroll(function(){
    if($(this).scrollTop() > $(window).height() - 150){
      $(".header-inner img").css("opacity",".5");
      $(".section-wrap svg").fadeOut(400);
    }else{
      $(".header-inner img").css("opacity","1");
      $(".section-wrap svg").stop().fadeIn(200);
    };

    var scrolled = $(window).scrollTop();
    $(".first-view-bg svg:nth-child(1)").css({
      top: 50 - scrolled * 0 + "%",
      left: 50 + scrolled * 0.15 + "%"
    });
    $(".first-view-bg svg:nth-child(2)").css({
      top: 50 - scrolled * 0 + "%",
      left: 50 - scrolled * 0.15 + "%"
    });
  });

  $(".main-img a, .main-img-tate a").on("click",function(){
    $("body").append('<div id="bg">');
    $("body").append('<div id="photo">');
    $("#photo").html("<img>");
    $("#photo").hide();
    $("#photo img").attr("src",$(this).attr("href"));
    $("#bg").fadeIn();
    $("#photo").fadeIn();
    $("#bg").on("click",function(){
      $(this).fadeOut(function(){
        $(this).remove();
      });
      $("#photo").fadeOut(function(){
        $(this).remove();
      });
    });
    return false;
  });

  $("button").on("click",function(){
    var target = $(this).attr("value");
    $(".flex-box .gallery-content").each(function(){
      $(this).animate({"opacity":0},300,function(){
        $(this).hide();
        if($(this).hasClass(target) || target == "all"){
          $(this).show();
          $(this).animate({"opacity":1},200);
        }
      });
    });
  });

  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // $(".gallery-content").hover(function(){
  //   $(".gallery-content").not(this).css({filter:"blur(2px) grayscale(50%)"});
  // },function(){
  //   $(".gallery-content").css("filter","blur(0px)");
  // });

});