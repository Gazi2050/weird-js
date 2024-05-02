/*****problem1*****/
//Floating-point arithmetic precision issues:
console.log(0.1 + 0.2 === 0.3);// Output: false

/*****problem2*****/
// NaN comparison:
console.log(NaN === NaN);// Output: false

/*****problem3*****/
//Type coercion:
console.log(1 + '1'); // Output: '11'

/*****problem4*****/
//Implicit global variables:
function test() {
    a = 10;
}
test();
console.log(a); // Output: 10

/*****problem5*****/
// Truthy and falsy values:
console.log(Boolean('false')); // Output: true
console.log(Boolean('')); // Output: false
