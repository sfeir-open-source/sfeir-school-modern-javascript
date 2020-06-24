<!-- .slide:-->

# Fn JS : CQRS

CQRS : Command query responsibility segregation

- Conceptualisé par Bertrand Meyer : Inventeur du langage Eiffel

![h-700 center](./assets/images/Fn-JS-CQRS.png)

Notes:
Bien séparer l'écriture de la lecture ce qui nous amène une gestion séquentielle de notre état.

##==##

<!-- .slide:-->

# Fn JS : CQRS

CQRS : Command query responsibility segregation

- _"It states that every method should either be a command that performs an action, or a query that returns data to the caller, but not both. In other words, Asking a question should not change the answer. More formally, methods should return a value only if they [...] possess no side effects." - Wikipedia_

- _"CQS is considered by its adherents to have a simplifying effect on a program, making its states (via queries) and state changes (via commands) more comprehensible" - Wikipedia_

Notes:
passage Wikipedia :)

Pour faire simple : poser une question ne doit pas modifier la donnée -> comme les fonctions pures ;)

##==##

<!-- .slide: class="full-center"-->

# Fn JS : CQRS in Front

![h-700](./assets/images/Fn-JS-CQRS-in-Front.png)

Notes:
ELM sont les premiers

NGrx
est une implémentation de Flux dédiée à Angular

Flux est une archi théorique

Redux est une implémentation de Flux agnostique des frameworks

Ensuite y en a eu plein : VueX, ...
