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
When dealing with floating-point numbers in JavaScript, you may encounter precision issues due to the internal representation of numbers. This is because JavaScript uses binary floating-point format (IEEE 754) which cannot precisely represent some decimal numbers, leading to small rounding errors.

### Problem 2
#### NaN comparison:
```javascript
console.log(NaN === NaN); // Output: false
```
In JavaScript, `NaN` (Not a Number) is a special value used to represent the result of an operation that cannot produce a meaningful numeric result. Comparing `NaN` to any value, including itself, will always result in `false`. Instead, use `Number.isNaN()` to check if a value is `NaN`.

### Problem 3
#### Type coercion:
```javascript
console.log(1 + '1'); // Output: '11'
```
In JavaScript, type coercion refers to the automatic conversion of values from one data type to another. In this example, the number `1` is coerced to a string, resulting in the concatenation of `'1'` and `'1'` to produce `'11'`. This can sometimes lead to unexpected behavior in expressions and operations.

### Problem 4
#### Implicit global variables:
```javascript
function test() {
    a = 10;
}
test();
console.log(a); // Output: 10
```
In JavaScript, variables declared without the `var`, `let`, or `const` keyword inside a function become global variables, even if they are assigned values inside a function scope. This can lead to unintended consequences and difficult-to-trace bugs in larger codebases.

### Problem 5
#### Truthy and falsy values:
```javascript
console.log(Boolean('false')); // Output: true
console.log(Boolean('')); // Output: false
```
In JavaScript, certain values are considered falsy, such as an empty string, `undefined`, `null`, `0`, `NaN`, and `false`. All other values, including non-empty strings like `'false'`, are considered truthy.

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
JavaScript automatically inserts semicolons at the end of statements, which can lead to unexpected behavior if not careful. In this case, the `return` statement is interpreted as `return;`, causing the function to return `undefined` instead of the intended object.

### Problem 7
#### Equality comparisons with `==`:
```javascript
console.log(0 == '0'); // Output: true
console.log(false == 'false'); // Output: false
```
The loose equality operator (`==`) performs type coercion, which can lead to unexpected results. It's generally recommended to use the strict equality operator (`===`) to avoid these issues, as it checks for both value and type equality without coercion.

### Problem 8
#### Inconsistent array length:
```javascript
const arr = [];
arr[5] = 'Hello';
console.log(arr.length); // Output: 6
```
In JavaScript, arrays are objects, and array indices are essentially object keys. Assigning a value to an index beyond the current length of the array creates "empty" slots in the array, leading to potentially confusing behavior. The array length property reflects the highest index plus one.

### Problem 9
#### Redeclaring variables with `var`:
```javascript
var x = 10;
var x = 20;
console.log(x); // Output: 20
```
In JavaScript, using `var` allows you to redeclare the same variable within the same scope without any errors. This can lead to unexpected behavior and bugs in the code, as the initial value can be overwritten without warning.

### Problem 10
#### Redeclaring variables with `let`:
```javascript
let y = 10;
let y = 20; // Output: SyntaxError: Identifier 'y' has already been declared
```
In JavaScript, using `let` does not allow you to redeclare the same variable within the same scope. Attempting to do so will result in a `SyntaxError`, helping to prevent unintentional overwrites and errors.

### Problem 11
#### Redeclaring variables with `const`:
```javascript
const z = 10;
const z = 20; // Output: SyntaxError: Identifier 'z' has already been declared
```
In JavaScript, using `const` does not allow you to redeclare the same variable within the same scope. Attempting to do so will result in a `SyntaxError`. Additionally, `const` variables must be initialized at the time of declaration.

### Problem 12
#### Scope of variables declared with `var`:
```javascript
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10
}
test();
```
Variables declared with `var` have function scope, meaning they are accessible throughout the entire function, even if declared inside a block. This can lead to unexpected behavior if you assume `x` is block-scoped.

### Problem 13
#### Scope of variables declared with `let`:
```javascript
function test() {
    if (true) {
        let y = 10;
    }
    console.log(y); // Output: ReferenceError: y is not defined
}
test();
```
Variables declared with `let` have block scope, meaning they are only accessible within the block they are declared in (in this case, inside the `if` statement). Attempting to access `y` outside its block results in a `ReferenceError`.

### Problem 14
#### Scope of variables declared with `const`:
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
#### Hoisting of variables declared with `var`:
```javascript
console.log(x); // Output: undefined
var x = 10;
```
Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means that while the variable `x` is accessible throughout its scope, it is initially `undefined` until it is assigned a value.

### Problem 16
#### Hoisting of variables declared with `let`:
```javascript
console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;
```
Variables declared with `let` are hoisted to the top of their block, but unlike `var`, they are not initialized until their declaration is evaluated. Accessing `y` before its declaration results in a `ReferenceError`.

### Problem 17
#### Hoisting of variables declared with `const`:
```javascript
console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
const z = 10;
```
Variables declared with `const` are hoisted to the top of their block like `let`, but they must be initialized with a value at the time of declaration. Accessing `z` before its initialization results in a `ReferenceError`.

### Problem 18
#### Changing `const` variables:
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
In JavaScript, arrays and objects are different data types. Even though both `[]` (an empty array) and `{}` (an empty object) appear empty, they are not equal because they are of different types. Additionally, arrays and objects have different internal structures and behaviors.

### Problem 20
#### `typeof` undefined:
```javascript
console.log(typeof undefined); // Output: 'undefined'
```
The `typeof` operator in JavaScript returns the data type of a variable or expression. When applied to `undefined`, it returns `'undefined'`, indicating that the variable or expression does not have a defined value. This can be useful for checking if a variable has been declared but not initialized.

### Problem 21
#### Implicit conversion in arithmetic operations:
```javascript
console.log(10 + '20'); // Output: '1020'
```
In JavaScript, when an operator is applied to operands of different types, such as a number and a string, JavaScript converts one of the operands to match the type of the other operand. This process is known as implicit type coercion. In this case, the number `10` is coerced to a string, resulting in the concatenation of `'10'` and `'20'` to produce `'1020'`.

### Problem 22
#### Null and undefined equality:
```javascript
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false
```
In JavaScript, `null` and `undefined` are two distinct types with different behaviors. The loose equality operator (`==`) considers them equal only when compared with each other. The strict equality operator (`===`) does not consider them equal, as it checks for both value and type equality.

### Problem 23
#### Ternary operator with null:
```javascript
console.log(null ? 'true' : 'false'); // Output: 'false'
```
In JavaScript, the ternary operator evaluates the expression before the `?`. If the expression evaluates to true, it returns the value after the `?`; otherwise, it returns the value after the `:`. Since `null` evaluates to false, `'false'` is returned in this case.

### Problem 24
#### Use of `for...in` loop with strings:
```javascript
const str = 'Hello';
for (const index in str) {
    console.log(str[index]);
}
// Output: 'H', 'e', 'l', 'l', 'o'
```
In JavaScript, the `for...in` loop iterates over all enumerable properties of an object, including indices of strings. It's generally recommended to use `for...of` for iterating over strings to avoid unexpected behavior, as `for...in` can also iterate over non-numeric properties.

### Problem 25
#### Array length behavior with holes:
```javascript
const arr = [1, , , 4];
console.log(arr.length); // Output: 4
```
In JavaScript, arrays can have "holes" where elements are omitted. The length property of an array includes these holes, counting them as part of the total length.

### Problem 26
#### `Array.prototype.toString` behavior:
```javascript
console.log([1, [2, 3], 4].toString()); // Output: '1,2,3,4'
```
The `toString()` method in JavaScript converts an array to a string by joining all elements with a comma `,`. Nested arrays are also converted to strings, resulting in a flat, comma-separated list of values.

### Problem 27
#### `String.prototype.substring` behavior with negative indices:
```javascript
console.log('Hello'.substring(-1)); // Output: 'Hello'
```
In JavaScript, the `substring()` method treats negative indices as if they were 0, effectively starting at the beginning of the string.

### Problem 28
#### `String.prototype.substring` behavior with `NaN` indices:
```javascript
console.log('Hello'.substring(NaN)); // Output: 'Hello'
```
When `substring()` receives `NaN` as an argument, it is treated as 0, effectively starting at the beginning of the string.

### Problem 29
#### `String.prototype.substring` behavior with astral characters:
```javascript
console.log('😊'.substring(0)); // Output: '😊'
```
The `substring()` method correctly handles astral characters (Unicode surrogate pairs) in JavaScript strings.

### Problem 30
#### `String.prototype.substring` behavior with out-of-range indices:
```javascript
console.log('Hello'.substring(10)); // Output: ''
```
When the end index in `substring()` exceeds the length of the string, an empty string `''` is returned.

### Problem 31
#### `String.prototype.substring` behavior with negative end index:
```javascript
console.log('Hello'.substring(0, -1)); // Output: 'Hell'
```
If the end index in `substring()` is negative, it is treated as 0, effectively ignoring the negative value.

### Problem 32
#### `String.prototype.padStart` behavior with target length less than string length:
```javascript
console.log('Hello'.padStart(3, 'X')); // Output: 'Hello'
```
If the target length in `padStart()` is less than or equal to the length of the string, the original string is returned unchanged.

### Problem 33
#### `String.prototype.padEnd` behavior with target length less than string length:
```javascript
console.log('Hello'.padEnd(3, 'X')); // Output: 'Hello'
```
If the target length in `padEnd()` is less than or equal to the length of the string, the original string is returned unchanged.

### Problem 34
#### `Object.prototype.toString` behavior with arrays:
```javascript
console.log(Object.prototype.toString.call([])); // Output: '[object Array]'
```
The `toString()` method of `Object.prototype` returns a string representing the object's type. When applied to an array using `call()`, it returns `'[object Array]'`.

### Problem 35
#### `Object.prototype.toString` behavior with null:
```javascript
console.log(Object.prototype.toString.call(null)); // Output: '[object Null]'
```
When `toString()` is called on `null`, it returns `'[object Null]'`, indicating that `null` is of type `Null`.

### Problem 36
#### `Object.prototype.toString` behavior with undefined:
```javascript
console.log(Object.prototype.toString.call(undefined)); // Output: '[object Undefined]'
```
When `toString()` is called on `undefined`, it returns `'[object Undefined]'`, indicating that `undefined` is of type `Undefined`.

### Problem 37
#### `Object.prototype.toString` behavior with functions:
```javascript
console.log(Object.prototype.toString.call(function () { })); // Output: '[object Function]'
```
When `toString()` is called on a function, it returns `'[object Function]'`, indicating that the object is of type `Function`.

### Problem 38
#### `Object.prototype.toString` behavior with dates:
```javascript
console.log(Object.prototype.toString.call(new Date())); // Output: '[object Date]'
```
When `toString()` is called on a `Date` object, it returns `'[object Date]'`, indicating that the object is of type `Date`.

### Problem 39
#### `Object.prototype.toString` behavior with regular expressions:
```javascript
console.log(Object.prototype.toString.call(/abc/)); // Output: '[object RegExp]'
```
When `toString()` is called on a regular expression (`RegExp`) object, it returns `'[object RegExp]'`, indicating that the object is of type `RegExp`.

### Problem 40
#### `Object.prototype.toString` behavior with numbers:
```javascript
console.log(Object.prototype.toString.call(123)); // Output: '[object Number]'
```
When `toString()` is called on a number (`123`), it returns `'[object Number]'`, indicating that the object is of type `Number`.

### Problem 41
#### `Object.prototype.toString` behavior with strings:
```javascript
console.log(Object.prototype.toString.call('Hello')); // Output: '[object String]'
```
When `toString()` is called on a string (`'Hello'`), it returns `'[object String]'`, indicating that the object is of type `String`.

### Problem 42
#### `Object.prototype.toString` behavior with booleans:
```javascript
console.log(Object.prototype.toString.call(true)); // Output: '[object Boolean]'
```
When `toString()` is called on a boolean (`true`), it returns `'[object Boolean]'`, indicating that the object is of type `Boolean`.

### Problem 43
#### `Object.prototype.toString` behavior with objects:
```javascript
console.log(Object.prototype.toString.call({})); // Output: '[object Object]'
```
When `toString()` is called on an object (`{}`), it returns `'[object Object]'`, indicating that the object is of type `Object`.

### Problem 44
#### `Object.prototype.toString` behavior with symbols:
```javascript
console.log(Object.prototype.toString.call(Symbol())); // Output: '[object Symbol]'
```
When `toString()` is called on a symbol (`Symbol()`), it returns `'[object Symbol]'`, indicating that the object is of type `Symbol`.

### Problem 45
#### `Object.prototype.toString` behavior with `BigInt`s:
```javascript
console.log(Object.prototype.toString.call(BigInt(10))); // Output: '[object BigInt]'
```
When `toString()` is called on a `BigInt` (`BigInt(10)`), it returns `'[object BigInt]'`, indicating that the object is of type `BigInt`.

### Problem 46
#### `Object.prototype.toString` behavior with array-like objects:
```javascript
console.log(Object.prototype.toString.call({ length: 0 })); // Output: '[object Object]'
```
When `toString()` is called on an object with a `length` property (`{ length: 0 }`), it returns `'[object Object]'`. This behavior is different from arrays, which return `'[object Array]'`.

### Problem 47
#### `Object.prototype.toString` behavior with arguments objects:
```javascript
console.log(Object.prototype.toString.call(arguments)); // Output: '[object Arguments]'
```
When `toString()` is called on an arguments object (`arguments`), it returns `'[object Arguments]'`, indicating that the object is of type `Arguments`.

### Problem 48
#### `Object.prototype.toString` behavior with error objects:
```javascript
console.log(Object.prototype.toString.call(new Error())); // Output: '[object Error]'
```
When `toString()` is called on an error object (`new Error()`), it returns `'[object Error]'`, indicating that the object is of type `Error`.

### Problem 49
#### `Object.prototype.toString` behavior with typed arrays:
```javascript
console.log(Object.prototype.toString.call(new Int8Array())); // Output: '[object Int8Array]'
```
When `toString()` is called on a typed array (`new Int8Array()`), it returns `'[object Int8Array]'`, indicating the specific type of the typed array.

### Problem 50
#### `Object.prototype.toString` behavior with `ArrayBuffer` objects:
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
#### `Promise.all` behavior with empty iterable:
```javascript
Promise.all([]).then(console.log); // Output: []
```
`Promise.all()` returns a single promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first promise that rejects. When called with an empty array (`[]`), it immediately resolves with an empty array.

### Problem 54
#### `Promise.allSettled` behavior with empty iterable:
```javascript
Promise.allSettled([]).then(console.log); // Output: []
```
`Promise.allSettled()` returns a promise that resolves after all the given promises have either fulfilled or rejected, with an array of objects that each describe the outcome of each promise. When called with an empty array (`[]`), it resolves immediately with an empty array.

### Problem 55
#### `Promise.race` behavior with empty iterable:
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
#### `Function.prototype.bind` behavior with constructors:
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
#### `Function.prototype.bind` behavior with bound functions:
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
#### `Function.prototype.bind` behavior with partial application:
```javascript
function add(a, b) {
    return a + b;
}
const add5 = add.bind(null, 5);
console.log(add5(10)); // Output: 15
```
Partial application using `Function.prototype.bind` allows fixing some arguments of a function, creating a new function (`add5`) that accepts the remaining arguments.

### Problem 65
#### `Function.prototype.call` behavior with constructors:
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
#### `Function.prototype.call` behavior with bound functions:
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
#### `Function.prototype.call` behavior with `undefined` and `null`:
```javascript
function test() {
    console.log(this);
}
test.call(undefined); // Output: global object (in non-strict mode), TypeError in strict mode
test.call(null); // Output: global object (in non-strict mode), TypeError in strict mode
```
Using `Function.prototype.call` with `undefined` or `null` sets `this` to the global object in non-strict mode or throws a TypeError in strict mode.

### Problem 68
#### `Function.prototype.apply` behavior with arrays:
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
#### `Function.prototype.apply` behavior with `undefined` and `null`:
```javascript
function test() {
    console.log(this);
}
test.apply(undefined); // Output: global object (in non-strict mode), TypeError in strict mode
test.apply(null); // Output: global object (in non-strict mode), TypeError in strict mode
```
Using `Function.prototype.apply` with `undefined` or `null` sets `this` to the global object in non-strict mode or throws a TypeError in strict mode.

### Problem 70
#### `Function.prototype.bind` behavior with arrow functions:
```javascript
const obj = {
    value: 42,
    getValue: () => this.value
};
console.log(obj.getValue()); // Output: undefined
```
Arrow functions do not have their own `this` context. They inherit `this` from the enclosing lexical scope, resulting in `undefined` when accessed.

### Problem 71
#### Arrow function behavior with `this`:
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
#### Arrow function behavior with `arguments` objects:
```javascript
const test = () => arguments.length;
console.log(test(1, 2, 3)); // Output: ReferenceError: arguments is not defined
```
Arrow functions do not have their own `arguments` object. Attempting to access `arguments` within an arrow function results in a `ReferenceError`.

### Problem 73
#### Arrow function behavior with `new`:
```javascript
const Person = () => { };
const person = new Person(); // Output: TypeError: Person is not a constructor
```
Arrow functions cannot be used as constructors. Attempting to use `new` with an arrow function results in a `TypeError`.

### Problem 74
#### Arrow function behavior with `prototype`:
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
#### Default parameters behavior with `undefined`:
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
Template literals allow embedding expressions using `${}`. In this case, `a + b` and `2 * a + b` are evaluated and included in the string.

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
#### Optional chaining behavior with `undefined`:
```javascript
const obj = {};
console.log(obj.prop?.nestedProp); // Output: undefined
```
Optional chaining (`?.`) allows safely accessing deeply nested properties. If `prop` is `undefined`, `undefined` is returned instead of an error.

### Problem 95
#### Optional chaining behavior with `null`:
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
Mixing BigInt with other types in arithmetic operations results in a `TypeError`. Explicit conversion is required.

### Problem 98
#### BigInt behavior with `typeof` operator:
```javascript
const bigInt = BigInt(10);
console.log(typeof bigInt); // Output: 'bigint'
```
The `typeof` operator returns `'bigint'` for BigInt values.

### Problem 99
#### BigInt behavior with `JSON.stringify`:
```javascript
const bigInt = BigInt(10);
console.log(JSON.stringify(bigInt)); // Output: '10'
```
`JSON.stringify` converts BigInt values to strings.

### Problem 100
#### BigInt behavior with bitwise operators:
```javascript
const bigInt = BigInt(10);
console.log(bigInt << 2n); // Output: 40n
```
Bitwise operators can be used with BigInt. In this case, `bigInt` is shifted left by 2 bits.

### Problem 101
#### RegExp behavior with backslashes in string literals:
```javascript
const regex = /\w/;
console.log(regex); // Output: /\w/
```
Backslashes in regular expression literals are used to escape special characters. In this case, `\w` matches any word character.

### Problem 102
#### RegExp behavior with escape sequences:
```javascript
const regex = new RegExp('\\w');
console.log(regex); // Output: /\w/
```
When using the `RegExp` constructor, backslashes must be escaped with another backslash. In this case, `\\w` is interpreted as `\w`.

### Problem 103
#### RegExp behavior with character classes:
```javascript
const regex = /[A-Z]/i;
console.log(regex.test('a')); // Output: true
```
Character classes match any character in the brackets. The `i` flag makes the match case-insensitive. In this case, `[A-Z]` matches both uppercase and lowercase letters.

### Problem 104
#### RegExp behavior with lookaheads:
```javascript
const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
console.log(regex.test('Password1')); // Output: true
```
Lookaheads assert that certain patterns are present without consuming characters. In this case, the regex checks for at least one digit, one lowercase letter, one uppercase letter, and a minimum length of 6.

### Problem 105
#### RegExp behavior with Unicode property escapes:
```javascript
const regex = /\p{Emoji}/u;
console.log(regex.test('😊')); // Output: true
```
Unicode property escapes match characters based on Unicode properties. The `u` flag enables Unicode mode. In this case, `\p{Emoji}` matches any emoji.

### Problem 106
#### RegExp behavior with named capturing groups:
```javascript
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = regex.exec('2022-01-01');
console.log(match.groups.year); // Output: '2022'
```
Named capturing groups allow naming of capture groups. In this case, the groups `year`, `month`, and `day` capture parts of the date string.

### Problem 107
#### RegExp behavior with dot matches newline:
```javascript
const regex = /./s;
console.log(regex.test('\n')); // Output: true
```
The dot `.` matches any character except newline. The `s` flag (dotAll) makes `.` match newline characters as well.

### Problem 108
#### RegExp behavior with flags:
```javascript
const regex = /abc/i;
console.log(regex.flags); // Output: 'i'
```
The `flags` property of a regex returns a string representing the regex flags. In this case, the `i` flag indicates case-insensitive matching.

### Problem 109
#### Object.hasOwnProperty behavior with inherited properties:
```javascript
const obj = Object.create({ prop: 'inherited' });
console.log(obj.hasOwnProperty('prop')); // Output: false
```
The `hasOwnProperty` method checks if a property is a direct property of an object, not inherited. In this case, `prop` is inherited, so it returns `false`.

### Problem 110
#### Object.assign behavior with getters:
```javascript
const obj1 = { get prop() { return 'value'; } };
const obj2 = {};
Object.assign(obj2, obj1);
console.log(obj2); // Output: {}
```
`Object.assign` does not copy property getters. In this case, `obj2` remains empty after assignment.

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
`Object.getOwnPropertyDescriptors` returns all own property descriptors, including getters and setters. In this case, it returns descriptors for the `prop` getter and setter.

### Problem 112
#### Object.freeze behavior with nested objects:
```javascript
const obj = { nested: {} };
Object.freeze(obj);
obj.nested.prop = 'value';
console.log(obj.nested.prop); // Output: 'value'
```
`Object.freeze` makes an object immutable, but not its nested objects. In this case, `obj` is frozen, but `nested` is not, so `nested.prop` can be added.

### Problem 113
#### Object.seal behavior with property deletion:
```javascript
const obj = { prop: 'value' };
Object.seal(obj);
delete obj.prop;
console.log(obj); // Output: { prop: 'value' }
```
`Object.seal` prevents adding or removing properties but allows modification of existing properties. In this case, deleting `prop` fails.

### Problem 114
#### Object.preventExtensions behavior with property addition:
```javascript
const obj = {};
Object.preventExtensions(obj);
obj.prop = 'value';
console.log(obj.prop); // Output: undefined
```
`Object.preventExtensions` prevents new properties from being added to an object. In this case, adding `prop` fails.

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
`Object.setPrototypeOf` sets the prototype of an object. In this case, `obj1` and `obj2` have a circular reference, and setting the prototype does not break it.

### Problem 116
#### Array.from behavior with array-like objects:
```javascript
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.from(arrayLike)); // Output: ['a', 'b']
```
`Array.from` creates an array from an array-like object. In this case, `arrayLike` is converted to an array.

### Problem 117
#### Array.prototype.includes behavior with `NaN`:
```javascript
const arr = [NaN];
console.log(arr.includes(NaN)); // Output: true
```
`Array.prototype.includes` correctly checks for `NaN`, unlike `indexOf`. In this case, it returns `true` because `NaN` is in the array.

### Problem 118
#### Array.prototype.flat behavior with depth:
```javascript
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // Output: [1, 2, 3]
```
`Array.prototype.flat` flattens nested arrays to the specified depth. In this case, `arr` is flattened to a depth of 2.

### Problem 119
#### Array.prototype.flatMap behavior with flatMap:
```javascript
const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6]
```
`Array.prototype.flatMap` maps each element using a mapping function and flattens the result by one level. In this case, each element is mapped to `[x, x * 2]`.

### Problem 120
#### Array.prototype.sort behavior with numbers:
```javascript
const arr = [1, 10, 2];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 10]
```
`Array.prototype.sort` sorts elements of an array in place. The comparator function `a - b` ensures numerical sorting. In this case, `arr` is sorted as `[1, 2, 10]`.

### Problem 121
#### Array.prototype.slice behavior with negative indices:
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-3)); // Output: [3, 4, 5]
```
Negative indices in `slice` start counting from the end of the array. Here, `slice(-3)` returns the last three elements of the array.

### Problem 122
#### Array.prototype.slice behavior with floating-point indices:
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1.5, 3.5)); // Output: [2, 3]
```
Floating-point indices in `slice` are rounded down to the nearest integer. Here, `1.5` becomes `1` and `3.5` becomes `3`, resulting in the slice from index 1 to 3.

### Problem 123
#### Array.prototype.splice behavior with negative start index:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1);
console.log(arr); // Output: [1, 2, 3, 5]
```
A negative start index in `splice` counts from the end of the array. Here, `-2` refers to the second-to-last element, which is `4`, and it is removed from the array.

### Problem 124
#### Array.prototype.splice behavior with negative delete count:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, -1);
console.log(arr); // Output: [1, 2, 3, 4, 5]
```
A negative delete count in `splice` is treated as `0`, meaning no elements are removed. Thus, the array remains unchanged.

### Problem 125
#### Array.prototype.splice behavior with adding elements:
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b');
console.log(arr); // Output: [1, 2, 'a', 'b', 3, 4, 5]
```
`splice` can add elements without removing any. Here, `'a'` and `'b'` are inserted at index 2, shifting the subsequent elements.

### Problem 126
#### Set.prototype.has behavior with NaN:
```javascript
const set = new Set();
set.add(NaN);
console.log(set.has(NaN)); // Output: true
```
Sets can contain `NaN` and correctly identify its presence using `has`.

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
set.forEach(obj.callback, obj); // Output: true, 1, true, 2, true, 3
```
The `forEach` method can accept a `thisArg` parameter to set the `this` value inside the callback. Here, `obj` is used as `this`, confirmed by the output.

### Problem 128
#### Map.prototype.get behavior with NaN keys:
```javascript
const map = new Map();
map.set(NaN, 'value');
console.log(map.get(NaN)); // Output: 'value'
```
Maps can use `NaN` as a key and correctly retrieve the associated value.

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
map.forEach(obj.callback, obj); // Output: true, 1, 'a', true, 2, 'b', true, 3, 'c'
```
The `forEach` method on maps can also accept a `thisArg` parameter. Here, `obj` is used as `this`, confirmed by the output.

### Problem 130
#### WeakMap behavior with object keys:
```javascript
const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: 'value'
```
WeakMaps can only have object keys. Here, an object is used as a key, and the associated value is correctly retrieved.

### Problem 131
#### WeakMap behavior with primitive keys:
```javascript
const weakMap = new WeakMap();
const key = 'key';
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: undefined
```
WeakMaps cannot have primitive keys. Here, attempting to use a string key results in `undefined`.

### Problem 132
#### WeakSet behavior with object values:
```javascript
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
```
WeakSets can only contain object values. Here, an object is added and correctly identified as present in the set.

### Problem 133
#### WeakSet behavior with primitive values:
```javascript
const weakSet = new WeakSet();
weakSet.add('value');
console.log(weakSet.has('value')); // Output: false
```
WeakSets cannot contain primitive values. Here, attempting to add a string value results in `false` when checked.

### Problem 134
#### Date.prototype.toISOString behavior with time zones:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toISOString()); // Output: '2022-01-01T00:00:00.000Z'
```
`toISOString` returns a date string in ISO format in UTC. Here, the input date is already in UTC, so it remains unchanged.

### Problem 135
#### Date.prototype.toJSON behavior with toJSON:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toJSON()); // Output: '2022-01-01T00:00:00.000Z'
```
`toJSON` returns a date string in ISO format, similar to `toISOString`. Here, the input date is returned in ISO format.

### Problem 136
#### Date.prototype.toString behavior with time zones:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toString()); // Output: 'Sat Jan 01 2022 02:00:00 GMT+0200 (Central European Standard Time)'
```
`toString` returns a date string in the local time zone. Here, the input date in UTC is converted to Central European Standard Time.

### Problem 137
#### Date.prototype.toString behavior with UTC method:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toUTCString()); // Output: 'Sat, 01 Jan 2022 00:00:00 GMT'
```
`toUTCString` returns a date string in UTC. Here, the input date is already in UTC, so it remains unchanged.

### Problem 138
#### Date.prototype.toString behavior with custom format:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Output: 'Saturday, January 1, 2022'
```
`toLocaleString` returns a date string in a custom format based on locale settings. Here, the date is formatted to show the weekday, month, day, and year.

### Problem 139
#### Date.prototype.toString behavior with date component methods:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getDate()); // Output: 1
console.log(date.getMonth()); // Output: 0 (January is represented as 0)
console.log(date.getFullYear()); // Output: 2022
```
Date component methods return specific parts of the date. Here, `getDate`, `getMonth`, and `getFullYear` return the day, month, and year, respectively.

### Problem 140
#### Date.prototype.toString behavior with time component methods:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getHours()); // Output: 0 (UTC hour)
console.log(date.getMinutes()); // Output: 0
console.log(date.getSeconds()); // Output: 0
console.log(date.getMilliseconds()); // Output: 0
```
Time component methods return specific parts of the time. Here, `getHours`, `getMinutes`, `getSeconds`, and `getMilliseconds` return the respective time components.

### Problem 141
#### Date.prototype.toString behavior with day of week method:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getDay()); // Output: 6 (Saturday)
```
`getDay` returns the day of the week as a number (0 for Sunday, 6 for Saturday).

### Problem 142
#### Date.prototype.toString behavior with time zone offset method:
```javascript
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getTimezoneOffset()); // Output: -120 (offset in minutes, -120 corresponds to UTC+2)
```
`getTimezoneOffset` returns the time zone offset in minutes between UTC and the local time.

### Problem 143
#### Math.max behavior with array of numbers:
```javascript
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // Output: 3
```
`Math.max` returns the highest value from a set of numbers.

### Problem 144
#### Math.max behavior with variable arguments:
```javascript
console.log(Math.max(1, 2, 3)); // Output: 3
```
`Math.max` also works directly with multiple arguments, returning the highest value.

### Problem 145
#### Math.min behavior with array of numbers:
```javascript
const arr = [1, 2, 3];
console.log(Math.min(...arr)); // Output: 1
```
`Math.min` returns the lowest value from a set of numbers.

### Problem 146
#### Math.min behavior with variable arguments:
```javascript
console.log(Math.min(1, 2, 3)); // Output: 1
```
Similar to `Math.max`, `Math.min` also works directly with multiple arguments, returning the lowest value.

### Problem 147
#### Math.pow behavior with fractional exponents:
```javascript
console.log(Math.pow(8, 1 / 3)); // Output: 2
```
`Math.pow` calculates the power of a number. Here, `1/3` is the exponent, resulting in the cube root of `8`.

### Problem 148
#### Math.pow behavior with negative bases and odd exponents:
```javascript
console.log(Math.pow(-2, 3)); // Output: -8
```
When the base is negative and the exponent is odd, `Math.pow` correctly computes the result.

### Problem 149
#### Math.pow behavior with negative bases and even exponents:
```javascript
console.log(Math.pow(-2, 4)); // Output: 16
```
When the base is negative and the exponent is even, `Math.pow` correctly computes the result.

### Problem 150
#### Math.pow behavior with non-integer exponents:
```javascript
console.log(Math.pow(4, 0.5)); // Output: 2
```
`Math.pow` can handle non-integer exponents, here calculating the square root of `4`.

### Problem 151
#### Math.sqrt behavior with negative numbers:
```javascript
console.log(Math.sqrt(-1)); // Output: NaN
```
`Math.sqrt` returns NaN when trying to compute the square root of a negative number, as it is not defined in real numbers.

### Problem 152
#### Math.trunc behavior with positive numbers:
```javascript
console.log(Math.trunc(42.7)); // Output: 42
```
`Math.trunc` removes the decimal part of a number, returning the integer part.

### Problem 153
#### Math.trunc behavior with negative numbers:
```javascript
console.log(Math.trunc(-42.7)); // Output: -42
```
`Math.trunc` also works correctly with negative numbers, removing the decimal part and returning the integer part.

### Problem 154
#### Math.trunc behavior with zero:
```javascript
console.log(Math.trunc(0)); // Output: 0
```
`Math.trunc` returns `0` when applied to zero.

### Problem 155
#### Math.trunc behavior with NaN:
```javascript
console.log(Math.trunc(NaN)); // Output: NaN
```
`Math.trunc` returns NaN when applied to NaN, as there is no integer part to extract.

### Problem 156
#### Math.sign behavior with positive numbers:
```javascript
console.log(Math.sign(42)); // Output: 1
```
`Math.sign` returns `1` for positive numbers.

### Problem 157
#### Math.sign behavior with negative numbers:
```javascript
console.log(Math.sign(-42)); // Output: -1
```
`Math.sign` returns `-1` for negative numbers.

### Problem 158
#### Math.sign behavior with zero:
```javascript
console.log(Math.sign(0)); // Output: 0
```
`Math.sign` returns `0` for zero.

### Problem 159
#### Math.sign behavior with NaN:
```javascript
console.log(Math.sign(NaN)); // Output: NaN
```
`Math.sign` returns NaN when applied to NaN.

### Problem 160
#### Math.sign behavior with NaN:
```javascript
console.log(Math.sign(NaN)); // Output: NaN
```
`Math.sign` returns NaN when the argument is NaN.

### Problem 161
#### Number.isFinite behavior with finite numbers:
```javascript
console.log(Number.isFinite(42)); // Output: true
```
`Number.isFinite` returns true for finite numbers.

### Problem 162
#### Number.isFinite behavior with Infinity:
```javascript
console.log(Number.isFinite(Infinity)); // Output: false
```
`Number.isFinite` returns false for Infinity.

### Problem 163
#### Number.isFinite behavior with NaN:
```javascript
console.log(Number.isFinite(NaN)); // Output: false
```
`Number.isFinite` returns false for NaN.

### Problem 164
#### Number.isFinite behavior with non-numeric values:
```javascript
console.log(Number.isFinite('42')); // Output: false
```
`Number.isFinite` returns false for non-numeric values, including strings.

### Problem 165
#### Number.isInteger behavior with integer numbers:
```javascript
console.log(Number.isInteger(42)); // Output: true
```
`Number.isInteger` returns true for integer numbers.

### Problem 166
#### Number.isInteger behavior with floating-point numbers:
```javascript
console.log(Number.isInteger(42.5)); // Output: false
```
`Number.isInteger` returns false for floating-point numbers.

### Problem 167
#### Number.isInteger behavior with Infinity:
```javascript
console.log(Number.isInteger(Infinity)); // Output: false
```
`Number.isInteger` returns false for Infinity.

### Problem 168
#### Number.isInteger behavior with NaN:
```javascript
console.log(Number.isInteger(NaN)); // Output: false
```
`Number.isInteger` returns false for NaN.

### Problem 169
#### Number.isInteger behavior with non-numeric values:
```javascript
console.log(Number.isInteger('42')); // Output: false
```
`Number.isInteger` returns false for non-numeric values, including strings.

### Problem 170
#### Number.parseInt behavior with strings:
```javascript
console.log(Number.parseInt('42')); // Output: 42
```
`Number.parseInt` parses a string argument and returns an integer. In this case, it returns `42` from the string `'42'`.

### Problem 171
#### Number.parseInt behavior with strings containing non-numeric characters:
```javascript
console.log(Number.parseInt('42px')); // Output: 42
```
`Number.parseInt` parses a string until it encounters a non-numeric character or reaches the end of the string. In this case, it stops parsing at `'px'` and returns `42`.

### Problem 172
#### Number.parseFloat behavior with strings:
```javascript
console.log(Number.parseFloat('42.5')); // Output: 42.5
```
`Number.parseFloat` parses a string and returns a floating-point number. In this case, it returns `42.5` from the string `'42.5'`.

### Problem 173
#### Number.parseFloat behavior with strings containing non-numeric characters:
```javascript
console.log(Number.parseFloat('42.5px')); // Output: 42.5
```
`Number.parseFloat` parses a string until it encounters an invalid character or reaches the end of the string. It returns the parsed floating-point number. Here, it parses `'42.5'` and ignores `'px'`, returning `42.5`.

### Problem 174
#### Number.parseFloat behavior with exponential notation:
```javascript
console.log(Number.parseFloat('1.2e3')); // Output: 1200
```
`Number.parseFloat` correctly parses exponential notation and returns `1200` from `'1.2e3'`.

### Problem 175
#### Array.isArray behavior with arrays:
```javascript
console.log(Array.isArray([])); // Output: true
```
`Array.isArray` returns true if the argument is an array.

### Problem 176
#### Array.isArray behavior with non-arrays:
```javascript
console.log(Array.isArray({})); // Output: false
```
`Array.isArray` returns false if the argument is not an array, even if it's an object.

### Problem 177
#### Array.isArray behavior with array-like objects:
```javascript
console.log(Array.isArray({ length: 0 })); // Output: false
```
`Array.isArray` returns false for array-like objects that do not have an actual `Array` constructor.

### Problem 178
#### ArrayBuffer.isView behavior with typed arrays:
```javascript
console.log(ArrayBuffer.isView(new Int8Array())); // Output: true
```
`ArrayBuffer.isView` returns true if the argument is a typed array view (like `Int8Array`).

### Problem 179
#### ArrayBuffer.isView behavior with non-typed arrays:
```javascript
console.log(ArrayBuffer.isView([])); // Output: false
```
`ArrayBuffer.isView` returns false for regular arrays.

### Problem 180
#### ArrayBuffer.isView behavior with array-like objects:
```javascript
console.log(ArrayBuffer.isView({ length: 0 })); // Output: false
```
`ArrayBuffer.isView` returns false for array-like objects that are not typed arrays.

### Problem 181
#### ArrayBuffer.isView behavior with DataView:
```javascript
console.log(ArrayBuffer.isView(new DataView(new ArrayBuffer()))); // Output: true
```
`ArrayBuffer.isView` returns true for `DataView` objects, which are views into `ArrayBuffer` objects.

### Problem 182
#### String.fromCharCode behavior with ASCII codes:
```javascript
console.log(String.fromCharCode(65, 66, 67)); // Output: 'ABC'
```
`String.fromCharCode` converts ASCII codes to their corresponding characters. Here, `65` corresponds to `'A'`, `66` to `'B'`, and `67` to `'C'`.

### Problem 183
#### String.fromCharCode behavior with Unicode code points:
```javascript
console.log(String.fromCharCode(0x1F600)); // Output: '😀'
```
`String.fromCharCode` can handle Unicode code points. `0x1F600` is the code point for the 'grinning face' emoji 😀.

### Problem 184
#### String.prototype.charAt behavior with ASCII codes:
```javascript
console.log('ABC'.charAt(0)); // Output: 'A'
```
`charAt` returns the character at a specified index in a string. Here, `'ABC'.charAt(0)` returns `'A'`.

### Problem 185
#### String.prototype.charAt behavior with surrogate pairs:
```javascript
console.log('😀'.charAt(0)); // Output: ''
```
`charAt` does not properly handle surrogate pairs in JavaScript strings. It returns an empty string `''` for surrogate pairs like `'😀'`.

### Problem 186
#### String.prototype.charCodeAt behavior with ASCII codes:
```javascript
console.log('ABC'.charCodeAt(0)); // Output: 65
```
`charCodeAt` returns the Unicode value (UTF-16 code unit) of the character at a specified index in a string. Here, `'ABC'.charCodeAt(0)` returns `65`, which is the Unicode value for `'A'`.

### Problem 187
#### String.prototype.charCodeAt behavior with surrogate pairs:
```javascript
console.log('😀'.charCodeAt(0)); // Output: 55357
```
`charCodeAt` returns the UTF-16 code unit at the specified index. For surrogate pairs like `'😀'`, it returns the code unit of the first part.

### Problem 188
#### String.prototype.codePointAt behavior with ASCII codes:
```javascript
console.log('ABC'.codePointAt(0)); // Output: 65
```
`codePointAt` returns the Unicode code point value at the specified index in a string. Here, `'ABC'.codePointAt(0)` returns `65`, which is the code point for `'A'`.

### Problem 189
#### String.prototype.codePointAt behavior with surrogate pairs:
```javascript
console.log('😀'.codePointAt(0)); // Output: 128512
```
`codePointAt` correctly handles surrogate pairs and returns the full Unicode code point for characters like `'😀'`.

### Problem 190
#### String.prototype.includes behavior with search strings:
```javascript
console.log('hello world'.includes('world')); // Output: true
```
`includes` checks whether a string contains the specified substring and returns `true` if found. Here, `'hello world'.includes('world')` returns `true` because `'world'` is found within `'hello world'`.

### Problem 191
#### String.prototype.startsWith behavior with search strings:
```javascript
console.log('hello world'.startsWith('hello')); // Output: true
```
`startsWith` checks if a string starts with the characters of another string and returns `true` if it does. Here, `'hello world'.startsWith('hello')` returns `true` because `'hello world'` starts with `'hello'`.

### Problem 192
#### String.prototype.endsWith behavior with search strings:
```javascript
console.log('hello world'.endsWith('world')); // Output: true
```
`endsWith` checks if a string ends with the characters of another string and returns `true` if it does. Here, `'hello world'.endsWith('world')` returns `true` because `'hello world'` ends with `'world'`.

### Problem 193
#### String.prototype.repeat behavior with positive count:
```javascript
console.log('abc'.repeat(3)); // Output: 'abcabcabc'
```
`repeat` constructs and returns a new string which contains the specified number of copies of the string on which it was called. Here, `'abc'.repeat(3)` returns `'abcabcabc'`.

### Problem 194
#### String.prototype.repeat behavior with negative count:
```javascript
console.log('abc'.repeat(-1)); // Output: ''
```
`repeat` returns an empty string `''` when the count is negative or zero. Here, `'abc'.repeat(-1)` returns `''`.

### Problem 195
#### String.prototype.repeat behavior with fractional count:
```javascript
console.log('abc'.repeat(2.5)); // Output: 'abcabc'
```
`repeat` truncates any fractional part of the count and treats it as an integer. Here, `'abc'.repeat(2.5)` effectively repeats `'abc'` twice.

### Problem 196
#### String.prototype.padStart behavior with shorter strings:
```javascript
console.log('abc'.padStart(6, '123')); // Output: '123abc'
```
`padStart` pads the current string with another string (repeated, if necessary) until the resulting string reaches the given length. Here, `'abc'.padStart(6, '123')` pads `'abc'` with `'123'` at the beginning to make it a total length of 6 characters.

### Problem 197
#### String.prototype.padStart behavior with longer strings:
```javascript
console.log('abc'.padStart(2, '123')); // Output: 'abc'
```
If the target length is less than or equal to the length of the current string, `padStart` returns the original string. Here, `'abc'.padStart(2, '123')` returns `'abc'` because 2 is less than the length of `'abc'`.

### Problem 198
#### String.prototype.padEnd behavior with shorter strings:
```javascript
console.log('abc'.padEnd(6, '123')); // Output: 'abc123'
```
`padEnd` pads the current string with another string (repeated, if necessary) until the resulting string reaches the given length. Here, `'abc'.padEnd(6, '123')` pads `'abc'` with `'123'` at the end to make it a total length of 6 characters.

### Problem 199
#### String.prototype.padEnd behavior with longer strings:
```javascript
console.log('abc'.padEnd(2, '123')); // Output: 'abc'
```
If the target length is less than or equal to the length of the current string, `padEnd` returns the original string. Here, `'abc'.padEnd(2, '123')` returns `'abc'` because 2 is less than the length of `'abc'`.

### Problem 200
#### String.prototype.trim behavior with leading/trailing whitespace:
```javascript
console.log('  abc  '.trim()); // Output: 'abc'
```
`trim` removes whitespace from both ends of a string. Here, `'  abc  '.trim()` removes the leading and trailing spaces, resulting in `'abc'`.

### Problem 201
#### String.prototype.trimStart behavior with leading whitespace:
```javascript
console.log('  abc'.trimStart()); // Output: 'abc'
```
`trimStart` removes whitespace from the beginning (left side) of a string. Here, `'  abc'.trimStart()` removes the leading spaces, resulting in `'abc'`.

### Problem 202
#### String.prototype.trimEnd behavior with trailing whitespace:
```javascript
console.log('abc  '.trimEnd()); // Output: 'abc'
```
`trimEnd` removes whitespace from the end (right side) of a string. Here, `'abc  '.trimEnd()` removes the trailing spaces, resulting in `'abc'`.

### Problem 203
#### String.prototype.split behavior with regular expressions:
```javascript
console.log('hello world'.split(/\s/)); // Output: ['hello', 'world']
```
`split` splits a string into an array of substrings based on a specified separator (can be a string or a regular expression). Here, `/\s/` matches any whitespace character, so `'hello world'.split(/\s/)` splits the string at spaces and returns `['hello', 'world']`.

### Problem 204
#### String.prototype.split behavior with string separators:
```javascript
console.log('hello world'.split(' ')); // Output: ['hello', 'world']
```
When `split` is called with a string separator, it splits the string at each occurrence of the separator string. Here, `'hello world'.split(' ')` splits the string at spaces and returns `['hello', 'world']`.

### Problem 205
#### String.prototype.slice behavior with positive indices:
```javascript
console.log('hello world'.slice(6, 11)); // Output: 'world'
```
`slice` extracts a section of a string and returns it as a new string. Here, `'hello world'.slice(6, 11)` extracts characters from index 6 to 10 (11 is exclusive), resulting in `'world'`.

### Problem 206
#### String.prototype.slice behavior with negative indices:
```javascript
console.log('hello world'.slice(-5, -1)); // Output: 'worl'
```
When negative indices are used with `slice`, they count from the end of the string. Here, `'hello world'.slice(-5, -1)` extracts characters from the 5th position from the end to the 1st position from the end (exclusive), resulting in `'worl'`.

### Problem 207
#### String.prototype.substring behavior with positive indices:
```javascript
console.log('hello world'.substring(6, 11)); // Output: 'world'
```
`substring` extracts characters between two indices and returns the substring. It differs from `slice` in handling negative indices differently. Here, `'hello world'.substring(6, 11)` extracts characters from index 6 to 10, resulting in `'world'`.

### Problem 208
#### String.prototype.substring behavior with negative indices:
```javascript
console.log('hello world'.substring(-5, -1)); // Output: 'hello wor'
```
Negative indices in `substring` are treated as 0. Therefore, `'hello world'.substring(-5, -1)` effectively becomes `'hello world'.substring(0, 10)` because negative indices are normalized to 0. It extracts characters from the beginning to the 10th index (exclusive), resulting in `'hello wor'`.

### Problem 209
#### String.prototype.substr behavior with positive start index:
```javascript
console.log('hello world'.substr(6, 5)); // Output: 'world'
```
`substr` extracts a substring from a string, starting at a specified position through the specified number of characters. Here, `'hello world'.substr(6, 5)` starts at index 6 and extracts 5 characters, resulting in `'world'`.

### Problem 210
#### String.prototype.substr behavior with negative start index:
```javascript
console.log('hello world'.substr(-5, 4)); // Output: 'worl'
```
When the start index in `substr` is negative, it counts from the end of the string. Here, `'hello world'.substr(-5, 4)` starts at the 5th position from the end and extracts 4 characters, resulting in `'worl'`.

### Problem 211
#### String.prototype.substr behavior with negative length:
```javascript
console.log('hello world'.substr(6, -2)); // Output: ''
```
When the length parameter in `substr` is negative, it is treated as 0. Therefore, `'hello world'.substr(6, -2)` starts at index 6 and attempts to extract -2 characters, which results in an empty string (`''`).

### Problem 212
#### String.prototype.toLowerCase behavior with uppercase letters:
```javascript
console.log('HELLO'.toLowerCase()); // Output: 'hello'
```
`toLowerCase` converts all uppercase letters in a string to lowercase. Here, `'HELLO'.toLowerCase()` converts 'HELLO' to 'hello'.

### Problem 213
#### String.prototype.toUpperCase behavior with lowercase letters:
```javascript
console.log('hello'.toUpperCase()); // Output: 'HELLO'
```
`toUpperCase` converts all lowercase letters in a string to uppercase. Here, `'hello'.toUpperCase()` converts 'hello' to 'HELLO'.

### Problem 214
#### String.prototype.normalize behavior with combining diacritical marks:
```javascript
console.log('\u006E\u0303'.normalize('NFC')); // Output: 'ñ'
```
`normalize('NFC')` converts a string into Normalization Form Canonical Composition (NFC). Here, `'\u006E\u0303'` represents 'n' followed by a combining tilde (which forms 'ñ' in NFC).

### Problem 215
#### String.prototype.normalize behavior with compatibility characters:
```javascript
console.log('\uFB01'.normalize()); // Output: 'fi'
```
`normalize()` without specifying a form normalizes the string into Normalization Form Canonical Composition (NFC) by default. Here, `'\uFB01'` represents the ligature 'fi', which is normalized to 'fi'.

### Problem 216
#### String.prototype.match behavior with regular expressions:
```javascript
console.log('hello world'.match(/\w+/g)); // Output: ['hello', 'world']
```
`match(/\w+/g)` returns an array of all matches of the regular expression `\w+` (which matches word characters) in the string 'hello world'. It returns `['hello', 'world']`.

### Problem 217
#### String.prototype.match behavior with global flag:
```javascript
console.log('hello world'.match(/o/g)); // Output: ['o', 'o']
```
`match(/o/g)` with the global flag `g` returns an array of all matches of the character 'o' in the string 'hello world'. It returns `['o', 'o']`.

### Problem 218
#### String.prototype.matchAll behavior with regular expressions:
```javascript
const matches = 'hello world'.matchAll(/\w+/g);
for (const match of matches) {
    console.log(match);
}
// Output:
// ['hello', index: 0, input: 'hello world']
// ['world', index: 6, input: 'hello world']
```
`matchAll(/\w+/g)` returns an iterator over all matches of the regular expression `\w+` (which matches word characters) in the string 'hello world'. It iterates through each match, returning an array with match details.

### Problem 219
#### String.prototype.replace behavior with regular expressions:
```javascript
console.log('hello world'.replace(/\w+/, 'goodbye')); // Output: 'goodbye world'
```
`replace(/\w+/, 'goodbye')` replaces the first occurrence of one or more word characters (`\w+`) in the string 'hello world' with 'goodbye'. It returns `'goodbye world'`.

### Problem 220
#### String.prototype.replace behavior with global flag:
```javascript
console.log('hello world'.replace(/o/g, 'a')); // Output: 'hella warld'
```
`replace(/o/g, 'a')` with the global flag `g` replaces all occurrences of 'o' in the string 'hello world' with 'a'. It returns `'hella warld'`.

### Problem 221
#### String.prototype.replaceAll behavior with regular expressions:
```javascript
console.log('hello world'.replaceAll(/o/g, 'a')); // Output: 'hella warld'
```
`replaceAll(/o/g, 'a')` replaces all occurrences of the substring 'o' in the string 'hello world' with 'a'. It returns `'hella warld'`.

### Problem 222
#### String.prototype.search behavior with regular expressions:
```javascript
console.log('hello world'.search(/world/)); // Output: 6
```
`search(/world/)` searches for the substring 'world' within the string 'hello world' and returns the index where the first occurrence starts. It returns `6`.

### Problem 223
#### String.prototype.search behavior with non-matching patterns:
```javascript
console.log('hello world'.search(/foo/)); // Output: -1
```
`search(/foo/)` searches for the substring 'foo' within the string 'hello world'. Since 'foo' does not exist in the string, it returns `-1`.

### Problem 224
#### String.prototype.startsWith behavior with position argument:
```javascript
console.log('hello world'.startsWith('world', 6)); // Output: true
```
`startsWith('world', 6)` checks if the string 'hello world' starts with 'world' starting from index 6. Since 'world' starts exactly at index 6, it returns `true`.

### Problem 225
#### String.prototype.endsWith behavior with position argument:
```javascript
console.log('hello world'.endsWith('hello', 5)); // Output: true
```
`endsWith('hello', 5)` checks if the string 'hello world' ends with 'hello' up to position 5. The substring 'hello' matches the end of the string up to position 5, so it returns `true`.

### Problem 226
#### String.prototype.trimStart behavior with leading whitespace:
```javascript
console.log('  hello'.trimStart()); // Output: 'hello'
```
`trimStart()` removes leading whitespace from the beginning of the string '  hello'. It returns `'hello'`.

### Problem 227
#### String.prototype.trimEnd behavior with trailing whitespace:
```javascript
console.log('hello  '.trimEnd()); // Output: 'hello'
```
`trimEnd()` removes trailing whitespace from the end of the string 'hello  '. It returns `'hello'`.

### Problem 228
#### String.prototype.endsWith behavior with longer search string than string length:
```javascript
console.log('hello'.endsWith('hello world')); // Output: false
```
`endsWith('hello world')` checks if the string 'hello' ends with 'hello world'. Since 'hello' does not end with 'hello world', it returns `false`.

### Problem 229
#### String.prototype.startsWith behavior with longer search string than string length:
```javascript
console.log('hello'.startsWith('hello world')); // Output: false
```
`startsWith('hello world')` checks if the string 'hello' starts with 'hello world'. Since 'hello' is shorter than 'hello world', it cannot start with 'hello world', so it returns `false`.

### Problem 230
#### String.prototype.repeat behavior with negative count:
```javascript
console.log('abc'.repeat(-1)); // Output: ''
```
`repeat(-1)` with a negative count returns an empty string (`''`). Negative counts in `repeat` are treated as zero, so it results in an empty string.

### Problem 231
#### String.prototype.padStart behavior with negative length:
```javascript
console.log('abc'.padStart(-6, '123')); // Output: 'abc'
```
`padStart(-6, '123')` pads the string 'abc' with '123' to the left until the length reaches -6 characters. Since the specified length (-6) is negative, the function does not pad the string at all and returns `'abc'`.

### Problem 232
#### String.prototype.padEnd behavior with negative length:
```javascript
console.log('abc'.padEnd(-6, '123')); // Output: 'abc'
```
`padEnd(-6, '123')` pads the string 'abc' with '123' to the right until the length reaches -6 characters. Similar to `padStart`, since the specified length (-6) is negative, the function does not pad the string and returns `'abc'`.

### Problem 233
#### String.prototype.trim behavior with empty string:
```javascript
console.log(''.trim()); // Output: ''
```
`trim()` removes leading and trailing whitespace from an empty string. Since there's no whitespace in an empty string, it returns an empty string `''`.

### Problem 234
#### String.prototype.trimStart behavior with empty string:
```javascript
console.log(''.trimStart()); // Output: ''
```
`trimStart()` removes leading whitespace from an empty string. Since there's no leading whitespace in an empty string, it returns an empty string `''`.

### Problem 235
#### String.prototype.trimEnd behavior with empty string:
```javascript
console.log(''.trimEnd()); // Output: ''
```
`trimEnd()` removes trailing whitespace from an empty string. Since there's no trailing whitespace in an empty string, it returns an empty string `''`.

### Problem 236
#### String.prototype.split behavior with empty string separator:
```javascript
console.log('hello world'.split('')); // Output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
```
`split('')` splits the string 'hello world' into an array of individual characters. Each character becomes an element in the resulting array `['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']`.

### Problem 237
#### String.prototype.slice behavior with no parameters:
```javascript
console.log('hello world'.slice()); // Output: 'hello world'
```
`slice()` without parameters returns the entire string 'hello world'. It effectively creates a copy of the string.

### Problem 238
#### String.prototype.substring behavior with no parameters:
```javascript
console.log('hello world'.substring()); // Output: 'hello world'
```
`substring()` without parameters behaves the same as `slice()` without parameters, returning the entire string 'hello world'.

### Problem 239
#### String.prototype.substr behavior with no parameters:
```javascript
console.log('hello world'.substr()); // Output: 'hello world'
```
`substr()` without parameters behaves similarly to `slice()` and `substring()` without parameters, returning the entire string 'hello world'.

### Problem 240
#### String.prototype.toLowerCase behavior with empty string:
```javascript
console.log(''.toLowerCase()); // Output: ''
```
`toLowerCase()` applied to an empty string returns an empty string `''`. There are no characters to convert to lowercase, so it simply returns an empty string.

### Problem 241
#### String.prototype.toUpperCase behavior with empty string:
```javascript
console.log(''.toUpperCase()); // Output: ''
```
`toUpperCase()` applied to an empty string returns an empty string `''`. There are no characters to convert to uppercase, so it simply returns an empty string.

### Problem 242
#### String.prototype.normalize behavior with empty string:
```javascript
console.log(''.normalize()); // Output: ''
```
`normalize()` applied to an empty string returns an empty string `''`. Normalization is used to convert characters into a standardized form, but an empty string has no characters to normalize, so it returns an empty string.

### Problem 243
#### String.prototype.match behavior with empty string:
```javascript
console.log(''.match(/\w+/g)); // Output: null
```
`match(/\w+/g)` attempts to find matches for one or more word characters in the empty string ''. Since there are no word characters in an empty string, it returns `null`.

### Problem 244
#### String.prototype.match behavior with empty regular expression:
```javascript
console.log('hello world'.match(/()/g)); // Output: null
```
`match(/()/g)` attempts to find matches for an empty capturing group in the string 'hello world'. An empty capturing group `()` does not match any characters by itself, so it returns `null`.

### Problem 245
#### String.prototype.matchAll behavior with empty string:
```javascript
const matchesEmptyString = ''.matchAll(/\w+/g);
console.log([...matchesEmptyString]); // Output: []
```
`matchAll(/\w+/g)` tries to find all matches for one or more word characters in the empty string ''. Since there are no word characters, it returns an empty iterator `[]`.

### Problem 246
#### String.prototype.matchAll behavior with empty regular expression:
```javascript
const matchesEmptyRegex = 'hello world'.matchAll(/()/g);
console.log([...matchesEmptyRegex]); // Output: []
```
`matchAll(/()/g)` attempts to find all matches for an empty capturing group in the string 'hello world'. An empty capturing group `()` does not match any characters, so it returns an empty iterator `[]`.

### Problem 247
#### String.prototype.replace behavior with empty string:
```javascript
console.log('hello world'.replace('', 'goodbye')); // Output: 'hello world'
```
`replace('', 'goodbye')` tries to replace an empty substring with 'goodbye' in the string 'hello world'. However, since the first argument is empty, it does not find an empty substring to replace, resulting in no change to the original string `'hello world'`.

### Problem 248
#### String.prototype.replace behavior with empty regular expression:
```javascript
console.log('hello world'.replace(/()/g, 'goodbye')); // Output: 'hello world'
```
`replace(/()/g, 'goodbye')` attempts to replace all occurrences of an empty capturing group in the string 'hello world' with 'goodbye'. Since an empty capturing group `()` does not match any characters, it does not find anything to replace, resulting in no change to the original string `'hello world'`.

### Problem 249
#### String.prototype.replaceAll behavior with empty string:
```javascript
console.log('hello world'.replaceAll('', 'goodbye')); // Output: 'goodbyehellogoodbyeworldgoodbye'
```
`replaceAll('', 'goodbye')` replaces all occurrences of an empty substring with 'goodbye' in the string 'hello world'. Since the first argument is an empty string, it finds every position between characters and replaces with 'goodbye', effectively placing 'goodbye' at the beginning, between every character, and at the end of the string.

### Problem 250
#### String.prototype.replaceAll behavior with empty regular expression:
```javascript
console.log('hello world'.replaceAll(/()/g, 'goodbye')); // Output: 'hello world'
```
`replaceAll(/()/g, 'goodbye')` attempts to replace all occurrences of an empty capturing group in the string 'hello world' with 'goodbye'. Since an empty capturing group `()` does not match any characters, it does not find anything to replace, resulting in no change to the original string `'hello world'`.