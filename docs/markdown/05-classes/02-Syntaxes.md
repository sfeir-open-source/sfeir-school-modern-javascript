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
class SuperCat extends Cat {}
```

<br/><br/>

- `class SuperCat` : Mot clé class suivi d'un nom
- `extends Cat` : Vous permet d'étendre une classe

##==##

<!-- .slide: class="with-code" -->

# Classes

<br/>
<br/>

```javascript
constructor(name) {
    super(name);
    this.superPower = SuperCat.MegaMeow();
}
```

##==##

<!-- .slide: class="with-code" -->

# Classes

<br/>
<br/>

```javascript
meow() {
    //...
    super.meow();
}
```

##==##

<!-- .slide: class="with-code" -->

# Classes

<br/>

```javascript
class Cat {
  static MegaMeow() {
    return 'Meeeooooowwww';
  }
}
```

- `static` : attache une fonction à une classe et non à une instance

```javascript
class Cat {
  static legs = 4;
}
```

<!-- .element: class="fragment" data-fragment-index="1"-->

- Marche aussi pour les propriétés

<!-- .element: class="fragment" data-fragment-index="1"-->

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

JS nous permet de modifier le prototype au runtime !! => JS n'est pas un langage de classe au sens qu'on a l'habitude de manipuler. La classe n'est que du sucre syntaxique !! C'est un accès aux références du prototype

##==##

<!-- .slide -->

# Classes (Java) VS Prototype

<div class="flex-row">

![h-400](./assets/images/Classes_03.png) <!-- .element: class="fragment" data-fragment-index="1" -->

![h-400](./assets/images/Classes_04.png) <!-- .element: class="fragment" data-fragment-index="2" -->

</div>

<div class="flex-row">

<br/>

![](./assets/images/arrow_right.png) <!-- .element: class="fragment" data-fragment-index="1" -->
<span class="fragment" data-fragment-index="1">"Copie des valeurs"</span>

![](./assets/images/arrow_right.png) <!-- .element: class="fragment" data-fragment-index="2" -->
<span class="fragment" data-fragment-index="2">"Référence"</span>

</div>

Notes:
in JS, all objects are Singletons !

/!\ à la modification dynamique de classes en JS qui n'est pas dispo en Java -> bien avoir conscience de ça

https://www.youtube.com/watch?v=wfMtDGfHWpA

##==##

<!-- .slide: class="with-code" -->

# Classes - Fields

```javascript
class Cat {
  legs = 4;
  constructor(name) {
    this.name = name;
  }
}
```

- `legs = 4` : Définit une propriété de classe
- `this.name = name` : Définit une autre propriété de classe

La visibilité est `public` par défaut

##==##

<!-- .slide: class="with-code" -->

# Classes - private fields & methods

```javascript
class Cat {
  #legs = 4;
  #meow() {
    console.log('meow');
  }
}
```

- `#legs = 4` : Définit un champ privé
- `#meow()` : Définit une méthode privée

##==##

<!-- .slide: class="two-column with-code" -->

# Classes - private fields & methods

Les variables privées ne peuvent pas être définies en dehors du corps de la classe

```javascript
class Cat {
  constructor() {
    this.#legs = 4; /*
     Private field '#legs' must
     be declared in an enclosing class
     */
  }
}
```

##--##

<!-- .slide: class="with-code" -->

<br><br><br><br>

Les variables ne sont pas accessibles en dehors dans les classes enfants

<!-- .element: class="fragment" data-fragment-index="1" -->

```javascript
class SuperCat extends Cat {
  constructor() {
    super();
    console.log(this.#legs); /*
      Private field '#legs' must 
      be declared in an enclosing class
      */
  }
}
```

<!-- .element: class="fragment" data-fragment-index="1" -->
