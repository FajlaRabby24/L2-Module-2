// --------- Count subtotal ----------
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subtotal = cartItems.reduce(
  (subTotal, product) => subTotal + product.price * product.quantity,
  0
); //  💬 4400

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Sohel Rana", score: 72 },
  { name: "Topu Barman", score: 91 },
  { name: "Fajla Rabby", score: 99 },
];

const bestScorer = players.reduce((acc, player) => {
  if (acc.score > player.score) {
    return;
  }
  return player.name;
}, players[0]);

console.log(bestScorer);
