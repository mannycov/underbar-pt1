const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the last 3 elements of an array', () => {
    expect(_.last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  it('returns the whole array if you ask for the same number of elements that it has', () => {
    expect(_.last([true, false, null, undefined], 4)).toEqual([true, false, null, undefined]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });
});