<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
    // On ne peut pas dans un contexte non global
    var valueA = 1234;
    var valueA = 453; //NO ERROR !!!
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
    const valueB = 1234;
    valueB = 12345; //ERROR
    let valueC = 1234;
    valueC = 12345;
    let valueC = 453; //ERROR
</code></pre>

Notes:
**const** n'est pas une vrai const en effet, si on const un objet, on pourra toucher à l'objet => const c'est une constante de référence

##==##

<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
if (true) {
  var j = 2;
}
console.log(j); // 2
</code></pre>

<!-- .element: class="fragment" -->

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
if (true) {
  let j = 2;
  console.log(j); // 2
}
console.log(j); // ERROR
</code></pre>

Notes:
IIFE = Immediately Invoked Function Expression

en ES6, les accolades nous permettent de créer des scopes sans IIFE.

Le mot clé function revient à une déclaration globale de la fonction

##==##

<!-- .slide: class="with-code" -->

# Const et let : Mais où sont les var ?

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
(function() {
  var foo = function() {
    return 1;
  };
  foo() === 1;
  (function() {
    var foo = function() {
      return 2;
    };
    foo() === 2;
  })();
  foo() === 1;
})();
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
{
  function foo() {
    return 1;
  }
  foo() === 1;
  {
    function foo() {
      return 2;
    }
    foo() === 2;
  }
  foo() === 1;
}
</code></pre>

Notes:
IIFE = Immediately Invoked Function Expression

en ES6, les accolades nous permettent de créer des scopes sans IIFE.

Le mot clé function revient à une déclaration globale de la fonction

##==##

<!-- .slide: class="with-code" -->

# Template String

On utilise les back **quotes ``** et on peut créer des expressions avec **\${}**

<pre class="fragment" data-fragment-index="1"><code data-trim class="javascript">
var welcome = 'Welcome';
var sujet = 'ES6';

var myTemplateHTML = '<div class="sfeirschool">\n<p>'+welcome+'</p>\n<p>'+sujet+'</p>\n</div>';

/*
"<div class="sfeirschool">
<p>Welcome</p>
<p>ES6</p>
</div>"
*/
</code></pre>

<pre class="fragment" data-fragment-index="2"><code data-trim class="javascript">
const welcome = 'Welcome';
const sujet = 'ES6';

const myTemplateHTML = `
<div class="sfeirschool">
<p>${welcome}</p>
<p>${sujet}</p>
</div>`;

/*
"<div class="sfeirschool">
<p>Welcome</p>
<p>ES6</p>
</div>"
*/
</code></pre>

Notes:
\${} contient des expressions javascript

et les templates string peuvent aussi servir pour autre chose cf lit-html
