<!-- .slide: class="full-center"-->

# Les générateurs

C'est une fonction qui peut se mettre en pause.

##==##

<!-- .slide: class="two-column-layout" -->

# Les générateurs

##--##

<!-- .slide: class="with-code" -->

```javascript
let helloWorld = function* () {
  yield 'hello';
  yield 'world';
};

let generatorHello = helloWorld();
let value = generatorHello.next();
console.log(value);

console.log(generatorHello.next());

console.log(generatorHello.next());
```

##--##

<!-- .slide: class="with-code" -->

<div class="fragment" data-fragment-index="1">
<pre><code data-trim class="javascript">
function* ()
</code></pre>
<span class="withdrawal-margin">Permet de créer une fonction générateur</span>
</div>

<div class="fragment" data-fragment-index="2">
<pre><code data-trim class="javascript">
helloWorld()
</code></pre>
<span class="withdrawal-margin">On instancie un générateur</span>
</div>

<div class="fragment" data-fragment-index="3">
<pre><code data-trim class="javascript">
generatorHello.next()
</code></pre>
<span class="withdrawal-margin">On va à la prochaine étape de notre générateur</span>
<br/>
<span class="withdrawal-margin">=> Le prochain <span class="bold">yield</span></span>
</div>

##==##

<!-- .slide: class="two-column-layout" -->

# Les générateurs

##--##

<!-- .slide: class="with-code" -->

```javascript
let helloWorld = function* () {
  console.log('work…');
  yield 'hello';
  console.log('work again …');
  yield 'world';
};

let generatorHello = helloWorld();
let value = generatorHello.next();

console.log(value); // 1er console.log

console.log(generatorHello.next()); // 2ème console.log

console.log(generatorHello.next());
```

##--##

1er console.log, work... <!-- .element: class="fragment" data-fragment-index="1" -->

2eme console.log, work again ... <!-- .element: class="fragment" data-fragment-index="2" -->

##==##

<!-- .slide: class="full-center"-->

# Les générateurs

C'est une fonction avec laquelle on peut communiquer pendant son exécution.

##==##

<!-- .slide: class="two-column-layout" -->

# Les générateurs

##--##

<!-- .slide: class="with-code" -->

```javascript
let helloWorld = function* () {
  yield 'hello';
  yield 'world';
};

let generatorHello = helloWorld();
let value = generatorHello.next();
console.log(value);

console.log(generatorHello.next());

console.log(generatorHello.next());
```

##--##

<span class="fragment" data-fragment-index="2">1er `console.log`, on va jusqu'au premier **yield**</span>

![](./assets/images/Generator_01.png) <!-- .element: class="fragment" data-fragment-index="1" -->

<span class="fragment" data-fragment-index="3">2ème `console.log`, on va jusqu'au second **yield**</span>

<span class="fragment" data-fragment-index="4">3éme `console.log`, il n'y a plus de **yield**, notre générateur est **terminé**.</span>

##==##

<!-- .slide: class="two-column-layout" -->

# Les générateurs : je peux utiliser return ?

##--##

<!-- .slide: class="with-code" -->

```javascript
let helloWorld = function* () {
  yield 'hello';
  return 'cut !';
  yield 'world';
};

let generatorHello = helloWorld();
let value = generatorHello.next();
console.log(value);

console.log(generatorHello.next());

console.log(generatorHello.next());
```

##--##

<br/><br/>

![](./assets/images/Generator_02.png) <!-- .element: class="fragment" data-fragment-index="1" -->

Notes:
Le return fonctionne comme le yield et nous garantit donc la fin du générateur

##==##

<!-- .slide: class="with-code" -->

# Les générateurs infinis ?

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
let helloWorld = function* () {
  while (1) {
    yield 'hello';
  }
};

let generatorHello = helloWorld();
let value = generatorHello.next();

console.log(generatorHello.next());
console.log(generatorHello.next());
</code></pre>

##==##

<!-- .slide: class="two-column-layout" -->

# Les générateurs: communication

##--##

<!-- .slide: class="with-code" -->

```javascript
let helloWorld = function* () {
  var x = yield 11;
  var y = yield x + 1;
  yield x + y;
};
let generatorHello = helloWorld();

console.log(generatorHello.next(99)); // 1
console.log(generatorHello.next(41)); // 2
console.log(generatorHello.next(42));
console.log(generatorHello.next());
```

##--##

![](./assets/images/Generator_03.png) <!-- .element: class="fragment" data-fragment-index="1" -->

<span class="fragment" data-fragment-index="2">1. Pas encore de yield, cette valeur est ignorée</span>

<span class="fragment" data-fragment-index="3">2. On passe une valeur au premier yield</span>

##==##

<!-- .slide: class="with-code" -->

# Les générateurs : ce sont des itérateurs !

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
let helloWorld = function* () {
  yield 'hello';
  yield 'world';
};

for (elem of helloWorld()) {
  console.log(elem);
}

// hello
// world
</code></pre>

Notes:
use case potentiels :

Async / Await

Redux Saga

https://swizec.com/blog/finally-a-practical-use-case-for-javascript-generators/swizec/9036
