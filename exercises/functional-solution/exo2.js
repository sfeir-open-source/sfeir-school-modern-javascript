const map = fn => mappable => mappable.map(fn);
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const log = (...args) => console.log(...args);

const arr = [1, 2, 3, 4];

/* Start here */

const isEven = /**/