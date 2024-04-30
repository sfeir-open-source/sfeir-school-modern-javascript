<!-- .slide: class="with-code" -->

# Symbols

<ul class="fragment" data-fragment-index="1"><li>Nouveau type primitif (Donc pas besoin de new)</li></ul>

```javascript
var key = Symbol('key');
typeof key === 'symbol'; // true
```

<!-- .element: class="fragment" -->

<br/>
<br/>

- C'est un type de données unique et inchangeable
<!-- .element: class="fragment" -->

```javascript
Symbol('toto') === Symbol('toto'); // false
```

<!-- .element: class="fragment" -->

Notes:
Un
symbole
est un type de données unique et inchangeable qui peut être utilisé pour représenter des identifiants pour des propriétés d'un objet. L'objet
Symbol
est un conteneur objet implicite pour le
type de données primitif
symbole.

##==##

<!-- .slide:-->

# Symbols

Liste des symbols proposés <!-- .element: class="fragment" data-fragment-index="1" -->

<ul class="fragment" data-fragment-index="1">
    <li>Symbol.match</li>
    <li>Symbol.iterator</li>
    <li>Symbol.replace</li>
    <li>Symbol.search</li>
    <li>etc ...</li>
</ul>

Notes:
Un symbole est un type de données unique et inchangeable qui peut être utilisé pour représenter des identifiants pour des propriétés d'un objet. L'objet Symbol est un conteneur objet implicite pour le type de données primitif symbole.

##==##

<!-- .slide: class="with-code" -->

# Symbols

- Essayons d'utiliser le symbol `iterator`

```javascript
let monItérable = { a: 8, b: 9, c: 'foo' };
monItérable[Symbol.iterator] = function* () {
  for (let key in this) {
    yield key + ': ' + this[key];
  }
};
[...monItérable]; // ["a: 8", "b: 9", "c: foo"]
```

Notes:
Un symbole est un type de données unique et inchangeable qui peut être utilisé pour représenter des identifiants pour des propriétés d'un objet. L'objet Symbol est un conteneur objet implicite pour le type de données primitif symbole.

##==##

<!-- .slide: class="with-code" -->

# Uses Cases des Symbols

- Les propriétés "privées" (tout du moins cachées)

```javascript
const mySymbol = Symbol('private');

const iterableObject = {
  hello: 'Hello guys',
  plop: (name) => 'yop ${name}',
  [mySymbol]() {
    console.log('private');
  },
};

for (let x of Object.getOwnPropertyNames(iterableObject)) {
  console.log(x);
}
// hello
// plop
```

Notes:
Un symbole est un type de données unique et inchangeable qui peut être utilisé pour représenter des identifiants pour des propriétés d'un objet. L'objet Symbol est un conteneur objet implicite pour le type de données primitif symbole.

Symbols are mainly used as unique property keys – a symbol never clashes with any other property key (symbol or string)

Object.getOwnPropertySymbols()

##==##

<!-- .slide: class="with-code" -->

# Uses Cases des Symbols

- Créer des constantes qui représentent des concepts

```javascript
const COLOR_RED = Symbol('Red');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_PURPLE = Symbol('Purple');

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_PURPLE:
      return COLOR_YELLOW;
    default:
      throw new Exception('Unknown color: ' + color);
  }
}
```

Notes:
Un symbole est un type de données unique et inchangeable qui peut être utilisé pour représenter des identifiants pour des propriétés d'un objet. L'objet Symbol est un conteneur objet implicite pour le type de données primitif symbole.

Symbols are mainly used as unique property keys – a symbol never clashes with any other property key (symbol or string)

##==##

<!-- .slide: class="with-code" -->

# Cross Realms Symbols

Code Realms sont des contextes d'exécution de code. Chaque Web Worker et Iframe ont leur propre domaine (realm), ainsi que le navigateur.

Cela signifie que les objets déclarés au niveau global (comme les Array ou Symbol) sont considérés comme différents selon les domaines.
Sauf pour les symboles natifs.

```javascript
Array !== iframe.Array; // true
Symbol.iterator !== iframe.Symbol.iterator; // false
```

Notes:
En cas de questions montrer un exemple en créant une iframe (voir https://2ality.com/2014/12/es6-symbols.html#crossing_realms_with_symbols)

##==##

<!-- .slide: class="with-code" -->

# Solution: Symbol.for

Nous pouvons déclarer un symbole avec Symbol.for. Le symbole créé est inscrit dans un registre global, avec sa description comme clé.

<!-- .element: class="fragment" -->

```javascript
const symbol = Symbol.for('foo'); // as setter
symbol === Symbol.for('foo'); // as getter => true
Symbol.keyFor(symbol); // foo
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Solution: Symbol.for

C'est utile pour les bibliothèques qui personnalisent le comportement en fonction de la propriété.

<!-- .element: class="fragment" -->

```javascript
// lib.js
const symbol = Symbol.for('foo');
window.f = function (obj) {
  if (Reflect.ownKeys(obj).indexOf(symbol) === -1) {
    return '';
  }
  console.log(obj[symbol]());
};
```

<!-- .element: class="fragment" -->

```javascript
// main.js - iframe.js - worker.js
const symbol = Symbol.for('foo');
f({
  foo: 'hello',
  [symbol]() {
    return this.foo;
  },
}); // hello
```

<!-- .element: class="fragment" -->
