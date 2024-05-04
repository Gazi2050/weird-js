/*****problem1*****/
// Floating-point arithmetic precision issues:
console.log(0.1 + 0.2 === 0.3); // Output: false

/*****problem2*****/
// NaN comparison:
console.log(NaN === NaN); // Output: false

/*****problem3*****/
// Type coercion:
console.log(1 + '1'); // Output: '11'

/*****problem4*****/
// Implicit global variables:
function test() {
    a = 10;
}
test();
console.log(a); // Output: 10

/*****problem5*****/
// Truthy and falsy values:
console.log(Boolean('false')); // Output: true
console.log(Boolean('')); // Output: false

/*****problem6*****/
// Automatic semicolon insertion:
function test() {
    return
    {
        message: 'Hello'
    };
}
console.log(test()); // Output: undefined

/*****problem7*****/
// Equality comparisons with ==:
console.log(0 == '0'); // Output: true
console.log(false == 'false'); // Output: false

/*****problem8*****/
// Inconsistent array length:
const arr = [];
arr[5] = 'Hello';
console.log(arr.length); // Output: 6

/*****problem9*****/
// Redeclaring variables with var:
var x = 10;
var x = 20;
console.log(x); // Output: 20

/*****problem10*****/
// Redeclaring variables with let:
let y = 10;
let y = 20; // Output: SyntaxError: Identifier 'y' has already been declared

/*****problem11*****/
// Redeclaring variables with const:
const z = 10;
const z = 20; // Output: SyntaxError: Identifier 'z' has already been declared

/*****problem12*****/
// Scope of variables declared with var:
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10
}
test();

/*****problem13*****/
// Scope of variables declared with let:
function test() {
    if (true) {
        let y = 10;
    }
    console.log(y); // Output: ReferenceError: y is not defined
}
test();

/*****problem14*****/
// Scope of variables declared with const:
function test() {
    if (true) {
        const z = 10;
    }
    console.log(z); // Output: ReferenceError: z is not defined
}
test();

/*****problem15*****/
// Hoisting of variables declared with var:
console.log(x); // Output: undefined
var x = 10;

/*****problem16*****/
// Hoisting of variables declared with let:
console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;

/*****problem17*****/
// Hoisting of variables declared with const:
console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
const z = 10;

/*****problem18*****/
// Changing const variables:
const PI = 3.14;
PI = 3.14159; // Output: TypeError: Assignment to constant variable

/*****problem19*****/
// Empty array and empty object comparison:
console.log([] === {}); // Output: false

/*****problem20*****/
// typeof undefined:
console.log(typeof undefined); // Output: 'undefined'

/*****problem21*****/
// Implicit conversion in arithmetic operations:
console.log(10 + '20'); // Output: '1020'

/*****problem22*****/
// Null and undefined equality:
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

/*****problem23*****/
// Ternary operator with null:
console.log(null ? 'true' : 'false'); // Output: 'false'

/*****problem24*****/
// Use of for...in loop with strings:
const str = 'Hello';
for (const index in str) {
    console.log(str[index]);
}
// Output: 'H', 'e', 'l', 'l', 'o'

/*****problem25*****/
// Array length behavior with holes:
const arr = [1, , , 4];
console.log(arr.length); // Output: 4

/*****problem26*****/
// Array.prototype.toString behavior:
console.log([1, [2, 3], 4].toString()); // Output: '1,2,3,4'

/*****problem27*****/
// String.prototype.substring behavior with negative indices:
console.log('Hello'.substring(-1)); // Output: 'Hello'

/*****problem28*****/
// String.prototype.substring behavior with NaN indices:
console.log('Hello'.substring(NaN)); // Output: 'Hello'

/*****problem29*****/
// String.prototype.substring behavior with astral characters:
console.log('😊'.substring(0)); // Output: '😊'

/*****problem30*****/
// String.prototype.substring behavior with out-of-range indices:
console.log('Hello'.substring(10)); // Output: ''

/*****problem31*****/
// String.prototype.substring behavior with negative end index:
console.log('Hello'.substring(0, -1)); // Output: 'Hell'

/*****problem32*****/
// String.prototype.padStart behavior with target length less than string length:
console.log('Hello'.padStart(3, 'X')); // Output: 'Hello'

/*****problem33*****/
// String.prototype.padEnd behavior with target length less than string length:
console.log('Hello'.padEnd(3, 'X')); // Output: 'Hello'

/*****problem34*****/
// Object.prototype.toString behavior with arrays:
console.log(Object.prototype.toString.call([])); // Output: '[object Array]'

/*****problem35*****/
// Object.prototype.toString behavior with null:
console.log(Object.prototype.toString.call(null)); // Output: '[object Null]'

/*****problem36*****/
// Object.prototype.toString behavior with undefined:
console.log(Object.prototype.toString.call(undefined)); // Output: '[object Undefined]'

/*****problem37*****/
// Object.prototype.toString behavior with functions:
console.log(Object.prototype.toString.call(function () { })); // Output: '[object Function]'

/*****problem38*****/
// Object.prototype.toString behavior with dates:
console.log(Object.prototype.toString.call(new Date())); // Output: '[object Date]'

/*****problem39*****/
// Object.prototype.toString behavior with regular expressions:
console.log(Object.prototype.toString.call(/abc/)); // Output: '[object RegExp]'

/*****problem40*****/
// Object.prototype.toString behavior with numbers:
console.log(Object.prototype.toString.call(123)); // Output: '[object Number]'

/*****problem41*****/
// Object.prototype.toString behavior with strings:
console.log(Object.prototype.toString.call('Hello')); // Output: '[object String]'

/*****problem42*****/
// Object.prototype.toString behavior with booleans:
console.log(Object.prototype.toString.call(true)); // Output: '[object Boolean]'

/*****problem43*****/
// Object.prototype.toString behavior with objects:
console.log(Object.prototype.toString.call({})); // Output: '[object Object]'

/*****problem44*****/
// Object.prototype.toString behavior with symbols:
console.log(Object.prototype.toString.call(Symbol())); // Output: '[object Symbol]'

/*****problem45*****/
// Object.prototype.toString behavior with BigInts:
console.log(Object.prototype.toString.call(BigInt(10))); // Output: '[object BigInt]'

/*****problem46*****/
// Object.prototype.toString behavior with array-like objects:
console.log(Object.prototype.toString.call({ length: 0 })); // Output: '[object Object]'

/*****problem47*****/
// Object.prototype.toString behavior with arguments objects:
console.log(Object.prototype.toString.call(arguments)); // Output: '[object Arguments]'

/*****problem48*****/
// Object.prototype.toString behavior with error objects:
console.log(Object.prototype.toString.call(new Error())); // Output: '[object Error]'

/*****problem49*****/
// Object.prototype.toString behavior with typed arrays:
console.log(Object.prototype.toString.call(new Int8Array())); // Output: '[object Int8Array]'

/*****problem50*****/
// Object.prototype.toString behavior with ArrayBuffer objects:
console.log(Object.prototype.toString.call(new ArrayBuffer())); // Output: '[object ArrayBuffer]'

/*****problem51*****/
// Async function return behavior:
async function asyncFunc() {
    return 10;
}
asyncFunc().then(console.log); // Output: 10

/*****problem52*****/
// Async function error handling:
async function asyncFunc() {
    throw new Error('Async error');
}
asyncFunc().catch(console.error); // Output: Error: Async error

/*****problem53*****/
// Promise.all behavior with empty iterable:
Promise.all([]).then(console.log); // Output: []

/*****problem54*****/
// Promise.allSettled behavior with empty iterable:
Promise.allSettled([]).then(console.log); // Output: []

/*****problem55*****/
// Promise.race behavior with empty iterable:
Promise.race([]).then(console.log); // (No output, promise never settles)

/*****problem56*****/
// Negative zero behavior in comparisons:
console.log(-0 === 0); // Output: true

/*****problem57*****/
// Negative zero behavior in division:
console.log(1 / -0); // Output: -Infinity

/*****problem58*****/
// Negative zero behavior in string conversion:
console.log(String(-0)); // Output: '0'

/*****problem59*****/
// Negative zero behavior in JSON stringification:
console.log(JSON.stringify(-0)); // Output: '0'

/*****problem60*****/
// Negative zero behavior in object property comparison:
const obj = { a: 0, b: -0 };
console.log(obj.a === obj.b); // Output: true

/*****problem61*****/
// Negative zero behavior in array sorting:
const arr = [1, -0, 0];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [-0, 0, 1]

/*****problem62*****/
// Function.prototype.bind behavior with constructors:
function Person(name) {
    this.name = name;
}
const obj = {};
const boundFunc = Person.bind(obj);
boundFunc('Alice');
console.log(obj.name); // Output: 'Alice'

/*****problem63*****/
// Function.prototype.bind behavior with bound functions:
function greet(greeting) {
    return greeting + ' ' + this.name;
}
const obj = { name: 'Alice' };
const boundGreet = greet.bind(obj, 'Hello');
console.log(boundGreet()); // Output: 'Hello Alice'

/*****problem64*****/
// Function.prototype.bind behavior with partial application:
function add(a, b) {
    return a + b;
}
const add5 = add.bind(null, 5);
console.log(add5(10)); // Output: 15

/*****problem65*****/
// Function.prototype.call behavior with constructors:
function Person(name) {
    this.name = name;
}
const obj = {};
Person.call(obj, 'Bob');
console.log(obj.name); // Output: 'Bob'

/*****problem66*****/
// Function.prototype.call behavior with bound functions:
function greet(greeting) {
    return greeting + ' ' + this.name;
}
const obj = { name: 'Bob' };
const result = greet.call(obj, 'Hello');
console.log(result); // Output: 'Hello Bob'

/*****problem67*****/
// Function.prototype.call behavior with undefined and null:
function test() {
    console.log(this);
}
test.call(undefined); // Output: global object (in non-strict mode), TypeError in strict mode
test.call(null); // Output: global object (in non-strict mode), TypeError in strict mode

/*****problem68*****/
// Function.prototype.apply behavior with arrays:
function greet(greeting, punctuation) {
    return greeting + ' ' + this.name + punctuation;
}
const obj = { name: 'Charlie' };
const args = ['Hello', '!'];
console.log(greet.apply(obj, args)); // Output: 'Hello Charlie!'

/*****problem69*****/
// Function.prototype.apply behavior with undefined and null:
function test() {
    console.log(this);
}
test.apply(undefined); // Output: global object (in non-strict mode), TypeError in strict mode
test.apply(null); // Output: global object (in non-strict mode), TypeError in strict mode

/*****problem70*****/
// Function.prototype.bind behavior with arrow functions:
const obj = {
    value: 42,
    getValue: () => this.value
};
console.log(obj.getValue()); // Output: undefined

/*****problem71*****/
// Arrow function behavior with this:
const obj = {
    value: 42,
    getValue: function () {
        return () => this.value;
    }
};
const boundFunc = obj.getValue();
console.log(boundFunc()); // Output: 42

/*****problem72*****/
// Arrow function behavior with arguments objects:
const test = () => arguments.length;
console.log(test(1, 2, 3)); // Output: ReferenceError: arguments is not defined

/*****problem73*****/
// Arrow function behavior with new:
const Person = () => { };
const person = new Person(); // Output: TypeError: Person is not a constructor

/*****problem74*****/
// Arrow function behavior with prototype:
const obj = {
    method: () => { }
};
console.log(obj.method.prototype); // Output: undefined

/*****problem75*****/
// Destructuring assignment with arrays:
const [a, b] = [1, 2, 3];
console.log(a, b); // Output: 1 2

/*****problem76*****/
// Destructuring assignment with objects:
const { x, y } = { x: 1, y: 2, z: 3 };
console.log(x, y); // Output: 1 2

/*****problem77*****/
// Destructuring assignment with nested objects:
const { a: { b } } = { a: { b: 1 } };
console.log(b); // Output: 1

/*****problem78*****/
// Destructuring assignment with default values:
const [a = 1, b = 2] = [];
console.log(a, b); // Output: 1 2

/*****problem79*****/
// Destructuring assignment with rest operator:
const [a, ...rest] = [1, 2, 3, 4, 5];
console.log(a, rest); // Output: 1 [2, 3, 4, 5]

/*****problem80*****/
// Destructuring assignment with computed property names:
const propName = 'x';
const { [propName]: value } = { x: 1 };
console.log(value); // Output: 1

/*****problem81*****/
// Default parameters behavior with falsy values:
function test(a = 1, b = 2) {
    console.log(a, b);
}
test(0, null); // Output: 0 null

/*****problem82*****/
// Default parameters behavior with undefined:
function test(a = 1) {
    console.log(a);
}
test(undefined); // Output: 1

/*****problem83*****/
// Default parameters behavior with rest operator:
function test(a = 1, ...rest) {
    console.log(a, rest);
}
test(); // Output: 1 []

/*****problem84*****/
// Template literals behavior with expression interpolation:
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`); // Output: 'Fifteen is 15 and not 20.'

/*****problem85*****/
// Template literals behavior with multi-line strings:
console.log(`string text line 1
string text line 2`); // Output: 'string text line 1\nstring text line 2'

/*****problem86*****/
// Template literals behavior with tagged template literals:
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
const a = 5;
const b = 10;
tag`Hello ${a + b} world ${a * b}`; // Output: ['Hello ', ' world ', ''], [15, 50]

/*****problem87*****/
// Spread syntax behavior with arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

/*****problem88*****/
// Spread syntax behavior with objects:
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };
console.log(obj2); // Output: { x: 1, y: 2, z: 3 }

/*****problem89*****/
// Spread syntax behavior with nested objects:
const obj1 = { x: { y: 1 } };
const obj2 = { ...obj1 };
obj2.x.y = 2;
console.log(obj1.x.y); // Output: 2

/*****problem90*****/
// Spread syntax behavior with function arguments:
function test(a, b, c) {
    console.log(a, b, c);
}
const args = [1, 2, 3];
test(...args); // Output: 1 2 3

/*****problem91*****/
// Nullish coalescing operator behavior with falsy values:
const a = null;
const b = undefined;
console.log(a ?? 'default'); // Output: 'default'
console.log(b ?? 'default'); // Output: 'default'

/*****problem92*****/
// Nullish coalescing operator behavior with empty strings:
const str = '';
console.log(str ?? 'default'); // Output: ''

/*****problem93*****/
// Nullish coalescing operator behavior with zero:
const num = 0;
console.log(num ?? 'default'); // Output: 0

/*****problem94*****/
// Optional chaining behavior with undefined:
const obj = {};
console.log(obj.prop?.nestedProp); // Output: undefined

/*****problem95*****/
// Optional chaining behavior with null:
const obj = null;
console.log(obj?.prop); // Output: undefined

/*****problem96*****/
// BigInt behavior with regular arithmetic operators:
const bigInt = BigInt(10);
console.log(bigInt * 2n); // Output: 20n

/*****problem97*****/
// BigInt behavior with mixed operations:
const bigInt = BigInt(10);
console.log(bigInt + 2); // Output: TypeError: Cannot mix BigInt and other types, use explicit conversions

/*****problem98*****/
// BigInt behavior with typeof operator:
const bigInt = BigInt(10);
console.log(typeof bigInt); // Output: 'bigint'

/*****problem99*****/
// BigInt behavior with JSON.stringify:
const bigInt = BigInt(10);
console.log(JSON.stringify(bigInt)); // Output: '10'

/*****problem100*****/
// BigInt behavior with bitwise operators:
const bigInt = BigInt(10);
console.log(bigInt << 2n); // Output: 40n

/*****problem101*****/
// RegExp behavior with backslashes in string literals:
const regex = /\w/;
console.log(regex); // Output: /\w/

/*****problem102*****/
// RegExp behavior with escape sequences:
const regex = new RegExp('\\w');
console.log(regex); // Output: /\w/

/*****problem103*****/
// RegExp behavior with character classes:
const regex = /[A-Z]/i;
console.log(regex.test('a')); // Output: true

/*****problem104*****/
// RegExp behavior with lookaheads:
const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
console.log(regex.test('Password1')); // Output: true

/*****problem105*****/
// RegExp behavior with Unicode property escapes:
const regex = /\p{Emoji}/u;
console.log(regex.test('😊')); // Output: true

/*****problem106*****/
// RegExp behavior with named capturing groups:
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = regex.exec('2022-01-01');
console.log(match.groups.year); // Output: '2022'

/*****problem107*****/
// RegExp behavior with dot matches newline:
const regex = /./s;
console.log(regex.test('\n')); // Output: true

/*****problem108*****/
// RegExp behavior with flags:
const regex = /abc/i;
console.log(regex.flags); // Output: 'i'

/*****problem109*****/
// Object.hasOwnProperty behavior with inherited properties:
const obj = Object.create({ prop: 'inherited' });
console.log(obj.hasOwnProperty('prop')); // Output: false

/*****problem110*****/
// Object.assign behavior with getters:
const obj1 = { get prop() { return 'value'; } };
const obj2 = {};
Object.assign(obj2, obj1);
console.log(obj2); // Output: {}

/*****problem111*****/
// Object.getOwnPropertyDescriptors behavior with getters/setters:
const obj = {
    get prop() { return 'value'; },
    set prop(value) { console.log(value); }
};
console.log(Object.getOwnPropertyDescriptors(obj)); // Output: { prop: { get: [Function: get prop], set: [Function: set prop], enumerable: true, configurable: true } }

/*****problem112*****/
// Object.freeze behavior with nested objects:
const obj = { nested: {} };
Object.freeze(obj);
obj.nested.prop = 'value';
console.log(obj.nested.prop); // Output: 'value'

/*****problem113*****/
// Object.seal behavior with property deletion:
const obj = { prop: 'value' };
Object.seal(obj);
delete obj.prop;
console.log(obj); // Output: { prop: 'value' }

/*****problem114*****/
// Object.preventExtensions behavior with property addition:
const obj = {};
Object.preventExtensions(obj);
obj.prop = 'value';
console.log(obj.prop); // Output: undefined

/*****problem115*****/
// Object.setPrototypeOf behavior with circular references:
const obj1 = {};
const obj2 = {};
obj1.child = obj2;
obj2.parent = obj1;
Object.setPrototypeOf(obj1, obj2);
console.log(obj1.parent.child === obj2); // Output: true

/*****problem116*****/
// Array.from behavior with array-like objects:
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
console.log(Array.from(arrayLike)); // Output: ['a', 'b']

/*****problem117*****/
// Array.prototype.includes behavior with NaN:
const arr = [NaN];
console.log(arr.includes(NaN)); // Output: true

/*****problem118*****/
// Array.prototype.flat behavior with depth:
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // Output: [1, 2, 3]

/*****problem119*****/
// Array.prototype.flatMap behavior with flatMap:
const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2])); // Output: [1, 2, 2, 4, 3, 6]

/*****problem120*****/
// Array.prototype.sort behavior with numbers:
const arr = [1, 10, 2];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 10]

/*****problem121*****/
// Array.prototype.slice behavior with negative indices:
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-3)); // Output: [3, 4, 5]

/*****problem122*****/
// Array.prototype.slice behavior with floating-point indices:
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1.5, 3.5)); // Output: [2, 3]

/*****problem123*****/
// Array.prototype.splice behavior with negative start index:
const arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1);
console.log(arr); // Output: [1, 2, 3, 5]

/*****problem124*****/
// Array.prototype.splice behavior with negative delete count:
const arr = [1, 2, 3, 4, 5];
arr.splice(2, -1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

/*****problem125*****/
// Array.prototype.splice behavior with adding elements:
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b');
console.log(arr); // Output: [1, 2, 'a', 'b', 3, 4, 5]

/*****problem126*****/
// Set.prototype.has behavior with NaN:
const set = new Set();
set.add(NaN);
console.log(set.has(NaN)); // Output: true

/*****problem127*****/
// Set.prototype.forEach behavior with thisArg:
const set = new Set([1, 2, 3]);
const obj = {
    callback(value) {
        console.log(this === obj);
        console.log(value);
    }
};
set.forEach(obj.callback, obj); // Output: true, 1, true, 2, true, 3

/*****problem128*****/
// Map.prototype.get behavior with NaN keys:
const map = new Map();
map.set(NaN, 'value');
console.log(map.get(NaN)); // Output: 'value'

/*****problem129*****/
// Map.prototype.forEach behavior with thisArg:
const map = new Map([[1, 'a'], [2, 'b'], [3, 'c']]);
const obj = {
    callback(value, key) {
        console.log(this === obj);
        console.log(key, value);
    }
};
map.forEach(obj.callback, obj); // Output: true, 1, 'a', true, 2, 'b', true, 3, 'c'

/*****problem130*****/
// WeakMap behavior with object keys:
const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: 'value'

/*****problem131*****/
// WeakMap behavior with primitive keys:
const weakMap = new WeakMap();
const key = 'key';
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // Output: undefined

/*****problem132*****/
// WeakSet behavior with object values:
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true

/*****problem133*****/
// WeakSet behavior with primitive values:
const weakSet = new WeakSet();
weakSet.add('value');
console.log(weakSet.has('value')); // Output: false

/*****problem134*****/
// Date.prototype.toISOString behavior with time zones:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toISOString()); // Output: '2022-01-01T00:00:00.000Z'

/*****problem135*****/
// Date.prototype.toJSON behavior with toJSON:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toJSON()); // Output: '2022-01-01T00:00:00.000Z'

/*****problem136*****/
// Date.prototype.toString behavior with time zones:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toString()); // Output: 'Sat Jan 01 2022 02:00:00 GMT+0200 (Central European Standard Time)'

/*****problem137*****/
// Date.prototype.toString behavior with UTC method:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toUTCString()); // Output: 'Sat, 01 Jan 2022 00:00:00 GMT'

/*****problem138*****/
// Date.prototype.toString behavior with custom format:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // Output: 'Saturday, January 1, 2022'

/*****problem139*****/
// Date.prototype.toString behavior with date component methods:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getDate()); // Output: 1
console.log(date.getMonth()); // Output: 0 (January is represented as 0)
console.log(date.getFullYear()); // Output: 2022

/*****problem140*****/
// Date.prototype.toString behavior with time component methods:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getHours()); // Output: 2 (UTC hour)
console.log(date.getMinutes()); // Output: 0
console.log(date.getSeconds()); // Output: 0
console.log(date.getMilliseconds()); // Output: 0

/*****problem141*****/
// Date.prototype.toString behavior with day of week method:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getDay()); // Output: 6 (Saturday)

/*****problem142*****/
// Date.prototype.toString behavior with time zone offset method:
const date = new Date('2022-01-01T00:00:00Z');
console.log(date.getTimezoneOffset()); // Output: -120 (offset in minutes, -120 corresponds to UTC+2)

/*****problem143*****/
// Math.max behavior with array of numbers:
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // Output: 3

/*****problem144*****/
// Math.max behavior with variable arguments:
console.log(Math.max(1, 2, 3)); // Output: 3

/*****problem145*****/
// Math.min behavior with array of numbers:
const arr = [1, 2, 3];
console.log(Math.min(...arr)); // Output: 1

/*****problem146*****/
// Math.min behavior with variable arguments:
console.log(Math.min(1, 2, 3)); // Output: 1

/*****problem147*****/
// Math.pow behavior with fractional exponents:
console.log(Math.pow(8, 1 / 3)); // Output: 2

/*****problem148*****/
// Math.pow behavior with negative bases and odd exponents:
console.log(Math.pow(-2, 3)); // Output: -8

/*****problem149*****/
// Math.pow behavior with negative bases and even exponents:
console.log(Math.pow(-2, 4)); // Output: 16

/*****problem150*****/
// Math.pow behavior with non-integer exponents:
console.log(Math.pow(4, 0.5)); // Output: 2

/*****problem151*****/
// Math.sqrt behavior with negative numbers:
console.log(Math.sqrt(-1)); // Output: NaN

/*****problem152*****/
// Math.trunc behavior with positive numbers:
console.log(Math.trunc(42.7)); // Output: 42

/*****problem153*****/
// Math.trunc behavior with negative numbers:
console.log(Math.trunc(-42.7)); // Output: -42
// Math.trunc behavior with positive numbers:
console.log(Math.trunc(42.7)); // Output: 42

/*****problem154*****/
// Math.trunc behavior with negative numbers:
console.log(Math.trunc(-42.7)); // Output: -42

/*****problem155*****/
// Math.trunc behavior with zero:
console.log(Math.trunc(0)); // Output: 0

/*****problem156*****/
// Math.trunc behavior with NaN:
console.log(Math.trunc(NaN)); // Output: NaN

/*****problem157*****/
// Math.sign behavior with positive numbers:
console.log(Math.sign(42)); // Output: 1

/*****problem158*****/
// Math.sign behavior with negative numbers:
console.log(Math.sign(-42)); // Output: -1

/*****problem159*****/
// Math.sign behavior with zero:
console.log(Math.sign(0)); // Output: 0

/*****problem160*****/
// Math.sign behavior with NaN:
console.log(Math.sign(NaN)); // Output: NaN

/*****problem161*****/
// Number.isFinite behavior with finite numbers:
console.log(Number.isFinite(42)); // Output: true

/*****problem162*****/
// Number.isFinite behavior with Infinity:
console.log(Number.isFinite(Infinity)); // Output: false

/*****problem163*****/
// Number.isFinite behavior with NaN:
console.log(Number.isFinite(NaN)); // Output: false

/*****problem164*****/
// Number.isFinite behavior with non-numeric values:
console.log(Number.isFinite('42')); // Output: false

/*****problem165*****/
// Number.isInteger behavior with integer numbers:
console.log(Number.isInteger(42)); // Output: true

/*****problem166*****/
// Number.isInteger behavior with floating-point numbers:
console.log(Number.isInteger(42.5)); // Output: false

/*****problem167*****/
// Number.isInteger behavior with Infinity:
console.log(Number.isInteger(Infinity)); // Output: false

/*****problem168*****/
// Number.isInteger behavior with NaN:
console.log(Number.isInteger(NaN)); // Output: false

/*****problem169*****/
// Number.isInteger behavior with non-numeric values:
console.log(Number.isInteger('42')); // Output: false

/*****problem170*****/
// Number.parseInt behavior with strings:
console.log(Number.parseInt('42')); // Output: 42

/*****problem171*****/
// Number.parseInt behavior with strings containing non-numeric characters:
console.log(Number.parseInt('42px')); // Output: 42

/*****problem172*****/
// Number.parseFloat behavior with strings:
console.log(Number.parseFloat('42.5')); // Output: 42.5

/*****problem173*****/
// Number.parseFloat behavior with strings containing non-numeric characters:
console.log(Number.parseFloat('42.5px')); // Output: 42.5

/*****problem174*****/
// Number.parseFloat behavior with exponential notation:
console.log(Number.parseFloat('1.2e3')); // Output: 1200

/*****problem175*****/
// Array.isArray behavior with arrays:
console.log(Array.isArray([])); // Output: true

/*****problem176*****/
// Array.isArray behavior with non-arrays:
console.log(Array.isArray({})); // Output: false

/*****problem177*****/
// Array.isArray behavior with array-like objects:
console.log(Array.isArray({ length: 0 })); // Output: false

/*****problem178*****/
// ArrayBuffer.isView behavior with typed arrays:
console.log(ArrayBuffer.isView(new Int8Array())); // Output: true

/*****problem179*****/
// ArrayBuffer.isView behavior with non-typed arrays:
console.log(ArrayBuffer.isView([])); // Output: false

/*****problem180*****/
// ArrayBuffer.isView behavior with array-like objects:
console.log(ArrayBuffer.isView({ length: 0 })); // Output: false

/*****problem181*****/
// ArrayBuffer.isView behavior with DataView:
console.log(ArrayBuffer.isView(new DataView(new ArrayBuffer()))); // Output: true

/*****problem182*****/
// String.fromCharCode behavior with ASCII codes:
console.log(String.fromCharCode(65, 66, 67)); // Output: 'ABC'

/*****problem183*****/
// String.fromCharCode behavior with Unicode code points:
console.log(String.fromCharCode(0x1F600)); // Output: '😀'

/*****problem184*****/
// String.prototype.charAt behavior with ASCII codes:
console.log('ABC'.charAt(0)); // Output: 'A'

/*****problem185*****/
// String.prototype.charAt behavior with surrogate pairs:
console.log('😀'.charAt(0)); // Output: ''

/*****problem186*****/
// String.prototype.charCodeAt behavior with ASCII codes:
console.log('ABC'.charCodeAt(0)); // Output: 65

/*****problem187*****/
// String.prototype.charCodeAt behavior with surrogate pairs:
console.log('😀'.charCodeAt(0)); // Output: 55357

/*****problem188*****/
// String.prototype.codePointAt behavior with ASCII codes:
console.log('ABC'.codePointAt(0)); // Output: 65

/*****problem189*****/
// String.prototype.codePointAt behavior with surrogate pairs:
console.log('😀'.codePointAt(0)); // Output: 128512

/*****problem190*****/
// String.prototype.includes behavior with search strings:
console.log('hello world'.includes('world')); // Output: true

/*****problem191*****/
// String.prototype.startsWith behavior with search strings:
console.log('hello world'.startsWith('hello')); // Output: true

/*****problem192*****/
// String.prototype.endsWith behavior with search strings:
console.log('hello world'.endsWith('world')); // Output: true

/*****problem193*****/
// String.prototype.repeat behavior with positive count:
console.log('abc'.repeat(3)); // Output: 'abcabcabc'

/*****problem194*****/
// String.prototype.repeat behavior with negative count:
console.log('abc'.repeat(-1)); // Output: ''

/*****problem195*****/
// String.prototype.repeat behavior with fractional count:
console.log('abc'.repeat(2.5)); // Output: 'abcabc'

/*****problem196*****/
// String.prototype.padStart behavior with shorter strings:
console.log('abc'.padStart(6, '123')); // Output: '123abc'

/*****problem197*****/
// String.prototype.padStart behavior with longer strings:
console.log('abc'.padStart(2, '123')); // Output: 'abc'

/*****problem198*****/
// String.prototype.padEnd behavior with shorter strings:
console.log('abc'.padEnd(6, '123')); // Output: 'abc123'

/*****problem199*****/
// String.prototype.padEnd behavior with longer strings:
console.log('abc'.padEnd(2, '123')); // Output: 'abc'

/*****problem200*****/
// String.prototype.trim behavior with leading/trailing whitespace:
console.log('  abc  '.trim()); // Output: 'abc'

/*****problem201*****/
// String.prototype.trimStart behavior with leading whitespace:
console.log('  abc'.trimStart()); // Output: 'abc'

/*****problem202*****/
// String.prototype.trimEnd behavior with trailing whitespace:
console.log('abc  '.trimEnd()); // Output: 'abc'

/*****problem203*****/
// String.prototype.split behavior with regular expressions:
console.log('hello world'.split(/\s/)); // Output: ['hello', 'world']

/*****problem204*****/
// String.prototype.split behavior with string separators:
console.log('hello world'.split(' ')); // Output: ['hello', 'world']

/*****problem205*****/
// String.prototype.slice behavior with positive indices:
console.log('hello world'.slice(6, 11)); // Output: 'world'

/*****problem206*****/
// String.prototype.slice behavior with negative indices:
console.log('hello world'.slice(-5, -1)); // Output: 'worl'

/*****problem207*****/
// String.prototype.substring behavior with positive indices:
console.log('hello world'.substring(6, 11)); // Output: 'world'

/*****problem208*****/
// String.prototype.substring behavior with negative indices:
console.log('hello world'.substring(-5, -1)); // Output: 'hello wor'

/*****problem209*****/
// String.prototype.substr behavior with positive start index:
console.log('hello world'.substr(6, 5)); // Output: 'world'

/*****problem210*****/
// String.prototype.substr behavior with negative start index:
console.log('hello world'.substr(-5, 4)); // Output: 'worl'

/*****problem211*****/
// String.prototype.substr behavior with negative length:
console.log('hello world'.substr(6, -2)); // Output: ''

/*****problem212*****/
// String.prototype.toLowerCase behavior with uppercase letters:
console.log('HELLO'.toLowerCase()); // Output: 'hello'

/*****problem213*****/
// String.prototype.toUpperCase behavior with lowercase letters:
console.log('hello'.toUpperCase()); // Output: 'HELLO'

/*****problem214*****/
// String.prototype.normalize behavior with combining diacritical marks:
console.log('\u006E\u0303'.normalize('NFC')); // Output: 'ñ'

/*****problem215*****/
// String.prototype.normalize behavior with compatibility characters:
console.log('\uFB01'.normalize()); // Output: 'fi'

/*****problem216*****/
// String.prototype.match behavior with regular expressions:
console.log('hello world'.match(/\w+/g)); // Output: ['hello', 'world']

/*****problem217*****/
// String.prototype.match behavior with global flag:
console.log('hello world'.match(/o/g)); // Output: ['o', 'o']

/*****problem218*****/
// String.prototype.matchAll behavior with regular expressions:
const matches = 'hello world'.matchAll(/\w+/g);
for (const match of matches) {
    console.log(match);
}
// Output:
// ['hello', index: 0, input: 'hello world']
// ['world', index: 6, input: 'hello world']

/*****problem219*****/
// String.prototype.replace behavior with regular expressions:
console.log('hello world'.replace(/\w+/, 'goodbye')); // Output: 'goodbye world'

/*****problem220*****/
// String.prototype.replace behavior with global flag:
console.log('hello world'.replace(/o/g, 'a')); // Output: 'hella warld'

/*****problem221*****/
// String.prototype.replaceAll behavior with regular expressions:
console.log('hello world'.replaceAll(/o/g, 'a')); // Output: 'hella warld'

/*****problem222*****/
// String.prototype.search behavior with regular expressions:
console.log('hello world'.search(/world/)); // Output: 6

/*****problem223*****/
// String.prototype.search behavior with non-matching patterns:
console.log('hello world'.search(/foo/)); // Output: -1

/*****problem224*****/
// String.prototype.startsWith behavior with position argument:
console.log('hello world'.startsWith('world', 6)); // Output: true

/*****problem225*****/
// String.prototype.endsWith behavior with position argument:
console.log('hello world'.endsWith('hello', 5)); // Output: true

/*****problem226*****/
// String.prototype.trimStart behavior with leading whitespace:
console.log('  hello'.trimStart()); // Output: 'hello'

/*****problem227*****/
// String.prototype.trimEnd behavior with trailing whitespace:
console.log('hello  '.trimEnd()); // Output: 'hello'

/*****problem228*****/
// String.prototype.endsWith behavior with longer search string than string length:
console.log('hello'.endsWith('hello world')); // Output: false

/*****problem229*****/
// String.prototype.startsWith behavior with longer search string than string length:
console.log('hello'.startsWith('hello world')); // Output: false

/*****problem230*****/
// String.prototype.repeat behavior with negative count:
console.log('abc'.repeat(-1)); // Output: ''

/*****problem231*****/
// String.prototype.padStart behavior with negative length:
console.log('abc'.padStart(-6, '123')); // Output: 'abc'

/*****problem232*****/
// String.prototype.padEnd behavior with negative length:
console.log('abc'.padEnd(-6, '123')); // Output: 'abc'

/*****problem233*****/
// String.prototype.trim behavior with empty string:
console.log(''.trim()); // Output: ''

/*****problem234*****/
// String.prototype.trimStart behavior with empty string:
console.log(''.trimStart()); // Output: ''

/*****problem235*****/
// String.prototype.trimEnd behavior with empty string:
console.log(''.trimEnd()); // Output: ''

/*****problem236*****/
// String.prototype.split behavior with empty string separator:
console.log('hello world'.split('')); // Output: ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

/*****problem237*****/
// String.prototype.slice behavior with no parameters:
console.log('hello world'.slice()); // Output: 'hello world'

/*****problem238*****/
// String.prototype.substring behavior with no parameters:
console.log('hello world'.substring()); // Output: 'hello world'

/*****problem239*****/
// String.prototype.substr behavior with no parameters:
console.log('hello world'.substr()); // Output: 'hello world'

/*****problem240*****/
// String.prototype.toLowerCase behavior with empty string:
console.log(''.toLowerCase()); // Output: ''

/*****problem241*****/
// String.prototype.toUpperCase behavior with empty string:
console.log(''.toUpperCase()); // Output: ''

/*****problem242*****/
// String.prototype.normalize behavior with empty string:
console.log(''.normalize()); // Output: ''

/*****problem243*****/
// String.prototype.match behavior with empty string:
console.log(''.match(/\w+/g)); // Output: null

/*****problem244*****/
// String.prototype.match behavior with empty regular expression:
console.log('hello world'.match(/()/g)); // Output: null

/*****problem245*****/
// String.prototype.matchAll behavior with empty string:
const matchesEmptyString = ''.matchAll(/\w+/g);
console.log([...matchesEmptyString]); // Output: []

/*****problem246*****/
// String.prototype.matchAll behavior with empty regular expression:
const matchesEmptyRegex = 'hello world'.matchAll(/()/g);
console.log([...matchesEmptyRegex]); // Output: []

/*****problem247*****/
// String.prototype.replace behavior with empty string:
console.log('hello world'.replace('', 'goodbye')); // Output: 'hello world'

/*****problem248*****/
// String.prototype.replace behavior with empty regular expression:
console.log('hello world'.replace(/()/g, 'goodbye')); // Output: 'hello world'

/*****problem249*****/
// String.prototype.replaceAll behavior with empty string:
console.log('hello world'.replaceAll('', 'goodbye')); // Output: 'goodbyehellogoodbyeworldgoodbye'

/*****problem250*****/
// String.prototype.replaceAll behavior with empty regular expression:
console.log('hello world'.replaceAll(/()/g, 'goodbye')); // Output: 'hello world'
