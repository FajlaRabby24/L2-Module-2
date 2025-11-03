const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
  { id: "p-105", title: "Intro to SQL", author: "Alex" },
  { id: "p-106", title: "Data Structures in JS", author: "Beth" },
  { id: "p-107", title: "Understanding Reduce", author: "Chris" },
  { id: "p-108", title: "CSS Grid Tricks", author: "Alex" },
];

// const lookupTable = new Map();
// postsArray.forEach((post, key) => lookupTable.set(post.id, post));

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});
console.log(lookupTable);

// ---------- worst idea ----------
console.time("key");
// const post = postsArray.find((post) => post.id === "p-104");
// ------- best idea
// const post = lookupTable.get("p-105");
const post = lookupTable["p-105"];
console.timeEnd("key");

console.log(post);
// console.log(lookupTable);
