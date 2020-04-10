<!-- .slide:-->

# Le Property Descriptor

<ul>
    <li class="fragment" data-fragment-index="1">Protéger ses objets avant ES6 : Le Property Descriptor<br/><br/></li>
    <li class="fragment" data-fragment-index="2">Permet de créer des objets immutables et donc protégés<br/><br/></li>
    <li class="fragment" data-fragment-index="3">Chaque propriété d'un objet est pourvu d'un property descriptor<br/></li>
</ul>

##==##

<!-- .slide: class="with-code" -->

# Le Property Descriptor

```javascript
var sword = { blade: 'iron' };

Object.getOwnPropertyDescriptor(sword, 'blade');
// {
//   value: 'iron',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

<pre class="fragment" data-fragment-index="3"><code data-trim class="javascript">
var sword = {};

Object.defineProperty( sword, 'blade', {
  value: 'steel',
  writable: true,
  enumerable: true,
  configurable: true
});

sword.blade; // steel
</code></pre>

<ul class="fragment" data-fragment-index="2">
    <li>writable : modifier la valeur de la propriété</li>
    <li>enumerable : affichage de la propriété lors d'un for...in</li>
    <li>configurable : modifier le property descriptor et utiliser l'opérateur delete</li>
    <li>(writable: false + configurable: false) permet de créer un objet constant</li>
</ul>

##==##

<!-- .slide:-->

# Proxies

<ul>
    <li class="fragment" data-fragment-index="1">Un <span class="bold">proxy</span> est un <span class="italic">"wrapper"</span> <span class="bold">d'objet</span><br/><br/></li>
    <li class="fragment" data-fragment-index="2">Il permet d'intercepter, <span class="bold">surcharger</span> et/ou de <span class="bold">remplacer</span> le <span class="bold">comportement</span> d'un objet<br/><br/></li>
    <li class="fragment" data-fragment-index="3">Le <span class="bold">proxy</span> devient <span class="bold italic">l'interface</span> de votre objet avec lequel vous interagissez, <span class="italic">votre objet est donc <span class="bold">intouché</span> et <span class="bold">protégé</span></span><br/><br/></li>
    <li class="fragment" data-fragment-index="4">Pas d'outil comparable pre-ES6</li>
</ul>

Notes:
l'idée est de protéger l'accès à un objet en surchargeant le retour de ces éléments.

##==##

<!-- .slide: class="with-code" -->

# Proxies

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
let p = new Proxy(cible, handler);
</code></pre>

"cible" : l'objet à proxifier <!-- .element: class="fragment" data-fragment-index="2" -->

<span class="fragment" data-fragment-index="3">"handler" : Un objet contenant des "**traps**" qui sont des fonctions</span>

<pre class="fragment" data-fragment-index="4"><code data-trim class="javascript">
let handler = {
    get: function(cible, prop){
        return prop in cible ? cible[prop] : 42;
    }
};

let obj = {a: 4};
let proxy = new Proxy(obj, handler);
proxy.b = 32;

console.log(proxy.a, proxy.b); // 4, 32
console.log(proxy.c); // 42
console.log(obj.c); // undefined
</code></pre>

Notes:
ici on a pas protégé le set -> obj.b a été modifié

##==##

<!-- .slide: class="two-column-layout" -->

# Proxies

- Je veux protéger mon objet en écriture

##--##

<!-- .slide: class="with-code" -->

<br/><br/>

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

<br/><br/>

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
pilote;
// Object {name: "Le Guennec", jours_de_vol: 50}
proxy_pilote;
// Proxy {name: "Le Guennec", jours_de_vol: 50}

proxy_pilote.jours_de_vol = 40;
pilote;
// Object {name: "Le Guennec", jours_de_vol: 50}
proxy_pilote;
// Proxy {name: "Le Guennec", jours_de_vol: 50}

proxy_pilote.jours_de_vol = 60;
proxy_pilote;
// Proxy {name: "Le Guennec", jours_de_vol: 60}
pilote;
// Object {name: "Le Guennec", jours_de_vol: 60}

pilote.jours_de_vol = 30;
pilote;
// Object {name: "Le Guennec", jours_de_vol: 30}
proxy_pilote;
// Proxy {name: "Le Guennec", jours_de_vol: 30}
  </code></pre>

##==##

<!-- .slide: class="with-code" -->

# Proxies

- Une liste non exhaustive de Handlers

```
let traps = {
   get() {},      // On accède à une propriété du proxy
   set() {},      // On set une propriété sur le proxy
   apply() {},    // Le proxy est invoqué en tant que fonction
   has() {},      // On test l'existence d'une propriété sur le proxy ou sur sa chaîne prototypale
   construct() {} // Le proxy est appelé en tant que constructeur
};
```

<br/>

<ul class="fragment" data-fragment-index="1">
    <li>Liste complete : <a class="underline" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">Global Object Proxy</a></li>
    <li>Awesome Use Cases : <a class="underline" href="https://github.com/mikaelbr/awesome-es2015-proxy" target="_blank">https://github.com/mikaelbr/awesome-es2015-proxy</a></li>
</ul>
