window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          burger = document.querySelector('.burger'),
          menuItem = document.querySelectorAll('.menu__link'),
          close = document.querySelector('.menu__close');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        burger.classList.toggle('burger_out');
    });

    close.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        burger.classList.toggle('burger_out');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            burger.classList.toggle('burger_out');
        });
    });

    const percent = document.querySelectorAll('.progress__percent'),
          scales = document.querySelectorAll('.progress__scale');

    percent.forEach((item, i) => {
        scales[i].style.width = item.innerHTML;
        // console.log(i);
    });
});