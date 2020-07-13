<!-- .slide: class="with-code" -->

# Symbols

<ul class="fragment" data-fragment-index="1"><li>Nouveau type primitif (Donc pas besoin de new)</li></ul>

```javascript
var key = Symbol("key");

typeof key === "symbol"; // true
```
<!-- .element: class="fragment" -->

<br/>
<br/>

- C'est un type de données unique et inchangeable
<!-- .element: class="fragment" -->

```javascript
Symbol("toto") === Symbol("toto"); // false
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
