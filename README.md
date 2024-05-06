<div align="center">
  <h1 >Weird JS</h1>
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
####  NaN comparison::
```javascript
console.log(NaN === NaN); // Output: false
```
In JavaScript, NaN (Not a Number) is a special value used to represent the result of an operation that cannot produce a meaningful numeric result. 

### Problem 3
####  Type coercion:
```javascript
console.log(1 + '1'); // Output: '11'
```
In JavaScript, type coercion refers to the automatic conversion of values from one data type to another. This can sometimes lead to unexpected behavior in expressions and operations.

### Problem 3
####  Type coercion:
```javascript
console.log(1 + '1'); // Output: '11'
```
In JavaScript, type coercion refers to the automatic conversion of values from one data type to another. This can sometimes lead to unexpected behavior in expressions and operations.

### Problem 4
####  Implicit global variables:
```javascript
function test() {
    a = 10;
}
test();
console.log(a); // Output: 10
```
In JavaScript, variables declared without the var, let, or const keyword inside a function become global variables, even if they are assigned values inside a function scope.

### Problem 5
####  Truthy and falsy values:
```javascript
console.log(Boolean('false')); // Output: true
console.log(Boolean('')); // Output: false
```
In JavaScript, certain values are considered falsy, such as an empty string, undefined, null, 0, NaN, and false. All other values are considered truthy.