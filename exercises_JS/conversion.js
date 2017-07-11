//+++ CONVERTION +++

var x = '1,2,3'
var i = 123;
console.log("'1,2,3' => " + x + ' ' + typeof(x));
console.log("123 => " + i + ' ' + typeof(i));
console.log(" ")

//Number()
console.log(" +++++ Number() +++++")
var y = Number("1,2,3");
var q = Number("1 2 3");
var u = Number("123");
var o = Number('wow')
console.log("Number('1,2,3') => " + y + " " + typeof(y));
console.log("Number('1 2 3') => " + q + ' ' + typeof(q));
console.log("Number('123') => " + u + ' ' + typeof(u));
console.log("Number('wow') => " + o + ' ' + typeof(o));
console.log(" ")

// parseInt
console.log(" +++++ parseInt() +++++")
var w = parseInt('1,2,3');
var e = parseInt('1 2 3');
var r = parseInt('1 2 3 wow');
var t = parseInt('wow 1 2 3');
var y = parseInt('1A');
console.log("parseInt('1,2,3') => " + w + ' ' + typeof(w));
console.log("parseInt('1 2 3') => " + e + ' ' + typeof(e));
console.log("parseInt('1 2 3 wow') => " + r + ' ' + typeof(r));
console.log("parseInt('wow 1 2 3') => " + t + ' ' + typeof(t));
console.log("parseInt('2', 3) => " + y + ' ' + typeof(y));
console.log(" ")

// split()
// '1 2 3'.split(' ') => ["1", "2", "3"]
// '1,2,3'.split(',') => ["1", "2", "3"]
// '123'.split('') => ["1", "2", "3"]
console.log(" +++++ split() +++++");
var a = '1,2,3';
var p = '1 2 3';
var v = '123';
var m = 'How are you?'
var n = 'How,are,you?'
console.log("'1,2,3'.split(' ') => ", a.split(' '), typeof(a.split(' '))); // , mean split between objects
console.log("'1,2,3'.split(',') => " + a.split(',') + ' ' + typeof(a.split(',')));
console.log("'1 2 3'.split(' ') => " + p.split(' '));
console.log("'123'.split() => " + v.split(''));
console.log("'How are you?'.split('') => " + m.split('') + ' ' + typeof(m.split('')));
console.log("'How are you?'.split(' ') => " + m.split(' ') + ' ' + typeof(m.split(' ')));
console.log("'How,are,you?'.split(',') => " + n.split(',') + ' ' + typeof(n.split(',')));
console.log(" ")
