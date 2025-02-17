function minMaxAverage(...operands) {
  let result = [Infinity, -Infinity, 0]; // [min, max, average]
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < operands.length; i++) {
    let operandA = operands[i];

    if (Array.isArray(operandA)) {
      let [min, max, , subSum, subCounter] = minMaxAverage(...operandA); // Correct extraction
      if (min < result[0]) result[0] = min;
      if (max > result[1]) result[1] = max;
      sum += subSum;
      counter += subCounter;
    } else if (typeof operandA === "number") {
      if (operandA < result[0]) result[0] = operandA;
      if (operandA > result[1]) result[1] = operandA;
      sum += operandA;
      counter++;
    }
  }

  result[2] = counter > 0 ? sum / counter : undefined; // Avoid division by zero
  return [...result, sum, counter]; // Returning sum and count to handle recursion correctly
}

// Test cases
let array1 = [1, 45, 101, -45];
let array2 = [89, 0, 45];
let result = minMaxAverage(1, 45, array2, 67, -800, array1);

console.log(result); // Expected output: [-800, 101, average_value]

console.log(`The output of function "minMax" with numbers and arrays as arguments: (1, 900, [56, 7, -900], 90, 1000) will be: -900, 1000
  ${minMaxAverage(1, 900, [56, 7, -900], 90, 1000)}`);
console.log(`The output of function "minMax" with numbers and arrays as arguments: ([1, 900], -6, 7, 0, 90, [100, 90, -678]) will be: -678, 900
  ${minMaxAverage([1, 900], -6, 7, 0, 90, [100, 90, -678])}`);
console.log(`The output of function "minMax" with numbers and arrays as arguments: ([1, 2, 3]) will be: 1, 10, 4
  ${minMaxAverage([1, 2, 3], 10)}`);
