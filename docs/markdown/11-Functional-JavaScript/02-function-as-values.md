<!-- .slide: class="two-column-layout" -->

# Fn JS : Function as values

**En JavaScript, une fonction est une variable**

- Elle peut être définit en tant que variable
- Elle peut être utilisée en tant qu'argument d'une autre fonction
- Elle peut être retournée d'une autre fonction

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;  
 &nbsp;  
 &nbsp;  
 &nbsp;

```javascript
const doubleSum = (a, b) => (a + b) \* 2;

const doubleSubtraction = (a, b) => (a - b) \* 2;
```

##--##

<!-- .slide: class="with-code" -->

&nbsp;  
 &nbsp;  
 &nbsp;  
 &nbsp;  
 &nbsp;  
 &nbsp;

```javascript
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) \* 2;

doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4
```

Notes:
une fonction est une valeur :)
