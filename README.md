# test-and-convert-types

Library that has two main functions:

- Test the execution time of functions and Test according to the time requested by you in milliseconds.
- Decode and encondify binary, text, and numeric type data.

## Installation

```bash
npm i test-and-convert-types
```

## Usage

### Test

- Calculate the execution time of a function.
```javascript
const { test } = require('test-and-convert-types');

// Test the execution time of a function
function helloworld(a, b) {
  console.log(a + b);
}
console.log(test.testTimeCount(helloworld));
// Output:
// 🕑:0.039
```
- With time check
```javascript
// Test the execution time of a function with a parameter and validate the result

function helloworld(a, b) {
  console.log(a + b);
}

console.log(test.testTimeCheck(helloworld, 0.1));
// Output:
// ✅ Test completed, great time

console.log(test.testTimeCheck(helloworld, 0.004));
// Output:
// ❌ Failed Test, time exceeded to 0.004 ms
```

- Compare performance with other functions 

```javascript
// Compare the execution time with other functions

function helloworld(a, b) {
  console.log(a + b);
}
function helloworld2(a, b) {
  console.log(a + b);
}

console.log(test.testTimeFunctions(helloworld, helloworld2));
// Output:
// Function primary with: 🕑 :0.035 ms, performs better than function secondary with: 🕑 :0.003 ms
```
## Decode

```javascript
const { decode } = require('test-and-convert-types');

//Convert a Binary to a number
const num = convert.binaryToNumber("11001")
console.log(num)
// Output:
// 25

//Convert a Binary to a Text
const text = convert.binaryToText("0110002")
console.log(text)
// Output:
// ↑

// Decode a Token Jwt to a Object
const token = convert.decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")

console.log(token)
// Output:
// { sub: '1234567890', name: 'John Doe', iat: 1516239022 }

// convert a Number to a Binary
const binary = convert.numberToBinary(20)

console.log(binary)
// Output:
// 10100

// convert text to base64
const b64 = convert.textToB64('Hola Mundo');

console.log(b64)
// Output:
// SG9sYSBNdW5kbw==

// convert text to binary
const textBinary = convert.textToBinary('Hola mundo');

console.log(textBinary)
// Output:
// 1001000 1101111 1101100 1100001 100000 1101101 1110101 1101110 1100100 1101111
```
If you want to support me, you can contact me.

If you liked it you can give it a ⭐ in the repository, that would help me a lot.

 
## Version

1.0.1

## Author

Andy Santisteban

## License

[MIT](https://choosealicense.com/licenses/mit/)
