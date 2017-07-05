//+++ print ‘Hello World’ in console
console.log('Hello World');


//+++ Write a program that asks the user for her name and greets her with her name.
var prompt = require('prompt');
prompt.start();
prompt.get(['username'], function(err, result) {
  console.log(' Hello: ' + result.username);
});


//+++ Modify the previous program such that only the users Alice and Bob are greeted with their names.
var prompt = require('prompt');
prompt.start();
prompt.get(['username'], function(err, result) {
  if (result.username == 'Alice' || result.username == 'Bob') {
    console.log(' Hello: ' + result.username);
  } else {
    console.log("Mismatch name. Please try again");
  }
});


//+++ Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
var prompt = require('prompt');
prompt.start();
prompt.get(['number1', 'number2'], function(err, result) {
  console.log("The sum is: " + (parseInt(result.number1) + parseInt(result.number2)))
})
