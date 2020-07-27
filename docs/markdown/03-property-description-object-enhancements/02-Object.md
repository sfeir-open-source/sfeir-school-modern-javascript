<!-- .slide: class="two-column-layout" -->

# Object.assign

- JS nous permet enfin de **copier** un objet ou d'en **fusionner** plusieurs !

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />

```javascript
const object1 = { a: 1 }, object2 = { b: 2 };

Object.defineProperty(object2, 'f', {
    value: 6,
    enumerable: false
});

Object.defineProperty(object2, 'g', {
    value: 8,
    enumerable: true
});
```
<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />

```javascript
// les propriétés sont copiées de object1 et object2 dans target
// puis on récupère l'objet fusionné dans newObject
const newObject = Object.assign(target, object1, object2 );

// mais seules les propriétés énumérables "a, b et Symbol('h')" sont copiées
newObject.a;                 // 1
newObject.b;                 // 2
newObject.f;                 // undefined
newObject.g;                 // 8
```
<!-- .element: class="fragment" -->

Notes:
f est undefined car non enumerable dans l'objet d'origine.

/!\ si on a des nested object, ce sont les références qui sont copiées !

De même une propriété non enumerable n'est donc pas copiée car assign copy via l'itération des propriétés d'objet

l'autre manière de copier un objet est le spread operator

##==##

<!-- .slide: class="with-code" -->

# Object.assign

- Attention la copie est superficielle (shallow).

```javascript
const o1 = { a: 1, foo: { bar: 'baz' }};
const o2 = Object.assign({}, o1);

o1.foo;                   // { bar: 'baz' }
o2.foo;                   // { bar: 'baz' }

o2.a = 2;
o2.foo.bar = 'fizz';

o1.foo;                   // { bar: 'fizz' }
o2.foo;                   // { bar: 'fizz' }

o1.a                      // 1
o2.a                      // 2
```

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires sur Object

- Nouvelles fonctions utilitaires values() et entries(), keys() déjà en ES5

```javascript
const person = {
  name: 'Alice',
  city: 'Nantes',
};
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(keys); // ["name", "city"]
console.log(values); // ["Alice", "Nantes"]

console.log(entries);
// [["name", "Alice"], ["city", "Nantes"]]
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Fonctions utilitaires sur Object

- Nouvelles fonctions utilitaires values() et entries(), keys() déjà en ES5

```javascript
var person = {
  name: 'Alice',
  city: 'Nantes',
};
var keys = [], values = [], entries = [];
for (var key in person) {
  if (Object.prototype.hasOwnProperty.call(person, key)) {
    keys.push(key);
    values.push(person[key]);
    entries.push([key, person[key]]);
  }
}
console.log(keys); // ["name", "city"]
console.log(values); // ["Alice", "Nantes"]
console.log(entries); // [["name", "Alice"], ["city", "Nantes"]]
```
<!-- .element: class="fragment" -->
