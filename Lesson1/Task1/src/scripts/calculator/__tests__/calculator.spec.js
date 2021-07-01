import { sum } from '../calculator';
import { mult } from '../calculator';

it('should find sum of two numbers', () => {
    expect(sum(2, 5)).toEqual(7);
  });

  it('should find multiplication of 2 numbers', () => {
    expect(mult(3, 2)).toEqual(6);
  });