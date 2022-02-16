import permutations from '../permutations';

describe('permutations', () => {
  it('should create every permutation of the supplied items', () => {
    expect(permutations([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
    expect(permutations(['a', 'b'])).toEqual([
      ['a', 'b'],
      ['b', 'a'],
    ]);
  });
});
