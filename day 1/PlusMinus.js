function plusMinus(arr) {
  const total = arr.length;
  let countArr = [0, 0, 0];
  let [positiveIdx, negativeIdx, zeroIdx] = [0, 1, 2];

  arr.map((num) => {
    if (num === 0) countArr[zeroIdx] += 1;
    if (num > 0) countArr[positiveIdx] += 1;
    if (num < 0) countArr[negativeIdx] += 1;
  });

  countArr.forEach((count) => {
    const result = count / total;
    return console.log(result.toFixed(6));
  });
}

let arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
