function diagonalDifference(arr) {
  let end = arr.length - 1;
  let [startNum, endNum] = [0, 0];

  for (let i = 0; i < arr.length; i += 1) {
    startNum += arr[i][i];
    endNum += arr[i][end];
    end--;
  }

  return Math.abs(startNum - endNum);
}

let arr = ["11, 2, 4", "4, 5, 6", "10, 8, -12"];

console.log(diagonalDifference(arr));
