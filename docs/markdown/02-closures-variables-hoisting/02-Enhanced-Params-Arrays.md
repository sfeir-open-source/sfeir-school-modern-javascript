<!-- .slide: class="with-code" -->

# Enhanced Objects

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
var x = 0, y = 1;
var object = { x: x, y: y };
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
let x = 0, y = 1;
const object = { x, y };
</code></pre>

<span class="fragment" data-fragment-index="3">Créer un attribut paramétré</span>

<pre class="fragment" data-fragment-index="4"><code data-trim class="javascript">
var object = {
    foo: 'bar'
};
object[ 'baz' + quux() ] = 42;
</code></pre>

<pre class="fragment" data-fragment-index="5"><code data-trim class="javascript">
const object = {
    foo: 'bar',
    [ 'baz' + quux() ]: 42
};
</code></pre>

<span class="fragment" data-fragment-index="6">Ajouter une fonction en tant qu'attribut</span>

<pre class="fragment" data-fragment-index="7"><code data-trim class="javascript">
var object = {
    foo: function (x, y) {}
};
</code></pre>

<pre class="fragment" data-fragment-index="8"><code data-trim class="javascript">
const object = {
    foo (x, y) {}
};
</code></pre>

##==##

<!-- .slide: class="with-code" -->

# Default Params, Rest params, Spread Operator

<span class="fragment" data-fragment-index="1">Default params</span>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
function fn (x, y, z) {
   x || x = 2;
   y || y = 3;
   return x + y + z;
}
</code></pre>

<pre class="fragment" data-fragment-index="3"><code data-trim class="javascript">
function fn (x = 2, y = 3, z) {
    return x + y + z;
}
</code></pre>

<span class="fragment" data-fragment-index="4">Rest params</span>

<pre class="fragment" data-fragment-index="5"><code data-trim class="javascript">
function fn (x, y) {
    var z = Array.prototype.slice.call(arguments, 2);
    return (x + y) + z.length;
}
fn(1, 2, "hello", true, 7) === 6;
</code></pre>

<pre class="fragment" data-fragment-index="6"><code data-trim class="javascript">
function fn (x, y, ...z) {
    return (x + y) + z.length;
}
fn(1, 2, "hello", true, 7) === 6;
</code></pre>

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

<span class="fragment" data-fragment-index="1">Spread operator</span>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
var array = [ "Abc", true, 3 ];
fn.apply(undefined, [ 1, 2 ].concat(array));
</code></pre>

<pre class="fragment" data-fragment-index="3"><code data-trim class="javascript">
const array = [ "Abc", true, 7 ];
fn(1, 2, ...array)
</code></pre>

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
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
</code></pre>

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires - Array

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
const numbers = [ 1, 2, 3 ];
// Vérifier si un tableau inclut une valeur
const hasOne = numbers.includes(1);// Remplir un tableau d'une valeur unique
const listOfTens = numbers.fill(10);

const people = [{
  name: "Alice",
  city: "Nantes"
}, {
  name: "Bob",
  city: "Bordeaux"
}];

// Trouver la première valeur qui remplit une condition
const alice = people.find(person => person.name === "Alice");
</code></pre>

Notes:
/!\ includes est vachement moins performant
