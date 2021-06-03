'use strict'



// размеры высоты блоков products при открытии с разнорй шириной экрана
if (document.body.clientWidth > 1240) {
   productsButton.onclick = function () {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = '1640px';
         products__container.style.height = '1550px';
         products__content.style.height = '1400px';
         productsButton.dataset.view = 'show';
         productsButton.innerHTML = 'Close'
      }
      else if (productsButton.dataset.view == 'show') {
         main__products.style.height = '1160px';
         products__container.style.height = '1075px';
         products__content.style.height = '925px';
         productsButton.dataset.view = 'close';
         productsButton.innerHTML = 'Load More';
      }
   }
} else if (document.body.clientWidth > 768 && document.body.clientWidth <= 1240) {
   // определяем каждый раз какая длина у products__item
   let productItemHeigt = parseInt(window.getComputedStyle(document.querySelector('.products__item')).height);

   // в зависимости от длины item (из вычисления выше) выстраиваем высоту содержимого
   main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
   products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
   products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
   productsButton.dataset.view = 'close';
   productsButton.innerHTML = 'Load More';

   // высота раскрытия блоков при клике на кнопку
   productsButton.onclick = function () {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = ((productItemHeigt * 4) + 235 + 90) + 'px';
         products__container.style.height = ((productItemHeigt * 4) + 150 + 90) + 'px';
         products__content.style.height = ((productItemHeigt * 4) + 90) + 'px';
         productsButton.dataset.view = 'show';
         productsButton.innerHTML = 'Close'
      }
      else if (productsButton.dataset.view == 'show') {
         main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
         products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
         products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
         productsButton.dataset.view = 'close';
         productsButton.innerHTML = 'Load More';
      }
   }
} else if (document.body.clientWidth > 487 && document.body.clientWidth <= 768) {
   let productItemHeigt = parseInt(window.getComputedStyle(document.querySelector('.products__item')).height);

   main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
   products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
   products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
   productsButton.dataset.view = 'close';
   productsButton.innerHTML = 'Load More';

   productsButton.onclick = function () {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = ((productItemHeigt * 6) + 235 + 150) + 'px';
         products__container.style.height = ((productItemHeigt * 6) + 150 + 150) + 'px';
         products__content.style.height = ((productItemHeigt * 6) + 150) + 'px';
         productsButton.dataset.view = 'show';
         productsButton.innerHTML = 'Close'
      }
      else if (productsButton.dataset.view == 'show') {
         main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
         products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
         products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
         productsButton.dataset.view = 'close';
         productsButton.innerHTML = 'Load More';
         scrollTo(0, productsButton.offsetTop - 20)
      }
   }
} else if (document.body.clientWidth <= 487) {

   productsButton.onclick = function () {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = '5905px';
         products__container.style.height = '5820px';
         products__content.style.height = '5670px';
         productsButton.dataset.view = 'show';
         productsButton.innerHTML = 'Close'
      }
      else if (productsButton.dataset.view == 'show') {
         main__products.style.height = '3055px';
         products__container.style.height = '2970px';
         products__content.style.height = '2820px';
         productsButton.dataset.view = 'close';
         productsButton.innerHTML = 'Load More';
         scrollTo(0, productsButton.offsetTop - 20)
      }
   }
}


// изменение высоты блоков products в зависимости от ширины экрана
window.addEventListener('resize', () => {
   let productItemHeigt = parseInt(window.getComputedStyle(document.querySelector('.products__item')).height);

   if (document.body.clientWidth > 1240) {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = '1160px';
         products__container.style.height = '1075px';
         products__content.style.height = '925px';
      } else if ((productsButton.dataset.view == 'show')) {
         main__products.style.height = '1640px';
         products__container.style.height = '1550px';
         products__content.style.height = '1400px';
      }

      productsButton.onclick = function () {
         if (productsButton.dataset.view == 'close') {
            main__products.style.height = '1640px';
            products__container.style.height = '1550px';
            products__content.style.height = '1400px';
            productsButton.dataset.view = 'show';
            productsButton.innerHTML = 'Close'
         }
         else if (productsButton.dataset.view == 'show') {
            main__products.style.height = '1160px';
            products__container.style.height = '1075px';
            products__content.style.height = '925px';
            productsButton.dataset.view = 'close';
            productsButton.innerHTML = 'Load More';
         }
      }
   } else if (document.body.clientWidth > 950 && document.body.clientWidth <= 1240) {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = '1160px';
         products__container.style.height = '1075px';
         products__content.style.height = '925px';
      } else if ((productsButton.dataset.view == 'show')) {
         main__products.style.height = '2115px';
         products__container.style.height = '2027px';
         products__content.style.height = '1877px';
      }

      productsButton.onclick = function () {
         if (productsButton.dataset.view == 'close') {
            main__products.style.height = '2115px';
            products__container.style.height = '2027px';
            products__content.style.height = '1877px';
            productsButton.dataset.view = 'show';
            productsButton.innerHTML = 'Close'
         }
         else if (productsButton.dataset.view == 'show') {
            main__products.style.height = '1160px';
            products__container.style.height = '1075px';
            products__content.style.height = '925px';
            productsButton.dataset.view = 'close';
            productsButton.innerHTML = 'Load More';
         }
      }
   } else if (document.body.clientWidth > 768 && document.body.clientWidth <= 950) {

      if (productsButton.dataset.view == 'close') {
         main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
         products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
         products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
      } else if ((productsButton.dataset.view == 'show')) {
         main__products.style.height = ((productItemHeigt * 4) + 235 + 90) + 'px';
         products__container.style.height = ((productItemHeigt * 4) + 150 + 90) + 'px';
         products__content.style.height = ((productItemHeigt * 4) + 90) + 'px';
      }

      productsButton.onclick = function () {
         if (productsButton.dataset.view == 'close') {
            main__products.style.height = ((productItemHeigt * 4) + 235 + 90) + 'px';
            products__container.style.height = ((productItemHeigt * 4) + 150 + 90) + 'px';
            products__content.style.height = ((productItemHeigt * 4) + 90) + 'px';
            productsButton.dataset.view = 'show';
            productsButton.innerHTML = 'Close'
         }
         else if (productsButton.dataset.view == 'show') {
            main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
            products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
            products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
            productsButton.dataset.view = 'close';
            productsButton.innerHTML = 'Load More';
         }
      }
   } else if (document.body.clientWidth > 487 && document.body.clientWidth <= 768) {

      if (productsButton.dataset.view == 'close') {
         main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
         products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
         products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
      } else if ((productsButton.dataset.view == 'show')) {
         main__products.style.height = ((productItemHeigt * 6) + 235 + 150) + 'px';
         products__container.style.height = ((productItemHeigt * 6) + 150 + 150) + 'px';
         products__content.style.height = ((productItemHeigt * 6) + 150) + 'px';
      }

      productsButton.onclick = function () {
         if (productsButton.dataset.view == 'close') {
            main__products.style.height = ((productItemHeigt * 6) + 235 + 150) + 'px';
            products__container.style.height = ((productItemHeigt * 6) + 150 + 150) + 'px';
            products__content.style.height = ((productItemHeigt * 6) + 150) + 'px';
            productsButton.dataset.view = 'show';
            productsButton.innerHTML = 'Close'
         }
         else if (productsButton.dataset.view == 'show') {
            main__products.style.height = ((productItemHeigt * 2) + 235 + 30) + 'px';
            products__container.style.height = ((productItemHeigt * 2) + 150 + 30) + 'px';
            products__content.style.height = ((productItemHeigt * 2) + 30) + 'px';
            productsButton.dataset.view = 'close';
            productsButton.innerHTML = 'Load More';
            scrollTo(0, productsButton.offsetTop - 20)
         }
      }
   } else if (document.body.clientWidth <= 487) {
      if (productsButton.dataset.view == 'close') {
         main__products.style.height = '3055px';
         products__container.style.height = '2970px';
         products__content.style.height = '2820px';
      } else if ((productsButton.dataset.view == 'show')) {
         main__products.style.height = '5905px';
         products__container.style.height = '5820px';
         products__content.style.height = '5670px';
      }

      productsButton.onclick = function () {
         if (productsButton.dataset.view == 'close') {
            main__products.style.height = '5905px';
            products__container.style.height = '5820px';
            products__content.style.height = '5670px';
            productsButton.dataset.view = 'show';
            productsButton.innerHTML = 'Close'
         }
         else if (productsButton.dataset.view == 'show') {
            main__products.style.height = '3055px';
            products__container.style.height = '2970px';
            products__content.style.height = '2820px';
            productsButton.dataset.view = 'close';
            productsButton.innerHTML = 'Load More';
            scrollTo(0, productsButton.offsetTop - 20)
         }
      }
   }
})

// console.log(window.getComputedStyle(document.querySelector('.products__item')).height)