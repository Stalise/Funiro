'use strict'

let tipsSlider = new Swiper('.tips__swiper-container', {
   navigation: {
      nextEl: '.tips__button-next',
      prevEl: '.tips__button-prev',
   },

   pagination: {
      el: '.tips__slider-pagination',
      type: 'bullets',
      clickable: true,
   },

   spaceBetween: 32,

   // centeredSlides: true,

   loop: true,

   speed: 700,

   slidesPerView: 'auto',

})