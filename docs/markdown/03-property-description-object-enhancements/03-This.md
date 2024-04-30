<!-- .slide: -->

# This

![h-600 center](./assets/images/This_00.gif)
<br/><br/>

## **this** est souvent mal compris

##==##

<!-- .slide:-->

# This

<ul class="fragment" data-fragment-index="1">
    <li>Ce n'est <span class="bold">PAS</span> le this <span class="bold italic">java</span></span></li>
    <li>Ce n'est <span class="bold">PAS</span> une référence au blocking scope</li>
</ul>

<br/><br/>

<ul class="fragment" data-fragment-index="2" data-color="red">
    <li>En résumé <span class="bold">this</span> n'est <span>PAS ITSELF</span></li>
</ul>

<br/><br/>

Alors c'est quoi this ? <!-- .element: class="fragment bold text-center" data-fragment-index="3"-->

<br/>

<p class="fragment text-center" data-fragment-index="4">C'est une référence au contexte du <span class="bold">callsite</span></p>

##==##

<!-- .slide: class="full-center"-->

# This

![h-450](./assets/images/This_01.gif)

##==##

<!-- .slide: class="two-column" -->

# This

<!-- .slide: class="with-code" -->

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

<ul class="fragment withdrawal-margin" data-fragment-index="1">
    <li>this.iterations++ ne pointe pas sur la fonction counter</li>
    <li>this fait référence au <span class="bold">contexte d'exécution (call site</span> lors du <span class="bold">runtime)</span></li>
    <li class="red"><span class="italic">counter(i) est <span class="bold">appelé dans l'objet Global</span>, c'est son <span class="bold">call site</span></span></li>
</ul>

<br/>

<ul class="fragment withdrawal-margin" data-fragment-index="2">
    <li><span>sans 'use strict'</span> si le call site est l'objet global, alors iterations est une variable globale (i.e, propriété de l'objet global) qui vaut désormais 5;</li>
    <li><span>avec 'use strict'</span> si le call site est l'objet global, alors iterations est NaN.</li>
</ul>

##==##

<!-- .slide: class="two-column" -->

# This

<!-- .slide: class="with-code" -->

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
<div class="fragment" data-fragment-index="1">
Petit exercice :

<span class="bold">Ici lorsque l'on appel randomFn() que se passe-t-il ?</span>

<br/>

<p class="bold text-center">:-)</p>
</div>

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
