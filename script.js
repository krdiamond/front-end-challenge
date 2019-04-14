$(document).ready(function(){

  $('.product-image-wrapper-mobile').slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
  });

  $('.product-image-wrapper-desktop').click(function(){
    $('.product-image-wrapper-desktop').clone().prependTo(".zoom");
  });

  $('.zoom').click(function(){
    $('.zoom').empty();
  });

});
