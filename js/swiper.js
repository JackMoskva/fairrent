var galleryThumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 20
    },
    576: {
      spaceBetween: 30
    },
    768: {
      spaceBetween: 40
    },
    992: {
      spaceBetween: 70
    }
  }
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  },
});