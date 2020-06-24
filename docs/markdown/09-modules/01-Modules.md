<!-- .slide: class="full-center" -->

# Avant les modules, ... la concaténation

![h-600](./assets/images/Modules_00.png)

Notes:
https://addyosmani.com/writing-modular-js/

https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/

https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4

##==##

<!-- .slide: class="two-column-layout" -->

# Modules

##--##

AMD <!-- .element: class="text-center" -->
<br/>
(Asynchronous Module Definition)

![center](./assets/images/Modules_01_Require.js.png)

CommonJS <!-- .element: class="text-center" -->

![h-100 center](./assets/images/Modules_01_NodeJs.png)

##--##

UMD <!-- .element: class="text-center" -->
(Universal Module Definition)
<br/>
(SystemJS)

Notes:
https://addyosmani.com/writing-modular-js/

AMD : define...

CommonJS : require('') / module.exports

UMD : tout est géré

##==##

<!-- .slide: class="flex-row"-->

# Modules loader + bundler

<br/><br/>

![h-300](./assets/images/Modules_02_Webpack.png)
![h-300](./assets/images/Modules_02_Rollup.png)
![h-300](./assets/images/Modules_02_Browserify.png)

![h-300](./assets/images/Modules_01_Require.js.png)
![h-300](./assets/images/Modules_02_Parcel.png)
![h-300](./assets/images/Modules_02_SystemJS.png)

Notes:
Browserify => Module bundler for CommonJS in the browser

RequireJS => Module loader for AMD in the browser

SystemJS => Module loader for ES6 Harmony in the browser

WebPack => Module bundler for UMD

Parcel => Bundler sans configuration

Rollup => Même s'il n'est plus utilisé c'est le premier à avoir amené le Tree Shaking

Loader => At runtime

Bundler => at Build

Rollup : Bundles + Treeshaking

new =>
https://parceljs.org/

##==##

<!-- .slide: class="two-column-layout" -->

# Modules

##--##

<!-- .slide: class="with-code" -->

**Export** pour exposer ce que l'on souhaite

<br/><br/>

```javascript
// ------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}
```

##--##

<!-- .slide: class="with-code" -->

<p class="fragment text-center" data-fragment-index="1"><span class="bold">Import</span> pour récupérer ce que l'on souhaite</p>

<br/>
<br/>

```javascript
// ------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```
<!-- .element: class="fragment" -->

##==##

<!-- .slide: class="two-column-layout" -->

# Modules : export default

##--##

<!-- .slide: class="with-code" -->

```javascript
// ------ lib.js ------
export function square(x) {
  return x * x;
}
```

<br/>

```javascript
// ------ lib.js ------
export default function square(x) {
  return x * x;
}
```

##--##

<!-- .slide: class="with-code" -->

```javascript
// ------ main.js ------
import { square } from 'lib';
// ou
import * as myLib from 'lib';
myLib.square; // function square ...
```
<!-- .element: class="fragment" -->

<br/>

```javascript
// ------ main.js ------
import square from 'lib';
```
<!-- .element: class="fragment" -->
