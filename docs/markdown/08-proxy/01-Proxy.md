<!-- .slide -->

# Proxies

- Un **proxy** est un _"wrapper"_ **d'objet**
  <br/>
  <br/>
- Il permet d'intercepter, **surcharger** et / ou de **remplacer** le **comportement**d'un objet
  <br/>
  <br/>
- Le **proxy** devient _l'interface_ de votre objet avec lequel vous interagissez, _votre objet est donc **intouché** et **protégé**_
  <br/>
  <br/>
- Pas d'outil comparable pre-ES6
<!-- .element: class="list-fragment" -->

Notes:
l'idée est de protéger l'accès à un objet en surchargeant le retour de ces éléments.

##==##

<!-- .slide: class="with-code" -->

# Proxies

```javascript
let p = new Proxy(cible, handler);
```

<!-- .element: class="fragment" -->

"cible" : l'objet à proxifier

<!-- .element: class="fragment" -->

"handler" : Un objet contenant des "**traps**" qui sont des fonctions

<!-- .element: class="fragment" -->

```javascript
let handler = {
  get: function (cible, prop) {
    return prop in cible ? cible[prop] : 42;
  },
};

let obj = { a: 4 };
let proxy = new Proxy(obj, handler);
proxy.b = 32;

console.log(proxy.a, proxy.b); // 4, 32
console.log(proxy.c); // 42
console.log(obj.c); // undefined
```

<!-- .element: class="fragment" -->

Notes:
ici on a pas protégé le set -> obj.b a été modifié

##==##

<!-- .slide: class="two-column with-code" -->

# Proxies

- Je veux protéger mon objet en écriture

<br/>
<br/>

```javascript
let pilote = { name: 'Le Guennec', jours_de_vol: 50 };

let traps = {
  set: function (receiver, property, value) {
    if (property === 'jours_de_vol' && value > receiver[property]) {
      receiver[property] = value;
      return true;
    }
    console.log('Veuillez insérer une valeur superieur à la précédente');
    return false;
  },
};
let proxy_pilote = new Proxy(pilote, traps);
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>
<br/>
<br/>

```javascript
pilote; // Object {name: "Le Guennec", jours_de_vol: 50}
proxy_pilote; // Proxy {name: "Le Guennec", jours_de_vol: 50}

proxy_pilote.jours_de_vol = 40;
pilote; // Object {name: "Le Guennec", jours_de_vol: 50}
proxy_pilote; // Proxy {name: "Le Guennec", jours_de_vol: 50}

proxy_pilote.jours_de_vol = 60;
proxy_pilote; // Proxy {name: "Le Guennec", jours_de_vol: 60}
pilote; // Object {name: "Le Guennec", jours_de_vol: 60}

pilote.jours_de_vol = 30;
pilote; // Object {name: "Le Guennec", jours_de_vol: 30}
proxy_pilote; // Proxy {name: "Le Guennec", jours_de_vol: 30}
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="with-code" -->

# Proxies

- Une liste non exhaustive de Handlers

```javascript
let traps = {
  get() {}, // On accède à une propriété du proxy
  set() {}, // On set une propriété sur le proxy
  apply() {}, // Le proxy est invoqué en tant que fonction
  has() {}, // On test l'existence d'une propriété sur le proxy ou sur sa chaîne prototypale
  construct() {}, // Le proxy est appelé en tant que constructeur
};
```

<br/>

- Liste complete : <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">Global Object Proxy</a></li>
- Awesome Use Cases : <a class="underline" href="https://github.com/mikaelbr/awesome-es2015-proxy" target="_blank">https://github.com/mikaelbr/awesome-es2015-proxy</a></li>
<!-- .element: class="list-fragment" -->
