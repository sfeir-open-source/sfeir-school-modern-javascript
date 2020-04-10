<!-- .slide: class="with-code"-->

# Fn JS : Immutability

**Immutabilité**

- Un Objet immutable est un objet qui une fois créé, ne peut pas être modifié

&nbsp;

```javascript
const book = Object.freeze({
  title: 'How JavaScript Works',
  author: 'Douglas Crockford',
});
book.title = 'Other title';
//Cannot assign to read only property 'title'
```

##==##

<!-- .slide:-->

# Fn JS : Immutability

**Pourquoi ?**

Rendre le code prédictible et suivre les mutations

**Predictability**

Les mutations cachent les changements, ce qui crée des "side effects", et potentiellement des bug. L'immutabilité permet d'accroître la lisibilité d'une architecture et de la simplifier.

**Mutation Tracking**

L'immutabilité permet d'optimiser l'application en utilisant les références de vos objets en testant les égalités (i.e. la méthode "equals" Java)
Il est plus simple de tester les changements d'état.
Exemple en React, ce pattern nous permet d'éviter les renderings superflus
