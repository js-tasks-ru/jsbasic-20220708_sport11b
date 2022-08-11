import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #card;
  product;

  // В качестве аргумента в конструктор класса передаётся объект, описывающий товар
  constructor(product) {
  this.product = product; // в это свойство передан объект описывающий товар
  this.#create_card();  // метод для создания карточки товара
  this.#eventListen();  // слушает клики мышки и создает пользовательское событие
  }


  // описываем метод для создания карточки товара
  #create_card() {
    this.#card = createElement(
      `   <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
<!--          <img src="/assets/images/icons/plus-icon.svg" alt="icon" class="card__img__del">-->
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
    );
  }

  // возвращаем приватное свойство #card через ProductCard.elem в коде html-файла
  get elem(){return this.#card}

  // добавляем приватный # обработчик события на клик на элемент
  #eventListen() {
    // в переменную handlerClick пишем стрелочную функцию с аргументом event
    const handlerClick = (event)=>{
      // if(event.target.className==='card__img__del' || event.target.className==='card__button')
      if(event.target.closest(".card__button"))  // если event пришелся на ближайшем теге с классмом card__button
      {
        // то создаем объект пользовательского события new CustomEvent("product-add"...) и помещаем в переменную custEvent, чтобы потом запустить его на элементе
        // https://learn.javascript.ru/dispatch-events
        let custEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: this.product.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        //передаем объект события в приватный элемент #card
        this.#card.dispatchEvent(custEvent);
        console.log(event);
      }
    }
    // добавляем слушатель кликов мышью на ближайшем теге с классмом card__button
   this.#card.addEventListener('click', handlerClick);
  }
}


