
// examples of math calculations using .map() method
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

let numbers = [1,2,3,4]
let squared = numbers.map(number => number*number)


var numbers2 = [1,2,3,4,5];
var five = numbers2.map(function(num){
    return num + 5;
});

// example of .map() method with capitalization

let words = ["these","words","need","to","be","capitalized"]
let caps = words.map(word => word.toUpperCase())




// example of .map() method to extract values of one property
// from an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// .filter() method
// like .map() method, it accepts a function as its parameter
// like .map() method, it performs an operation on every element of an array
// unlike .map() method, it does not necessarily return an array of equal length as original

// e.g. 1 find even numbers using .filter()

let numbers3 = [13,22,36,54,55]
let evenNumbers = numbers3.filter(n => n % 2 == 0)
console.log(evenNumbers)

// more practice with .filter()

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var swords = words.filter(word => word.match('s'))
console.log(swords);

// practice converting .map() and .filter() anomymous functions to arrow functions

var cities = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "24208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "24036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "18935",
    "population": "1341075"
  }
];
var cityNames = cities.map(function(city){
  return city.City;
});
console.log(cityNames);

// use of .sort() and .reverse() methods
var cityNames = cities.map(city => city.City).sort().reverse()

// .slice() method
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2); // first argument is the starting index position ("0"); second denotes ending position, non-inclusive


// .slice() method continued
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(0,3);