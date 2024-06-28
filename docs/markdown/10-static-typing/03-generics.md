<!-- .slide: class="two-column with-code" -->

# Generics

- Nous ne savons pas quelle sera la forme du type -> generics

&nbsp;  
&nbsp;  
&nbsp;

```typescript
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

<br><br><br><br><br><br><br><br>

```typescript
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>('myString');
let output = identity(42);
```

Notes:
pratique lors d'exposition d'API, … sur des choses génériques !

##==##

<!-- .slide: class="two-column with-code" -->

# Generics

&nbsp;

```typescript
const user: IUser = { name: 'Dexter' };
const user2: IUser2 = { name: { first: { pseudo: 'toto' } } };

getIn(user, ['name']);
getIn(user2, ['name', 'first', 'pseudo']);
```

&nbsp;

- Quel est le type de retour de getIn ?
<!-- .element: class="fragment"-->

##--##

<!-- .slide: class="with-code" -->

&nbsp;

```typescript
function getIn(obj, arrayOfNestedKeys) {}
```

<!-- .element: class="fragment" -->

```typescript
function getIn<T>(obj: T, arrayOfNestedKeys) {}
```

<!-- .element: class="fragment" -->

```typescript
function getIn<T, K extend keyof T>(obj: T, arrayOfNestedKeys: [K]): … ? {}
```

<!-- .element: class="fragment" -->

Notes:
la partie de droite est à expliquer séquentiellement :

On explique le use case : on a un obj et on veut aller chercher sur cet objet une donnée d'un objet imbriqué

On commence à rendre ça générique

On utilise extend keyof pour préciser qu'on veut récupérer uniquement les clés de l'objet (/!\ sur le premier niveau => ça va péter et on a la solution 3 slides plus loin)

##==##

<!-- .slide: class="two-column with-code" -->

# Generics

&nbsp;  
&nbsp;  
&nbsp;

```typescript
function loggingIdentity<T>(arg: T): T {
  // Error: T doesn't have .length
  console.log(arg.length);
  return arg;
}
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
&nbsp;  
&nbsp;

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);
  return arg;
}
```

<!-- .element: class="fragment" -->

```typescript
loggingIdentity(3); // Error, number doesn't have a .length property
```

<!-- .element: class="fragment" -->

```typescript
loggingIdentity({ length: 10, value: 3 });
```

<!-- .element: class="fragment" -->

Notes:
explication plus simple et explicite de "l'héritage" des génériques

##==##

<!-- .slide: class="with-code" -->

# Generics

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // okay
getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```

Notes:
toujours utilisation de keyof => ça montre bien que "m" n'est pas une propriété de l'objet x
