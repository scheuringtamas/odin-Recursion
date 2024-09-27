// Iterative approach
function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

console.log(fibs(8));

// Recursive approach
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const result = fibsRec(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}

console.log(fibsRec(8));

// Merge sort
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, mid));
  const rightHalf = mergeSort(array.slice(mid));

  return merge(leftHalf, rightHalf);
}

function merge(left, right) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const sortedArray1 = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(sortedArray1);

const sortedArray2 = mergeSort([105, 79, 100, 110]);
console.log(sortedArray2);
