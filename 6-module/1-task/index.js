/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {  elem;  rows;  tab;
  constructor(rows) {
    this.elem = document.createElement('table'); // при нициализации экземпляра класса (ЭК) будет сразу создан элемент с тегом table и свойством класса elem
    this.rows = rows; // в свойство ЭК rows записывается объект со строками rows
    this.createTable(); // сразу вызываем метод класса для создания таблиц
    this.eventListen(); // метод удаления строк

  }
  get elem() {return this.elem;} // вызов свойства elem
  // описываем метод для создания и редактирования таблицы
  createTable(){
    // добавляем в элемент elem ( тег table) заголовки таблицы
    this.elem.insertAdjacentHTML("beforeEnd",
    `<thead id="th">
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    </thead>`);
    // перебираем в цикле все строки из массива rows  и добавляем в таблицу
    let i = 0;
    for (let r of this.rows){
      i+=1;  // ид номер каждой добавляемой строки в таблице
      console.log(r);  // тест
    this.elem.insertAdjacentHTML("beforeEnd",
    `<tbody>
        <tr id="${i}">
          <td>${r.name}</td>
          <td>${r.age}</td>
          <td>${r.salary}</td>
          <td>${r.city}</td>
          <td><button>X</button></td>
        </tr>
      </tbody>`);}}


  // добавляем обработчик события на клик на элемент с тегом button
  eventListen() {

    let s = this.elem.querySelectorAll("button");  // находим кнопки
    let h = this.elem.querySelectorAll('#th')[0];  // заголовок таблицы
    let l = s.length; // считаем сколько всего кнопок найдено
    for(let b of s){
      b.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.remove();
      l -= 1; // если удалили все строки таблицы, то удаляем и заголовок
    if(l<1){h.remove()};
         }
      )};
  }
}
