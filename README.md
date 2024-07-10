<div align="center">
  <h1>Weird JS</h1>
</div>

## Description
This repository contains a collection of weird JavaScript behaviors that you might encounter while working with the language. Each problem is accompanied by an explanation and code examples to demonstrate the behavior.

## Problems

### Problem 1
#### Floating-point arithmetic precision issues:
```javascript
console.log(0.1 + 0.2 === 0.3); // Output: false
```
When dealing with floating-point numbers in JavaScript, you may encounter precision issues due to the internal representation of numbers.

### Problem 2
#### NaN comparison:
```javascript
console.log(NaN === NaN); // Output: false
```
In JavaScript, `NaN` (Not a Number) is a special value used to represent the result of an operation that cannot produce a meaningful numeric result.

### Problem 3
#### Type coercion:
```javascript
console.log(1 + '1'); // Output: '11'
```
In JavaScript, type coercion refers to the automatic conversion of values from one data type to another. This can sometimes lead to unexpected behavior in expressions and operations.

### Problem 4
#### Implicit global variables:
```javascript
function test() {
    a = 10;
}
test();
console.log(a); // Output: 10
```
In JavaScript, variables declared without the `var`, `let`, or `const` keyword inside a function become global variables, even if they are assigned values inside a function scope.

### Problem 5
#### Truthy and falsy values:
```javascript
console.log(Boolean('false')); // Output: true
console.log(Boolean('')); // Output: false
```
In JavaScript, certain values are considered falsy, such as an empty string, `undefined`, `null`, `0`, `NaN`, and `false`. All other values are considered truthy.

### Problem 6
#### Automatic semicolon insertion:
```javascript
function test() {
    return
    {
        message: 'Hello'
    };
}
console.log(test()); // Output: undefined
```
JavaScript automatically inserts semicolons at the end of statements, which can lead to unexpected behavior if not careful.

### Problem 7
#### Equality comparisons with ==:
```javascript
console.log(0 == '0'); // Output: true
console.log(false == 'false'); // Output: false
```
The loose equality operator (`==`) performs type coercion, which can lead to unexpected results. It's generally recommended to use the strict equality operator (`===`) to avoid these issues.

### Problem 8
#### Inconsistent array length:
```javascript
const arr = [];
arr[5] = 'Hello';
console.log(arr.length); // Output: 6
```
In JavaScript, arrays are objects, and array indices are essentially object keys. Assigning a value to an index beyond the current length of the array creates "empty" slots in the array, leading to potentially confusing behavior.

### Problem 9
#### Redeclaring variables with var:
```javascript
var x = 10;
var x = 20;
console.log(x); // Output: 20
```
In JavaScript, using `var` allows you to redeclare the same variable within the same scope without any errors. This can lead to unexpected behavior and bugs in the code.

### Problem 10
#### Redeclaring variables with let:
```javascript
let y = 10;
let y = 20; // Output: SyntaxError: Identifier 'y' has already been declared
```
In JavaScript, using `let` does not allow you to redeclare the same variable within the same scope. Attempting to do so will result in a `SyntaxError`.

### Problem 11
#### Redeclaring variables with const:
```javascript
const z = 10;
const z = 20; // Output: SyntaxError: Identifier 'z' has already been declared
```
In JavaScript, using `const` does not allow you to redeclare the same variable within the same scope. Attempting to do so will result in a `SyntaxError`.

### Problem 12
#### Scope of variables declared with var:
```javascript
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10
}
test();
```
Variables declared with `var` have function scope, meaning they are accessible throughout the entire function, even if declared inside a block.

### Problem 13
#### Scope of variables declared with let:
```javascript
function test() {
    if (true) {
        let y = 10;
    }
    console.log(y); // Output: ReferenceError: y is not defined
}
test();
```
Variables declared with `let` have block scope, meaning they are only accessible within the block they are declared in (in this case, inside the `if` statement).

### Problem 14
#### Scope of variables declared with const:
```javascript
function test() {
    if (true) {
        const z = 10;
    }
    console.log(z); // Output: ReferenceError: z is not defined
}
test();
```
Variables declared with `const` have block scope like `let`, but they must be initialized with a value at the time of declaration. Attempting to access `z` outside its block results in a `ReferenceError`.

### Problem 15
#### Hoisting of variables declared with var:
```javascript
console.log(x); // Output: undefined
var x = 10;
```
Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means that while the variable `x` is accessible throughout its scope, it is initially `undefined` until it is assigned a value.

### Problem 16
#### Hoisting of variables declared with let:
```javascript
console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;
```
Variables declared with `let` are hoisted to the top of their block, but unlike `var`, they are not initialized until their declaration is evaluated. Accessing `y` before its declaration results in a `ReferenceError`.

### Problem 17
#### Hoisting of variables declared with const:
```javascript
console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
const z = 10;
```
Variables declared with `const` are hoisted to the top of their block like `let`, but they must be initialized with a value at the time of declaration. Accessing `z` before its initialization results in a `ReferenceError`.

### Problem 18
#### Changing const variables:
```javascript
const PI = 3.14;
PI = 3.14159; // Output: TypeError: Assignment to constant variable
```
Once a variable is declared with `const`, its value cannot be changed or reassigned. Attempting to reassign `PI` to a different value results in a `TypeError`.

### Problem 19
#### Empty array and empty object comparison:
```javascript
console.log([] === {}); // Output: false
```
In JavaScript, arrays and objects are different data types. Even though both `[]` (an empty array) and `{}` (an empty object) appear empty, they are not equal because they are of different types.

### Problem 20
#### typeof undefined:
```javascript
console.log(typeof undefined); // Output: 'undefined'
```
The `typeof` operator in JavaScript returns the data type of a variable or expression. When applied to `undefined`, it returns `'undefined'`, indicating that the variable or expression does not have a defined value.

### Problem 21
#### Implicit conversion in arithmetic operations:
```javascript
console.log(10 + '20'); // Output: '1020'
```
In JavaScript, when an operator is applied to operands of different types, such as a number and a string, JavaScript converts one of the operands to match the type of the other operand. This process is known as implicit type coercion.

### Problem 22
#### Null and undefined equality:
```javascript
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false
```
In JavaScript, `null` and `undefined` are two distinct types with different behaviors. The loose equality operator (`==`) considers them equal only when compared with each other or with `null == undefined`. The strict equality operator (`===`) does not consider them equal.

### Problem 23
#### Ternary operator with null:
```javascript
console.log(null ? 'true' : 'false'); // Output: 'false'
```
In JavaScript, the ternary operator evaluates the expression before the `?`. If the expression evaluates to `true`, it returns the value after the `?`; otherwise, it returns the value after the `:`. Since `null` evaluates to `false`, `'false'` is returned in this case.

### Problem 24
#### Use of for...in loop with strings:
```javascript
const str = 'Hello';
for (const index in str) {
    console.log(str[index]);
}
// Output: 'H', 'e', 'l', 'l', 'o'
```
In JavaScript, the `for...in` loop iterates over all enumerable properties of an object, including indices of strings. It's generally recommended to use `for...of` for iterating over strings to avoid unexpected behavior.

### Problem 25
#### Array length behavior with holes:
```javascript
const arr = [1, , , 4];
console.log(arr.length); // Output: 4
```
In JavaScript, arrays can have "holes" where elements are omitted. The `length` property of an array includes these holes, counting them as part of the total length.

### Problem 26
#### Array.prototype.toString behavior:
```javascript
console.log([1, [2, 3], 4].toString()); // Output: '1,2,3,4'
```
The `toString()` method in JavaScript converts an array to a string by joining all elements with a comma `,`. Nested arrays are also converted to strings, resulting in a flat, comma-separated list of values.

### Problem 27
#### String.prototype.substring behavior with negative indices:
```javascript
console.log('Hello'.substring(-1)); // Output: 'Hello'
```
In JavaScript, the `substring()` method treats negative indices as if they were 0, effectively starting at the beginning of the string.

### Problem 28
#### String.prototype.substring behavior with NaN indices:
```javascript
console.log('Hello'.substring(NaN)); // Output: 'Hello'
```
When `substring()` receives `NaN` as an argument, it is treated as `0`, effectively starting at the beginning of the string.

### Problem 29
#### String.prototype.substring behavior with astral characters:
```javascript
console.log('😊'.substring(0)); // Output: '😊'
```
The `substring()` method correctly handles astral characters (Unicode surrogate pairs) in JavaScript strings.

### Problem 30
#### String.prototype.substring behavior with out-of-range indices:
```javascript
console.log('Hello'.substring(10)); // Output: ''
```
When the end index in `substring()` exceeds the length of the string, an empty string `''` is returned.

### Problem 31
#### String.prototype.substring behavior with negative end index:
```javascript
console.log('Hello'.substring(0, -1)); // Output: 'Hell'
```
If the end index in `substring()` is negative, it is treated as `0`, effectively ignoring the negative value.

### Problem 32
#### String.prototype.padStart behavior with target length less than string length:
```javascript
console.log('Hello'.padStart(3, 'X')); // Output: 'Hello'
```
If the target length in `padStart()` is less than or equal to the length of the string, the original string is returned unchanged.

### Problem 33
#### String.prototype.padEnd behavior with target length less than string length:
```javascript
console.log('Hello'.padEnd(3, 'X')); // Output: 'Hello'
```
If the target length in `padEnd()` is less than or equal to the length of the string, the original string is returned unchanged.

### Problem 34
#### Object.prototype.toString behavior with arrays:
```javascript
console.log(Object.prototype.toString.call([])); // Output: '[object Array]'
```
The `toString()` method of `Object.prototype` returns a string representing the object's type. When applied to an array using `call()`, it returns `'[object Array]'`.

### Problem 35
#### Object.prototype.toString behavior with null:
```javascript
console.log(Object.prototype.toString.call(null)); // Output: '[object Null]'
```
When `toString()` is called on `null`, it returns `'[object Null]'`, indicating that `null` is of type `Null`.

### Problem 36
#### Object.prototype.toString behavior with undefined:
```javascript
console.log(Object.prototype.toString.call(undefined)); // Output: '[object Undefined]'
```
When `toString()` is called on `undefined`, it returns `'[object Undefined]'`, indicating that `undefined` is of type `Undefined`.

### Problem 37
#### Object.prototype.toString behavior with functions:
```javascript
console.log(Object.prototype.toString.call(function () { })); // Output: '[object Function]'
```
When `toString()` is called on a function, it returns `'[object Function]'`, indicating that the object is of type `Function`.

### Problem 38
#### Object.prototype.toString behavior with dates:
```javascript
console.log(Object.prototype.toString.call(new Date())); // Output: '[object Date]'
```
When `toString()` is called on a `Date` object, it returns `'[object Date]'`, indicating that the object is of type `Date`.

### Problem 39
#### Object.prototype.toString behavior with regular expressions:
```javascript
console.log(Object.prototype.toString.call(/abc/)); // Output: '[object RegExp]'
```
When `toString()` is called on a regular expression (`RegExp`) object, it returns `'[object RegExp]'`, indicating that the object is of type `RegExp`.

### Problem 40
#### Object.prototype.toString behavior with numbers:
```javascript
console.log(Object.prototype.toString.call(123)); // Output: '[object Number]'
```
When `toString()` is called on a number (`123`), it returns `'[object Number]'`, indicating that the object is of type `Number`.

Certainly! Here are problems 40 to 60 with explanations formatted in markdown for README.md without using horizontal rules:

### Problem 41
#### Object.prototype.toString behavior with strings:
```javascript
console.log(Object.prototype.toString.call('Hello')); // Output: '[object String]'
```
When `toString()` is called on a string (`'Hello'`), it returns `'[object String]'`, indicating that the object is of type `String`.

### Problem 42
#### Object.prototype.toString behavior with booleans:
```javascript
console.log(Object.prototype.toString.call(true)); // Output: '[object Boolean]'
```
When `toString()` is called on a boolean (`true`), it returns `'[object Boolean]'`, indicating that the object is of type `Boolean`.

### Problem 43
#### Object.prototype.toString behavior with objects:
```javascript
console.log(Object.prototype.toString.call({})); // Output: '[object Object]'
```
When `toString()` is called on an object (`{}`), it returns `'[object Object]'`, indicating that the object is of type `Object`.

### Problem 44
#### Object.prototype.toString behavior with symbols:
```javascript
console.log(Object.prototype.toString.call(Symbol())); // Output: '[object Symbol]'
```
When `toString()` is called on a symbol (`Symbol()`), it returns `'[object Symbol]'`, indicating that the object is of type `Symbol`.

### Problem 45
#### Object.prototype.toString behavior with BigInts:
```javascript
console.log(Object.prototype.toString.call(BigInt(10))); // Output: '[object BigInt]'
```
When `toString()` is called on a BigInt (`BigInt(10)`), it returns `'[object BigInt]'`, indicating that the object is of type `BigInt`.

### Problem 46
#### Object.prototype.toString behavior with array-like objects:
```javascript
console.log(Object.prototype.toString.call({ length: 0 })); // Output: '[object Object]'
```
When `toString()` is called on an object with a `length` property (`{ length: 0 }`), it returns `'[object Object]'`. This behavior is different from arrays, which return `'[object Array]'`.

### Problem 47
#### Object.prototype.toString behavior with arguments objects:
```javascript
console.log(Object.prototype.toString.call(arguments)); // Output: '[object Arguments]'
```
When `toString()` is called on an arguments object (`arguments`), it returns `'[object Arguments]'`, indicating that the object is of type `Arguments`.

### Problem 48
#### Object.prototype.toString behavior with error objects:
```javascript
console.log(Object.prototype.toString.call(new Error())); // Output: '[object Error]'
```
When `toString()` is called on an error object (`new Error()`), it returns `'[object Error]'`, indicating that the object is of type `Error`.

### Problem 49
#### Object.prototype.toString behavior with typed arrays:
```javascript
console.log(Object.prototype.toString.call(new Int8Array())); // Output: '[object Int8Array]'
```
When `toString()` is called on a typed array (`new Int8Array()`), it returns `'[object Int8Array]'`, indicating the specific type of the typed array.

### Problem 50
#### Object.prototype.toString behavior with ArrayBuffer objects:
```javascript
console.log(Object.prototype.toString.call(new ArrayBuffer())); // Output: '[object ArrayBuffer]'
```
When `toString()` is called on an `ArrayBuffer` object (`new ArrayBuffer()`), it returns `'[object ArrayBuffer]'`, indicating that the object is of type `ArrayBuffer`.

### Problem 51
#### Async function return behavior:
```javascript
async function asyncFunc() {
    return 10;
}
asyncFunc().then(console.log); // Output: 10
```
Async functions in JavaScript return promises. When `asyncFunc()` is called, it returns a promise that resolves to `10`. The `.then()` method is used to log the resolved value (`10`).

### Problem 52
#### Async function error handling:
```javascript
async function asyncFunc() {
    throw new Error('Async error');
}
asyncFunc().catch(console.error); // Output: Error: Async error
```
Async functions can also handle errors using `try...catch` or by chaining a `.catch()` method to the returned promise. In this case, `asyncFunc()` throws an error, which is caught and logged using `console.error`.

### Problem 53
#### Promise.all behavior with empty iterable:
```javascript
Promise.all([]).then(console.log); // Output: []
```
`Promise.all()` returns a single promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first promise that rejects. When called with an empty array (`[]`), it immediately resolves with an empty array.

### Problem 54
#### Promise.allSettled behavior with empty iterable:
```javascript
Promise.allSettled([]).then(console.log); // Output: []
```
`Promise.allSettled()` returns a promise that resolves after all the given promises have either fulfilled or rejected, with an array of objects that each describe the outcome of each promise. When called with an empty array (`[]`), it resolves immediately with an empty array.

### Problem 55
#### Promise.race behavior with empty iterable:
```javascript
Promise.race([]).then(console.log); // (No output, promise never settles)
```
`Promise.race()` returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise. When called with an empty array (`[]`), the resulting promise never settles because there are no promises to compete against.

### Problem 56
#### Negative zero behavior in comparisons:
```javascript
console.log(-0 === 0); // Output: true
```
In JavaScript, `-0` and `0` are considered equal in value but may have different representations in certain contexts, such as in division.

### Problem 57
#### Negative zero behavior in division:
```javascript
console.log(1 / -0); // Output: -Infinity
```
Dividing a positive number (`1`) by `-0` results in `-Infinity`.

### Problem 58
#### Negative zero behavior in string conversion:
```javascript
console.log(String(-0)); // Output: '0'
```
Converting `-0` to a string results in `'0'`.

### Problem 59
#### Negative zero behavior in JSON stringification:
```javascript
console.log(JSON.stringify(-0)); // Output: '0'
```
When `-0` is serialized to JSON using `JSON.stringify()`, it is converted to `'0'`.

### Problem 60
#### Negative zero behavior in object property comparison:
```javascript
const obj = { a: 0, b: -0 };
console.log(obj.a === obj.b); // Output: true
```
In JavaScript, `-0` and `0` are considered equal when used as property values of objects. Therefore, `obj.a === obj.b` evaluates to `true`.

### Problem 61
#### Negative zero behavior in array sorting:
```javascript
const arr = [1, -0, 0];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [-0, 0, 1]
```
Sorting an array with `-0` and `0` results in `-0` appearing before `0` due to the default sorting behavior in JavaScript.

### Problem 62
#### Function.prototype.bind behavior with constructors:
```javascript
function Person(name) {
    this.name = name;
}
const obj = {};
const boundFunc = Person.bind(obj);
boundFunc('Alice');
console.log(obj.name); // Output: 'Alice'
```
Binding a constructor function with `Function.prototype.bind` allows setting `this` to a specified object (`obj`) when the bound function is called.

### Problem 63
#### Function.prototype.bind behavior with bound functions:
```javascript
function greet(greeting) {
    return greeting + ' ' + this.name;
}
const obj = { name: 'Alice' };
const boundGreet = greet.bind(obj, 'Hello');
console.log(boundGreet()); // Output: 'Hello Alice'
```
Binding a function with `Function.prototype.bind` allows presetting some arguments, in this case, `greeting`, and setting the `this` context.

### Problem 64
#### Function.prototype.bind behavior with partial application:
```javascript
function add(a, b) {
    return a + b;
}
const add5 = add.bind(null, 5);
console.log(add5(10)); // Output: 15
```
Partial application using `Function.prototype.bind` allows fixing some arguments of a function, creating a new function (`add5`) that accepts the remaining arguments.

### Problem 65
#### Function.prototype.call behavior with constructors:
```javascript
function Person(name) {
    this.name = name;
}
const obj = {};
Person.call(obj, 'Bob');
console.log(obj.name); // Output: 'Bob'
```
Using `Function.prototype.call` allows invoking a constructor function (`Person`) with a specified `this` context (`obj`).

### Problem 66
#### Function.prototype.call behavior with bound functions:
```javascript
function greet(greeting) {
    return greeting + ' ' + this.name;
}
const obj = { name: 'Bob' };
const result = greet.call(obj, 'Hello');
console.log(result); // Output: 'Hello Bob'
```
Using `Function.prototype.call` allows invoking a function (`greet`) with a specified `this` context (`obj`) and arguments (`'Hello'`).

### Problem 67
#### Function.prototype.call behavior with undefined and null:
```javascript
function test() {
    console.log(this);
}
test.call(undefined); // Output: global object (in non-strict mode), TypeError in strict mode
test.call(null); // Output: global object (in non-strict mode), TypeError in strict mode
```
Using `Function.prototype.call` with `undefined` or `null` sets `this` to the global object in non-strict mode or throws a `TypeError` in strict mode.

### Problem 68
#### Function.prototype.apply behavior with arrays:
```javascript
function greet(greeting, punctuation) {
    return greeting + ' ' + this.name + punctuation;
}
const obj = { name: 'Charlie' };
const args = ['Hello', '!'];
console.log(greet.apply(obj, args)); // Output: 'Hello Charlie!'
```
Using `Function.prototype.apply` allows invoking a function (`greet`) with a specified `this` context (`obj`) and an array of arguments (`args`).

### Problem 69
#### Function.prototype.apply behavior with undefined and null:
```javascript
function test() {
    console.log(this);
}
test.apply(undefined); // Output: global object (in non-strict mode), TypeError in strict mode
test.apply(null); // Output: global object (in non-strict mode), TypeError in strict mode
```
Using `Function.prototype.apply` with `undefined` or `null` sets `this` to the global object in non-strict mode or throws a `TypeError` in strict mode.

### Problem 70
#### Function.prototype.bind behavior with arrow functions:
```javascript
const obj = {
    value: 42,
    getValue: () => this.value
};
console.log(obj.getValue()); // Output: undefined
```
Arrow functions do not have their own `this` context. They inherit `this` from the enclosing lexical scope, resulting in `undefined` when accessed.

### Problem 71
#### Arrow function behavior with this:
```javascript
const obj = {
    value: 42,
    getValue: function () {
        return () => this.value;
    }
};
const boundFunc = obj.getValue();
console.log(boundFunc()); // Output: 42
```
Arrow functions inherit `this` from their enclosing function. In this case, `this` refers to `obj`.

### Problem 72
#### Arrow function behavior with arguments objects:
```javascript
const test = () => arguments.length;
console.log(test(1, 2, 3)); // Output: ReferenceError: arguments is not defined
```
Arrow functions do not have their own `arguments` object. Attempting to access `arguments` within an arrow function results in a `ReferenceError`.

### Problem 73
#### Arrow function behavior with new:
```javascript
const Person = () => { };
const person = new Person(); // Output: TypeError: Person is not a constructor
```
Arrow functions cannot be used as constructors. Attempting to use `new` with an arrow function results in a `TypeError`.

### Problem 74
#### Arrow function behavior with prototype:
```javascript
const obj = {
    method: () => { }
};
console.log(obj.method.prototype); // Output: undefined
```
Arrow functions do not have a `prototype` property. Attempting to access `prototype` on an arrow function results in `undefined`.

### Problem 75
#### Destructuring assignment with arrays:
```javascript
const [a, b] = [1, 2, 3];
console.log(a, b); // Output: 1 2
```
Destructuring assignment extracts values from arrays. In this case, `a` and `b` are assigned the first two elements of the array.

### Problem 76
#### Destructuring assignment with objects:
```javascript
const { x, y } = { x: 1, y: 2, z: 3 };
console.log(x, y); // Output: 1 2
```
Destructuring assignment extracts values from objects. In this case, `x` and `y` are assigned the corresponding properties from the object.

### Problem 77
#### Destructuring assignment with nested objects:
```javascript
const { a: { b } } = { a: { b: 1 } };
console.log(b); // Output: 1
```
Destructuring assignment can be used with nested objects. In this case, `b` is extracted from the nested object.

### Problem 78
#### Destructuring assignment with default values:
```javascript
const [a = 1, b = 2] = [];
console.log(a, b); // Output: 1 2
```
Default values can be provided in destructuring assignments. In this case, `a` and `b` are assigned default values since the array is empty.

### Problem 79
#### Destructuring assignment with rest operator:
```javascript
const [a, ...rest] = [1, 2, 3, 4, 5];
console.log(a, rest); // Output: 1 [2, 3, 4, 5]
```
The rest operator (`...`) collects the remaining elements into an array. In this case, `rest` contains `[2, 3, 4, 5]`.

### Problem 80
#### Destructuring assignment with computed property names:
```javascript
const propName = 'x';
const { [propName]: value } = { x: 1 };
console.log(value); // Output: 1
```
Computed property names can be used in destructuring assignments. In this case, `value` is assigned the value of the `x` property.

### Problem 81
#### Default parameters behavior with falsy values:
```javascript
function test(a = 1, b = 2) {
    console.log(a, b);
}
test(0, null); // Output: 0 null
```
Default parameters are only used when the argument is `undefined`. Falsy values like `0` and `null` do not trigger default parameters.

### Problem 82
#### Default parameters behavior with undefined:
```javascript
function test(a = 1) {
    console.log(a);
}
test(undefined); // Output: 1
```
Default parameters are used when the argument is `undefined`. In this case, `a` is assigned the default value `1`.

### Problem 83
#### Default parameters behavior with rest operator:
```javascript
function test(a = 1, ...rest) {
    console.log(a, rest);
}
test(); // Output: 1 []
```
Default parameters can be used with the rest operator. In this case, `a` is assigned the default value `1`, and `rest` is an empty array.

### Problem 84
#### Template literals behavior with expression interpolation:
```javascript
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`); // Output: 'Fifteen is 15 and not 20.'
```
Template

 literals allow embedding expressions using `${}`. In this case, `a + b` and `2 * a + b` are evaluated and included in the string.

### Problem 85
#### Template literals behavior with multi-line strings:
```javascript
console.log(`string text line 1
string text line 2`); // Output: 'string text line 1\nstring text line 2'
```
Template literals support multi-line strings, preserving line breaks as `\n`.

### Problem 86
#### Template literals behavior with tagged template literals:
```javascript
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
const a = 5;
const b = 10;
tag`Hello ${a + b} world ${a * b}`; // Output: ['Hello ', ' world ', ''], [15, 50]
```
Tagged template literals allow customizing string processing. In this case, `tag` receives the strings and values separately.

### Problem 87
#### Spread syntax behavior with arrays:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
```
Spread syntax allows spreading elements of an array into another array. In this case, `arr1` is spread into `arr2` followed by `4` and `5`.

### Problem 88
#### Spread syntax behavior with objects:
```javascript
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };
console.log(obj2); // Output: { x: 1, y: 2, z: 3 }
```
Spread syntax allows spreading properties of an object into another object. In this case, `obj1` is spread into `obj2` followed by `z: 3`.

### Problem 89
#### Spread syntax behavior with nested objects:
```javascript
const obj1 = { x: { y: 1 } };
const obj2 = { ...obj1 };
obj2.x.y = 2;
console.log(obj1.x.y); // Output: 2
```
Spread syntax performs a shallow copy of objects. In this case, `obj2` shares the same nested object reference (`x`) as `obj1`.

### Problem 90
#### Spread syntax behavior with function arguments:
```javascript
function test(a, b, c) {
    console.log(a, b, c);
}
const args = [1, 2, 3];
test(...args); // Output: 1 2 3
```
Spread syntax allows spreading array elements as function arguments. In this case, `args` is spread into `test`.

### Problem 91
#### Nullish coalescing operator behavior with falsy values:
```javascript
const a = null;
const b = undefined;
console.log(a ?? 'default'); // Output: 'default'
console.log(b ?? 'default'); // Output: 'default'
```
The nullish coalescing operator (`??`) returns the right-hand side value when the left-hand side is `null` or `undefined`.

### Problem 92
#### Nullish coalescing operator behavior with empty strings:
```javascript
const str = '';
console.log(str ?? 'default'); // Output: ''
```
The nullish coalescing operator (`??`) does not consider empty strings as `null` or `undefined`. In this case, `str` remains `''`.

### Problem 93
#### Nullish coalescing operator behavior with zero:
```javascript
const num = 0;
console.log(num ?? 'default'); // Output: 0
```
The nullish coalescing operator (`??`) does not consider zero as `null` or `undefined`. In this case, `num` remains `0`.

### Problem 94
#### Optional chaining behavior with undefined:
```javascript
const obj = {};
console.log(obj.prop?.nestedProp); // Output: undefined
```
Optional chaining (`?.`) allows safely accessing deeply nested properties. If `prop` is `undefined`, `undefined` is returned instead of an error.

### Problem 95
#### Optional chaining behavior with null:
```javascript
const obj = null;
console.log(obj?.prop); // Output: undefined
```
Optional chaining (`?.`) safely handles `null` values. If `obj` is `null`, `undefined` is returned instead of an error.

### Problem 96
#### BigInt behavior with regular arithmetic operators:
```javascript
const bigInt = BigInt(10);
console.log(bigInt * 2n); // Output: 20n
```
BigInt can be used with arithmetic operators, provided both operands are of type `bigint`.

### Problem 97
#### BigInt behavior with mixed operations:
```javascript
const bigInt = BigInt(10);
console.log(bigInt + 2); // Output: TypeError: Cannot mix BigInt and other types, use explicit conversions
```
Mixing `BigInt` with other types in arithmetic operations results in a `TypeError`. Explicit conversion is required.

### Problem 98
#### BigInt behavior with typeof operator:
```javascript
const bigInt = BigInt(10);
console.log(typeof bigInt); // Output: 'bigint'
```
The `typeof` operator returns `'bigint'` for `BigInt` values.

### Problem 99
#### BigInt behavior with JSON.stringify:
```javascript
const bigInt = BigInt(10);
console.log(JSON.stringify(bigInt)); // Output: '10'
```
`JSON.stringify` converts `BigInt` values to strings.

### Problem 100
#### BigInt behavior with bitwise operators:
```javascript
const bigInt = BigInt(10);
console.log(bigInt << 2n); // Output: 40n
```
Bitwise operators can be used with `BigInt`. In this case, `bigInt` is shifted left by `2` bits.

### Problem 101
#### RegExp behavior with backslashes in string literals:
```javascript
const regex = /\w/;
console.log(regex); // Output: /\w/
```
The backslash (`\`) in the regular expression (`/\w/`) escapes the following character (`w`). In the console output, the regex is represented as `/\w/`.

### Problem 102
#### RegExp behavior with escape sequences:
```javascript
const regex = new RegExp('\\w');
console.log(regex); // Output: /\w/
```
Using `new RegExp('\\w')` creates a regular expression object matching any word character (`\w`). The double backslash (`\\`) is needed to escape the backslash in the string literal.

### Problem 103
#### RegExp behavior with character classes:
```javascript
const regex = /[A-Z]/i;
console.log(regex.test('a')); // Output: true
```
The regular expression `/[A-Z]/i` tests if there is any uppercase letter (`A-Z`) case-insensitively (`i`). It returns `true` for the lowercase letter `'a'`.

### Problem 104
#### RegExp behavior with lookaheads:
```javascript
const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
console.log(regex.test('Password1')); // Output: true
```
The regex `/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/` checks if a string contains at least one digit (`\d`), one lowercase letter (`[a-z]`), one uppercase letter (`[A-Z]`), and is at least 6 characters long. `'Password1'` satisfies these conditions.

### Problem 105
#### RegExp behavior with Unicode property escapes:
```javascript
const regex = /\p{Emoji}/u;
console.log(regex.test('😊')); // Output: true
```
The regex `/\p{Emoji}/u` matches any Unicode emoji character. `'😊'` is an emoji, so `regex.test('😊')` returns `true`.

### Problem 106
#### RegExp behavior with named capturing groups:
```javascript
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = regex.exec('2022-01-01');
console.log(match.groups.year); // Output: '2022'
```
The regex `/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/` captures year, month, and day from a date string (`'2022-01-01'`). `match.groups.year` accesses the captured `year`, which is `'2022'`.

### Problem 107
#### RegExp behavior with dot matches newline:
```javascript
const regex = /./s;
console.log(regex.test('\n')); // Output: true
```
The regex `/.s/` with the `s` flag (`/./s`) matches any character (`.`), including newline characters (`\n`). Hence, `regex.test('\n')` returns `true`.

### Problem 108
#### RegExp behavior with flags:
```javascript
const regex = /abc/i;
console.log(regex.flags); // Output: 'i'
```
The regex `/abc/i` has the `i` flag, which indicates case insensitivity. `regex.flags` retrieves the flags associated with the regex, here `'i'`.

### Problem 109
#### Object.hasOwnProperty behavior with inherited properties:
```javascript
const obj = Object.create({ prop: 'inherited' });
console.log(obj.hasOwnProperty('prop')); // Output: false
```
`Object.create({ prop: 'inherited' })` creates `obj` with an inherited property `prop`. `obj.hasOwnProperty('prop')` checks if `prop` is a direct property of `obj`, returning `false` since it's inherited.

### Problem 110
#### Object.assign behavior with getters:
```javascript
const obj1 = { get prop() { return 'value'; } };
const obj2 = {};
Object.assign(obj2, obj1);
console.log(obj2); // Output: {}
```
`Object.assign(obj2, obj1)` copies properties from `obj1` to `obj2`. Since `obj1` has a getter for `prop`, not a value, it's not enumerable and won't be copied. Hence, `obj2` remains empty.

### Problem 111
#### Object.getOwnPropertyDescriptors behavior with getters/setters:
```javascript
const obj = {
    get prop() { return 'value'; },
    set prop(value) { console.log(value); }
};
console.log(Object.getOwnPropertyDescriptors(obj));
// Output: { prop: { get: [Function: get prop], set: [Function: set prop], enumerable: true, configurable: true } }
```
`Object.getOwnPropertyDescriptors(obj)` returns property descriptors for `obj`. It includes descriptors for `prop`, indicating it has a getter and a setter, among other attributes.

### Problem 112
#### Object.freeze behavior with nested objects:
```javascript
const obj = { nested: {} };
Object.freeze(obj);
obj.nested.prop = 'value';
console.log(obj.nested.prop); // Output: 'value'
```
`Object.freeze(obj)` makes `obj` and its properties immutable. However, it only freezes shallow properties, so `obj.nested.prop = 'value'` modifies `nested.prop` successfully.

### Problem 113
#### Object.seal behavior with property deletion:
```javascript
const obj = { prop: 'value' };
Object.seal(obj);
delete obj.prop;
console.log(obj); // Output: { prop: 'value' }
```
`Object.seal(obj)` prevents adding or removing properties but allows modifying existing ones. `delete obj.prop` doesn't remove `prop` due to sealing, hence `obj` remains unchanged.

### Problem 114
#### Object.preventExtensions behavior with property addition:
```javascript
const obj = {};
Object.preventExtensions(obj);
obj.prop = 'value';
console.log(obj.prop); // Output: undefined
```
`Object.preventExtensions(obj)` prevents adding new properties to `obj`. `obj.prop = 'value'` fails to add `prop`, so accessing `obj.prop` returns `undefined`.

### Problem 115
#### Object.setPrototypeOf behavior with circular references:
```javascript
const obj1 = {};
const obj2 = {};
obj1.child = obj2;
obj2.parent = obj1;
Object.setPrototypeOf(obj1, obj2);
console.log(obj1.parent.child === obj2); // Output: true
```
`Object.setPrototypeOf(obj1, obj2)` sets `obj1`'s prototype to `obj2`, creating a circular reference. `obj1.parent.child === obj2` confirms the circular relationship.

### Problem 116
#### Array.from behavior with array-like objects:
```javascript
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.from(arrayLike)); // Output: ['a', 'b']
```
`Array.from(arrayLike)` converts `arrayLike` (an array-like object) into a real array. It includes items `'a'` and `'b'`, based on the `length` property.

### Problem 117
#### Array.prototype.includes behavior with NaN:
```javascript
const arr = [NaN];
console.log(arr.includes(NaN)); // Output: true
```
`arr.includes(NaN)` checks if `arr` includes `NaN`. Arrays in JavaScript can use `includes()` to find `NaN` among their elements.

### Problem 118
#### Array.prototype.flat behavior with depth:
```javascript
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // Output: [1, 2, 3]
```
`arr.flat(2)` flattens `arr` to the specified depth (`2` levels). It produces `[1, 2, 3]` by flattening nested arrays up to the second level.

### Problem 119
#### Array.prototype.flatMap behavior with flatMap:
```javascript
const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6]
```
`arr.flatMap(x => [x, x * 2])` applies a mapping function to each element of `arr` and flattens the result by one level. It doubles each element and creates a new array `[1, 2, 2, 4, 3, 6]`.

### Problem 120
#### Array.prototype.sort behavior with numbers:
```javascript
const arr = [1, 10, 2];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 10]
```
`arr.sort((a, b) => a - b)` sorts `arr` in ascending numerical order. The callback `(a, b) => a - b` ensures numbers are compared correctly.

### Problem 121
#### Array.prototype.slice behavior with negative indices:
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-3)); // Output: [3, 4, 5]
```
`arr.slice(-3)` extracts elements starting from the third element from the end of `arr`. It returns `[3, 4, 5]`.

### Problem 122
#### Array.prototype.slice behavior with floating-point indices:
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr

.slice(1.5, 3.5)); // Output: [2, 3]
```
`arr.slice(1.5, 3.5)` extracts elements between the indices `1.5` and `3.5` (exclusive). It returns `[2, 3]`.

### Problem 123
#### Array.prototype.splice behavior with negative start index:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1);
console.log(arr); // Output: [1, 2, 3, 5]
```
`arr.splice(-2, 1)` removes `1` element starting from the second-to-last element (`4`) in `arr`. It modifies `arr` to `[1, 2, 3, 5]`.

### Problem 124
#### Array.prototype.splice behavior with negative delete count:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, -1);
console.log(arr); // Output: [1, 2, 3, 4, 5]
```
`arr.splice(2, -1)` does not remove any elements from `arr` because the delete count `-1` is invalid. It leaves `arr` unchanged.

### Problem 125
#### Array.prototype.splice behavior with adding elements:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b');
console.log(arr); // Output: [1, 2, 'a', 'b', 3, 4, 5]
```
`arr.splice(2, 0, 'a', 'b')` inserts `'a'` and `'b'` starting from index `2` in `arr`, without removing any elements. It modifies `arr` to `[1, 2, 'a', 'b', 3, 4, 5]`.

### Problem 126
#### Set.prototype.has behavior with NaN:
```javascript
const set = new Set();
set.add(NaN);
console.log(set.has(NaN)); // Output: true
```
`set.has(NaN)` checks if `set` contains `NaN`. Sets in JavaScript handle `NaN` uniquely, so this returns `true`.

### Problem 127
#### Set.prototype.forEach behavior with thisArg:
```javascript
const set = new Set([1, 2, 3]);
const obj = {
    callback(value) {
        console.log(this === obj);
        console.log(value);
    }
};
set.forEach(obj.callback, obj);
// Output: true, 1, true, 2, true, 3
```
`set.forEach(obj.callback, obj)` iterates over `set`, calling `obj.callback` with each value. The `thisArg` (`obj`) sets `this` within `callback`, confirming `this === obj`.

### Problem 128
#### Map.prototype.get behavior with NaN keys:
```javascript
const map = new Map();
map.set(NaN, 'value');
console.log(map.get(NaN)); // Output: 'value'
```
`map.get(NaN)` retrieves the value associated with the key `NaN` in `map`. Maps in JavaScript handle `NaN` as a distinct key, so this returns `'value'`.

### Problem 129
#### Map.prototype.forEach behavior with thisArg:
```javascript
const map = new Map([[1, 'a'], [2, 'b'], [3, 'c']]);
const obj = {
    callback(value, key) {
        console.log(this === obj);
        console.log(key, value);
    }
};
map.forEach(obj.callback, obj);
// Output: true, 1, 'a', true, 2, 'b', true, 3, 'c'
```
`map.forEach(obj.callback, obj)` iterates over `map`, calling `obj.callback` with each key-value pair. The `thisArg` (`obj`) sets `this` within `callback`, confirming `this === obj`.

### Problem 130
#### WeakMap behavior with object keys:
```javascript
const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: 'value'
```
`weakMap.get(key)` retrieves the value associated with the object `key` in `weakMap`. WeakMaps in JavaScript use objects as keys, allowing associated values to be garbage-collected if the key is no longer reachable.

### Problem 131
#### WeakMap behavior with primitive keys:
```javascript
const weakMap = new WeakMap();
const key = 'key';
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: undefined
```
`weakMap.get(key)` retrieves `undefined` because `weakMap` uses object references as keys. `'key'` is a primitive, so it isn't a valid key for `weakMap`.

### Problem 132
#### WeakSet behavior with object values:
```javascript
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
```
`weakSet.has(obj)` checks if `weakSet` contains `obj`. WeakSets in JavaScript handle object references uniquely, so this returns `true`.

### Problem 133
#### WeakSet behavior with primitive values:
```javascript
const weakSet = new WeakSet();
weakSet.add('value');
console.log(weakSet.has('value')); // Output: false
```
`weakSet.has('value')` returns `false` because WeakSets in JavaScript only handle object references. `'value'` is a primitive value, not an object, so it can't be stored in `weakSet`.

### Problem 134
#### Date.prototype.toISOString behavior with time zones:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toISOString()); // Output: '2022-01-01T00:00:00.000Z'
```
`date.toISOString()` returns the date and time string in ISO 8601 format, always in UTC time zone (`Z` at the end). This example prints `'2022-01-01T00:00:00.000Z'`.

### Problem 135
#### Date.prototype.toJSON behavior with toJSON:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toJSON()); // Output: '2022-01-01T00:00:00.000Z'
```
`date.toJSON()` returns the date and time string in ISO 8601 format, similar to `toISOString()`, always in UTC time zone. This prints `'2022-01-01T00:00:00.000Z'`.

### Problem 136
#### Date.prototype.toString behavior with time zones:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toString()); // Output: 'Sat Jan 01 2022 02:00:00 GMT+0200 (Central European Standard Time)'
```
`date.toString()` returns a human-readable string representation of the date and time. This example prints `'Sat Jan 01 2022 02:00:00 GMT+0200 (Central European Standard Time)'`, accounting for local time zone (UTC+2).

### Problem 137
#### Date.prototype.toString behavior with UTC method:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toUTCString()); // Output: 'Sat, 01 Jan 2022 00:00:00 GMT'
```
`date.toUTCString()` returns a string representation of the date and time in UTC, following the RFC 1123 date format. This prints `'Sat, 01 Jan 2022 00:00:00 GMT'`.

### Problem 138
#### Date.prototype.toString behavior with custom format:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Output: 'Saturday, January 1, 2022'
```
`date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })` formats `date` using the specified options (`'long'` weekday and month names, numeric year and day), resulting in `'Saturday, January 1, 2022'`.

### Problem 139
#### Date.prototype.toString behavior with date component methods:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getDate()); // Output: 1
console.log(date.getMonth()); // Output: 0 (January is represented as 0)
console.log(date.getFullYear()); // Output: 2022
```
`date.getDate()` returns the day of the month (`1`).
`date.getMonth()` returns the month (`0` for January).
`date.getFullYear()` returns the year (`2022`).

### Problem 140
#### Date.prototype.toString behavior with time component methods:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getHours()); // Output: 2 (UTC hour)
console.log(date.getMinutes()); // Output: 0
console.log(date.getSeconds()); // Output: 0
console.log(date.getMilliseconds()); // Output: 0
```
`date.getHours()` returns the hour (`2` in UTC).
`date.getMinutes()` returns the minutes (`0`).
`date.getSeconds()` returns the seconds (`0`).
`date.getMilliseconds()` returns the milliseconds (`0`).

### Problem 141
#### Date.prototype.toString behavior with day of week method:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getDay()); // Result: 6 (Saturday)
```
- `date.getDay()` retrieves the day of the week as an integer (0 for Sunday, 6 for Saturday).

### Problem 142
#### Date.prototype.toString behavior with time zone offset method:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getTimezoneOffset()); // Result: -120 (offset in minutes, UTC+2)
```
`date.getTimezoneOffset()` returns the difference in minutes between UTC and the local time zone.

### Problem 143
#### Math.max behavior with array of numbers:
```javascript
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // Result: 3
```
`Math.max(...arr)` returns the highest value from the array `[1, 2, 3]`.

### Problem 144
#### Math.max behavior with variable arguments:
```javascript
console.log(Math.max(1, 2, 3)); // Result: 3
```
`Math.max(1, 2, 3)` returns the highest value among the provided arguments.

### Problem 145
#### Math.min behavior with array of numbers:
```javascript
const arr = [1, 2, 3];
console.log(Math.min(...arr)); // Result: 1
```
`Math.min(...arr)` returns the lowest value from the array `[1, 2, 3]`.

### Problem 146
#### Math.min behavior with variable arguments:
```javascript
console.log(Math.min(1, 2, 3)); // Result: 1
```
`Math.min(1, 2, 3)` returns the lowest value among the provided arguments.

### Problem 147
#### Math.pow behavior with fractional exponents:
```javascript
console.log(Math.pow(8, 1 / 3)); // Result: 2
```
`Math.pow(8, 1 / 3)` calculates the cubic root of `8`.

### Problem 148
#### Math.pow behavior with negative bases and odd exponents:
```javascript
console.log(Math.pow(-2, 3)); // Result: -8
```
`Math.pow(-2, 3)` raises `-2` to the power of `3`.

### Problem 149
#### Math.pow behavior with negative bases and even exponents:
```javascript
console.log(Math.pow(-2, 4)); // Result: 16
```
`Math.pow(-2, 4)` raises `-2` to the power of `4`.

### Problem 150
#### Math.pow behavior with non-integer exponents:
```javascript
console.log(Math.pow(4, 0.5)); // Result: 2
```
`Math.pow(4, 0.5)` calculates the square root of `4`.