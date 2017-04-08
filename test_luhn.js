var assert = require("chai").assert;
var isLuhnNumber = require("./luhn");

describe("isLuhnNumber", function() {
  it("should return true if the number is valid", function() {
    var number = 79927398713;
    var result = isLuhnNumber(number);
    assert.isTrue(result);
  });

  it("should return false if number is not valid", function() {
    var number = 79927398712;
    var result = isLuhnNumber(number);
    assert.isFalse(result);
  });

  it("should return false if number is null", function() {
    var number = null;
    var result = isLuhnNumber(number);
    assert.isFalse(result);
  });

  it("should return false if number is zero", function() {
    var number = 0;
    var result = isLuhnNumber(number);
    assert.isFalse(result);
  });

  it("should return false if number is NaN", function() {
    var number = NaN;
    var result = isLuhnNumber(number);
    assert.isFalse(result);
  });

});

/*var assert = require("chai").assert;
var isPalindrome = require("../lib/palindromes");

describe("Palindromes", function() {
  it("should return true if a word is a palindrome", function() {
    var word = "abba";
    var result = isPalindrome(word);
    assert.isTrue(result);
  });

  it("should return false if a word is NOT a palindrome", function() {
    var word = "not";
    assert.isFalse(isPalindrome(word));
  });

  it("should return true if a phrase is a palindrome", function() {
    var phrase = "a man a plan a canal panama";
    assert.isTrue(isPalindrome(phrase));
  });

  it("should return false if a phrase is NOT a palindrome", function() {
    var phrase = "this is not a palindrome"
    assert.isFalse(isPalindrome(phrase));
  });
}); */