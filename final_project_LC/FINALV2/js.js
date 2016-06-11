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

// if($(window).width() > 480){
//    $('.icon1').click(function() {
//    $('.icon3').style("margin-top") = "10px";
// })
//  };

$(".x1").click(function() {
     // $(this).parent().hide();
      $('.triangle-up').addClass('hidden');
      $('.formulas').children().addClass('hidden');
      event.preventDefault();
}
  );

$(".x2").click(function() {
      // $(this).parent().hide();
      $('.triangle-up2').addClass('hidden');
      $('.formulas').children().addClass('hidden');

      event.preventDefault();
}
  );

$(".x3").click(function() {
      // $(this).parent().hide();
      $('.triangle-up3').addClass('hidden');
      $('.formulas').children().addClass('hidden');

      event.preventDefault();
}
  );

$(".x4").click(function() {
      // $(this).parent().hide();
      $('.triangle-up4').addClass('hidden');
      $('.formulas').children().addClass('hidden');
      event.preventDefault();
}
  );


$(".cls-3").click(function() {
      $(this).hasClass('active');
      $('.compare').addClass('hidden');
      $('.comparison_ing3').removeClass('hidden');
});

$(".cls-4").click(function() {
      $(this).hasClass('active');
      $('.comparison_ing2').removeClass('hidden');
});


$(".cls-5").click(function() {
      $(this).hasClass('active');
      $('.comparison_ing1').removeClass('hidden');
});

//     $(".cls-3").click(function() {
//     if ( $(this).hasClass('active') ){
//       $('.comparison_ing3').addClass('hidden');
//       $(this).removeClass('active');
//     }
//     else{
//       $(this).addClass('active')
//       $('.compare').addClass('hidden');
//       $('.comparison_ing3').removeClass('hidden');
// }
//   });

// $(".cls-4").click(function() {
//     if ( $(this).hasClass('active') ){
//       $('.comparison_ing2').addClass('hidden');
//       $(this).removeClass('active');
//     }
//     else{
//       $(this).addClass('active')
//       $('.compare').addClass('hidden');
//       $('.comparison_ing2').removeClass('hidden');
// }
//   });

// $(".cls-5").click(function() {
//     if ( $(this).hasClass('active') ){
//       $('.comparison_ing1').addClass('hidden');
//       $(this).removeClass('active');
      
//     }
//     else{
//       // otherwise add the active class
//       $(this).addClass('active')
//       // Hide any open siblings
//       $('.compare').addClass('hidden');
//       // then show our formula
//       $('.comparison_ing1').removeClass('hidden');
// }
//   });

});
