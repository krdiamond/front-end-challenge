$(document).ready(function(){

// ----------------------------- MOBILE SLIDER ------------------------------ //
  $('.product-image-wrapper-mobile').slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
  });

// ---------------------------- QUANTITY SELECTOR --------------------------- //

$('.plus').click(function(){
  var textNumber = $('.counter').text();
  var integerCounter = parseInt(textNumber) + 1;
  $('.counter').text(integerCounter)
});

$('.minus').click(function(){
  var textNumber = $('.counter').text();
  var integerCounter = parseInt(textNumber);
  if (integerCounter > 1) {
    var minusONE = integerCounter - 1;
    $('.counter').text(minusONE);
  }
});

// ------------------------------ ZOOM FUNCTION ----------------------------- //
  $('.product-image-wrapper-desktop').click(function(){
    $('.product-image-wrapper-desktop').clone().prependTo(".zoom");
  });

  $('.zoom').click(function(){
    $('.zoom').empty();
  });


});
