<!-- .slide: class="with-code" -->

# \_\_proto\_\_

- **\_\_proto\_\_** Dunder Proto Permet de manipuler le **Prototype** interne d'un objet via : Getter + Setter
- **Prototype** est une propriété des constructeurs, **\_\_proto\_\_** est accessible depuis n'importe quel type de variable

```javascript
function Aristocat(name) {
  this.name = name;
}
var felix = new Aristocat('felix');
var berlioz = new Aristocat('berlioz');
felix.meow = function () {
  console.log('Meow froam felix');
};
console.log(felix.__proto__ === Aristocat.prototype);
// true
console.log(felix.__proto__ === berlioz.__proto__);
// true
```
