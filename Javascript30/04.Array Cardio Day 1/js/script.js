var inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

// Filter first list of inventors for those who were born in the 1500's
var fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  }
});
console.table(fifteen);

// Gives us an aray of the inventory first and last name
var fullNames = inventors.map(function (inventor) {
  return inventor.first + ' ' + inventor.last;
});
console.log(fullNames);

// Sort the inventors by birthdate, oldest to youngest
var ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
console.log(ordered);

// How many years did all inventors live?
var totalYears = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// Sort the invetors by years lived
var oldest = inventors.sort(function (a, b) {
  var lastGuy = a.passed - a.year;
  var firstGuy = b.passed - b.year;
  return ( lastGuy > firstGuy) ? -1 : 1;
});
console.table(oldest);
