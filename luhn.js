// luhn algorithm checks weather given number is a valid card number or not.
//split the number in array & double the alternate number from left side of array starts from length-2.
//if doubled number greaterthan 10 then add the 2 digits [max possiable doubled value is 18 --> 1+8=9].
//add the entire number array digits except last number at index length-1.
//multiply the result with 9 and mod the result with 10.
//compare result with numberarray[length-1] --> last digit. if matches then valid number returns true.

var luhn = function (id_number) {
  if(id_number === null || id_number <= 0 || id_number === NaN) {
    return false;
  }
  var numArray = String(id_number).split("");
  var length = numArray.length;
  for(var index = length - 2; index >= 0; index -= 2 ) {
    var doubleNumber = numArray[index] * 2;
    if(doubleNumber / 10 > 1) {
      doubleNumber = String(doubleNumber).split("");
      doubleNumber = Number(doubleNumber[0]) + Number(doubleNumber[1]);
      numArray[index] = doubleNumber;
    } else {
      numArray[index] = doubleNumber;
    }
  }
  var sum = 0;
  for ( var idx in numArray) {
    if(idx != length - 1) {
      sum += Number(numArray[idx]);
    }
  }
  return ((sum * 9) % 10 === Number(numArray[length - 1])) ? true : false ;
}

module.exports = luhn;
 // console.log(luhn(79927398713));
 // console.log(luhn(79927398710));
// console.log(luhn(79927398711));
// console.log(luhn(79927398712));
// console.log(luhn(79927398714));
// console.log(luhn(79927398716));
// console.log(luhn(79927338716));
// console.log(luhn(79927328716));
