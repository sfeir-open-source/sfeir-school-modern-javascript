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

```javascript
function* () {}
```
<!-- .element: class="fragment" data-fragment-index="1" -->
Permet de créer une fonction générateur
<!-- .element: class="fragment" data-fragment-index="1" -->

```javascript
helloWorld()
```
<!-- .element: class="fragment" data-fragment-index="2" -->
On instancie un générateur
<!-- .element: class="fragment" data-fragment-index="2" -->

```javascript
generatorHello.next()
```
<!-- .element: class="fragment" data-fragment-index="3" -->
On va à la prochaine étape de notre générateur
<!-- .element: class="fragment" data-fragment-index="3" -->

<br/>

=> Le prochain **yield**
<!-- .element: class="fragment" data-fragment-index="4" -->

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

1er console.log, work... <!-- .element: class="fragment" -->

2eme console.log, work again ... <!-- .element: class="fragment" -->

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

1er `console.log`, on va jusqu'au premier **yield**.
<!-- .element: class="fragment" -->

2ème `console.log`, on va jusqu'au second **yield**.
<!-- .element: class="fragment" -->

3éme `console.log`, il n'y a plus de **yield**, notre générateur est **terminé**.
<!-- .element: class="fragment" -->

![](./assets/images/Generator_01.png)
<!-- .element: class="fragment" -->

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

<br/>
<br/>

![](./assets/images/Generator_02.png) <!-- .element: class="fragment" -->

Notes:
Le return fonctionne comme le yield et nous garantit donc la fin du générateur

##==##

<!-- .slide: class="with-code" -->

# Les générateurs infinis ?

```javascript
let helloWorld = function* () {
  while (1) {
    yield 'hello';
  }
};

let generatorHello = helloWorld();
let value = generatorHello.next();

console.log(generatorHello.next());
console.log(generatorHello.next());
```

##==##

<!-- .slide: class="two-column-layout" -->

# Les générateurs : communication

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

![](./assets/images/Generator_03.png) <!-- .element: class="fragment" -->

1. Pas encore de yield, cette valeur est ignorée</span>
<!-- .element: class="withdrawal-margin" -->
1. On passe une valeur au premier yield
<!-- .element: class="list-fragment withdrawal-margin" -->

##==##

<!-- .slide: class="with-code" -->

# Les générateurs : ce sont des itérateurs !

```javascript
let helloWorld = function* () {
  yield 'hello';
  yield 'world';
};

for (const elem of helloWorld()) {
  console.log(elem);
}

// hello
// world
```

Notes:
use case potentiels :

Async / Await

Redux Saga

https://swizec.com/blog/finally-a-practical-use-case-for-javascript-generators/swizec/9036
