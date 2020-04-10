<!-- .slide: class="two-column-layout" -->

# Rx JS : Exemple

##--##

<!-- .slide: class="with-code" -->

```typescript
var myObservable = new Observable(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 0);
});
console.log('just before subscribe');
myObservable.subscribe({
  next: (x) => console.log('got value ' + x),
  error: (err) => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
console.log('just after subscribe');
```

##--##

<!-- .slide: class="with-code" -->

```typescript
// Just before subscribe

// got value 1

// got value 2

// got value 3

// Just after subscribe

// got value 4

// done
```
