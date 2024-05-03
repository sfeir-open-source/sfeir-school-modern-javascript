<!-- .slide: class="two-column with-code" -->

# Arrow function

```javascript
var nums = [2, 4, 6, 8, 10];

var odds = nums.map(function (v) {
  return v + 1;
});
```

```javascript
var nums = [2, 4, 6, 8, 10];

var pairs = nums.map(function (v) {
  return { even: v, odd: v + 1 };
});
```

```javascript
var nums = [1, 2, 3, 4, 5, 6];

var nums = nums.map(function (v, i) {
  return v + i;
});
```

##--##

<!-- .slide: class="with-code" -->

<br><br><br>

```javascript
const nums = [2, 4, 6, 8, 10];

const odds = nums.map((v) => v + 1);
```

```javascript
const nums = [2, 4, 6, 8, 10];

const pairs = nums.map((v) => ({ even: v, odd: v + 1 }));
```

```javascript
const nums = [1, 2, 3, 4, 5, 6];

const add = nums.map((v, i) => v + i);
// ou
const add2 = nums.map((v, i) => {
  return v + i;
});
```

Notes:
dans le deuxième cas, les parenthèses représentent une expression JS et permettent à l'interpréteur de ne pas s'emmêler les pinceaux pour savoir qu'on retourne un objet

##==##

<!-- .slide: class="two-column with-code" -->

# Un problème de this ...

```javascript
var f = {
  nums: [1, 2, 3, 4, 5, 6],
  even: [],
  each() {
    this.nums.forEach(function (v) {
      if (v % 2 === 0) this.even.push(v); //ERROR
    });
  },
};
f.each();
```

##--##

<!-- .slide: class="with-code" -->

<br><br><br>

```javascript
// Correction
var f = {
  nums: [1, 2, 3, 4, 5, 6],
  even: [],
  each() {
    var self = this;
    this.nums.forEach(function (v) {
      if (v % 2 === 0) self.even.push(v);
    });
  },
};
f.each();
```

Notes:
on peut aussi binder

```javascript
var f = {
  nums: [1, 2, 3, 4, 5, 6],
  even: [],
  each() {
    var self = this;
    this.nums.forEach(
      function (v) {
        if (v % 2 === 0) this.even.push(v);
      }.bind(this)
    );
    console.log(this.even);
  },
};

f.each();
```

##==##

<!-- .slide: class="with-code" -->

# Résolution avec une Arrow function

```javascript
var f = {
  nums: [1, 2, 3, 4, 5, 6],
  even: [],
  each() {
    this.nums.forEach((v) => {
      if (v % 2 === 0) this.even.push(v);
    });
  },
};
f.each(); // [2, 4, 6]
f.even; // [2, 4, 6]
```
