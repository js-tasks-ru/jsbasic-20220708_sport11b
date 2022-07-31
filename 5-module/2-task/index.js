function toggleText() {
  // находим наш div c id = text
  let dv = document.querySelector("#text");
  // функция обработчик для document.addEventListener
  function handler (event) {
    // если событие случилось на элементе у которого class содержит toggle-text-button
    if (event.target.classList.contains('toggle-text-button'))
    {
      dv.hidden = !dv.hidden;  //  то у тега div устанавливаем атрибут hidden или наоборот
    }

  }
  // добавили обработчик события на нажатие кнопки
  document.addEventListener("click", handler);
}
