'use strict'

let headerSlider = new Swiper('.header__swiper-container', {
   navigation: {
      nextEl: '.header__swiper-next',
      prevEl: '.header__swiper-prev',
   },

   pagination: {
      el: '.header__swiper-pagination',
      type: 'bullets',
      clickable: true,
   },

   autoplay: {
      delay: 6000,
   },

   slidesPerView: 'auto',

   speed: 1000,

   loop: true,

   centeredSlides: true,

   spaceBetween: 32,

})


// ! панорамный слайдер
// let testSlider = new Swiper('.test-slider__container', {
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },

//    scrollbar: {
//       el: '.swiper-scrollbar',

//       draggable: true,

//       snapOnRelease: false,
//    },

//    freeMode: true,
//    freeModeMomentum: false,

//    slidesPerView: 'auto',

// })