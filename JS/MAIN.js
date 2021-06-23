'use strict'

// window.document.onclick = function (event) {
//    console.log(event.target)
// }


// добавление товаров из localStorage в корзину при перезагрузке страницы
function requestLocalProd() {
   // при загрузке страницы функция проверяет locStor на наличие предметов добавленных в карзину, и подгружает их, если они есть
   if (localStorage.getItem('listLocalProduct') != null && localStorage.getItem('listLocalProduct') != '[]') {
      let requestListProd = localStorage.getItem('listLocalProduct');
      let parseListProd = JSON.parse(requestListProd)
      // цикл перебирает массив с имена товаров в localStor и добавляет их в html
      for (let i of parseListProd) {
         document.querySelector('.cart__product-list').insertAdjacentHTML("beforeend", localStorage.getItem(i));
      }

      // цикл перебирает все товары в корзине, и по data-stopper ищет кнопки добавления товара в корзину и вешает заглушку _active
      // которая запрещает добавлять больше одного уникального товара в коризну
      for (let q of document.querySelectorAll('[data-stopper]')) {
         document.querySelector(`.${q.dataset.stopper}`).classList.add('_active');
      }

      // выводит количество товаров в корзине
      document.querySelector('.cart__quantity-numb').innerHTML = document.querySelector('.cart__product-list').children.length;

      //подсвечивает кружок в иконке корзины, если в ней есть итемы
      document.querySelector('.header-menu__cart-active').style.opacity = '1';

      // считает общую стоимость товаров
      function cartAddProdTotal() {
         let totalPrice = 0;
         let transformString = [];
         // берем цены товаров из корзины
         for (let i of document.querySelectorAll('.cart__pruduct-price')) {
            // перебираем цены по символам, чтобы отделить строки от цифр
            for (let q of i.innerHTML) {
               // если символ - цифра, то пушим ее в массив
               if (isNaN(Number(q)) == false) {
                  transformString.push(q)
               }
            }
            // делаем из массива строку с цифрами и парсим ее в число, которое прибавляем к общей сумме
            totalPrice += parseInt(transformString.join(''));
            // обнуляем массив с ценой товара, чтобы получить туда цену следующего
            transformString = [];
         }
         document.querySelector('.cart__total-numb').innerHTML = totalPrice;
      }
      cartAddProdTotal()
   }
}
requestLocalProd()

// добавление товаров в коризну и в LocalStorage при клике на кнопку .products__item-button
document.querySelector('.products__content').onclick = function (event) {
   if (event.target.classList.contains('products__item-button')) {
      if (!event.target.classList.contains('_active')) {
         // вешаем заглушку на кнопку, чтобы нельзя было добавить один товар много раз
         event.target.classList.add('_active');

         // создаем товар для корзины по шаблону.
         let cartProdItem = `<li class='cart__pruduct-item cart__pruduct-item${event.target.dataset.prod}'>
                        <img src='ICON/PRODUCTS__IMG${event.target.dataset.prod}.jpg' class='cart__pruduct-img'>
                        <button class='cart__pruduct-delete' data-delete='cart__pruduct-item${event.target.dataset.prod}' data-stopper='products__item${event.target.dataset.prod}-button'></button>
                        <div class='cart__pruduct-box'>
                           <p class='cart__pruduct-name'>${document.querySelector(`.products__item${event.target.dataset.prod}-name`).innerHTML}</p>
                           <p class='cart__pruduct-price'>${document.querySelector(`.products__item${event.target.dataset.prod}-price`).innerHTML}</p>
                        </div>
                     </li>`;

         // добавляем в корзину товар созданный по шаблону cartProdItem
         document.querySelector('.cart__product-list').insertAdjacentHTML("beforeend", cartProdItem);

         // добавляем копию товара из корзины в localStorage
         localStorage.setItem(`cart__pruduct-item${event.target.dataset.prod}`, cartProdItem)

         // создание массива с именами товаров в корзине для localStorage, при перезагрузке страницы можно перебрать массив
         // и подгрузить товары в корзину из LocalStorage
         if (localStorage.getItem('listLocalProduct') == null) {
            // если это первый подгружаемый товар и массива еще нет, то мы его создаем 
            let listLocalProduct = []
            // в этот список пушим наш выбранный товар, его название, которое мы ранее добавили в LocalStorage
            listLocalProduct.push(`cart__pruduct-item${event.target.dataset.prod}`);
            // пушим этот массив в LocalStorage, делая из него строку через JSON.stringify
            localStorage.setItem('listLocalProduct', JSON.stringify(listLocalProduct))
         } else if (localStorage.getItem('listLocalProduct') != null) {
            // если массив с товарами уже есть, и нам нужно добавить еще товар, создаем переменную и в нее получаем массив из LocalStorage как строку
            let requestListLocalProduct = localStorage.getItem('listLocalProduct');
            // эту полученнуб строку мы парсим в новую переменную, чтобы сделать из нее массив
            let parseListLocalProduct = JSON.parse(requestListLocalProduct)
            // в этот массив мы пушим еще один товар
            parseListLocalProduct.push(`cart__pruduct-item${event.target.dataset.prod}`);
            // после чего массив с новым запушенным товаром мы сохраняем опять в localStorage, под именем первоначального массива, перезаписывая его
            localStorage.setItem('listLocalProduct', JSON.stringify(parseListLocalProduct))
         }

         // меняет цифру количества товаров в cart
         document.querySelector('.cart__quantity-numb').innerHTML = document.querySelector('.cart__product-list').children.length;

         // при добавлении товара в карзину функуция пересчитывает общую стоимость. Находится в функции requestLocalProd()
         function cartAddProdTotal() {
            let totalPrice = 0;
            let transformString = [];
            for (let i of document.querySelectorAll('.cart__pruduct-price')) {
               for (let q of i.innerHTML) {
                  if (isNaN(Number(q)) == false) {
                     transformString.push(q)
                  }
               }
               totalPrice += parseInt(transformString.join(''));
               transformString = [];
            }
            document.querySelector('.cart__total-numb').innerHTML = totalPrice;
         }
         cartAddProdTotal();

         // при добавлении в корзину, на иконке корзины подсвечивается кружок.
         document.querySelector('.header-menu__cart-active').style.opacity = '1';
      }
   }
};

// удаление товаров из корзины
document.querySelector('.cart__product-list').onclick = function (event) {
   if (event.target.classList.contains('cart__pruduct-delete')) {
      // удаляем элемент из корзины по data-delete
      document.querySelector(`.${event.target.dataset.delete}`).remove();
      // удаляем заглушку из кнопки на товаре, которая не разрешала добавлять больше одного предмета
      document.querySelector(`.${event.target.dataset.stopper}`).classList.remove('_active');
      // меняем цифру количества товаров в корзине после удаления элемента
      document.querySelector('.cart__quantity-numb').innerHTML = document.querySelector('.cart__product-list').children.length;

      // при удалении товара из корзины функция пересчитывает общую стоимость
      function cartRemoveProdTotal() {
         let totalPrice = 0;
         let transformString = [];
         for (let i of document.querySelectorAll('.cart__pruduct-price')) {
            for (let q of i.innerHTML) {
               if (isNaN(Number(q)) == false) {
                  transformString.push(q)
               }
            }
            totalPrice += parseInt(transformString.join(''));
            transformString = [];
         }
         document.querySelector('.cart__total-numb').innerHTML = totalPrice;

         // если корзина пуста, то удаляется кружок в значке корзины
         if (totalPrice == 0) {
            document.querySelector('.header-menu__cart-active').style.opacity = '0';
         }
      }
      cartRemoveProdTotal();

      // удаляем товар и localStorage
      localStorage.removeItem(`${event.target.dataset.delete}`);

      // удаляем товар из списка в localStorage
      if (localStorage.getItem('listLocalProduct') != null) {
         let requestListLocalProduct = localStorage.getItem('listLocalProduct');
         let parseListLocalProduct = JSON.parse(requestListLocalProduct);
         // перебор продуктов в массиве из localStorage
         for (let i of parseListLocalProduct) {
            // если удаляемый продукт совпадает с тем, который сейчас идет в итерации цикла, то мы его удаляем из массива
            if (i == event.target.dataset.delete) {
               parseListLocalProduct.splice(parseListLocalProduct.indexOf(event.target.dataset.delete), 1);
            }
         }
         localStorage.setItem('listLocalProduct', JSON.stringify(parseListLocalProduct));
      }
   }
};

// закртие карзины при клике на кнопку .cart__but-close
document.querySelector('.cart__but-close').onclick = function (event) {
   document.querySelector('.cart__content').style.transform = 'translate(480px, 0)';
   document.querySelector('.cart__stopper').style.transform = 'translate(480px, 0)';
   setTimeout(() => {
      document.querySelector('.header__cart').style.opacity = '0';
      setTimeout(() => document.querySelector('.header__cart').style.display = 'none', 300)
   }, 300);
   document.body.style.overflow = 'visible';
   document.querySelector('.header-menu__cart').classList.remove('_active');
}

//анимация открытия + закрытия корзины при клике на экран
document.querySelector('.header-menu__cart').onclick = function () {

   if (!document.querySelector('.header-menu__cart').classList.contains('_active')) {
      document.querySelector('.header-menu__cart').classList.add('_active');
      document.querySelector('.header__cart').style.display = 'block';
      setTimeout(() => {
         document.querySelector('.header__cart').style.opacity = '1';
         document.querySelector('.cart__stopper').style.transform = 'translate(0, 0)';
         document.querySelector('.cart__content').style.transform = 'translate(0, 0)';
      }, 10);
      document.body.style.overflow = 'hidden';

      // закрытие бургера при клике на экран 
      document.querySelector('.header__cart').onclick = function (event) {
         if (event.target.getAttribute('class') == 'header__cart') {
            document.querySelector('.header-menu__cart').classList.remove('_active');
            document.querySelector('.cart__content').style.transform = 'translate(480px, 0)';
            document.querySelector('.cart__stopper').style.transform = 'translate(480px, 0)';
            setTimeout(() => {
               document.querySelector('.header__cart').style.opacity = '0';
               setTimeout(() => document.querySelector('.header__cart').style.display = 'none', 300)
            }, 300);
            document.body.style.overflow = 'visible';
         }
      }
   } else if ((document.querySelector('.header-menu__cart').classList.contains('_active'))) {
      document.querySelector('.header-menu__cart').classList.remove('_active');
      document.querySelector('.cart__content').style.transform = 'translate(480px, 0)';
      document.querySelector('.cart__stopper').style.transform = 'translate(480px, 0)';

      setTimeout(() => {
         document.querySelector('.header__cart').style.opacity = '0';
         setTimeout(() => document.querySelector('.header__cart').style.display = 'none', 300)
      }, 300);
      document.body.style.overflow = 'visible';
   }
}

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
   //Второе нажатие. Разрешает клик, тем самым совершается переход по ссылке.
   if (document.querySelector('.header-menu__rooms-link').getAttribute("href") == 'https://yandex.by/') {
      document.querySelector('.header-menu__rooms-link').setAttribute("onclick", "true");

      //Первое нажатие. Открывает дропдаун, меняет ссылку на нужную. Срабатывает как hover
   } else if (document.querySelector('.header-menu__rooms-link').getAttribute("href") != 'https://yandex.by/') {
      document.querySelector('.header-menu__rooms-link').setAttribute("onclick", "return false");
      document.querySelector('.header-menu__rooms-link').setAttribute("href", "https://yandex.by/");
   }

   // при клике не на дропдаун, функция перезагружает его, чтобы опять работал через 2 клика, а не 1.
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

   // добавляет скролл в меню, если высоты экрана не хватает
   if (document.body.clientWidth < 768) {
      if (window.innerHeight < 370) {
         document.querySelector('.header-menu__list').style.height = (window.innerHeight - 160) + 'px';
      } else if (window.innerHeight > 370) {
         document.querySelector('.header-menu__list').removeAttribute("style");
      }
   }
})


