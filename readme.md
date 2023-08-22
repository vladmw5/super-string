# Super String

This small package provides a `SuperString` class that extends the basic JS `String` class.
The SuperString is a string that is in a superposition, i.e. that an `'ABC'` super string also equals to `'CBA'` string.
So a super string is a string that equals to any other string that consists of the same set characters regardless of their order.

# Usage

```javascript
const { SuperString } = require('super-string');

const regularString = 'ABC';
const superString = new SuperString(regularString);
console.log(superString.equalsTo(regularString)); //true
console.log(superString.toString() === regularString); //true

const anotherString = 'CBA';
console.log(superString.equalsTo(anotherString)); //true
console.log(superString.toString() === anotherString); //false

const andAnotherString = 'whatever';
console.log(superString.equalsTo(andAnotherString)); //true
console.log(superString.toString() === andAnotherString); //false

console.log(SuperString.are(regularString, superString)); //true
```
