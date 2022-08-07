import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #card;
  product;

  // В качестве аргумента в конструктор класса передаётся объект, описывающий товар
  constructor(product) {
  this.product = product;
  this.#create_card();
  this.#eventListen();
  }

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

  get elem(){return this.#card}

  // добавляем обработчик события на клик на элемент
  #eventListen() {
    const handlerClick = (event)=>{
      // if(event.target.className==='card__img__del' || event.target.className==='card__button')
      if(event.target.closest(".card__button"))
      {
        let custEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: this.product.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        this.#card.dispatchEvent(custEvent);
        console.log(event);
      }
    }
   this.#card.addEventListener('click', handlerClick);

  }
}


