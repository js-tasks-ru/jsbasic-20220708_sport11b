function showSalary(users, age) {
  function handler(item){
    if(item.age<=age){return true}
  }
  let a = users.filter(handler);
  let res = a.map(item => item.name + ', ' + item.balance )
  return res.join('\n')
}
