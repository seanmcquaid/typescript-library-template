import { useFunPackage } from '../src/useFunPackage';

describe('useFunPackage', () => {
  it('returns a negative number when a positive is provided', () => {
    expect(useFunPackage({ num: 100 })).toEqual(-100);
  });
});
