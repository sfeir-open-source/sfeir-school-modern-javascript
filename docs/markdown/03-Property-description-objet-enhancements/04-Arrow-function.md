<!-- .slide: class="two-column-layout" -->

# Arrow function

##--##

<!-- .slide: class="with-code" -->

<pre><code data-trim class="javascript">
var nums = [1, 2, 3, 4, 5, 6];


var odds  = nums.map(function (v) { return v + 1; });
</code></pre>

<pre><code data-trim class="javascript">
var nums = [1, 2, 3, 4, 5, 6];


var pairs = nums.map(function (v) { return { even: v,
odd: v + 1 }; });
</code></pre>

<pre><code data-trim class="javascript">
var nums = [1, 2, 3, 4, 5, 6];



var nums  = nums.map(function (v, i) { return v + i; });
</code></pre>

##--##

<!-- .slide: class="with-code" -->

<pre class="fragment" data-fragment-index="4"><code data-trim class="javascript">
const nums = [1, 2, 3, 4, 5, 6];


const odds  = nums.map(v => v + 1);
</code></pre>

<pre class="fragment" data-fragment-index="5"><code data-trim class="javascript">
const nums = [1, 2, 3, 4, 5, 6];



const pairs = nums.map(v => ({ even: v, odd: v + 1 }));
</code></pre>

<pre class="fragment" data-fragment-index="6"><code data-trim class="javascript">
const nums = [1, 2, 3, 4, 5, 6];

const add  = nums.map((v, _,i) => v + i)
// ou
const add2  = nums.map((v, i) => { return v + i;});
</code></pre>

Notes:
dans le deuxième cas, les parenthèse représentent une expression JS et permettent à l'interpréteur de ne pas s'emmêler les pinceaux pour savoir qu'on retourne un objet

##==##

<!-- .slide: class="two-column-layout" -->

# Un problème de this ...

##--##

<!-- .slide: class="with-code" -->

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">

   var f = {
      nums: [1, 2, 3, 4, 5, 6],
      even: [],
      each() {
        this.nums.forEach(function(v) {
          if (v % 2 === 0)
            this.even.push(v);//ERROR
        });
      }
   };
   f.each();
</code></pre>

##--##

<!-- .slide: class="with-code" -->

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
//Correction

var f = {
    nums: [1, 2, 3, 4, 5, 6],
    even: [],
    each() {
    var self = this;
      this.nums.forEach(function(v) {
          if (v % 2 === 0)
          self.even.push(v);
      });
    }
};
f.each();
</code></pre>

Notes:
on peut aussi binder

var f = {

      nums: [1, 2, 3, 4, 5, 6],

      even: [],

      each() {

        var self = this;

        this.nums.forEach(function(v) {

          if (v % 2 === 0)

            this.even.push(v);

        }.bind(this));

        console.log(this.even)

      }

};

f.each();

##==##

<!-- .slide: class="with-code" -->

# Résolution avec une Arrow function

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
var f = {
  nums: [1, 2, 3, 4, 5, 6],
  even: [],
  each() {
    this.nums.forEach(v => {
      if (v % 2 === 0) this.even.push(v);
    });
  }
};
f.each(); // [2, 4, 6]
    f.even; // [2, 4, 6]
</code></pre>
