function minMaxAverage(...operands) {
  let result = [Infinity, -Infinity, 0]; 
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < operands.length; i++) {
    let operandA = operands[i];

    if (Array.isArray(operandA)) {
      let [min, max, sumAr, counterAr] = minMaxArrayAverage(operandA); 
      if (min < result[0]) result[0] = min;
      if (max > result[1]) result[1] = max;
      sum += sumAr;
      counter += counterAr;
    } else if (typeof operandA === "number") {
      if (operandA < result[0]) result[0] = operandA;
      if (operandA > result[1]) result[1] = operandA;
      sum += operandA;
      counter++;
    }
  }

  result[2] = counter > 0 ? sum / counter : undefined; // Avoid division by zero
  return result;
}

function minMaxArrayAverage(array) {
  let sumAr = 0;
  let counterAr = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    sumAr += array[i];
    counterAr++;
  }

  return [min, max, sumAr, counterAr];
}

let array1 = [1, 5, 11, -4];
let array2 = [1, 2, 3];
let mMax = minMaxAverage(2, array2, 6, 1, array1);
console.log(mMax); 

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: ([1, 2, 3], 10) will be: \n Min Value: ${
    minMaxAverage([1, 2, 3], 10)[0]
  } \n Max Value: ${minMaxAverage([1, 2, 3], 10)[1]} \n Average Value: ${
    minMaxAverage([1, 2, 3], 10)[2]
  }`
);

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: (1, 2, 3, 10, [8, -900], 0) will be: \n Min Value: ${
    minMaxAverage(1, 2, 3, 10, [8, -900], 0)[0]
  } \n Max Value: ${
    minMaxAverage(1, 2, 3, 10, [8, -900], 0)[1]
  } \n Average Value: ${minMaxAverage([1, 2, 3], 10)[2]}`
);