function initCarousel() {
  // контейнер с классом carousel
  let carousel = document.querySelector(".carousel");
  // кнопки стрелки слева и справа
  let  carouselArrowRight= carousel.querySelector(".carousel__arrow_right");
  let  carouselArrowLeft= carousel.querySelector(".carousel__arrow_left");

  //  элемент-ленты, в котором находятся все слайды
  let carouselinner = carousel.querySelector(".carousel__inner");

  // счетчик порядкового номера слайда. При движении влево уменьшается на 1.
  // При движеннии вправо увеличивается на 1
  let count = 1;

  // слушатель события для левой и правой кнопок
  // carouselArrowRight.addEventListener("click", handler);
  // carouselArrowLeft.addEventListener("click", handler);
  carousel.addEventListener("click", handler);

  // начальные состояния кнопок
  carouselArrowRight.style.display = '';
  carouselArrowLeft.style.display = 'none';

  // ширина окна
  let width = carouselinner.offsetWidth;

  let transition = 0;
  // функция выполняющаяся при клике на стрелки
    function handler(e) {
      // если клик случился на правой стрелке
      if (e.target===carouselArrowRight) {
        transition += width;
        carouselinner.style.transform = `translateX(-${transition}px)`;
        count++;
      }
      // если клик случился на левой стрелке
      else if (e.target===carouselArrowLeft) {
        transition -= width;
        carouselinner.style.transform = `translateX(-${transition}px)`;
        count--};

      // если счетчик слайдов count дошел до 1 то скрываем левую стрелку
      count === 1 ? carouselArrowLeft.style.display = 'none' :   carouselArrowLeft.style.display = '';
      // если счетчик слайдов count дошел до 4 то скрываем правую стрелку
      count >= 4 ? carouselArrowRight.style.display = 'none' :   carouselArrowRight.style.display = '';
    }}



// // второй способ
// function initCarousel() {
//   let carousel = document.querySelector(".carousel");
//   let leftArrowBtn = carousel.querySelector(".carousel__arrow_left");
//   let rightArrowBtn = carousel.querySelector(".carousel__arrow_right");
//   let slidesContainer = carousel.querySelector(".carousel__inner");
//   let slideWidth = 0;
//   let slidePos = 1;
//
//   changeButtonState();
//
//   carousel.addEventListener("click", function (e) {
//     runCarousel(e.target.closest(".carousel__arrow"));
//   });
//
//   function runCarousel(button) {
//     if (button === rightArrowBtn) {
//       moveSlide({ direction: "right" });
//       changeButtonState();
//     }
//
//     if (button === leftArrowBtn) {
//       moveSlide({ direction: "left" });
//       changeButtonState();
//     }
//   }
//
//   function moveSlide({ direction }) {
//     if (direction === "right") {
//       slideWidth = slideWidth - slidesContainer.offsetWidth;
//       slidesContainer.style.transform = `translateX(${slideWidth}px)`;
//       slidePos++;
//     } else {
//       slideWidth = slideWidth + slidesContainer.offsetWidth;
//       slidesContainer.style.transform = `translateX(${slideWidth}px)`;
//       slidePos--;
//     }
//   }
//
//   function changeButtonState() {
//     rightArrowBtn.style.display =
//       slidePos === slidesContainer.childElementCount ? "none" : "";
//
//     leftArrowBtn.style.display = slidePos === 1 ? "none" : "";
//   }
// }
