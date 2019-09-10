let shoppingCart = [
  { productTitle: 'Functional Programming', type: 'books', amount: 10 },
  { productTitle: 'Kindle', type: 'eletronics', amount: 30 },
  { productTitle: 'Shoes', type: 'fashion', amount: 20 },
  { productTitle: 'Clean Code', type: 'books', amount: 60 }
];

const byBooks = order => order.type === 'books';
const getAmount = order => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount() {
  return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}

const totalAmount = getTotalAmount(shoppingCart);

module.exports = totalAmount;
