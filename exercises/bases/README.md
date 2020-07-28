# Destructuring: Exercice

Modifier la signature de la fonction testDestructuring, de telle sorte qu’elle prenne :

1. la **deuxième valeur du tableau** qui lui est passé en premier paramètre
1. l’attribut **name de l'objet** qui lui est passé en deuxième paramètre
1. le **reste des paramètres** dans un tableau

Si aucun objet n’est passé en deuxième paramètre, en fournir un avec comme name “toto”.

# Tips

```javascript
// Defaults Params
function fn (x, y = 2, z = 3) {}

//Rest params
function fn (x, y, ...z) {

// Destructuring
const { foo, bar, quux, toto } = getObject();
```
