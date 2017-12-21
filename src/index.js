var uniqueRandomArray = require('unique-random-array');
var names = require('./name.json');


module.exports = {
  all: names,
  random: uniqueRandomArray(names)
};