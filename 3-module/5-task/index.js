function getMinMax(str) {
  // в функции handler избавляемся от Nan и строковых значений массива
  function handler(item){
    if(typeof item === "number" && !Number.isNaN(item) ){return true} else return false
  }
  // получаем массив из строк и переводим строки в числа, если возможно
  let a = str.split(' ').map(i => +i);
  // убираем Nan и строковые значения массива
  let b = a.filter(handler);
  // находим min max в массиве из чисел
  let min = Math.min( ...b);
  let max = Math.max( ...b);

  return {
    min: min,
    max: max
  }
}
