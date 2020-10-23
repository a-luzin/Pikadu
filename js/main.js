// Создание переменной для хранения кнопки меню
let menuToggle = document.querySelector('#menu-toggle');
// Создание переменной для хранения меню
let menu = document.querySelector('.sidebar');
// Отслеживание клика по кнопке меню и запуск функции
menuToggle.addEventListener('click', function (event) {
  // Отмена стандартного поведения ссылки
  event.preventDefault();
  // Вешаем класс на меню, при клике на кнопку меню
  menu.classList.toggle('visible');
})
