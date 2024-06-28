<!-- .slide:-->

# Fn JS : CQRS

CQRS : Command query responsibility segregation

- Conceptualisé par Bertrand Meyer : Inventeur du langage Eiffel

![h-650 center](./assets/images/Fn-JS-CQRS.png)

Notes:
Bien séparer l'écriture de la lecture ce qui nous amène une gestion séquentielle de notre état.

##==##

<!-- .slide:-->

# Fn JS : CQRS

CQRS : Command query responsibility segregation

- _"Il indique que chaque méthode doit être soit une commande qui effectue une action, soit une requête qui renvoie des données à l'appelant, mais pas les deux. En d’autres termes, poser une question ne devrait pas changer la réponse. Plus formellement, les méthodes ne devraient renvoyer une valeur que si elles [...] ne possèdent aucun effet secondaire" - Wikipedia_

- _"CQS est considéré par ses adeptes comme ayant un effet simplificateur sur un programme, rendant ses états (via des requêtes) et ses changements d'état (via des commandes) plus compréhensibles" - Wikipedia_

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
