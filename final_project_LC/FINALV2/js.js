$(document).ready(function() {

  $('.icon').click(function() {
    var currentIcon = $(this)[0].id

    $('.formula').removeClass('active')
    $(this).addClass('active')

    $('.triangle').addClass('hidden')
    $(this).children('.triangle').removeClass('hidden')
    
    $('.formulas').children().addClass('hidden')
    $('.formula' + "." + currentIcon).removeClass('hidden') 

  })

if($(window).width() > 480){
   $('.icon1').click(function() {
   $('.icon3').style("margin-left") = "10px";
})
 };

$(".x1").click(function() {
      $(this).parent().hide();
      $('.triangle-up').addClass('hidden');
      event.preventDefault();
}
  );

$(".x2").click(function() {
      $(this).parent().hide();
      $('.triangle-up2').addClass('hidden');
      event.preventDefault();
}
  );

$(".x3").click(function() {
      $(this).parent().hide();
      $('.triangle-up3').addClass('hidden');
      event.preventDefault();
}
  );

$(".x4").click(function() {
      $(this).parent().hide();
      $('.triangle-up4').addClass('hidden');
      event.preventDefault();
}
  );

    $(".cls-3").click(function() {
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.comparison_ing3').addClass('hidden');
      // Then remove the active class
      $(this).removeClass('active');
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.comparison_ing3').siblings().addClass('hidden');
      // then show our formula
      $('.comparison_ing3').removeClass('hidden');
}
  });

$(".cls-4").click(function() {
    if ( $(this).hasClass('active') ){
      $('.comparison_ing2').addClass('hidden');
      $(this).removeClass('active');
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.comparison_ing2').siblings().addClass('hidden');
      // then show our formula
      $('.comparison_ing2').removeClass('hidden');
}
  });

$(".cls-5").click(function() {
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.comparison_ing1').addClass('hidden');
      // Then remove the active class
      $(this).removeClass('active');
      
      
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.comparison_ing1').siblings().addClass('hidden');
      // then show our formula
      $('.comparison_ing1').removeClass('hidden');
}
  });

});
