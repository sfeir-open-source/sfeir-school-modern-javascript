<!-- .slide:-->

# Itérateur et itérable

Un **itérateur** est un objet sachant comment accéder aux éléments d'une collection un par un et qui connaît leur position dans la collection.

<!-- .element: class="fragment" -->

En JavaScript, un **itérateur** expose une méthode **next()** qui retourne l'élément suivant dans la séquence.

<!-- .element: class="fragment" -->

Un objet est considéré comme **itérable** s'il définit le comportement qu'il aura lors de l'itération

<!-- .element: class="fragment" -->

Pour qu'un objet soit **itérable**, un objet doit implémenter la méthode **@@iterator** (qui est un **Symbol**)

<!-- .element: class="fragment" -->

[MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs)

<!-- .element: class="fragment underline" -->

Notes:
Primitives in Javascript : BONUS

boolean, object, number, null, undefined, symbol, string

##==##

<!-- .slide: class="two-column" -->

# Itérables : Comment les parcourir

<br />

## La boucle for-of

<!-- .slide: class="with-code" -->

<br />
<br />

```javascript
let myArray = [1, 2, 'foo', 3];

for (const elem of myArray) {
  console.log(elem);
}

// 1
// 2
// foo
// 3
```

##--##

<!-- .slide -->

<br />
<br />

![h-400 center](./assets/images/Iterable_01_array.png) <!-- .element: class="fragment" -->

Notes:

un iterator renvoie 2 choses, si l'itérateur est fini et la valeur suivante
{value: 'foo', done: false}

##==##

<!-- .slide: class="with-code" -->

# Itérable : Comment les parcourir

<br />

## Le spread operator

```javascript
let mySet = new Set([1, 2, 3]);
let values = [...mySet]; // [1, 2, 3]
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Itérable : Comment les parcourir

<br />

## La boucle while

```javascript
let iterator = iterableObject[Symbol.iterator](),
  next = iterator.next();
while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
```

<!-- .element: class="fragment smaller-font" -->

Notes:
Petit point sur For In vs For Of :
https://jsperf.com/foreach-vs-for-loop-vs-for-in-vs-for-of-vs-babel-for-of

For In est moins performant car il réplique tout le temps l'itération -> on passe et repasse en permanence dans les boucles
