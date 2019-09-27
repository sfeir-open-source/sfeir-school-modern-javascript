<!-- .slide:-->

# Rx JS : Observable, Observer, Subscribe

```typescript
observable.subscribe(observer);
```

**Qu'est-ce qu'un Observable ?**

<div class="fragment" data-fragment-index="1">
1. Un <b>Observable</b> représente un <b>flux (stream)</b> sur lequel on va pouvoir opérer.
</div>
<div class="fragment" data-fragment-index="2">
2. On peut créer un observable via Rx.Observable.create qui retourne un objet qui contient la méthode <b>subscribe</b>
</div>
<div class="fragment" data-fragment-index="3">
3. <b>Subscribe</b> prend un argument**, qui est un objet que l'on nomme un <b>Observer</b>
</div>
<div class="fragment" data-fragment-index="4">
4. l'Observer est soit :
</div>
  <div class="fragment" data-fragment-index="5">
&nbsp;&nbsp;&nbsp;- un objet qui implémente les méthodes next, error et complete
   </div>
   <div class="fragment" data-fragment-index="6">
&nbsp;&nbsp;&nbsp;- une fonction qui implémente uniquement la fonction next
  </div>
