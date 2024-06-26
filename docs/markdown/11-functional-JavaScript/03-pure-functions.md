<!-- .slide: class="two-column with-code" -->

# Fn JS : Pure Functions

**Qu'est-ce qu'une fonction pure ?**

- Elle retourne un même résultat pour les mêmes arguments. C'est-à-dire : **Une fonction pure est _Déterministe_**
- **Une fonction pure ne produit pas d'effets de bords**

<br />
<br />
<br />

```javascript
const coteA = 10;
let result;
const impureRectangle = (coteB) => {
  result = coteA * coteB;
};
impureRectangle(5); //50
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />
<br />

```javascript
const pureRectangle = (coteA, coteB) => {
  return coteA * coteB;
};
pureRectangle(10, 5); //50
```

##==##

<!-- .slide: class="two-column with-code" -->

# Fn JS : Pure Functions

- **Les avantages des fonctions pures ?**
  - Elles sont beaucoup plus simples à tester ! Il n'y a pas besoin de construire un "contexte" à la fonction (mocks). Simplement à tester son invocation.

<br />
<br />

```javascript
let compteur = 1;

function incCompteur(valeur) {
  compteur = valeur + 1;
}

incCompteur(compteur);
console.log(compteur); // 2
```

##--##

<!-- .slide: class="with-code" -->

<br />
<br />
<br />
<br />
<br />
<br />

```javascript
const compteur = 1;

const incCompteur = (valeur) => valeur + 1;

const nouveauCompteur = incCompteur(compteur);

console.log(compteur); // 1
console.log(nouveauCompteur); // 2
```

Notes:
bien insister sur le côté side effects et donc qu'une fonction pure n'a pas de side effects. S'il n'y a pas de side effects, les tests seront plus simples
