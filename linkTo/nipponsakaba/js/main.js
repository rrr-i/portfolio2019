// JavaScript Document
$(function(){

  $(".humberger").on("click",function(){
    $(".humberger-border").toggleClass("active");
  });
  $("a").click(function(){
    return false;
  });

});