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
