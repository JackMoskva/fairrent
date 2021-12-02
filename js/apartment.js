const galleryThumbsApart = new Swiper('.gallery-thumbs-apart', {
  spaceBetween: 20,
  slidesPerView: 7,
  centeredSlides: true,
  loop: true,
  freeMode: true,
  initialSlide: 4,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.modal-swiper-button-next',
    prevEl: '.modal-swiper-button-prev',
  },
});

const galleryTopApart = new Swiper('.gallery-top-apart', {
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.modal-swiper-button-next',
    prevEl: '.modal-swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  thumbs: {
    swiper: galleryThumbsApart,
  },
});

$('#staticBackdropApart').on('shown.bs.modal', function (e) {
  galleryThumbsApart.update();
  galleryTopApart.update();
});

$(".a-i-range-slider").ionRangeSlider({
  min: 24,
  max: 120,
  from: 60,
});

var swiperGalleryApart = new Swiper('.gallery-apart', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});


// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scroll-block').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scroll-block').fadeOut();
  }
});

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