<!-- .slide: class="two-column with-code" -->

# Enhanced Objects

```javascript
var x = 0,
  y = 1;
var object = { x: x, y: y };
```

<!-- .element: class="fragment" -->

```javascript
let x = 0,
  y = 1;
const object = { x, y };
```

<!-- .element: class="fragment" -->

<br />

Créer un attribut paramétré

<!-- .element: class="fragment" -->

```javascript
var object = {
  foo: 'bar',
};
object['baz' + quux()] = 42;
```

<!-- .element: class="fragment" -->

```javascript
const object = {
  foo: 'bar',
  ['baz' + quux()]: 42,
};
```

<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br><br>

Ajouter une fonction en tant qu'attribut

<!-- .element: class="fragment" -->

```javascript
var object = {
  foo: function (x, y) {},
};
```

<!-- .element: class="fragment" -->

```javascript
const object = {
  foo(x, y) {},
};
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# Default Params, Rest params, Spread Operator

Default params

<!-- .element: class="fragment" -->

```javascript
function fn (x, y, z) {
   y || y = 2;
   z || z = 3;
   return x + y + z;
}
```

<!-- .element: class="fragment" -->

```javascript
function fn(x, y = 2, z = 3) {
  return x + y + z;
}
```

<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br><br><br><br>

Rest params

<!-- .element: class="fragment" -->

```javascript
function fn(x, y) {
  var z = Array.prototype.slice.call(arguments, 2);
  return x + y + z.length;
}
fn(1, 2, 'hello', true, 7) === 6;
```

<!-- .element: class="fragment" -->

```javascript
function fn(x, y, ...z) {
  return x + y + z.length;
}
fn(1, 2, 'hello', true, 7) === 6;
```

<!-- .element: class="fragment" -->

Notes:
default params -> revenir sur concept de falsy truthy
rest params -> arguments n'est pas un array à proprement parlé, du coup, on est obligé de le caster en array

##==##

<!-- .slide: class="with-code" -->

# Default Params, Rest params, Spread Operator

Spread operator

<!-- .element: class="fragment" -->

```javascript
var array = ['Abc', true, 3];
fn.apply(undefined, [1, 2].concat(array));
```

<!-- .element: class="fragment" -->

```javascript
const array = ['Abc', true, 7];
fn(1, 2, ...array);
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Fonctions utilitaires - Array

```javascript
var numbers = [1, 2, 3];
// Vérifier si un tableau inclut une valeurvar hasOne = numbers.indexOf(1) !== -1;
// Transformer un tableau en tableau d'une valeur unique
var listOfTens = numbers.map(() => 10);

var people = [
  {
    name: 'Alice',
    city: 'Nantes',
  },
  {
    name: 'Bob',
    city: 'Bordeaux',
  },
];

// Trouver la première valeur qui remplit une condition
var alice = people.filter((person) => person.name === 'Alice')[0];
```

##==##

<!-- .slide: class="with-code max-height" -->

# Fonctions utilitaires - Array

```javascript
const numbers = [1, 2, 3];
// Vérifier si un tableau inclut une valeur
const hasOne = numbers.includes(1);
// Remplir un tableau d'une valeur unique
const listOfTens = numbers.slice().fill(10); // .slice évite de modifier numbers

const people = [
  {
    name: 'Alice',
    city: 'Nantes',
  },
  {
    name: 'Bob',
    city: 'Bordeaux',
  },
];

// Trouver la première valeur qui remplit une condition
const alice = people.find((person) => person.name === 'Alice');
```

Notes:
/!\ includes est beaucoup moins performant

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

|            | Modifie le tableau | Laisse le tableau inchangé | Description                                                                            |
| ---------- | ------------------ | -------------------------- | -------------------------------------------------------------------------------------- |
| Slice      |                    | X                          | Retourne une copie d'une partie du tableau.                                            |
| Concat     |                    | X                          | Retourne une version fusionnée des tableaux spécifiés en paramètres.                   |
| Flat       |                    | X                          | Retourne le tableau en version aplatie.                                                |
| Fill       | X                  |                            | Remplit le tableau avec la valeur spécifiée.                                           |
| CopyWithin | X                  |                            | Copie une partie et l'insère dans le même tableau, sans changer la taille de celui-ci. |
| Sort       | X                  |                            | Trie le tableau                                                                        |

##==##

<!-- .slide: class="" -->

# Fonctions utilitaires - Array

|         | Modifie le tableau | Laisse le tableau inchangé | Description                                                                |
| ------- | ------------------ | -------------------------- | -------------------------------------------------------------------------- |
| Splice  | X                  |                            | Supprime, insère ou remplace des éléments.                                 |
| Push    | X                  |                            | Ajoute un élément à la fin du tableau.                                     |
| Shift   | X                  |                            | Retire le premier élément, qui est retourné.                               |
| Unshift | X                  |                            | Insère un ou plusieurs éléments au début et retourne la nouvelle longueur. |
| Pop     | X                  |                            | Retire le dernier élément, qui est retourné.                               |

##==##

<!-- .slide: class="with-code" -->

# Array.from

- Créé un tableau à partir d'un objet semblable à un tableau.
<!-- .element: class="fragment" -->

```javascript
Array.from(document.querySelectorAll('body')); // []
Array.from(Array(2).keys()); // [1, 2]
Array.from({ length: 2 }, () => 0); // [0, 0]
Array.from(
  (function* () {
    yield 1;
    yield 2;
  })()
); // [1, 2]
```

<!-- .element: class="fragment" -->
