import test = require('blue-tape');

import noop = require('noop2');

test('noop2', (t) => {
  class A {
    fn: (a: string, b: number) => string[];
    constructor() {
      this.fn = noop;
    }
  }
  t.pass('noop can assigned to (a: string, b: number) => string[]');
  t.end();
});
