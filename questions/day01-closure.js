// Day 01: What is a closure in JavaScript?

Q: What is a closure in JavaScript?
✅ Answer:
 A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
🧠 Explanation:
 When a function is created, it remembers the environment in which it was created. This allows inner functions to access variables from an outer function even after the outer function has executed.
"I have attached closure real-time banking application. check the image."
💳 Real-Time Banking Example with Closures
🧠 Explanation:
balance is a private variable inside the createAccount function.
The returned object methods (credit, debit, getBalance) form closures, meaning they retain access to the balance variable even after createAccount has finished executing.
This is a real-world use case of closures: data encapsulation and privacy.


function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
 
