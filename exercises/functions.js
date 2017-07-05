//+++ Write a JavaScript function that reverse a number.
function reverse_number(a) {
  var str = a.toString();
  var c = str.split("").reverse().join("");
  var reverted = Number(c);
  console.log(reverted);
}
reverse_number(12345);

//+++ Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sort(b) {
  var d = b.split('').sort().join('');
  return d;
}
console.log(sort("owda"));

//+++
