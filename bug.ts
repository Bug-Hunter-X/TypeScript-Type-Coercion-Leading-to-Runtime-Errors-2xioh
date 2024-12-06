function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 5); // Correct

// Uncommon error: using a string where a number is expected
const result3 = add(5, "3"); // This will compile but throw an error at runtime
const result4 = subtract(10, "5");  // This will compile but throw an error at runtime

console.log(result1, result2, result3, result4); //Prints 8, 5, NaN, NaN
