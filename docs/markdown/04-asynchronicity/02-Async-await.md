<!-- .slide: -->

# Async/Await

<br/>
<br/>
<br/>
<br/>

- Utiliser des promesses dans un style d'écriture synchrone

##==##

<!-- .slide: class="two-column" -->

# Async/Await

- **Avant la fonction async, le problème de l'asynchronicité**

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function getData() {
  var data;
  request('http://whatever/data', function (error, response, body) {
    data = body;
  });
  return data;
}
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function main() {
  var data = getData();
  console.log(data); // undefined
}
```

##==##

<!-- .slide: class="two-column" -->

# Async/Await

- **Une écriture simplifiée pour une lisibilité accrue**

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
function logData() {
  return getData().then((result) => {
    console.log(result);
  });
}
// ES2015 | On utilise une promesse
```

##--##

<!-- .slide: class="with-code" -->

<br/>
<br/>

```javascript
async function logData() {
  const result = await getData();
  console.log(result);
}

// ES2017 | On utilise async/await
```

##==##

<!-- .slide: class="full-center"-->

# Event Loop

![h-800](./assets/images/event_loop.png)

Notes:
Simuler le browser coté "Node" => libuv

https://github.com/libuv/libuv
Understanding the nodeJS event loop
http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

https://www.youtube.com/watch?v=cCOL7MC4Pl0

Comparing with multi-thread

http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/

V8 par exemple ne sait pas gérer du code asynchrone par défaut, il faut lui rajouter des mécanismes suppl
