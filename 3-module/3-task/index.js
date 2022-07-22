function camelize(str) {
  let a = str.split('-');
  function handler (item){
    if(item !== "") {
      return item[0].toUpperCase() + item.slice(1)};
  }
  let b = a.slice(1);
  let res = a[0]+b.map(handler).join("") ;
  return res
}

// Второй способ
// function camelize(str) {
//   let arr = str.split("").map((element, index, arr) => {
//     if (element === "-") return;
//     if (arr[index - 1] === "-") return element.toUpperCase();
//
//     return element;
//   });
//
//   return arr.join("");
// }
