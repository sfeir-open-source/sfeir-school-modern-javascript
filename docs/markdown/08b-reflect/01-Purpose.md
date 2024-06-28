<!-- .slide: class="with-code" -->

# Reflect - Objectifs

L'API Reflect permet de faire de l'introspection sur les objets. Elle propose notamment des fonctions reprenant le
comportement des opérateurs `new` ou `in`.

```javascript
const symbol = Symbol('foo');
class C {
    constructor(foo) {
      this.foo = foo;
      this[symbol] = foo;
    }    
}
let object = Reflect.construct(C, ['bar']);
Reflect.has(object, 'foo'); // true
Reflect.has(object, symbol); // true
Reflect.get(object, 'foo'); // bar
```
