// JavaScript Document


$(function () {

  $(window).scroll(function(){
    if($(this).scrollTop() > $(window).height() - 500){
      $(".header-inner img").css("opacity",".5");
    }else{
      $(".header-inner img").css("opacity","1");
    };
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
    var speed = 1000;
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

