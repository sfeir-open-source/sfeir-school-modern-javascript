<!-- .slide: class="with-code" -->

# Destructuring, des Arrays

```javascript
var list = [ 1, 2, 3 ];
// Récupérer deux valeurs
var a = list[0], b = list[2];
// Echanger les valeurs
var tmp = a; a = b; b = tmp;
```
<!-- .element: class="fragment" -->

```javascript
const list = [ 1, 2, 3 ];
// Récupérer la première valeur, ignorer la seconde et prendre la troisième
let [ a, , b ] = list;
// Echanger les valeurs
[ b, a ] = [ a, b ];
```
<!-- .element: class="fragment" -->

Notes:
Primitives in Javascript : BONNUSS
boolean
object
number
null
undefined
symbol
string

##==##

<!-- .slide: class="with-code" -->

# Destructuring, des Objects

```javascript
function getObject () {
   return {
     foo: 'foofoo',
     bar: 'barbar', 
     quux: 'quuxquux'
   };
}

var tmp = getObject();

var foo  = tmp.foo;
var bar = tmp.bar;
var quux = tmp.quux;
var toto = tmp.toto;
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Destructuring, des Objects

```javascript
function getObject () {
   return {
     foo: 'foofoo',
     bar: 'barbar',
     quux: 'quuxquux'
   };
}

// Variable avec le même nom que l'attribut de l'objet ou un nom différent
const { foo: otherFoo, bar, quux, toto } = getObject();

console.log(otherFoo); // foofoo
console.log(bar); // barbar
```
<!-- .element: class="fragment" -->

Notes:
double destructuration à évoquer {obj: {test}, name} nested object destructuring

##==##

<!-- .slide: class="two-column-layout" -->

# Destructuring, dans les fonctions

##--##

<!-- .slide: class="with-code" -->

```javascript
function f (arg) {
    var name = arg[0];
    var val  = arg[1];
    console.log(name, val);
}

f([ 'bar', 42 ]); // bar, 42
```
<!-- .element: class="fragment" -->

```javascript
function f ([ name, val ]) {
    console.log(name, val)
}

f([ 'bar', 42 ]); // bar, 42
```
<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

```javascript
function f (obj) {
    var name = obj.name;
    var val  = obj.val;
    console.log(name, val);
}

f({name: 'bar', val: 42 }); // bar, 42
```
<!-- .element: class="fragment" -->

```javascript
function f ({ name, val }) {
    console.log(name, val)
}

f({name: 'bar', val: 42 }); // bar, 42
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Trailing commas

- Pratique pour éviter des lignes de diff inutiles dans git
- Existait déjà pour Array et Object, pas pour les functions
- Pas dans les fichiers .json

```javascript
const array = [
  "foo",
  "bar", // toujours ok
];
const object = {
  a: "foo",
  b: "bar", // toujours ok
};

function(a,b,) { // maintenant OK (ES2017)
  return a + b;
}
```

##==##

<!-- .slide: class="with-code" -->

# Trailing commas

```javascript
var array = [
  "foo",
  "bar", // ok
];
var object = {
  a: "foo",
  b: "bar", // ok
};

function(a,b,) { // SyntaxError
  return a + b;
}
```
<!-- .element: class="fragment" -->
