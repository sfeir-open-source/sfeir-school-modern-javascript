<!-- .slide: class="with-code" -->

# Optional Chaining

```javascript
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj.foo.bar.baz; // 42
const baz2 = obj.foo.quux.baz; // cannot read property 'baz' of undefined
```

```javascript
const baz3 = obj.foo.quux?.baz; // undefined
const baz4 = obj.nothere?.quux?.baz; // undefined
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# Null Coalescing -> ?? (ES2020)

```javascript
let foo = 0 || 42;

let bar = false || 42;

let foz = '' || 42;

let baz = null || 42;

let qux = undefined || 42;

let quux = undefined ?? 42;

let qaax = false ?? 42;
```

##--##

<!-- .slide: class="with-code" -->

<br><br><br>

```javascript
foo = 42;
```

<!-- .element: class="fragment" -->

```javascript
bar = 42;
```

<!-- .element: class="fragment" -->

```javascript
foz = 42;
```

<!-- .element: class="fragment" -->

```javascript
baz = 42;
```

<!-- .element: class="fragment" -->

```javascript
qux = 42;
```

<!-- .element: class="fragment" -->

```javascript
quux = 42;
```

<!-- .element: class="fragment" -->

```javascript
qaax = false;
```

<!-- .element: class="fragment" -->

Notes:
double destructuration à évoquer {obj: {test}, name} nested object destructuring

##==##

<!-- .slide: class="two-column" -->

# Destructuring, des Arrays

```javascript
var list = [1, 2, 3]; // Récupérer deux valeurs
var a = list[0],
  b = list[2];
// Echanger les valeurs
var tmp = a;
a = b;
b = tmp;
```

<!-- .element: class="fragment" -->

```javascript
const list = [1, 2, 3]; // Récupérer la première valeur, ignorer la seconde et prendre la troisième
let [a, , b] = list;
// Echanger les valeurs
[b, a] = [a, b];
```

<!-- .element: class="fragment" -->

```javascript
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Récupérer la valeur à l'indice 3 (ici 4), et la dernière
let { length: l, 3: a, [l - 1]: b } = list;
// Utile pour éviter ceci
let [, , , c, , , , , , d] = list;
```

<!-- .element: class="fragment" -->

Notes:
Primitives in Javascript : BONUS
boolean
object
number
null
undefined
symbol
string

##==##

<!-- .slide: class="two-column with-code" -->

# Destructuring, dans les fonctions

```javascript
function f(arg) {
  var name = arg[0];
  var val = arg[1];
  console.log(name, val);
}

f(['bar', 42]); // bar, 42
```

<!-- .element: class="fragment" -->

```javascript
function f([name, val]) {
  console.log(name, val);
}

f(['bar', 42]); // bar, 42
```

<!-- .element: class="fragment" -->

##--##

<br><br><br>

<!-- .slide: class="with-code" -->

```javascript
function f(obj) {
  var name = obj.name;
  var val = obj.val;
  console.log(name, val);
}

f({ name: 'bar', val: 42 }); // bar, 42
```

<!-- .element: class="fragment" -->

```javascript
function f({ name, val }) {
  console.log(name, val);
}

f({ name: 'bar', val: 42 }); // bar, 42
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
