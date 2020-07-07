<!-- .slide: class="with-code" -->

# Classes

```javascript
class SuperCat extends Cat {
  constructor(name) {
    super(name);
    this.superPower = SuperCat.MegaMeow();
  }
  meow() {
    //...
    super.meow();
  }
  static MegaMeow() {
    return 'Meeeooooowwww';
  }
}
```

##==##

<!-- .slide: class="with-code" -->

# Classes

<br/><br/>

```javascript
class SuperCat extends Cat
```

<br/><br/>

- `class SuperCat` : Mot clé class suivi d'un nom
- `extends Cat` : Vous permet d'étendre une classe

##==##

<!-- .slide: class="with-code" -->

# Classes

<div class="full-center">
    ```javascript
    constructor(name) {
        super(name);
        this.superPower = SuperCat.MegaMeow();
    }
    ```
</div>

##==##

<!-- .slide: class="with-code" -->

# Classes

<div class="full-center">
    ```javascript
    meow() {
        //...
        super.meow();
    }
    ```
</div>

##==##

<!-- .slide: class="with-code" -->

# Classes

<br/><br/>

```javascript
static MegaMeow() {
    return 'Meeeooooowwww';
}
```

<br/>
<br/>

- `static` : attache une fonction à une classe et non à une instance

##==##

<!-- .slide: class="with-code" -->

# Classes

<br/>
<br/>

```javascript
let myCat = new SuperCat('Minet');
```

<br/>
<br/>

- une erreur survient si on n'utilise pas le mot clé `new`

##==##

<!-- .slide:-->

# Classes (mais pas tout à fait)

&nbsp;
&nbsp;
 
Attention, cela reste du sucre syntaxique. Nous restons au final dans un modèle prototypal !
<!-- .element: class="red" -->

<div class="flex-row">

![](./assets/images/Classes_01.png) <!-- .element: class="fragment" -->

![](./assets/images/Classes_02.png) <!-- .element: class="fragment" -->

</div>

Notes:
livecode

class Cat{

constructor() {this.name = 'Félix';}

meow() {console.log('meow')}

}

class Dog{

constructor() {this.name = 'Drogo';}

meow() {console.log('waf')}

}

var cat = new Cat();

var dog = new Dog();

cat;

dog;

-> On montre les descriptions

cat.**proto** = dog.**proto**

cat.neow() => génère une erreur

cat;

=> ça devient un chien

JS nous permet de modifiier le prototype au runtime !! => JS n'est pas un langage de classe au sens qu'on a l'habitude de manipuler. La classe n'est que du sucre syntaxique !! C'est un accès aux références du prototype

##==##

<!-- .slide:-->

# Classes (Java) VS Prototype

<div class="flex-row">

![h-400](./assets/images/Classes_03.png) <!-- .element: class="fragment" -->

![h-400](./assets/images/Classes_04.png) <!-- .element: class="fragment" -->

</div>

<div class="flex-row">

<br/>

![](./assets/images/arrow_right.png)
"Copie des valeurs" <!-- .element: class="fragment" -->

![](./assets/images/arrow_right.png) <!-- .element: class="fragment" -->
"Référence"
</div>

Notes:
in JS, all objects are Singletons !

/!\ à la modification dynamique de classes en JS qui n'est pas dispo en Java -> bien avoir conscience de ça

https://www.youtube.com/watch?v=wfMtDGfHWpA
