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
