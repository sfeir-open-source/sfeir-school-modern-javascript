<!-- .slide:-->

# Promises

C'est une "façon" de gérer les traitements asynchrones avec une api unique en utilisant les callbacks !

![h-700 center](./assets/images/Promises_00.png) <!-- .element: class="fragment" -->

Notes:
explication de l'event loop

Présent depuis ES2015

##==##

<!-- .slide: class="two-column-layout"-->

# Promises

##--##

<!-- .slide: class="with-code" -->

```javascript
let p = new Promise(function(resolve, reject) {
   setTimeout(function() {
      resolve('ok');
   });
});

p.then(value => ...);
```

##--##

![center h-500](./assets/images/Promises_01.png) <!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Promises

Elles viennent résoudre un problème simple : aplatir une pile d'appels de **callback** aussi nommée **"Callback Hell"**

```javascript
a(function (resultA) {
  b(resultA, function (resultB) {
    c(resultB, function (resultC) {
      d(resultC, function (resultD) {
        e(resultD, function (resultE) {
          console.log(resultE);
        });
      });
    });
  });
});
```

##==##

<!-- .slide: class="two-column-layout"-->

# Promises

##--##

<!-- .slide: class="with-code" -->

Pour cela, on peut chaîner les promesses !

```javascript
a(function (resultA) {
  b(resultA, function (resultB) {
    c(resultB, function (resultC) {
      d(resultC, function (resultD) {
        e(resultD, function (resultE) {
          console.log(resultE);
        });
      });
    });
  });
});
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;

```javascript
a()
  .then(resultA => b(resultA))
  .then(resultB => c(resultB))
  .then(resultC => d(resultC))
  .then(resultD => e(resultD))
  .then(resultE => console.log(resultE));
```

##==##

<!-- .slide: class="two-column-layout"-->

# Promises

##--##

<!-- .slide: class="with-code" -->

Pour cela, on peut chaîner les promesses !

```javascript
a()
  .then(resultA => b(resultA))
  .then(resultB => c(resultB))
  .then(resultC => d(resultC))
  .then(resultD => e(resultD))
  .then(resultE => console.log(resultE));
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;

```javascript
function a() {
    return new Promise(...);
}

function b(value) {
    return new Promise(...);
}

etc ...
```

##==##

<!-- .slide: class="two-column-layout"-->

# Promises

##--##

<!-- .slide: class="with-code" -->

On peut faire encore mieux !

```javascript
a()
  .then(resultA => b(resultA))
  .then(resultB => c(resultB))
  .then(resultC => d(resultC))
  .then(resultD => e(resultD))
  .then(resultE => console.log(resultE));
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;

```javascript
a()
  .then(b)
  .then(c)
  .then(d)
  .then(e)
  .then(console.log);
```

##==##

<!-- .slide -->

# Promises

![h-400 center](./assets/images/Promises_03.png)

<p class="text-center">https://bevacqua.github.io/promisees</p>

##==##

<!-- .slide -->

# Promises

On résume

- **Une promesse renvoie toujours une promesse !**<br/><br/>

- Si une promesse est **résolue**, la valeur résolue va dans le prochain **then()**<br/><br/>

- Si une promesse est **rejetée**, la valeur rejetée va dans le prochain **catch()** (ou dans le then avec la fonction en second paramètre)<br/><br/>

Notes:
/!\ un catch depuis être suivi d'un then

Maintenant, il y a le .finally() qui permet d'executer un truc à la fin que l'on ait un catch ou un then

##==##

<!-- .slide: class="with-code" -->

# Promises

<div class="fragment" data-fragment-index="1">
L'API Promise

<br/>

Créer une nouvelle promesse

```javascript
new Promise(function(resolveFn, rejectFn) {
  // Votre code asynchrone
});
```
</div>

<br/>

<div class="fragment" data-fragment-index="2">
Créer une nouvelle promesse à partir d'une valeur ou d'une autre promesse

```javascript
Promise.resolve(/* valeur ou une promesse */) // Renvoie une promesse résolue
Promise.reject(/* valeur ou une promesse */) // Renvoie une promesse rejetée

// Exemple
Promise.resolve(4).then(value => console.log(value)) // 4
Promise.resolve(Promise.resolve('toto')).then(value => console.log(value)) // 'toto'
```
</div>

##==##

<!-- .slide: class="with-code" -->

# Promises

<div class="fragment" data-fragment-index="1">
L'API Promise

<br/>

Attendre plusieurs promesses et les fusionner en une

```javascript
Promise.all([promises...]) // Renvoie une promesse

// Exemple
Promise.all([Promise.resolve(4), Promise.resolve('toto')])
.then(values => console.log(values));
// [4, 'toto']
```
</div>

<br/>

<div class="fragment" data-fragment-index="2">
Attendre plusieurs promesses, premier arrivé => premier servi

```javascript
Promise.race([promises...]) // Renvoie une promesse

// Exemple
Promise.race([Promise.resolve(4), Promise.resolve('toto')])
.then(value => console.log(value));
// 4
```
</div>

##==##

<!-- .slide: class="two-column-layout" -->

# Promises

"Ok ok ok, moi je veux créer une promesse, comment je fais ?"

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function asyncFn(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.wikipedia.org/', false);
  request.onreadystatechange = event => {
    if (request.readyState == 4) return;
    if (request.status == 200) callback(null, request.responseText);
    else callback('Erreur pendant le chargement de la page.\n');
  };
}

asyncFn(function callback(err, value) {
    console.log(err ? err : value);
});
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function asyncFn() {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.wikipedia.org/', false);
    request.onreadystatechange = event => {
      if (request.readyState == 4) {
        if (request.status == 200) resolve(request.responseText);
        else reject('Erreur pendant le chargement de la page.\n');
      }
    };
  });
}

asyncFn()
  .then(result => console.log(result))
  .catch(error => console.error(error));
```