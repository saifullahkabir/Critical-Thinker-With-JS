//* Grouping and Aggregating Data

// Scenario: table every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

//TODO initiate empty object
//TODO check if the response already exist or not
//TODO if is exist then increment the count
//TODO if is not exist then initialize with 1

const count = surveyResponses.reduce((table, response) => {
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});

console.log(count);

