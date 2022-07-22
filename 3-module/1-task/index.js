function namify(users) {
  let res = [];
  for(let i=0; i<users.length; i++){
    res.push(users[i]['name'])
  }
  return res
}
