$(document).ready(function() {
  $("#icon1").click(function() {
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.formula_hidden-content1').addClass('hidden');
      $('.triangle-up').addClass('hidden');
      // Then remove the active class
      $(this).removeClass('active');
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.formula_hidden-content1').siblings().addClass('hidden');
      $('.triangle-up').removeClass('hidden');
      // then show our formula
      $('.formula_hidden-content1').removeClass('hidden');
}
  });


  $("#icon2").click(function() {
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.formula_hidden-content2').addClass('hidden');
      $('.triangle-up2').addClass('hidden');
      // Then remove the active class
      $(this).removeClass('active');
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.formula_hidden-content2').siblings().addClass('hidden');
      $('.triangle-up2').removeClass('hidden')
      // then show our formula
      $('.formula_hidden-content2').removeClass('hidden');
    }
  });

 
  $("#icon3").click(function() {
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.formula_hidden-content3').addClass('hidden');
      $('.triangle-up3').addClass('hidden');
      // Then remove the active class
      $(this).removeClass('active');
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.formula_hidden-content3').siblings().addClass('hidden');
      $('.triangle-up3').removeClass('hidden')
      // then show our formula
      $('.formula_hidden-content3').removeClass('hidden');
    }
  });


   $("#icon4").click(function() {
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.formula_hidden-content4').addClass('hidden');
      $('.triangle-up4').addClass('hidden');
      // Then remove the active class
      $(this).removeClass('active');
    }
    else{
      // otherwise add the active class
      $(this).addClass('active')
      // Hide any open siblings
      $('.formula_hidden-content4').siblings().addClass('hidden');
      $('.triangle-up4').removeClass('hidden');
      // then show our formula
      $('.formula_hidden-content4').removeClass('hidden');
    }
   });

  //$('.cls-3').click(function() {
    //alert('YAY!');
  //}); 

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
    // First check to see if our current selection is active
    if ( $(this).hasClass('active') ){
      // If it is add our hidden Class
      $('.comparison_ing2').addClass('hidden');
      // Then remove the active class
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