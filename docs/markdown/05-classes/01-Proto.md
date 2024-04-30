<!-- .slide: class="two-column" -->

# \_\_proto\_\_

<!-- .slide -->

- **\_\_proto\_\_** Dunder Proto Permet de manipuler le **Prototype** interne d'un objet via : Getter + Setter
- **Prototype** est une propriété des constructeurs, **\_\_proto\_\_** est accessible depuis n'importe quel type de variable
- On préfèrera utiliser Object.getPrototypeOf et Object.setPrototypeOf que **\_\_proto\_\_** qui n'est pas standard (même si implémenté presque partout).

##--##

<!-- .slide: class="with-code" -->

```javascript
function Aristocat(name) {
  this.name = name;
}
var felix = new Aristocat('felix');
var berlioz = new Aristocat('berlioz');
felix.meow = function () {
  console.log('Meow from felix');
};
console.log(felix.__proto__ === Aristocat.prototype);
// true
console.log(Object.getPrototypeOf(felix) === Aristocat.prototype);
// true
console.log(felix.__proto__ === berlioz.__proto__);
// true
```
