<!-- .slide: -->

# This

![h-600 center](./assets/images/This_00.gif)
<br/><br/>

## **this** est souvent mal compris

##==##

<!-- .slide:-->

# This

- Ce n'est **PAS** le this **_java_**
- Ce n'est **PAS** une référence au blocking scope
- En résumé **this** n'est **PAS ITSELF**
<!-- .element: class="list-fragment" -->

<br/><br/>

Alors c'est quoi this ? <!-- .element: class="fragment bold text-center"-->

<br/>

<p class="fragment text-center">C'est une référence au contexte du <span class="bold">callsite</span></p>

##==##

<!-- .slide: class="two-column with-code" -->

# This

```javascript
function counter(iterator) {
  console.log(`counter is @ ${iterator}`);
  this.iterations++; // conserver le nombre d'appel à counter()
}

counter.iterations = 0;
var iterations = 0;
var i;
for (i = 0; i < 5; i++) {
  counter(i);
}

// combien vaut `counter.iterations` ?
```

##--##

<br><br>

- this.iterations++ ne pointe pas sur la fonction counter
- this fait référence au **contexte d'exécution (call site) lors du runtime**
- _counter(i)_ est **appelé dans l'objet Global**, c'est son **call site**
- **sans 'use strict'** si le call site est l'objet global, alors iterations est une variable globale (i.e, propriété de l'objet global) qui vaut désormais 5;
- **avec 'use strict'** si le call site est l'objet global, alors iterations est NaN.
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# This

```javascript
function counter(iterator) {
  console.log(`counter is @ ${iterator}`);
  this.iterations++; // conserver le nombre d'appel à counter()
}

function randomFn() {
  for (var i = 0; i < 5; i++) {
    counter(i);
  }
}
var iterations = (counter.iterations = randomFn.iterations = 0);

window.randomFn();

// What happened ? ;-)
```

##--##

<!-- .slide: class="with-code" -->

<br><br><br>

Petit exercice :

<!-- .element: class="fragment" data-fragment-index="1" -->

**Ici lorsque l'on appel randomFn() que se passe-t-il ?**

<!-- .element: class="fragment" data-fragment-index="1" -->

<br/>

**:-)**

<!-- .element: class="fragment" data-fragment-index="1" -->

<br/>

```javascript
for (var i = 0; i < 5; i++) {
  counter.call(randomFn, i);
}

// randomFn.iterations = 5 ! ENFIN !!!
```

<!-- .element: class="fragment" -->

Notes:
l'autre alternative au call c'est le bind

Call = on assigne le contexte à chaque fois

Bind = On assigne une fois pour toute

Il est conseillé de systématiquement passer le contexte pour éviter les mauvaises surprises.
