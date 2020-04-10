<!-- .slide: class="two-column-layout" -->

# Rx JS : D'Autres créateurs d'observables

##--##

<!-- .slide: class="with-code" -->

```typescript
// From event
var clicks = Rx.Observable.fromEvent(document, 'click');
var unsubscribe = clicks.subscribe((x) => console.log(x));
unsubscribe();
// MouseEvent object logged to console every time a click
// occurs on the document.
```

```typescript
// Converts an array to an Observable
var array = [10, 20, 30];
var result = Rx.Observable.from(array);
result.subscribe((x) => console.log(x));
// Results in the following:
// 10 20 30
```

##--##

<!-- .slide: class="with-code" -->

```typescript
// Convert the Promise returned by Fetch to an Observable
var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
```

```typescript
result.subscribe({
  next: (x) => console.log('got value ' + x),
  error: (err) => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
// Or just next fn
result.subscribe((x) => {
  console.log('got value ' + x);
});
```
