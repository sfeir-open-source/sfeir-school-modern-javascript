let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
];

/*
*  Pour coder Pipe
*  1. Mon pipe prend un nombre indéterminé de fonctions en entrée
*  2. Mon pipe est appelé en deux temps : Une première fois
*   pour déclarer ses fonctions, une seconde pour lui passer sa valeur d'entrée
* */
var pipe = (...fns) => x => fns.reduce((acc, f) => f(acc), x);
const filter = fn => value => value.filter(fn)
const map = fn => value => value.map(fn)
const reduce = (fn, initial) => value => value.reduce(fn, initial)

const getTotalAmountViaPipe = pipe(
  filter(byBooks),
  map(getAmount),
  reduce(sumAmount, 0)
);

const totalAmount = getTotalAmountViaPipe(shoppingCart);

module.exports = { totalAmount } ;
