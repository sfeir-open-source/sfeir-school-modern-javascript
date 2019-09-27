const schoolSlidesRootDir = '00-school';
const schoolSlides = () => [
  `${schoolSlidesRootDir}/00-TITLE.md`,
  `${schoolSlidesRootDir}/speaker-anthony.md`,
  `${schoolSlidesRootDir}/speaker-jef.md`,
];

const introSlidesDir = '01-intro';
const introSlides = () => [
  `${introSlidesDir}/00-TITLE.md`,
  `${introSlidesDir}/01-Summary.md`,
  `${introSlidesDir}/02-History-01.md`,
  `${introSlidesDir}/02-History-02.md`,
  `${introSlidesDir}/03-TC39.md`,
];

const closuresVariablesHoistingSlidesDir = '02-closures-variables-hoisting';
const closuresVariablesHoistingSlides = () => [
  `${closuresVariablesHoistingSlidesDir}/00-TITLE.md`,
  `${closuresVariablesHoistingSlidesDir}/01-Variables-Template-String.md`,
  `${closuresVariablesHoistingSlidesDir}/02-Enhanced-Params-Arrays.md`,
  `${closuresVariablesHoistingSlidesDir}/03-Destructuring-Trailing-commas.md`,
  `${closuresVariablesHoistingSlidesDir}/04-Excercice.md`,
];

const propertyDescriptionObjetEnhancementsSlidesDir = '03-Property-description-objet-enhancements';
const propertyDescriptionObjetEnhancementsSlides = () => [
  `${propertyDescriptionObjetEnhancementsSlidesDir}/00-TITLE.md`,
  `${propertyDescriptionObjetEnhancementsSlidesDir}/01-Property-descriptor.md`,
  `${propertyDescriptionObjetEnhancementsSlidesDir}/02-Object.md`,
  `${propertyDescriptionObjetEnhancementsSlidesDir}/03-This.md`,
  `${propertyDescriptionObjetEnhancementsSlidesDir}/04-Arrow-function.md`,
];

const asynchronismSlidesDir = '04-Asynchronism';
const asynchronismSlides = () => [
  `${asynchronismSlidesDir}/00-TITLE.md`,
  `${asynchronismSlidesDir}/01-Promises-00.md`,
  `${asynchronismSlidesDir}/01-Promises-01-excercice.md`,
  `${asynchronismSlidesDir}/02-Async-await.md`,
  `${asynchronismSlidesDir}/03-Pause.md`,
];

const classesSlidesDir = '05-Classes';
const classesSlides = () => [
  `${classesSlidesDir}/00-TITLE.md`,
  `${classesSlidesDir}/01-Proto.md`,
  `${classesSlidesDir}/02-Syntaxes.md`,
  `${classesSlidesDir}/03-Excercice.md`,
];

const iteratorGeneratorSlidesDir = '06-Iterator_generator';
const iteratorGeneratorSlides = () => [
  `${iteratorGeneratorSlidesDir}/00-TITLE.md`,
  `${iteratorGeneratorSlidesDir}/01-Iterator.md`,
  `${iteratorGeneratorSlidesDir}/02-Set-map.md`,
  `${iteratorGeneratorSlidesDir}/03-Generator.md`,
  `${iteratorGeneratorSlidesDir}/04-Excercice.md`,
];

const symbolSlidesDir = '07-Symbol';
const symbolSlides = () => [`${symbolSlidesDir}/00-TITLE.md`, `${symbolSlidesDir}/01-Symbols.md`];

const proxySlidesDir = '08-Proxy';
const proxySlides = () => [
  `${proxySlidesDir}/00-TITLE.md`,
  `${proxySlidesDir}/01-Proxy.md`,
  `${proxySlidesDir}/02-Excercice.md`,
];

const modulesSlidesDir = '09-Modules';
const modulesSlides = () => [
  `${modulesSlidesDir}/00-TITLE.md`,
  `${modulesSlidesDir}/01-Modules.md`,
  `${modulesSlidesDir}/02-Excercice.md`,
  `${modulesSlidesDir}/03-Pause.md`,
];


const typescriptSlidesDir = '10-Typage-statique';
const typescriptSlides = () => [
  `${typescriptSlidesDir}/00-TITLE.md`,
  `${typescriptSlidesDir}/01-intro.md`,
  `${typescriptSlidesDir}/02-interfaces-function.md`,
  `${typescriptSlidesDir}/03-generics.md`,
  `${typescriptSlidesDir}/04-overloading.md`,
  `${typescriptSlidesDir}/05-advanced-type.md`,
];


const functionalJavascriptSlideDir = '11-Functional-JavaScript';
const functionalJavascriptSlides = () => [
  `${functionalJavascriptSlideDir}/00-TITLE.md`,
  `${functionalJavascriptSlideDir}/01-intro.md`,
  `${functionalJavascriptSlideDir}/02-function-as-values.md`,
  `${functionalJavascriptSlideDir}/03-pure-functions.md`,
  `${functionalJavascriptSlideDir}/04-HOF.md`,
  `${functionalJavascriptSlideDir}/05-Quiz.md`,
  `${functionalJavascriptSlideDir}/06-exercice.md`,
  `${functionalJavascriptSlideDir}/07-immutability.md`,
  `${functionalJavascriptSlideDir}/08-currying.md`,

];

const aBetterPatternSlideDir = '12-A-Better-Pattern';
const aBetterPatternSlides = () => [
  `${aBetterPatternSlideDir}/00-TITLE.md`,
  `${aBetterPatternSlideDir}/01-Fn-JS-CQRS.md`,
  `${aBetterPatternSlideDir}/02-Fn-JS-MVC.md`,
  `${aBetterPatternSlideDir}/03-Fn-JS-Redux.md`,
];

const reactiveJSSlideDir = '13-Reactive-JavaScript';
const reactiveJSSlides = () => [
  `${reactiveJSSlideDir}/00-TITLE.md`,
  `${reactiveJSSlideDir}/01-Rx-JS.md`,
  `${reactiveJSSlideDir}/02-Rx-JS-exemple.md`,
  `${reactiveJSSlideDir}/03-Rx-JS-autres-createurs-observables.md`,
  `${reactiveJSSlideDir}/04-Rx-JS-operators.md`,
  `${reactiveJSSlideDir}/05-Rx-JS-RX-marbles.md`,
  `${reactiveJSSlideDir}/06-Rx-JS-exercice.md`,
  `${reactiveJSSlideDir}/07-Rx-JS-more.md`,
  `${reactiveJSSlideDir}/08-Rx-JS-end.md`,
];

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...closuresVariablesHoistingSlides(),
    ...propertyDescriptionObjetEnhancementsSlides(),
    ...asynchronismSlides(),
    ...classesSlides(),
    ...iteratorGeneratorSlides(),
    ...symbolSlides(),
    ...proxySlides(),
    ...modulesSlides(),
    ...typescriptSlides(),
    ...functionalJavascriptSlides(),
    ...aBetterPatternSlides(),
    ...reactiveJSSlides(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
