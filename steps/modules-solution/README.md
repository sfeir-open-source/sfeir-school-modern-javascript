# modules instructions

## How to run?

```Bash
cd ./steps
npm run modules
```

## TODO

Créer un **module-C.js** qui exporte par **défaut** une fonction appelé **moduleCFn** avec à l’intérieur un **console.log** de votre choix.

Créer un **module-B.js** qui exporte une fonction appelé **moduleBFn** avec à l’intérieur un console.log de votre choix et qui exporte la fonction **moduleCFn** de votre module précédent.

Créer un module-A.js qui **importe** les deux fonctions précédentes (depuis les deux modules), et utilisez les. Ensuite, utiliser la commande npm run modules et observer le bundle résultant. Vous pouvez vérifier votre travail en glissant le index.html dans votre navigateur.

# Tips

```javascript
export function square(x) {
  return x * x;
}

import { square } from 'lib';
// ou
import * as myLib from 'lib';
myLib.square; // function square ...

//------------
export default function square(x) {
  return x * x;
}

import square from 'lib';
```
