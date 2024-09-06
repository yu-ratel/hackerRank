function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  const min = arr.slice(0, 4).reduce((acc, cur) => acc + cur, 0);
  const max = arr.slice(1, 5).reduce((acc, cur) => acc + cur, 0);

  console.log(min + " " + max);
}
