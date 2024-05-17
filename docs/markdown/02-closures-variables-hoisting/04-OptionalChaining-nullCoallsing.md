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
