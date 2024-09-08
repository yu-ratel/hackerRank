function ZigZagSequence(input) {
  const cut = Math.floor((input.length + 1) / 2) - 1;

  input.sort((a, b) => a - b);

  let tmp = input[cut];
  input[cut] = input[input.length - 1];
  input[input.length - 1] = tmp;

  let start = cut + 1;
  let end = input.length - 2;
  while (start < end) {
    tmp = input[start];
    input[start] = input[end];
    input[end] = tmp;

    start += 1;
    end -= 1;
  }

  console.log(input);
}

let input = [1, 2, 3, 4, 5, 6, 7];

console.log(ZigZagSequence(input));
