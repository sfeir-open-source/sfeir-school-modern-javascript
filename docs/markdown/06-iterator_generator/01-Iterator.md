<!-- .slide:-->

# Itérateur et itérable

<span class="fragment" data-fragment-index="1">"Un **itérateur** est un objet sachant comment accéder aux éléments d'une collection un par un et qui connaît leur position dans la collection.</span>

<span class="fragment" data-fragment-index="2">En JavaScript, un **itérateur** expose une méthode **next()** qui retourne l'élément suivant dans la séquence.</span>

<span class="fragment" data-fragment-index="3">Un objet est considéré comme **itérable** s'il définit le comportement qu'il aura lors de l'itération</span>

<span class="fragment" data-fragment-index="4">Pour qu'un objet soit **itérable**, un objet doit implémenter la méthode **@@iterator** (qui est un **Symbol**)"
[MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs) <!-- .element: class="underline" -->
</span>

Notes:
Primitives in Javascript : BONNUSS

boolean

object

number

null

undefined

symbol

string

##==##

<!-- .slide: class="two-column-layout" -->

# Itérable : Utilisation de for … of

##--##

<!-- .slide: class="with-code" -->

```javascript
let myArray = [1, 2, 'foo', 3];

for (elem of myArray) {
    console.log(elem);
}

// 1
// 2
// foo
// 3
```

##--##

![h-400 center](./assets/images/Iterable_01_array.png) <!-- .element: class="fragment" data-fragment-index="1" -->

Notes:
à utiliser sur des itérables (not only array ;) )

un iterator renvoie 2 choses, si l'itérateur est fini et la valeur suivante
