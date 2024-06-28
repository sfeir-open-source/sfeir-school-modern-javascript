import moduleCFn from './module-C.js';

export function moduleBFn() {
  console.log('Module-B');
}

export const moduleBCFn = moduleCFn;
