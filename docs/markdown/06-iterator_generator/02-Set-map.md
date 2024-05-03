<!-- .slide -->

# Set & Map

- ES6 introduit de nouvelles structures de données empruntées aux langages orientés objet : - **Map** - **Set** - _WeakMap_ - _WeakSet_
  <br />
  <br />
- Contrairement aux objets, ce sont des itérables et peuvent donc être parcourus par une boucle for...of
  <br />
  <br />
- _Les versions 'Weak' offrent un avantage de garbage collection et de prévention des fuites mémoire_
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# Set & Map

- Les **Set** sont une nouvelle structure _comparable_ aux _Arrays_

<br/>
<br/>

- Avantages du Set sur l'array :
  - Inutile d'utiliser IndexOf pour chercher une valeur<br/><br/>
  - **valeurs uniques garanties**<br/><br/>
  - Suppression possible sans Splice

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
let data = new Set();
data.add('hello').add('goodbye').add('hello');
data.size === 2;
data.has('hello') === true;
data.values(); // SetIterator {"hello", "goodbye"}
data.keys(); // SetIterator {"hello", "goodbye"}
for (let key of data) {
  // insertion order
  console.log(key);
}
// hello
// goodbye
const getUniq = (array) => [...new Set(array)];
getUniq([1, 1, 2]); // [1, 2]
```

<!-- .element: class="fragment" -->

Notes:
Les objets Set sont des ensembles de valeurs. Il est possible de les parcourir dans l'ordre d'insertion des éléments.
Une valeur d'un élément Set ne peut y apparaître qu'une seule fois, il est unique pour cette instance de Set."
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Collections_avec_cl%C3%A9s#Le_type_Set

##==##

<!-- .slide: class="two-column with-code" -->

# Set & Map

- Les **Map** sont une nouvelle structure _comparable_ aux _Objets_

<br/>
<br/>

- Avantages de la Map sur l'Objet :
  <br/>
  <br/>
  - Les clefs peuvent être de tout type
    <br/>
  - <em>Size</em> est propriété de la Map
    <br/>
  - Itération dans l'ordre d'insertion des éléments
    <br/>
  - Possède une fonction de vérification de présence de clé

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
let data = new Map();
let s = { example: 'cat' };
data.set('hello', 42);
data.set(s, 34);
data.get(s) === 34;
data.size === 2;
data.has('hello') === true;
for (let [key, val] of data) {
  console.log(`${key} ${val}`);
}

// hello 42
// [object Object] 34
```

<!-- .element: class="fragment" -->

Notes:
"Un objet Map représente une collection de données qui sont des correspondances entre des clés ou valeurs et pour lequel on peut itérer dans l'ordre d'insertion pour lister les différentes clés / valeurs."
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Collections_avec_cl%C3%A9s#Le_type_Map

##==##

<!-- .slide: class="two-column" -->

# Set & Map

Si on utilise **uniquement des clés de type string**, on peut simuler une Map avec `Object.create(null)`

<br/>

- On bénéficie de **certains** avantages de la Map sur l'Objet :
  <br/>
  - <strike>Les clefs peuvent être de tout type</strike>
    <br/>
  - <strike><em>Size</em> est propriété de la Map</strike>
    <br/>
  - <strike>Itération dans l'ordre d'insertion des éléments</strike>
    <br/>
  - Possède une fonction de vérification de présence de clé

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>
<br/>
<br/>

```javascript
let data = Object.create(null);
data['hello'] = 42;
data['hello'] === 42;
'hello' in data === true;
for (let key in data) {
  console.log(`${key} ${data[key]}`);
}
```

<!-- .element: class="fragment" -->
