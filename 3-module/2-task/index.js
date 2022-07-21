function filterRange(arr, a, b) {
  function handler (item)
  {
    if (item >=a && item <=b ){
      return true
    }
    else return false
  }
  let resArr= arr.filter(handler)
  return resArr
}
