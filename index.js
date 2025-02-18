function minMaxAverage(...operands) {
  let min = Infinity,
    max = -Infinity,
    sum = 0,
    count = 0;

  function processNumber(num) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
    count++;
  }

  for (let i = 0; i < operands.length; i++) {
    let operand = operands[i];

    if (Array.isArray(operand)) {
      for (let j = 0; j < operand.length; j++) {
        processNumber(operand[j]);
      }
    } else if (operand / operand === 1) {
      processNumber(operand);
    }
  }

  return [
    min,
    max,
    count > 0 ? Math.round((sum / count) * 100) / 100 : undefined,
  ];
}

const result = minMaxAverage(1, 2, 3, 10, [8, -900], 0);

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: (1, 2, 3, 10, [8, -900], 0) will be: \n Min Value: ${result[0]} \n Max Value: ${result[1]} \n Average Value: ${result[2]}`
);

const result1 = minMaxAverage([1, 2], 3, 10, [8, -900], 0);

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: (1, 2, 3, 10, [8, -900], 0) will be: \n Min Value: ${result1[0]} \n Max Value: ${result1[1]} \n Average Value: ${result1[2]}`
);

const result2 = minMaxAverage([1.89, -2.88, 3], 777, [8, -100], 0, "Atom");

console.log(
  `The output of function "minMaxAverage" with numbers and arrays as arguments: ([1.89, -2.88, 3], 777, [8, -100], 0, "Atom") will be: \n Min Value: ${result2[0]} \n Max Value: ${result2[1]} \n Average Value: ${result2[2]}`
);
