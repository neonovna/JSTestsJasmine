// //+++ Write a JavaScript function that reverse a number.
// function reverse_number(a) {
//   var str = a.toString();
//   var c = str.split("").reverse().join("");
//   var reverted = Number(c);
//   console.log(reverted);
// }
// reverse_number(12345);
//
// //+++ Write a JavaScript function that returns a passed string with letters in alphabetical order.
// function sort(b) {
//   var d = b.split('').sort().join('');
//   return d;
// }
// console.log(sort("owda"));
//
// //+++ find max and min numbers in array
// function highAndLow(numbers) {
//   var y = numbers.split(' ').map(Number);
//   //Math.max(10, 20);   //  20 - does not work with arrays
//   var a = Math.max.apply(null, y);
//   var b = Math.min.apply(null, y);
//   console.log(a + " " + b);
// }
//
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//++++ Find max number in string+++++
var str = '1 5 3'
var array = str.split(" ");
console.log('My array is: ' + array)
var arrayLenght = array.length;
console.log(arrayLenght)
console.log("array[0] = " + array[0])
console.log("array[1] = " + array[1])
console.log("array[2] = " + array[2])
// //for loop
// for (i = 0; i < arrayLenght; i++) {
//   console.log(array[i])
// }
// //the same while loop
// i = 0;
// while (i < arrayLenght) {
//   console.log(array[i])
//   i++;
// }


//find max
function max(arr) {
  var max = arr[0]; // max = 1
  console.log(arr.join('-'));
  for (i = 0; i < 5; i++) {
    console.log(arr);
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      console.log("arr[i] max => " + arr[i])
    } else {
      console.log("arr[i] not max => " + arr[i])
    }
  }
  console.log(max)
}
max([1, 5, 10, 6, 7]);
max('1 2 3'.split(' '));

//find min
function min(arr) {
  var min = array[0];
  for (i = 0; i < arrayLenght; i++) {
    if (min < array[0]) {
      min = array[0];
    }
  }
  console.log(min)
}
min(array);
