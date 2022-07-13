function truncate(str, maxlength) {
  if(str.length>maxlength){
    let res = str.slice(0,maxlength-1) + "…"
    return res
  }
  return str

}
