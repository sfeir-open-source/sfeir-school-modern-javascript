<!-- .slide: class="with-code" -->

# Rx JS : Operators

<div class="fragment" data-fragment-index="1">
- Un opérateur est une fonction pure qui prend un observable en entrée et génère un observable en sortie
</div>
<div class="fragment" data-fragment-index="2">
- Souscrire à l'observable en sortie souscrit également à l'observable en entrée
</div>

<pre class="fragment" data-fragment-index="3">
  <code data-trim class="javascript">
    function multiplyByTen(input) {
      var output = Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
          next: (v) => observer.next(10 \* v),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      });
      return output;
    }

    var input = Rx.Observable.from([1, 2, 3, 4]);
    var output = multiplyByTen(input);
    output.subscribe(x => console.log(x));
  </code>
</pre>
##==##

<!-- .slide: class="with-code" -->

# Rx JS : Operators

```typescript
// 1. Get the maximal value of a series of number
Rx.Observable.of(5, 4, 7, 2, 8)
  .max()
  .subscribe((x) => console.log(x));
// Result In: 8

// 2. Map every click to the clientX position of that click
var clicks = Rx.Observable.fromEvent(document, 'click');
var positions = clicks.map((ev) => ev.clientX);
positions.subscribe((x) => console.log(x));

// 3. Chaining operators
const input = Rx.Observable.fromEvent(node, 'input')
  .pipe(
    map((event) => event.target.value),
    filter((value) => value.length >= 2)
    // use the `value`
  )
  .subscribe((value) => {});
```

##==##

<!-- .slide:  -->

# Rx JS : /!\ Attention /!\

<div class="fragment" data-fragment-index="1">
- Sans souscription, un observable n'est jamais invoqué
</div>

<div class="fragment" data-fragment-index="2">
- De plus, l'invocation de ".subscribe()" est synchrone
</div>

<div class="fragment" data-fragment-index="3">
- Un observable n'est donc pas un eventEmitter, mais plutôt une fonction qui peut renvoyer plusieurs valeurs dans le temps.
</div>
