'use strict'

let roomsSlider = new Swiper('.rooms__swiper-container', {
   navigation: {
      nextEl: '.rooms__button-next',
      prevEl: '.rooms__button-prev',
   },

   pagination: {
      el: '.rooms__slider-pagination',
      type: 'bullets',
      clickable: true,
   },

   breakpoints: {
      320: {
         centeredSlides: true,
      },
      768: {
         centeredSlides: false,
      }
   },

   spaceBetween: 45,

   slidesPerView: 'auto',

   loop: true,

   speed: 700,
})