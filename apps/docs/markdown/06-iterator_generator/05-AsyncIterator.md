<!-- .slide:-->

# Itérables Asynchrones

Un itérable asynchrone est un iterable avec un itérateur dont la méthode next retourne une Promesse de {done, value} au lieu d'un objet {done, value}.
<!-- .element: class="fragment" -->
Un objet est considéré comme **itérable asynchrone** s'il définit le comportement qu'il aura lors de l'itération asynchrone
<!-- .element: class="fragment" -->
Pour qu'un objet soit **itérable asynchrone**, un objet doit implémenter la méthode **@@asyncIterator** (qui est un **Symbol**)
<!-- .element: class="fragment" -->

##==##

# Itérables Asynchrones : Comment les parcourir

<br />

## La boucle for-await-of

```javascript
async function* gen() {
  for(const i of Array(5).keys()) {
      yield fetch(`https://pokeapi.co/api/v2/pokemon/${Math.trunc(Math.random() * 100) + 1}`).then(r => r.json());
  }
}
for await (const x of gen()) {
    console.log(x.name);
}
```

##==##

# Itérables Asynchrones : Comment les parcourir

<br />

## La boucle while

```javascript
async function* gen() {
  for(const i of Array(5).keys()) {
      yield fetch(`https://pokeapi.co/api/v2/pokemon/${Math.trunc(Math.random() * 100) + 1}`).then(r => r.json());
  }
}
let iterator = gen(), next = await iterator.next();
while(!next.done) {
  console.log(next.value.name);
  next = await iterator.next();
}
```
