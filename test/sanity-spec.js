import { assert, expect } from 'chai';

describe('Sanity Check', () => {
  describe('#function()', () => {
    it('should assert true', () => {
      assert(1, '1');
      expect({ foo: 'bar'}).to.have.key('foo');
    });
  });
});
