function minMax(...operands) {
  let result = [Infinity, -Infinity];

  for (let i = 0; i < operands.length; i++) {
    let operandA = operands[i];

    if (Array.isArray(operandA)) {
      let [min, max] = minMax(...operandA); // Correct recursive call
      if (min < result[0]) result[0] = min;
      if (max > result[1]) result[1] = max;
    } else if (typeof operandA === "number") {
      if (operandA < result[0]) result[0] = operandA;
      if (operandA > result[1]) result[1] = operandA;
    }
  }
  return result;
}

// Test cases
let array1 = [1, 45, 101, -45];
let array2 = [89, 0, 45];
let mMax = minMax(1, 45, array2, 67, -800, array1);

console.log(mMax); // Expected output: [-800, 101]

console.log(`The output of function "minMax" with numbers and arrays as arguments: (1, 900, [56, 7, -900], 90, 1000) will be: -900, 1000
  ${minMax(1, 900, [56, 7, -900], 90, 1000)}`);
console.log(`The output of function "minMax" with numbers and arrays as arguments: ([1, 900], -6, 7, 0, 90, [100, 90, -678]) will be: -678, 900
  ${minMax([1, 900], -6, 7, 0, 90, [100, 90, -678])}`);
