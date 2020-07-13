<!-- .slide: class="with-code"-->

# Fn JS : Quiz

**Petit Quiz 1**

- La fonction Array.prototype.some est-elle pure ?

<br />
<br />

```javascript
var array = [1, 2, 3, 4, 5];

var even = function (element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
```

Notes:
Oui

##==##

<!-- .slide: class="with-code"-->

# Fn JS : Quiz

**Petit Quiz 2**

- La fonction Array.prototype.forEach est-elle pure ?

<br />
<br />

```javascript
const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function (item) {
  copy.push(item);
});
```

Notes:
Non

##==##

<!-- .slide: class="two-column-layout" -->

# Fn JS : Quiz

**Petit Quiz 3**

- La fonction Array.prototype.map est-elle pure ?

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />

```javascript
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
return num * 2;
});

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />

```javascript
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

var reformattedArray = kvArray.map((obj) => {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],
```

Notes:
Oui
