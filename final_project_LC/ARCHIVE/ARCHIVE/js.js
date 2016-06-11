$(document).ready(function(){
  $("#icon1").click(function(){
        $(".hidden1").toggle();
        $(".triangle-up1").toggle();
        document.getElementById('.hidden2 .triangle-up2 .hidden3 .triangle-up3 .hidden4 .triangle-up4').css("display","none");
    });

$("#icon2").click(function(){
      $(".hidden2").toggle();
      $(".triangle-up2").toggle();
        document.getElementById('hidden1 .triangle-up1 .hidden3 .triangle-up3 .hidden4 .triangle-up4').css("display","none");
  });

$("#icon3").click(function(){
      $(".hidden3").toggle();
      $(".triangle-up3").toggle();
        document.getElementById('.hidden1 .triangle-up1 .hidden2 .triangle-up2 .hidden4 .triangle-up4').css("display","none");
  });

$("#icon4").click(function(){
      $(".hidden4").toggle();
      $(".triangle-up4").toggle();
        document.getElementById('.hidden1 .triangle-up1 .hidden2 .triangle-up2 .hidden3 .triangle-up3').css("display","none");
  });

$('.cls-3').click(function(){ 
  alert('YAY!'); 
  });

});