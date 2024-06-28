function testDestructuring([, arrayValue], { name: objectName } = { name: 'toto' }, ...rest) {
  // Vous ne devez rien changer ici, juste utiliser les mêmes noms de variable
  return arrayValue + objectName + rest.length;
}

module.exports = { testDestructuring };
