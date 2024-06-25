# Fn JS : Higher Order Functions

- **Qu'est-ce qu'une Higher Order Function (HOF) ?**
  - Elle prend N fonction•s en paramètre•s
  - Elle retourne une fonction

##==##

<!-- .slide: class="two-column with-code" -->

# Fn JS : Higher Order Functions (exemple)

- **Filter**
  - Prend une collection, retourne une nouvelle collection filtrée.
  - Si le callback retourne true, la valeur est incluse dans la collection retournée, sinon non.

```javascript
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />

```javascript
const even = (n) => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]
```

Notes:
filter est en effet une HOF partielle (elle en renvoie pas de fonction)

##==##

<!-- .slide: class="two-column with-code" -->

# Fn JS : Higher Order Functions (exemple)

- **Map**
  - Prend une collection, retourne une nouvelle collection transformée.

```javascript
var people = [
  { name: 'TK', age: 26 },
  { name: 'Kaio', age: 10 },
  { name: 'Kazumi', age: 30 },
];
```

```javascript
var peopleSentences = [];
for (var i = 0; i < people.length; i++) {
  var sentence = people[i].name + ' is ' + people[i].age + ' years old';
  peopleSentences.push(sentence);
}
console.log(peopleSentences);
// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

```javascript
const makeSentence = (person) => `${person.name} is ${person.age} years old`;

const peopleSentences = (people) => people.map(makeSentence);

peopleSentences(people);
// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
```

##==##

<!-- .slide: class="two-column with-code" -->

# Fn JS : Higher Order Functions (exemple)

- **Reduce**
  - Prend une fonction ET une collection, retourne une valeur en combinant ses éléments.

```javascript
var orders = [
  { productTitle: 'Product 1', amount: 10 },
  { productTitle: 'Product 2', amount: 30 },
  { productTitle: 'Product 3', amount: 20 },
  { productTitle: 'Product 4', amount: 60 },
];
```

```javascript
var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

console.log(totalAmount); // 120
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

```javascript
const sumAmount = (currentTotal, order) => currentTotal + order.amount;

const getTotalAmount = (shoppingCart) => shoppingCart.reduce(sumAmount, 0);

getTotalAmount(orders); // 120
```
