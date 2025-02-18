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
    } else if (operandA / operandA === 1) {
      if (operandA < result[0]) result[0] = operandA;
      if (operandA > result[1]) result[1] = operandA;
      sum += operandA;
      counter++;
    }
  }

  result[2] = counter > 0 ? Math.round(sum / counter) : undefined;

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


const result = minMaxAverage(1, 2, 3, 10, [8, -900], 0);

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: (1, 2, 3, 10, [8, -900], 0) will be: \n Min Value: ${result[0]} \n Max Value: ${result[1]} \n Average Value: ${result[2]}`
);

const result1 = minMaxAverage([1, 2], 3, 10, [8, -900], 0);

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: (1, 2, 3, 10, [8, -900], 0) will be: \n Min Value: ${result1[0]} \n Max Value: ${result1[1]} \n Average Value: ${result1[2]}`
);
