function makeDiagonalRed(table) {
  // получаем коллекцию строк table.rows и пробегаем по каждой строке в цикле
  for (let tr of table.rows) {
    let i = tr.rowIndex; // получили номер строки
    // получаем коллекцию ячеек tr.cells и пробегаем по каждой ячейке в цикле
    for (let td of tr.cells){
      let j = td.cellIndex // получили номер столбца
      // если индекс строки === индексу столбца, то меняем стиль заливки на красный
      if( i===j) {console.log(i , j);
        table.rows[i].cells[j].style.backgroundColor = 'red'
      }
    }
  }
}
