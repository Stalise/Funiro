'use strict'

let furnitureSlider = new Swiper('.furniture__swiper-container', {

   scrollbar: {
      el: '.furniture__scrollbar',

      // возможность управлять скроллом
      draggable: true,

      // привязывает ползунок к местоположению слайдов
      snapOnRelease: false,
   },

   // свободный режим, слады не фиксируются
   freeMode: true,

   // слайдер не двигается после остановки
   freeModeMomentum: false,

   // отключение прокрутка после конца слайдеров
   resistanceRatio: 0,

   slidesPerView: 'auto',

})