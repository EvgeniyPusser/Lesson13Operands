function minMax(...operands) {
  let result = [Infinity, -Infinity];

  for (let i = 0; i < operands.length; i++) {
    let operandA = operands[i];

    if (Array.isArray(operandA)) {
      let [min, max] = minMaxArray(operandA);
      if (min < result[0]) result[0] = min;
      if (max > result[1]) result[1] = max;
    } else if (operandA / operandA === 1) {
      if (operandA < result[0]) result[0] = operandA;
      if (operandA > result[1]) result[1] = operandA;
    }
  }
  return result;
}

function minMaxArray(array) {
  let resultAr = [Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < resultAr[0]) resultAr[0] = array[i];
    if (array[i] > resultAr[1]) resultAr[1] = array[i];
  }
  return resultAr;
}



console.log(`The output of function "minMax" with numbers and arrays as arguments: (1, 900, [56, 7, -900], 90, 1000) will be: -900, 1000
  ${(minMax(1, 900, [56, 7, -900], 90, 1000))}`)
console.log(`The output of function "minMax" with numbers and arrays as arguments: ([1, 900], -6, 7, 0, 90, [100, 90, -678]) will be: -678, 900
  ${minMax([1, 900], -6, 7, 0, 90, [100, 90, -678])}`);
