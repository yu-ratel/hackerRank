function lonelyinteger(a) {
  const map = new Map();

  a.forEach((el) => {
    map.get(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  });

  for (let [k, v] of map) {
    if (v === 1) return k;
  }
}

let a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
