<!-- .slide: class="with-code" -->

# Destructuring, des Arrays

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
var list = [ 1, 2, 3 ];
// Récupérer deux valeurs
var a = list[0], b = list[2];
// Echanger les valeurs
var tmp = a; a = b; b = tmp;
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
const list = [ 1, 2, 3 ];
// Récupérer la première valeur, ignorer la seconde et prendre la troisième
let [ a, , b ] = list;
// Echanger les valeurs
[ b, a ] = [ a, b ];
</code></pre>

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

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
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
</code></pre>

##==##

<!-- .slide: class="with-code" -->

# Destructuring, des Objects

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
function getObject () {
   return {
     foo: 'foofoo',
     bar: 'barbar',
     quux: 'quuxquux'
   };
}

// Variable avec le même nom que l'attribut de l'objet
const { foo, bar, quux, toto } = getObject();

console.log(foo); // foofoo


// Variable avec un nom différent de l'attribut de l'objet
const { foo: otherFoo } = getObject();

console.log(otherFoo); // foofoo
</code></pre>

Notes:
double destructuration à évoquer {obj: {test}, name} nested object destructuring

##==##

<!-- .slide: class="with-code" -->

# Destructuring, dans les fonctions

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
function f (arg) {
    var name = arg[0];
    var val  = arg[1];
    console.log(name, val);
}

f([ 'bar', 42 ]); // bar, 42
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
function f ([ name, val ]) {
    console.log(name, val)
}

f([ 'bar', 42 ]); // bar, 42
</code></pre>

<pre class="fragment" data-fragment-index="3"><code data-trim class="javascript">
function f (obj) {
    var name = obj.name;
    var val  = obj.val;
    console.log(name, val);
}

f({name: 'bar', val: 42 }); // bar, 42
</code></pre>

<pre class="fragment" data-fragment-index="4"><code data-trim class="javascript">
function f ({ name, val }) {
    console.log(name, val)
}

f({name: 'bar', val: 42 }); // bar, 42
</code></pre>

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

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
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
</code></pre>
