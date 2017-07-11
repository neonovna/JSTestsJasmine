function Reverse_number(s) {
  this.s1 = s;
  this.reverse = function(number) {
    var x = number.split(this.s1).reverse().join("");
    var reverted = Number(x);
    console.log(reverted);
  }
}
var s = new Reverse_number(' ');
s.reverse('1 2 3 4 5'); // 54321
s.reverse('1 2 33 4 5'); // 543321

var s = new Reverse_number(',');
s.reverse('1,2,3,4,5'); // 54321
s.reverse('1,2,33,4,5'); // 543321
