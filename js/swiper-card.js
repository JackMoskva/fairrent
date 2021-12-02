var cardSlider = $('.card-slider');
cardSlider.each(function () {
  var swiper = new Swiper(this, {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

var swiper = new Swiper('.map-card-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
});