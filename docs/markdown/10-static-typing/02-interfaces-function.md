<!-- .slide: class="two-column with-code max-height" -->

# Interfaces / Function

```typescript
enum EGender {
  M,
  F,
}

interface IUser {
  name: string;
  readonly age: number; // ReadonlyArray
  gender: EGender;
  phone?: string;
}

const userInformation: IUser = {
  name: 'Dexter',
  age: 22,
  gender: EGender.M,
};
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
&nbsp;  
&nbsp;

```typescript
type ReturnString = (user: IUser) => string;
const getName: ReturnString = (user) => user.name;
// 'Dexter'

const getLastName = (user: IUser): string => user.lastName;
// Property 'lastName' does not exist on type 'IUser'.

const getPhone = (user: IUser): string => user.phone;
// Type 'string | undefined' is not assignable to type 'string'.

getName({ name: 'Dexter' });
// Argument of type '{ name: string; }' is not assignable
// to parameter of type 'IUser'.
userInformation.age = 10;
// Cannot assign to 'age' because it is a read-only property.
```

Notes:
/!\ le readonly n'est qu'au build ;)

"type" est le mot clé pour les Type Alias qui permettent de définir tout type, une interface, une signature de méthode, un type d'objet ….

Bien revenir sur chaque cas et ligne histoire de bien expliquer le code et les erreurs

##==##

<!-- .slide: class="two-column with-code" -->

# Interfaces / Function

&nbsp;  
&nbsp;  
&nbsp;

```typescript
interface IUserLimited {
  name: string;
  age: number;
}

interface IgetLimitedUserInformation {
  (user: IUser): IUserLimited;
}
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
&nbsp;  
&nbsp;

```typescript
const getLimitedUserInformation = (
  user: IUser
): {
  name: string;
  age: number;
} => {
  const { name, age } = user;
  return { name, age };
};

let getLimitedUserInformation: IgetLimitedUserInformation = function (user) {
  const { name, age } = user;
  return { name, age };
};
```

Notes:
le IgetLimitedUserInformation peut aussi être remplacé par le mot clé type
