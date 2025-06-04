JavaScript Interview Question – Day 5 🔥

Question: What’s the difference between == and === in JavaScript?
	  Why is it generally recommended to use one over the other

Example:

console.log(1 == '1');   // true
console.log(1 === '1');  // false

💡 Answer:
JavaScript provides two types of equality operators:

== (Loose Equality)

=== (Strict Equality)

🔍 == (Loose Equality)
Compares values, but allows type conversion (also called type coercion).

If the types are different, JavaScript tries to convert them to the same type before comparing.

1 == '1';       // true  → string '1' is coerced to number 1
0 == false;     // true  → false is coerced to 0
null == undefined; // true → considered equal in loose equality

🔒 === (Strict Equality)
Compares both value and type.

No type conversion is performed. If types differ, result is always false.

1 === '1';      // false → number vs string
0 === false;    // false → number vs boolean
null === undefined; // false → different types

🧠 Why prefer === over ==?
Using === avoids unexpected bugs caused by automatic type coercion.

It leads to more predictable and safer code.

Most modern JavaScript codebases (and linters like ESLint) recommend using === always.

✅ Best Practice:
Use === unless you explicitly need type coercion — and in that case, comment your intent.

