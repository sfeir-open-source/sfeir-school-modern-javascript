<!-- .slide: class="with-code" -->

# Interesting examples - OwnKeys

```JS
const obj = {
    [Symbol("test")]: "test",
    foo: "bar",
};

Reflect.ownKeys(obj); // ["foo", Symbol(test)]
Object.keys(obj) // ["foo"]
```
