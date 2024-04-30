import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

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
  `${closuresVariablesHoistingSlidesDir}/04-Exercice.md`,
];

const propertyDescriptionObjectEnhancementsSlidesDir = '03-property-description-object-enhancements';
const propertyDescriptionObjectEnhancementsSlides = () => [
  `${propertyDescriptionObjectEnhancementsSlidesDir}/00-TITLE.md`,
  `${propertyDescriptionObjectEnhancementsSlidesDir}/01-Property-descriptor.md`,
  `${propertyDescriptionObjectEnhancementsSlidesDir}/02-Object.md`,
  `${propertyDescriptionObjectEnhancementsSlidesDir}/03-This.md`,
  `${propertyDescriptionObjectEnhancementsSlidesDir}/04-Arrow-function.md`,
];

const asynchronicitySlidesDir = '04-asynchronicity';
const asynchronicitySlides = () => [
  `${asynchronicitySlidesDir}/00-TITLE.md`,
  `${asynchronicitySlidesDir}/01-Promises-00.md`,
  `${asynchronicitySlidesDir}/01-Promises-01-exercice.md`,
  `${asynchronicitySlidesDir}/02-Async-await.md`,
  `${asynchronicitySlidesDir}/03-Pause.md`,
];

const classesSlidesDir = '05-classes';
const classesSlides = () => [
  `${classesSlidesDir}/00-TITLE.md`,
  `${classesSlidesDir}/01-Proto.md`,
  `${classesSlidesDir}/02-Syntaxes.md`,
  `${classesSlidesDir}/03-Exercice.md`,
];

const iteratorGeneratorSlidesDir = '06-iterator_generator';
const iteratorGeneratorSlides = () => [
  `${iteratorGeneratorSlidesDir}/00-TITLE.md`,
  `${iteratorGeneratorSlidesDir}/01-Iterator.md`,
  `${iteratorGeneratorSlidesDir}/02-Set-map.md`,
  `${iteratorGeneratorSlidesDir}/03-Generator.md`,
  `${iteratorGeneratorSlidesDir}/04-Exercice.md`,
  `${iteratorGeneratorSlidesDir}/05-AsyncIterator.md`,
];

const symbolSlidesDir = '07-symbol';
const symbolSlides = () => [`${symbolSlidesDir}/00-TITLE.md`, `${symbolSlidesDir}/01-Symbols.md`];

const proxySlidesDir = '08-proxy';
const proxySlides = () => [
  `${proxySlidesDir}/00-TITLE.md`,
  `${proxySlidesDir}/01-Proxy.md`,
  `${proxySlidesDir}/02-Exercice.md`,
];

const reflectSlidesDir = '08b-reflect';
const reflectSlides = () => [
  `${reflectSlidesDir}/00-TITLE.md`,
  `${reflectSlidesDir}/01-Purpose.md`,
  `${reflectSlidesDir}/02-All-Functions.md`,
  `${reflectSlidesDir}/03-Interesting-Methods-Examples.md`,
];

const modulesSlidesDir = '09-modules';
const modulesSlides = () => [
  `${modulesSlidesDir}/00-TITLE.md`,
  `${modulesSlidesDir}/01-Modules.md`,
  `${modulesSlidesDir}/02-Exercice.md`,
  `${modulesSlidesDir}/03-Pause.md`,
];

const typescriptSlidesDir = '10-static-typing';
const typescriptSlides = () => [
  `${typescriptSlidesDir}/00-TITLE.md`,
  `${typescriptSlidesDir}/01-intro.md`,
  `${typescriptSlidesDir}/02-interfaces-function.md`,
  `${typescriptSlidesDir}/03-generics.md`,
  `${typescriptSlidesDir}/04-overloading.md`,
  `${typescriptSlidesDir}/05-advanced-type.md`,
];

const functionalJavascriptSlideDir = '11-functional-JavaScript';
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

const aBetterPatternSlideDir = '12-a-better-pattern';
const aBetterPatternSlides = () => [
  `${aBetterPatternSlideDir}/00-TITLE.md`,
  `${aBetterPatternSlideDir}/01-Fn-JS-CQRS.md`,
  `${aBetterPatternSlideDir}/02-Fn-JS-MVC.md`,
  `${aBetterPatternSlideDir}/03-Fn-JS-Redux.md`,
];

const reactiveJSSlideDir = '13-reactive-javascript';
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
    ...propertyDescriptionObjectEnhancementsSlides(),
    ...asynchronicitySlides(),
    ...classesSlides(),
    ...iteratorGeneratorSlides(),
    ...symbolSlides(),
    ...proxySlides(),
    ...reflectSlides(),
    ...modulesSlides(),
    ...typescriptSlides(),
    ...functionalJavascriptSlides(),
    ...aBetterPatternSlides(),
    ...reactiveJSSlides(),
  ].map((slidePath) => ({ path: slidePath }));
}

SfeirThemeInitializer.init(formation);
