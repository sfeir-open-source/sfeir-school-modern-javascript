<!-- .slide: class="with-code"-->

# Overloading

- Créer plusieurs signatures d'une fonction

```javascript
function getIn<T, K extend keyof T> (obj: T, arrayOfNestedKeys: [K]): T[K];

function getIn<T,K1 extend keyof T,K2 extend keyof T[K1]>(
    obj: T,
    arrayOfNestedKeys: [K1, K2]
): T[K1][k2];
```

```javascript
function getIn<T,K1 extend keyof T,K2 extend keyof T[K1],K3 extend keyof T[K2]>(
    obj: T,
    arrayOfNestedKeys: [K1, K2, K3]
): T[K1][k2][K3];

function getIn(obj: any, arrayOfNestedKeys: any[]): any {
    // ...
};
```

Notes:
d'une manière générale, on est obligé de préciser l'ensemble possibilités de signatures de notre signature. Donc au bout d'un moment, on doit finir en any

Montrer un fichier DTS
