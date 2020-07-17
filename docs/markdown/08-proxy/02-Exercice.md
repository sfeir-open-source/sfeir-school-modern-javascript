<!-- .slide: class="exercice"-->

# Proxies - Un cas d'utilisation

## Exercice

- **Dans une Array de pseudonymes, on veut que la liste ne contienne que des pseudos uniques et en lowercase**
- **Par souci de sécurité, l'accès à la proxy liste ne doit renvoyer aucun caractère spécial (§!^\$%; etc...)**
- Attention : L'accès à la liste d'origine renvoie malgré tout ces caractères si présents
- **À vous de jouer !**
- **Conseil :**<br/>console.log('Set prop', prop, value);<br/>console.log('Get prop', prop);

Notes:
revenir sur le piège lié au fait qu'on set dans un array aussi la length au moment du set.
