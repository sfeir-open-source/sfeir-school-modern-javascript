<!-- .slide: class="full-center"-->

# Fn JS : Redux

![h-800](./assets/images/with-without-redux.png)

##==##

<!-- .slide: class="full-center"-->

# Fn JS : Redux

![h-800](./assets/images/big-boss.png)

##==##

<!-- .slide:-->

# Fn JS : Redux

Les 3 principes de Redux (issue de la doc)

<div class="fragment" data-fragment-index="1">
- State is Read-Only
</div>
<div class="fragment" data-fragment-index="2">
- Single source of Truth
</div>
<div class="fragment" data-fragment-index="3">
- Changes are made with pure functions
</div>

Notes:
le côté readonly est qu'en fait à chaque mutation, on fait une copie sur laquelle on applique nos changements et donc en fin, on applique le nouveau state

##==##

<!-- .slide:-->

# Fn JS : Redux - Let's Code it ourselves !

Codons notre propre implémentation _basique_ de **Redux**

Pour ça nous allons devoir définir :

<div class="fragment" data-fragment-index="1">
- Un <b>Store</b> en tant que singleton
</div>
<div class="fragment" data-fragment-index="2">
- Une gestion des <b>Dispatchers</b>
</div>
<div class="fragment" data-fragment-index="3">
- Une gestion des <b>Subscribers</b>
</div>

Notes:
https://egghead.io/courses/getting-started-with-redux

https://egghead.io/courses/building-react-applications-with-idiomatic-redux

##==##

<!-- .slide: class="with-code" -->

# Fn JS : Redux - Let's Code it ourselves !

Notre Store

```javascript
let store;
const getState = () => store;
```

##==##

<!-- .slide: class="with-code" -->

# Fn JS : Redux - Let's Code it ourselves !

Notre Dispatcher & le stockage des listeners

```javascript
const listeners = [];

const dispatch = (action) => {
  store = reducer(action, store);
  listeners.forEach((listener) => listener());
};
```

##==##

<!-- .slide: class="with-code" -->

# Fn JS : Redux - Let's Code it ourselves !

Gérer les Subscribe

```javascript
const subscribe = (listener) => {
  listeners.push(listener);
  return () => listeners.filter((lis) => lis !== listener);
};
```

Notes:
le return est une application de la curryfication et qui nous permet de nous désabonner à la fin

##==##

<!-- .slide:-->

# Fn JS : Redux - Let's Code it ourselves !

En Synthèse

<div class="fragment" data-fragment-index="1">
- Avec Redux nous pouvons protéger et stabiliser l'Etat de notre application. Ainsi nous pouvons décrire un contrat d'interface (les Actions) pour spécifier les interactions possibles entre l'utilisateur et l'application.
</div>
<div class="fragment" data-fragment-index="2">
- Les Reducers sont des fonctions pures dans un arbre d'état unique.
</div>
<div class="fragment" data-fragment-index="3">
- Le store est unique et contient l'ensemble de l'état de l'application. Ainsi nous pouvons suivre l'ensemble des évolutions de l'état de l'appli.
</div>
Notes:
il manque l'emplacement des appels REST => qui doivent être mis après dans un endroit différent

Copier / coller le code des précédents slides dans redux/src/myRedux.js

Ensuite on parcourt l'app (index.js) pour passer sur l'inscription

On passe en revue le reducer.js histoire de voir le fonctionnement aussi du reducer et de voir l'effet dans le myRedux

On lance l'app dans redux (npm install puis npm run start)

##==##

<!-- .slide:-->

# Fn JS : Redux - Let's Play !

Let's Play ! <!-- .element: class="text-center" -->

![h-700 center](./assets/images/lets-play.png)

##==##

<!-- .slide:-->

# Fn JS : Redux - Let's Play !

<div class="fragment" data-fragment-index="1">
- Ecrire notre implémentation de Redux
</div>
<div class="fragment" data-fragment-index="2">
- Dispatcher les actions INC et DEC sur les clicks appropriés <br>
&nbsp;&nbsp;&nbsp;&nbsp;- en implémentant les méthodes increment() et decrement()
</div>
<div class="fragment" data-fragment-index="3">
- Ajouter le reducer d'ADD_TODO et de l'action DEC
</div>
<div class="fragment" data-fragment-index="4">
- BONUS - Rajouter un delete pour chaque TODO
</div>

##==##

<!-- .slide: class="two-column" -->

# Fn JS : Redux - DevTools

<!-- .slide -->

![h-800 center](./assets/images/devTools.png)

##--##

<!-- .slide -->

&nbsp;  
&nbsp;  
&nbsp;

Meet your new best friend <!-- .element: class="text-center" -->

Redux DevTools ! <!-- .element: class="bold text-center" -->
