import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #carus; // создаем приватное свойство

  constructor(slides) {
    this.slides = slides; // в это свойство передан объект описывающий товар
    this.#create_carus(); // метод для создания слайда карусели
    this.#initCarousel();// метод переключения слайдов
    this.#eventListen(); // метод слушателя событий
  }


#create_carus() {
    // создаем ссылку на создание ДОМ элемента-контейнера, куда дальше будем помещать слайды
  // (слайды будем помещать сюда <div class="carousel__inner"> СЛАЙДЫ СЮДА </div>)
  // и помещаем ее в приватное своейство класса #carus
  this.#carus = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

  // в переменную slides передаем массив сделанный перебором элементов массива slides
  let slides =  this.slides.map(item => createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img
          src="/assets/images/carousel/${item.image}"
          class="carousel__img"
          alt="slide"
        />
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon" />
          </button>
        </div>
      </div>`));
    console.log(slides);
// в созданном свойстве класса this.#carus содержится ДОМ элемент куда надо вставить слайды
  // находим в этом ДОМ элементе тег div с классом carousel__inner и добавляем в него последовательно все элементы массива slides
    this.#carus.querySelector(`.carousel__inner`).append(...slides);
            }

  // описываем приватную функцию переключения слайдов
  #initCarousel() {
    //let slidesLength = this.slides.length; // количество слайдов
    // ссылка на ДОМ элемент со слайдами находится в переменной this.#carus
    let carouselElem = this.#carus;
    // количество слайдов
    let slidesLength = this.slides.length;

    // кнопки стрелки слева и справа
    let  carouselArrowRight= carouselElem.querySelector(".carousel__arrow_right");
    let  carouselArrowLeft= carouselElem.querySelector(".carousel__arrow_left");

    //  элемент-ленты, в котором находятся все слайды
    let carouselinner = carouselElem.querySelector(".carousel__inner");

    // счетчик порядкового номера слайда. При движении влево уменьшается на 1.
    // При движеннии вправо увеличивается на 1
    let count = 1;
    let transition = 0;

    // слушатель события для левой и правой кнопок
    carouselElem.addEventListener("click", handler);

    // начальные состояния кнопок
    carouselArrowRight.style.display = '';
    carouselArrowLeft.style.display = 'none';


    // функция выполняющаяся при клике на стрелки
    function handler(e) {
      // ширина окна задается именно внутри handler , а не снаружи , так как
      // при инициализации обьекта класса, this.#create_carus() создает DOM элементы.
      // Потом this.#initCarousel() выполняет свой код. Но проблема в том, что у нас на этом
      // этапе созданные элементы DOM еще не находятся на странице и поэтому carouselinner.offsetWidth будет равен 0, если его задать
      // снаружи от handler (если бы он был обьявлен внутри this.#initCarousel() ).
      // Если же задать let width = carouselinner.offsetWidth  именно внутри handler,  carouselinner.offsetWidth уже получит не ноль
      // а реальное отрисованное окно , так как handler передается в  событие клик.
      // А клик можно сделать только тогда, когда DOM элементы уже были добавлены на страницу и их размер стал известен.
      let width = carouselinner.offsetWidth;
      // если клик случился на правой стрелке.  Почему здесь используем closest, а не прямую сслыку на тег со стрелкой
      // carouselElem.querySelector(".carousel__arrow_right") ? Потому что у нас внутри тега button лежит тег img.
      // Поэтому когда ты попадаешь курсором не на тег button, а на тег img, то твой код не срабатывает.
      // А closest возвращает элемент родителя который имеет нужное нам css свойство.
      // Или сам элемент с этим свойством. Получается что при клике на img будет возвращаться
      // button и при button тоже button - то что нам и нужно.
      if (e.target.closest('.carousel__arrow_right')) {
        transition += width;
        carouselinner.style.transform = `translateX(-${transition}px)`;
        count++;
      }
      // если клик случился на левой стрелке
      else if (e.target.closest('.carousel__arrow_left')) {
        transition -= width;
        carouselinner.style.transform = `translateX(-${transition}px)`;
        count--};

      // если счетчик слайдов count дошел до 1 то скрываем левую стрелку
      count === 1 ? carouselArrowLeft.style.display = 'none' :   carouselArrowLeft.style.display = '';
      // если счетчик слайдов count дошел до 4 то скрываем правую стрелку
      count >=  slidesLength ? carouselArrowRight.style.display = 'none' :   carouselArrowRight.style.display = '';
    }}

  // функция выполняющая генерацию пользовательского события при клике на плюсик в слайде
  // добавляем приватный # обработчик события на клик на элемент +
  #eventListen() {
     // в переменную handlerClick пишем стрелочную функцию с аргументом event
    const handlerClick = (event)=>{

      if(event.target.closest(".carousel__button "))  // если event пришелся на ближайшем теге с классмом carousel__button
        // генерировать пользовательское событие на корневом HTML элементе компонента (который хранится в свойстве elem), такого вида
      {
        // создаем объект пользовательского события new CustomEvent("product-add"...) и помещаем в переменную custEvent, чтобы потом запустить его на элементе
        // https://learn.javascript.ru/dispatch-events
          let custEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: event.target.closest('[data-id]').dataset.id, // Уникальный идентификатора товара из объекта слайда
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        //передаем объект события в приватный элемент #card
        this.#carus.dispatchEvent(custEvent);
        console.log(event);
      }
    }
    // добавляем слушатель кликов мышью на ближайшем теге с классмом carousel__button
    this.#carus.addEventListener('click', handlerClick);
  }


// возвращаем приватное свойство
get elem(){return this.#carus}

}
