<!-- .slide:-->

# Why Typescript

- Améliorer et sécuriser la production de code JavaScript
- Harmoniser la qualité de code dans une équipe
- Une façon de tester son code
- Le code TypeScript est transcompilé (tsc) en JavaScript

Notes:
TypeScript sur des grandes équipes, c'est quand même bien pour tout ce qui est validation, harminisation

##==##

<!-- .slide: class="two-column-layout" -->

# Typage statique

- `let someValue: any = "randomString";`<br/>`(<string>someValue).length / (someValue as string).length;`

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;

```javascript
// primitives
let name: string = 'Dexter';
let age: number = 22;
let isSingle: boolean = true;
// Array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
// Tuple
let x: [string, number] = ["hand", 5]
// Enum
enum Color {Blue, White, Red = 5};
let color: Color = Color.Red
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;

```javascript
// Any
let notSure: any = 4;
// Void
function log(): void {
  console.log('log');
}
// Undefined / Null
let u: number | undefined = undefined;
let n: number | null = null;
let num: number = 5;
num = undefined;
// use --strictNullChecks
```

Notes:
Les primitives sont inférées

Concernant l'enum, c'est un type assignable (à opposer à l'interface).

--noImplicitAny

any est l'inférence pour les types par défaut

Utiliser --noImplicitAny nous permet de faire du JS classique tragetté pour un code.

Utiliser --strictNullChecks pour imposer les définitions de null ou undefiened mais juste pour les rendre explicit

Inférence vs Type précisés => chacun sa team, d'un côté l'inférence est sympa car elle permet d'alléger le code

Pour les Array, il est recommandé d'utiliser plutôt le number[] au lieu du Array<number> pour éviter les problèmes de
