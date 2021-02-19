const fs = require('fs');
const { firstColumn, secondColumn, thirdColumn } = require('./insults.json');

// const prefix = [
//   "Ah, I see you're here now",
//   'Leave me I pray thee',
//   'I have nothing to say',
// ];

function genRandIndexes() {
  return [
    Math.floor(firstColumn.length * Math.random()),
    Math.floor(secondColumn.length * Math.random()),
    Math.floor(thirdColumn.length * Math.random()),
    // Math.floor(prefix.length * Math.random()),
  ];
}

function insult() {
  let [i, j, k] = genRandIndexes();
  return `thou ${firstColumn[i]} ${secondColumn[j]} ${thirdColumn[k]}!`;
}

//console.log('Get ready for some shakespearean insults baby!');

module.exports = {
  genInsult: insult,
};
