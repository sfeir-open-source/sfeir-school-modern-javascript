# Destructuring: Exercice

Modifier la signature de la fonction testDestructuring, de telle sorte qu’elle prenne :

1. la valeur au **second index du tableau qui lui est passé en premier paramètre**
2. l’attribut **name du second paramètre**
3. le **reste des paramètres** dans un tableau

Si aucun objet n’est passé en second paramètre, en fournir un avec comme name “toto”.

# Tips

```javascript
// Defaults Params
function fn (x = 2, y = 3, z) {}

//Rest params
function fn (x, y, ...z) {

// Destructuring
const { foo, bar, quux, toto } = getObject();
```
