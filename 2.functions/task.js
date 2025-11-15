function getArrayParams(...arr) {
  if (arr.length === 0)
    return 0;

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

/*console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61*/

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;

  return difference;
}

/*console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10*/

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  let difference = sumEvenElement - sumOddElement;

  return difference;
}

/*console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269 */

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  let average = sumEvenElement / countEvenElement;

  return average;
}

/*console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38*/


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let maxResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let iArr = arrOfArr[i];
    let result = func(...iArr);

    if (maxResult < result) {
      maxResult = result;
    }
  }

  return maxResult;
}
