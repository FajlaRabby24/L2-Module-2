// ----- simple object ----------
const obj = {
  nextLevel: { courseId: "Level2" },
  "Programming Hero": { courseId: "Level1" },
  true: { courseId: "Level3" },
};
// console.log(obj["true"]);

// --------- Map object --------
const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const courses = [
  ["programming hero", "Level1"],
  ["Next Level", "Level2"],
];

const map = new Map(courses);

// map.set(course1, "Programming Hero");
// map.set(course2, "Next Level Web Development");
// map.set(true, true);
// map.set(2, "Number");
// map.set("hello", "world");

// map.clear(); // 💬 clear all the value
// const mapSize = map.size // 💬 return map size to number

// map.delete("hello"); // 💬 delete map spacific item
// const deletemap = map.delete("hello"); // 💬 return true or false

// const isHas = map.has("hello"); // 💬 check is has or not return boolean

// map.forEach((value, key) => (key.name = "Fajla Rabby " + key.name));

// console.log([...map.values()]);
// console.log([...map.keys()]);
// console.log([...map.entries()]);

// for (let key of map.keys()) {
//   key.name = "Fajla Rabby " + key.name;
// }
console.log(map);
