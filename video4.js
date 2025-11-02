// --------- some ----------
const numbers = [1, 4, 5, 3, 7, 5];
const hasEvenNumbers = numbers.some((number) => number % 2 === 0); // 💬 true

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];
const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
); // 💬 false

// ---------- Array.from() -----------
const arr = Array.from({ length: 5 }).fill(null); // 💬 [ null, null, null, null, null ]
const arr2 = Array.from({ length: 5 }).fill(""); // 💬 [ '', '', '', '', '' ]
const arr3 = Array.from([1, 2, 3], (_, i) => i); //  💬 [ 0, 1, 2 ]
const arr4 = Array.from([1, 2, 3], (v, i) => v * v); // 💬 [ 1, 4, 9 ]

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(0, 11, 2)); // 💬 [ 0, 2, 4, 6, 8, 10 ]
