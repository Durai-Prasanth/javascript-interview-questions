JavaScript Interview Question - Day 3

Q:What is Scope in JavaScript?
✅Answer: Scope in JavaScript refers to the context in which variables are declared and accessed. It defines the visibility and lifetime of a variable.
There are three main types of scope:
1️⃣ Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

2️⃣ Function Scope: Variables declared within a function are only accessible inside that function.

3️⃣ Block Scope: Introduced with let and const, variables declared inside a block ({}) are only accessible within that block.


let globalVar = 'I am global';

function myFunction() {
  let localVar = 'I am local';
  console.log(globalVar); // Output: I am global
  console.log(localVar);  // Output: I am local
}

myFunction();

console.log(globalVar);   // Output: I am global
console.log(localVar);    // Error! localVar is not defined outside the function
