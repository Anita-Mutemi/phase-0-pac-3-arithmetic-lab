number = 10;
function add () {
    return (number += 5) ;
}
function subtract () {
    return (number -= 5) ;
}
function multiply () {
    return (number *= 5) ;
}
function divide () {
    return (number /= 5) ;
}

function add (a, b) {
    return (a + b) ;
}
console.log(add( 2, 3 )) ;

function subtract (a, b) {
    return (a - b) ;
}
console.log(subtract( 10, 5 )) ;

function multiply (a, b) {
    return (a * b) ;
}
console.log(multiply( 2, 3 )) ;

function divide (a, b) {
    return (a / b) ;
}
console.log(add( 2, 2 )) ;
function increment(n) {
  return n + 1;
}
console.log(increment(5));
function decrement(n) {
  return n - 1;
}
console.log(decrement(5)); 
function makeInt(n) {
  return parseInt(n, 10);
}
console.log(makeInt("5")); 
console.log(makeInt("5.7"));
console.log(makeInt("hello"));
function preserveDecimal(n) {
  return parseFloat(n);
}
console.log(preserveDecimal("5.7")); 
console.log(preserveDecimal("hello")); 
