<!-- .slide:-->

# Le Property Descriptor

<br/><br/><br/>

<ul class="fragment" data-fragment-index="1"><li>Permet de créer des objets immutables</li></ul>
<br/>
<br/>
<ul class="fragment" data-fragment-index="2"><li>Chaque propriété d'un objet est pourvu d'un property descriptor</li></ul>

##==##

<!-- .slide: class="with-code" -->

# Le Property Descriptor

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
var sword = { blade: 'iron' };

Object.getOwnPropertyDescriptor( sword, 'blade');
// {
//   value: 'iron',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
</code></pre>

<br/><br/>

<ul class="fragment" data-fragment-index="2">
<li>writable : modifier la valeur de la propriété</li>
<li>enumerable : affichage de la propriété lors d'un for...in ou un for...of</li>
<li>configurable : modifier le property descriptor et utiliser l'opérateur delete</li>
<li>(writable: false + configurable: false) permet de créer un objet constant</li>
</ul>

Notes:
Object.freeze() => Attention c'est que de niveau 1, les sous objets seront modifiables avec freeze

Sinon, il y a immutable.js :)

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
