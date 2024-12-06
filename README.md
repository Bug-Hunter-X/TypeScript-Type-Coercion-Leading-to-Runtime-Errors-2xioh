# TypeScript Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript related to type coercion.  While TypeScript's type system helps prevent many errors during development, it doesn't always catch cases where string values are used in arithmetic operations, leading to runtime errors rather than compile-time errors.

The `bug.ts` file showcases the issue. The `add` and `subtract` functions are defined to accept numbers. However, the code attempts to perform addition and subtraction with string values. TypeScript compiles the code because it allows this type coercion; however, the runtime behavior is incorrect, leading to `NaN` results.

The solution in `bugSolution.ts` demonstrates how to add runtime type checking to prevent this.