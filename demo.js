const mod = require('./myModule');
const calc = require('./calculatorFn');
var a = 5;
var b = 4;
console.log("Sum of the numbers is " + calc.add(a,b));
console.log("Difference of the numbers is " + calc.subtract(a,b));
console.log("Multiplication of the numbers is " + calc.multiply(a,b));
console.log("Division of the numbers is " + calc.divide(a,b));