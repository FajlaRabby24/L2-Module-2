//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
  { category: "Home", item: "Chair", price: 150, quantity: 4 },
];

// ------- my turn ----------
const output = sales.reduce((table, sale) => {
  if (table[sale.category]) {
    const totalRevenue =
      table[sale.category].totalRevenue + sale.price * sale.quantity;
    const itemCount = table[sale.category].itemCount + sale.quantity;

    table[sale.category] = {
      totalRevenue,
      itemCount,
    };
  } else {
    table[sale.category] = {
      totalRevenue: sale.price * sale.quantity,
      itemCount: sale.quantity,
    };
  }

  return table;
}, {});

console.log(output);

// ---------- mentor turn --------------
const totalSalesCategory = sales.reduce((table, sale) => {
  const { category, item, price, quantity } = sale;

  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;

  return table;
}, {});

console.log(totalSalesCategory);
