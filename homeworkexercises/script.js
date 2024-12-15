// Task 1: Convert Minutes into Seconds
function convert(minutes) {
  return minutes * 60;
}
///////////////
//Task 2: Return the Next Number from the Integer Passed

function addition(number) {
  return number + 1;
}
///////////////

//Task 3: Convert Hours into Seconds

function howManySeconds(hours) {
  return hours * 3600;
}
////////////////
//Task 4: Return the Remainder from Two Numbers
function remainder(a, b) {
  return a % b;
}
//////////
//Task 5: The Farm Problem
function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}
////////////////
//Task 6: Compare Strings by Count of Characters

function compare(string1, string2) {
  return string1.length === string2.length;
}
///////////////
//Task 7: Is the Word Singular or Plural?

function isPlural(word) {
  return word.endsWith("s");
}
//////////////
//Task 8: Case Insensitive Comparison

function match(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}
////////////////////////////////////
//Task 9: Convert Number to Corresponding Month Name

function monthName(number) {
  switch (number) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Month with that number does not exist";
  }
}

///////////////////////////////
//Task 10: Truthy or Falsy?

function isTruthy(value) {
  return value ? 1 : 0;
}
