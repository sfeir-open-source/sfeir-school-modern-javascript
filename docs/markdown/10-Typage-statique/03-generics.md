<!-- .slide: class="two-column-layout" -->

# Generics

- Nous ne savons pas quelle sera la forme du type -> generics

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;

```javascript
function identity(arg: number): number {
  return arg;
}
// Bad
function identity(arg: any): any {
  return arg;
}
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;

```javascript
function identity<T>(arg: T): T {
  return arg;
}
let output = identity < string > 'myString';
let output = identity(42);
```

Notes:
pratique lors d'exposition d'API, … sur des choses génériques !

##==##

<!-- .slide: class="two-column-layout" -->

# Generics

##--##

<!-- .slide: class="with-code" -->

&nbsp;

```javascript
const user: IUser = { name: 'Dexter' };
const user2: IUser2 = { name: { first: { pseudo: 'toto' } } };

getIn(user, ['name']);
getIn(user2, ['name', 'first', 'pseudo']);
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
function getIn(obj, arrayOfNestedKeys) {}
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
function getIn<T>(obj: T, arrayOfNestedKeys) {}
</code></pre>

<pre class="fragment" data-fragment-index="3"><code data-trim class="javascript">
function getIn<T, K extend keyof T>(obj: T, arrayOfNestedKeys: [K]): … ? {}
</code></pre>

&nbsp;

- Quel est le type de retour de getIn ?<!-- .element: class="fragment" data-fragment-index="4"-->

Notes:
la partie de droite est à expliquer séquentiellement :

On explique le use case : on a un obj et on veut aller chercher sur cet objet une donnée d'un object nested

On commence à rendre ça générique

On utilise extend keyof pour préciser qu'on veut que récupérer uniquement les clés de l'objet (/!\ sur le premier niveau => ça va pêter et on a la solution 3 slides plus loin)

##==##

<!-- .slide: class="two-column-layout" -->

# Generics

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;

```javascript
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;

```javascript
interface Lengthwise {
length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
console.log(arg.length); // Now we know it has a .length property, so no more error
return arg;
}
```

```javascript
loggingIdentity(3); // Error, number doesn't have a .length property
```

```javascript
loggingIdentity({ length: 10, value: 3 });
```

Notes:
explication plus simple et explicite de "l'héritage" des génériques

##==##

<!-- .slide: class="with-code" -->

# Generics

```javascript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```

Notes:
toujours utilisation de keyof => ça montre bien que "m" n'est pas une propriété de l'objet x
