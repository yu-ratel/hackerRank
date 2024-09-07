function countingSort(arr) {
  let answerArr = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i += 1) {
    answerArr[arr[i]] += 1;
  }

  return answerArr;
}
