<!-- .slide -->

# Fn JS : Currying

Le Currying, ce n'est pas ça... <!-- .element: class="text-center" -->

![h-700 center](./assets/images/currying.png)

##==##

<!-- .slide: class="with-code" -->

# Fn JS : Currying

## What is Currying?

Le currying est un processus de programmation fonctionnelle dans lequel nous pouvons transformer une fonction avec plusieurs arguments en une séquence de fonctions d'imbrication. Il renvoie une nouvelle fonction qui attend le prochain argument en ligne.
Il continue de renvoyer une nouvelle fonction jusqu'à ce que tous les arguments soient épuisés.

```javascript
function multiply(a, b, c) {
  return a * b * c;
}
multiply(1, 2, 3); // 6

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
// Ou encore
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(1)(2)(3)); // 6
```

Notes:
bien insister sur le fait que le currying est bien un appel multiple de fonction, on ne fait que rappeler la fonction qui renvoyée

/!\ à ne pas confondre avec le HOF !! car HOF prend une fonction en paramètre !

##==##

<!-- .slide: class="two-column with-code" -->

# Fn JS : Currying

## What is Currying?

Les arguments sont conservés "vivants" (via la fermeture) et tous sont utilisés lors de l'exécution lorsque la fonction finale de la chaîne de currying est renvoyée et exécutée.

Voyons en détail comment fonctionne notre fonction

```javascript
const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
log(result); // 6
```

```javascript
let mul1 = multiply(1);
// mul1 renvoi
/* function (b) {
  return (c) => {
    return a * b * c
  }
} */
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />

```javascript
let mul2 = mul1(2);
// mul2 renvoi
/* function (c) {
  return a * b * c
} */
```

```javascript
const result = mul2(3);
// it calculates a * b * c with the previously passed in parameters:
(a = 1), (b = 2), (c = 3);

// 6
```

##==##

<!-- .slide: class="with-code" -->

# Fn JS : Currying

## What is Currying?

Un autre cas pratique

```javascript
const map = fn => mappable => mappable.map(fn);

const arr = [1, 2, 3, 4, 5, 6]; // mappable

const doubler = n => n \* 2; //fn
const doubleAll = map(doubler);
const doubled = doubleAll(arr);
log(doubled);
// => [2, 4, 6, 8, 10, 12]
```

Notes:

```javascript
const doubled = map(doubler)(arr) === arr.map(doubler);
```

##==##

<!-- .slide:-->

# Fn JS : Currying

## What is Currying?

Reprenons l'exercice précédent,

A l'aide du procédé de Currying nous voulons améliorer notre méthode getTotalAmount,

Nous pouvons observer l'objectif à atteindre sur ce Repl Ramda : https://frama.link/vRqP5XnL

1. Recoder R.pipe() (nommé pipe())
2. Recoder les autres "Higher Order Functions" R.filter, R.map et R.Reduce

##==##

<!-- .slide -->

# Fn JS : Currying

## What is Currying? (suite)

Définition de la fonction pipe :

La méthode pipe prend deux paramètres appelés **en deux temps différents.**

1. D'abord une liste de fonctions chaînées
2. Puis un paramètre qui sera la valeur initiale passée à la première fonction.

Ensuite, chaque fonction suivante de la liste prend en entrée le retour de la fonction précédente.

Pipe renvoie la valeur de sortie de la dernière fonction de la chaîne.

Notes:
C
