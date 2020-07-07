<!-- .slide:-->

# Set & Map

<ul>
    <li class="fragment" data-fragment-index="1">ES6 introduit de nouvelles structures de données empruntées aux langages orientés objet :
        <ul>
            <li class="bold fragment" data-fragment-index="2">Map</li>
            <li class="bold fragment" data-fragment-index="3">Set</li>
            <li class="italic fragment" data-fragment-index="4">WeakMap</li>
            <li class="italic fragment" data-fragment-index="5">WeakSet</li>
        </ul>
        <br/>
    </li>
    <li class="fragment" data-fragment-index="6">Contrairement aux objets, ce sont des itérables et peuvent donc être parcourus par une boucle for...of<br/><br/></li>
    <li class="italic fragment" data-fragment-index="7">Les versions 'Weak' offrent un avantage de garbage collection et de prévention des fuites mémoire</li>
</ul>

##==##

<!-- .slide: class="two-column-layout" -->

# Set & Map

- Les **Set** sont une nouvelle structure _comparable_ aux _Arrays_

##--##

<br/><br/>

- Avantages du Set sur l'array :<br/><br/>

  - Inutile d'utiliser IndexOf<br/><br/>
  - **valeurs uniques garanties**<br/><br/>
  - Suppression possible sans Slice

##--##

<!-- .slide: class="with-code" -->

<br/><br/>

```javascript
let data = new Set();
data.add('hello').add('goodbye').add('hello');
data.size === 2;
data.has('hello') === true;
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
"Les objets Set sont des ensembles de valeurs. Il est possible de les parcourir dans l'ordre d'insertion des éléments.
Une valeur d'un élément Set ne peut y apparaître qu'une seule fois, il est unique pour cette instance de Set."
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Collections_avec_cl%C3%A9s#Le_type_Set

##==##

<!-- .slide: class="two-column-layout" -->

# Set & Map

- Les **Map** sont une nouvelle structure _comparable_ aux _Objets_

##--##

<br/><br/>

- Avantages de la Map sur l'Objet :<br/><br/>

  - Les clefs peuvent être de tout type<br/><br/>
  - _Size_ est propriété de la Map<br/><br/>
  - Itération dans l'ordre d'insertion des éléments<br/><br/>
  - N'hérite pas du prototype Objets

##--##

<!-- .slide: class="with-code" -->

<br/><br/>

```javascript
let data = new Map();
let s = {example: "cat"}
data.set("hello", 42);
data.set(s, 34);
data.get(s) === 34;
data.size === 2;
for (let [ key, val ] of data) { 
    console.log(`${key} ${val}`);
}

// hello 42
// [object Object] 34
```
<!-- .element: class="fragment" -->

Notes:
"Un objet Map représente une collection de données qui sont des correspondances entre des clés ou valeurs et pour lequel on peut itérer dans l'ordre d'insertion pour lister les différentes clés / valeurs."
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Collections_avec_cl%C3%A9s#Le_type_Map

Petit point sur For In vs For Of :
https://jsperf.com/foreach-vs-for-loop-vs-for-in-vs-for-of-vs-babel-for-of

For In est moins performant car il replique tout le temps l'itération -> on passe et repasse en permanence dans les boucles
