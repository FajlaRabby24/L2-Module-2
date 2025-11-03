//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

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

// ---------- mine try -----------
const uniqueSurveyResponse = new Set(surveyResponses);
const arr = [...uniqueSurveyResponse];
// console.log(arr); // [ 'A', 'C', 'B', 'D' ]

const hello = arr.map(
  (value) =>
    surveyResponses
      .map((sur) => sur.includes(value))
      .filter((item) => item === true).length
);
// console.log(hello); // [ 5, 3, 5, 1 ]

const finalOutput = Object.fromEntries(arr.map((key, i) => [key, hello[i]]));
// console.log(finalOutput); // // { A: 5, C: 3, B: 5, D: 1 }

// --------- mentor system -------------
const count = surveyResponses.reduce((table, res) => {
  // if (table[res]) {
  //   table[res] += 1;
  // } else {
  //   table[res] = 1;
  // }

  table[res] = (table[res] || 0) + 1;

  return table;
}, {});

console.log(count);
