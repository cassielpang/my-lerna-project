'use strict';

const myReactComponent = require('..');
const assert = require('assert').strict;

assert.strictEqual(myReactComponent(), 'Hello from myReactComponent');
console.info('myReactComponent tests passed');
