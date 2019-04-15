$(document).ready(function(){

// ----------------------------- MOBILE SLIDER ------------------------------ //
// Initializing the slick slider funtionality for the featured image on mobile.
// Provides an object with different customization options.

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
//User can click on the featured image to zoom in.
//Image will take up the whole screen top to bottom, left to right.

  $('.product-scrolling-image-wrapper-desktop').click(function(){
    console.log('clicked');
    $('.product-scrolling-image-wrapper-desktop').clone().prependTo(".zoom");
  });

  $('.zoom').click(function(){
    $('.zoom').empty();
  });

// ----------------------------- COLOR SELECTOR ----------------------------- //
//User can choose between the colors available.
//Moves the check mark to the selected image

  var tick = $('.black .tick').html();

  $('.beige').click(function(){
    $('.beige .tick').empty();
    $('.black .tick').empty();
    $('.beige .tick').append(tick);

  });

  $('.black').click(function(){
    $('.beige .tick').empty();
    $('.black .tick').empty();
    $('.black .tick').append(tick);
  });

// ---------------------------- QUANTITY SELECTOR --------------------------- //
//User can increase and decrease the quantity they would like to purcahse
//Prevents a user from selecting a number lower than 1.

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
//User can click on the size drop down box.
//User can click a size and it will update the main text to show what has been selected.

  $('.size').click(function(){
    $('.dropdown-content').toggle();
  });

  var size = $('.size-choice').text();

  $('.dropdown-content li').click(function(){
    $('.size-choice').text($(this).text())
  });

// -------------------------------------------------------------------------- //
}); //end Document.ready()
