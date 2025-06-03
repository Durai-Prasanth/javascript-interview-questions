Javascript Interview Question Day 4
Q: What is the difference between setTimeout and setInterval in JavaScript?
✅Answer: Both setTimeout and setInterval are JavaScript timing functions used to schedule code execution after a delay, but they work differently:

Explanation:
setTimeout runs a function once after a specified delay (in milliseconds).

setInterval runs a function repeatedly at specified intervals (in milliseconds) until stopped.



// setTimeout example: runs once after 2 seconds
setTimeout(() => {
  console.log('This runs once after 2 seconds');
}, 2000);

// setInterval example: runs every 2 seconds
const intervalId = setInterval(() => {
  console.log('This runs every 2 seconds');
}, 2000);

// To stop the interval after 7 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped after 7 seconds');
}, 7000);
