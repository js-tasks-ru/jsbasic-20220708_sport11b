
// // Почему не принимается это решение?
// function makeFriendsList(arr) {
//   // создаем тег ul
//   let ul = document.createElement('ul');
//   document.body.insertAdjacentElement("beforeend", ul);
//   // пробегаем по каждому элементу массива arr и вставляем внутрь тега ul  тег li с ${item.firstName} ${item.lastName}
//   let res = arr.forEach(item => {
//       ul.insertAdjacentHTML("beforeend",
//         `<li>${item.firstName} ${item.lastName}</li>`)
//     }
//   );
//   return res
// }


function makeFriendsList(arr) {
  const elem = document.createElement('ul')
  arr.map(item => elem.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`)

  return elem
}
