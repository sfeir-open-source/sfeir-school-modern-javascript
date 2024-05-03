<!-- .slide: class="two-column with-code" -->

# Advanced Type

- Intersection -> Combine les types en un
  - IUser & ILogin

```javascript
interface IUser {
  name: string;
}
interface ILogin {
  login: string;
  password: string;
}

type TAllUserInfo = IUser & ILogin;

function combineData(user: IUser, login: ILogin): TAllUserInfo {
  return { ...user, ...login };
}
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
&nbsp;  
&nbsp;
&nbsp;  
&nbsp;  
&nbsp;

```javascript
const user: IUser = { name: 'Brice' };
const login: ILogin = { login: 'log', password: 'pass' };
const result: TAllUserInfo = combineData(user, login);
// Ok

const result: string = combineData(user, login);
// Type 'IUser & ILogin' is not assignable to type 'string'.
```

<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# Advanced Type

- Union => Peut être un parmi plusieurs types
  - IFish | IBird

```javascript
let age: string | number;
age = '12';
age = 12;

function toString(el: string | number): string {
  if (typeof el === 'number') {
    return el + '';
  }
  return el;
}
toString(age);
// "12"
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
&nbsp;  
&nbsp;

```javascript
interface Bird { fly(); layEggs();}
interface Fish { swim(); layEggs();}
function getSmallPet(): Fish | Bird {// ...}
let pet = getSmallPet();

pet.layEggs(); // okay
pet.swim(); // errors
```

##==##

<!-- .slide: class="two-column with-code" -->

# Advanced Type

- Type Guards
  - parameterName is Type

&nbsp;

```javascript
const isFish =
(pet: Fish | Bird | Dog): pet is Fish => {
  return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly(); // Error
}
```

- TS sait que c'est un Fish dans le if et déduit un Bird ou Dog dans le else

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
&nbsp;  
&nbsp;

```javascript
const isLoginError = (
login: IloginError | IloginSuccess): login is IloginError => {
  return (login as IloginError).ErrorCode !== undefined;
};

if (isLoginError(login)) {
  // error
} else {
  // success
}
```

Notes:
le type guard est un typeof evolué => l'expression renvoyée par le type guard et bonne, alors on a la garantie que qu'en sortie on a bien un FISH ici

le type guard est identifié par le mot clé "is"

##==##

<!-- .slide -->

# Typescript - Let's Play !

Let's Play ! <!-- .element: class="text-center" -->

![h-700 center](./assets/images/lets-play.png)

Notes:
L'objectif de l'exercice est de résoudre tous les problèmes Typescript
