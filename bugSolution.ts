function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: both parameters must be numbers or parseable strings");
  }
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: both parameters must be numbers or parseable strings");
  }
  return numA - numB;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 5); // Correct

// safer version
const result3 = addSafe(5, "3"); //This will not throw an error
const result4 = subtractSafe(10, "5"); // This will not throw an error

const result5 = addSafe("hello",5); // throws an error

console.log(result1, result2, result3, result4); // Prints 8, 5, 8, 5
