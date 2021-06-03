'use strict'

let testSlider = new Swiper('.test-slider__container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   scrollbar: {
      el: '.swiper-scrollbar',

      draggable: true,

      // snapOnRelease: false,
   },

   // freeMode: true,
   // freeModeMomentum: false,

   slidesPerView: 'auto',

   spaceBetween: 30,

   loop: true,

   speed: 700,

})


//! слайдер с галереей картинок
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