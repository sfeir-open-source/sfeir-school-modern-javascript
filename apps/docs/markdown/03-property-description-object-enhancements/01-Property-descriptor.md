<!-- .slide:-->

# Le Property Descriptor

<br/>
<br/>
<br/>

- Permet de créer des objets immutables
<br/>
<br/>
- Chaque propriété d'un objet est pourvu d'un property descriptor
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Le Property Descriptor

```javascript
var sword = { blade: 'iron' };

Object.getOwnPropertyDescriptor( sword, 'blade');
// {
//   value: 'iron',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```
<!-- .element: class="fragment" -->

<br/>
<br/>

- writable : modifier la valeur de la propriété
- enumerable : affichage de la propriété lors d'un for...in ou un for...of
- configurable : modifier le property descriptor et utiliser l'opérateur delete
- (writable: false + configurable: false) permet de créer un objet constant
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Le Property Descriptor

```javascript
var sword = {};

Object.defineProperty(sword, 'blade', {
  value: 'steel',
  writable: true,
  enumerable: true,
  configurable: true,
});

sword.blade; // steel
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Object.freeze

- Permet de geler un objet déjà défini, c'est-à-dire rendre ses propriétés non modifiables.

```javascript
'use strict';
const o1 = { a: 1 };
Object.freeze(o1);

o1.a = 2; // Error: Cannot assign to read only property 'a' of object '#<Object>'
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Object.freeze

- Attention le gel est superficiel (shallow).

```javascript
'use strict';
const o1 = { foo: { bar: 'baz' }};
Object.freeze(o1);

o1.foo.bar = 'fizz';
o1.foo;                   // { bar: 'fizz' }
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide -->

# Object.freeze / preventExtensions / seal

||Pas de nouvelles propriétés|Propriétés non configurables|Propriété non modifiables|
|-|-|-|-|
Object.preventExtensions|X|||
Object.seal|X|X||
Object.freeze|X|X|X|
