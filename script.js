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

// ------------------------------ ZOOM FUNCTION ----------------------------- //
  $('.product-image-wrapper-desktop').click(function(){
    $('.product-image-wrapper-desktop').clone().prependTo(".zoom");
  });

  $('.zoom').click(function(){
    $('.zoom').empty();
  });

// ----------------------------- COLOR SELECTOR ----------------------------- //

var tick = $('.black .tick').html();

$('.beige').click(function(){

  $('.black .tick').empty();
  $('.beige .tick').append(tick);

});

$('.black').click(function(){
  $('.beige .tick').empty();
  $('.black .tick').append(tick);
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

// ----------------------------- SIZE SELECTOR ------------------------------ //

$('.size').click(function(){
  $('.dropdown-content').toggle();
});

var size = $('.size-choice').text();

$('.dropdown-content li').click(function(){
  $('.size-choice').text($(this).text())

});


});
