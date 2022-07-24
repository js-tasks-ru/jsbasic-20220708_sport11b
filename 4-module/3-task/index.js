function highlight(table) {

  // получаем коллекцию строк table.rows и пробегаем по каждой строке в цикле
  for (let tr of table.rows) {
    // получаем значение нестанлартного атрибута data-available
    if (tr.cells[3].dataset.available === 'true'){
      // устанавливаем класс
      tr.classList.add("available")}
    else if (tr.cells[3].dataset.available === 'false') {tr.classList.add("unavailable")}
    // если атрибут data-available неопределен , то добавляем атрибут hidden
    else {tr.setAttribute('hidden','hidden')};

    if (tr.cells[2].innerHTML === 'f') {tr.classList.add("female")}
    else {tr.classList.add("male")};

    // устанавливаем инлайн-стиль
    if (tr.cells[1].innerHTML < '18') {tr.style.textDecoration = 'line-through'};
  }}
