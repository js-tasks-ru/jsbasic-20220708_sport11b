function hideSelf() {
  // находим наш button
  let input = document.querySelector(".hide-self-button");

  // добавили обработчик события на нажатие кнопки
  input.addEventListener("click", ()=> {input.setAttribute('hidden','hidden')});

}
