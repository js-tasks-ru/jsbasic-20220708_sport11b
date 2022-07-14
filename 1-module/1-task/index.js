function factorial(n) {
  let res = 1;
  if(n in [1,0]){return 1};  // если факториал 0 или 1  возвращаем 1

  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res
}
