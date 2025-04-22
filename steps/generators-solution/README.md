# generators instructions

## How to run?

```Bash
cd ./steps
npm run generators
```

## TODO

Créer un **générateur** permettant de donner les valeurs de la suite de **Fibonacci**. Pour rappel, f(0) = 0 et f(1) = 1.

Testez votre code dans une console nodejs.

**BONUS:** Vous pouvez limiter le nombre de ligne avec une bonne utilisation du destructuring.

# Tips

La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes qui le précèdent. Elle commence généralement par les termes 0 et 1 (parfois 1 et 1) et ses premiers termes sont : 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

```javascript
function fibonacci(n, a, b) {
  return n > 0 ? fibonacci(n - 1, b, a + b) : a;
}

let generatorFunction = function* () {
  yield 'state';
};

let generator = generatorFunction();
generator.next();
```
