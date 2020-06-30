<!-- .slide: class="two-column-layout with-code" -->

# Enhanced Objects

```javascript
var x = 0, y = 1;
var object = { x: x, y: y };
```
<!-- .element: class="fragment" -->

```javascript
let x = 0, y = 1;
const object = { x, y };
```
<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />

Créer un attribut paramétré
<!-- .element: class="fragment" -->

```javascript
var object = {
    foo: 'bar'
};
object[ 'baz' + quux() ] = 42;
```
<!-- .element: class="fragment" -->

```javascript
const object = {
    foo: 'bar',
    [ 'baz' + quux() ]: 42
};
```
<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />

Ajouter une fonction en tant qu'attribut
<!-- .element: class="fragment" -->

```javascript
var object = {
    foo: function (x, y) {}
};
```
<!-- .element: class="fragment" -->

```javascript
const object = {
    foo (x, y) {}
};
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="two-column-layout" -->

# Default Params, Rest params, Spread Operator

##--##

<!-- .slide: class="with-code" -->

Default params
<!-- .element: class="fragment" -->

```javascript
function fn (x, y, z) {
   x || x = 2;
   y || y = 3;
   return x + y + z;
}
```
<!-- .element: class="fragment" -->

```javascript
function fn (x = 2, y = 3, z) {
    return x + y + z;
}
```
<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

Rest params
<!-- .element: class="fragment" -->

```javascript
function fn (x, y) {
    var z = Array.prototype.slice.call(arguments, 2);
    return (x + y) + z.length;
}
fn(1, 2, "hello", true, 7) === 6;
```
<!-- .element: class="fragment" -->

```javascript
function fn (x, y, ...z) {
    return (x + y) + z.length;
}
fn(1, 2, "hello", true, 7) === 6;
```
<!-- .element: class="fragment" -->

Notes:
default params -> revenir sur concept de falsy truthy

```javascript
function fn(x, y) {
  if (x === undefined) {
    x = 2;
  }
  if (y === undefined) {
    y = 3;
  }
  return x + y;
}
```

rest params -> arguments n'est pas un array à proprement parlé, du coup, on est obligé de le caster en array

##==##

<!-- .slide: class="with-code" -->

# Default Params, Rest params, Spread Operator

Spread operator
<!-- .element: class="fragment" -->

```javascript
var array = [ "Abc", true, 3 ];
fn.apply(undefined, [ 1, 2 ].concat(array));
```
<!-- .element: class="fragment" -->

```javascript
const array = [ "Abc", true, 7 ];
fn(1, 2, ...array)
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

```javascript
var numbers = [ 1, 2, 3 ];
// Vérifier si un tableau inclut une valeurvar hasOne = numbers.indexOf(1) !== -1;
// Remplir un tableau d'une valeur unique
var listOfTens = numbers.map(xs => 10);

var people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Trouver la première valeur qui remplit une condition
var alice = people.filter(person => person.name === "Alice")[0];
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

```javascript
const numbers = [ 1, 2, 3 ];
// Vérifier si un tableau inclut une valeur
const hasOne = numbers.includes(1);
// Remplir un tableau d'une valeur unique
const listOfTens = numbers.slice().fill(10); // .slice évite de modifier numbers

const people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Trouver la première valeur qui remplit une condition
const alice = people.find(person => person.name === "Alice");
```
<!-- .element: class="fragment" -->

Notes:
/!\ includes est vachement moins performant
