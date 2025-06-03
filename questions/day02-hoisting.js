JavaScript Interview Question - Day 2
Q:What is Hoisting?
✅Answer: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (global or function scope) during the compile phase, before code execution.
📌 Key Points:
👍 Only declarations are hoisted, not initializations.
👍 var is hoisted and initialized with undefined.
👍 let and const are hoisted but not initialized (they stay in a "temporal dead zone").
👍 Function declarations are fully hoisted — both name and body.

console.log(a); // What will this print?
var a = 5;

hoistedFunction();

function hoistedFunction() {
  console.log('This function is hoisted!');
}
