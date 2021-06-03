'use strict'

// window.document.onclick = function (event) {
//    console.log(event.target)
// }



//анимация + открытие/закрытие бургера
document.querySelector('.header__burger-icon').onclick = function () {

   if (!document.querySelector('.header__burger-icon').classList.contains('_active')) {
      document.querySelector('.header__burger-icon').classList.add('_active');
      document.querySelector('.header__burger').style.display = 'block';
      document.querySelector('.header-menu__nav').style.opacity = '1';
      document.querySelector('.header-menu__icons').style.opacity = '1';
      if (document.body.clientWidth <= 487) {
         document.querySelector('.header-menu__search').style.opacity = '1';
      }
      setTimeout(() => {
         document.querySelector('.header__burger').style.opacity = '1';
         document.querySelector('.burger__stopper').style.transform = 'translate(0, 0)';
         document.querySelector('.burger__content').style.transform = 'translate(0, 0)';
         document.querySelector('.header-menu__nav').style.transform = 'translate(0, 0)';
         document.querySelector('.header-menu__icons').style.transform = 'translate(0, 0)';
         if (document.body.clientWidth <= 487) {
            document.querySelector('.header-menu__search').style.transform = 'translate(0, 0)';
         }
      }, 10);
      document.body.style.overflow = 'hidden';

      // закрытие бургера при клике на экран 
      document.querySelector('.header__burger').onclick = function (event) {
         if (event.target.getAttribute('class') == 'header__burger') {
            document.querySelector('.header__burger-icon').classList.remove('_active');
            document.querySelector('.burger__content').style.transform = 'translate(400px, 0)';
            document.querySelector('.burger__stopper').style.transform = 'translate(400px, 0)';
            document.querySelector('.header-menu__nav').style.transform = 'translate(150px, 0)';
            document.querySelector('.header-menu__icons').style.transform = 'translate(230px, 0)';
            setTimeout(() => {
               document.querySelector('.header__burger').style.opacity = '0';
               document.querySelector('.header-menu__nav').style.opacity = '0';
               document.querySelector('.header-menu__icons').style.opacity = '0';
               setTimeout(() => document.querySelector('.header__burger').style.display = 'none', 300)
            }, 300);
            document.body.style.overflow = 'visible';
         }
      }
   } else if ((document.querySelector('.header__burger-icon').classList.contains('_active'))) {
      document.querySelector('.header__burger-icon').classList.remove('_active');
      document.querySelector('.burger__content').style.transform = 'translate(400px, 0)';
      document.querySelector('.burger__stopper').style.transform = 'translate(400px, 0)';
      document.querySelector('.header-menu__nav').style.transform = 'translate(150px, 0)';
      document.querySelector('.header-menu__icons').style.transform = 'translate(230px, 0)';
      if (document.body.clientWidth <= 487) {
         document.querySelector('.header-menu__search').style.transform = 'translate(300px, 0)';
         document.querySelector('.burger__content').style.transform = 'translate(470px, 0)';
         document.querySelector('.burger__stopper').style.transform = 'translate(470px, 0)';
      }

      setTimeout(() => {
         document.querySelector('.header-menu__nav').style.opacity = '0';
         document.querySelector('.header-menu__icons').style.opacity = '0';
         document.querySelector('.header__burger').style.opacity = '0';
         if (document.body.clientWidth <= 487) {
            document.querySelector('.header-menu__search').style.opacity = '0';
         }
         setTimeout(() => document.querySelector('.header__burger').style.display = 'none', 300)
      }, 300);
      document.body.style.overflow = 'visible';
   }
}


// header-menu__products чтобы перейте по .header-menu__products-link нужно 2 раза нажать на нее. 1 клик работает как hover;
document.querySelector('.header-menu__products').addEventListener('touchstart', () => {
   if (document.querySelector('.header-menu__products-link').getAttribute("href") == 'https://yandex.by/') {
      document.querySelector('.header-menu__products-link').setAttribute("onclick", "true");
   } else if (document.querySelector('.header-menu__products-link').getAttribute("href") != 'https://yandex.by/') {
      document.querySelector('.header-menu__products-link').setAttribute("onclick", "return false");
      document.querySelector('.header-menu__products-link').setAttribute("href", "https://yandex.by/");
   }

   function refreshProductsLink() {
      if (window.getComputedStyle(document.querySelector('.products-dropdown')).display == 'none') {
         document.querySelector('.header-menu__products-link').setAttribute("onclick", "return false");
         document.querySelector('.header-menu__products-link').setAttribute("href", "#!");
         window.removeEventListener('click', refreshProductsLink)
      }
   }

   window.addEventListener('click', refreshProductsLink)
})

// header-menu__rooms чтобы перейте по .header-menu__rooms-link нужно 2 раза нажать на нее. 1 клик работает как hover;
document.querySelector('.header-menu__rooms').addEventListener('touchstart', () => {
   if (document.querySelector('.header-menu__rooms-link').getAttribute("href") == 'https://yandex.by/') {
      document.querySelector('.header-menu__rooms-link').setAttribute("onclick", "true");
   } else if (document.querySelector('.header-menu__rooms-link').getAttribute("href") != 'https://yandex.by/') {
      document.querySelector('.header-menu__rooms-link').setAttribute("onclick", "return false");
      document.querySelector('.header-menu__rooms-link').setAttribute("href", "https://yandex.by/");
   }

   function refreshRoomsLink() {
      if (window.getComputedStyle(document.querySelector('.rooms-dropdown')).display == 'none') {
         document.querySelector('.header-menu__rooms-link').setAttribute("onclick", "return false");
         document.querySelector('.header-menu__rooms-link').setAttribute("href", "#!");
         window.removeEventListener('click', refreshRoomsLink)
      }
   }

   window.addEventListener('click', refreshRoomsLink)
})

window.addEventListener('resize', () => {

   // удаление аттрибута style добавленный через js, чтобы он не блокировал медиа-запросы
   if (document.body.clientWidth > 992) {
      document.querySelector('.header-menu__nav').removeAttribute("style");
      document.querySelector('.header-menu__icons').removeAttribute("style");
   }
   if (document.body.clientWidth > 487) {
      document.querySelector('.header-menu__search').removeAttribute("style");
   }

   // добавляет скролл в меню 
   if (document.body.clientWidth < 768) {
      if (window.innerHeight < 370) {
         document.querySelector('.header-menu__list').style.height = (window.innerHeight - 160) + 'px';
      } else if (window.innerHeight > 370) {
         document.querySelector('.header-menu__list').removeAttribute("style");
      }
   }
})






// https://yandex.by/