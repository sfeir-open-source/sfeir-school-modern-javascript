<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?

```javascript
var valueA = 1234;
var valueA = 453; //NO ERROR !!!
```

<!-- .element: class="fragment" -->

```javascript
const valueB = 1234;
valueB = 12345; //ERROR
let valueC = 1234;
valueC = 12345;
let valueC = 453; //ERROR
```

<!-- .element: class="fragment" -->

Notes:
**const** n'est pas une vraie const. En effet, si on const un objet, on pourra toucher à l'objet => const c'est une constante de référence

Uniquement dans Chrome, dans la console des Devtools, on peut redéclarer une variable même avec let :
let x = 5;
let x = 7;
On peut ainsi utiliser l'historique des commandes au lieu de devoir faire :
let x = 5;
x = 7;

##==##

<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?

```javascript
if (true) {
  var j = 2;
}
console.log(j); // 2
```

<!-- .element: class="fragment" -->

```javascript
if (true) {
  let j = 2;
  console.log(j); // 2
}
console.log(j); // ERROR
```

<!-- .element: class="fragment" -->

Notes:
IIFE = Immediately Invoked Function Expression

en ES6, les accolades nous permettent de créer des scopes sans IIFE.

Le mot-clé function revient à une déclaration globale de la fonction

##==##

<!-- .slide: class="two-column with-code" -->

# Const et let : Mais où sont les vars ?

```javascript
(function () {
  foo === undefined;
  var foo = function () {
    return 1;
  };
  foo() === 1;
  (function () {
    foo() === 2;
    function foo() {
      return 2;
    }
    foo() === 2;
  })();
  foo() === 1;
})();
foo(); // Uncaught ReferenceError: foo is not defined
```

<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br><br><br><br>

```javascript
{
  foo === undefined;
  function foo() {
    return 1;
  }
  foo() === 1;
  {
    foo() === 2;
    function foo() {
      return 2;
    }
    foo() === 2;
  }
  foo() === 1;
}
foo() === 1;
```

<!-- .element: class="fragment" -->

Notes:
IIFE = Immediately Invoked Function Expression

en ES6, les accolades nous permettent de créer des scopes sans IIFE.

Les fonctions déclarées avec le mot-clé function (function expressions) ne changent pas de comportement par rapport à pre-es6

##==##

<!-- .slide: class="with-code" -->

# Les var, toujours en vie

### Indiquer qu'on veut disposer de la variable dans le scope de la fonction complète.

```javascript
function f(names) {
  var part1 = 'either';
  for (const name of names) {
    let toAdd = ' ' + name;
    part1 += toAdd;
  }
  var part2 = 'or';
  for (const name of names.reverse()) {
    let toAdd = ' ' + name;
    part2 += toAdd;
  }
  return `${part1} ${part2}`;
}
console.log(f(['Jane', 'John']));
```

##==##

<!-- .slide: class="with-code" -->

# Les var, toujours en vie

### Le do-while

```javascript
function f(files) {
  const stack = files.slice();
  do {
    var current = stack.shift();
    console.log(current);
  } while (current);
}
console.log(f(['file1', 'file2', 'file3']));
```

##==##

<!-- .slide: class="with-code" -->

# Les var, toujours en vie

### Compenser la création par la syntaxe d'un bloc non voulu

```javascript
async function foo() {
  try {
    var foo = await fetchRandomNumber();
  } catch {
    var foo = Math.trunc(Math.random() * 100);
  }
  return foo + 42;
}
foo().then(console.log);
```

##==##

<!-- .slide: class="two-column with-code" -->

# Template String

On utilise les back **quotes ``** et on peut créer des expressions avec **\${}**

<!-- prettier-ignore -->
```javascript
var welcome = 'Welcome';
var sujet = 'ES6';

var myTemplateHTML = '<div class="sfeirschool">\n<p>' 
+ welcome + '</p>\n<p>' + sujet + '</p>\n</div>';

/*
"<div class="sfeirschool">
<p>Welcome</p>
<p>ES6</p>
</div>"
*/
```

<!-- .element: class="fragment" -->

##--##

<!-- .slide: class="with-code" -->

<br><br><br><br><br>

```javascript
const welcome = 'Welcome';
const sujet = 'ES6';

const myTemplateHTML = `
<div class="sfeirschool">
<p>${welcome}</p>
<p>${sujet}</p>
</div>`;

/*
"<div class="sfeirschool">
<p>Welcome</p>
<p>ES6</p>
</div>"
*/
```

<!-- .element: class="fragment" -->

Notes:
\${} contient des expressions javascript

##==##

<!-- .slide: class="with-code" -->

# Tagged template literals

```javascript
function bbCode(strings, ...values) {
  return `${strings[0].replace('[b]', '<strong>')}${values[0]}${strings[1].replace('[/b]', '</strong>')}`;
}

bbCode`foo [b]${42}[/b] bar`; // foo <strong>42</strong> bar
```

Notes:
Les tagged templates literals sont plus expressifs que de simples fonctions sur des strings

Ex: lit-html, styled-component
