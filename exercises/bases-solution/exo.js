function testDestructuring([, arrayIndex], { name: objectName } = { name: 'toto' }, ...restLength) {
  // Vous ne devez rien changer ici, juste utiliser les mêmes noms de variable
  return arrayIndex + objectName + restLength.length;
}

module.exports = { testDestructuring };
