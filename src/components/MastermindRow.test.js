import {
  goodPlaced,
  countColorInSolution,
  missPlaced,
} from './utils/calculateSolution';

test('Should return an object of good placed colors (name and number of time).', () => {
  expect(
    goodPlaced(
      ['blue', 'red', 'red', 'blue', 'red'],
      ['blue', 'red', 'blue', 'red', 'red']
    )
  ).toEqual({ blue: 1, red: 2 });
});

test('Should return an empty object.', () => {
  expect(
    goodPlaced(
      ['blue', 'red', 'red', 'blue', 'red'],
      ['yellow', 'blue', 'blue', 'yellow', 'yellow']
    )
  ).toEqual({});
});

test('Should return the sum of colors in the solution.', () => {
  expect(
    countColorInSolution('red', ['green', 'red', 'blue', 'red', 'red'])
  ).toEqual(3);
});

test('Should return the object of miss placed colors and sum.', () => {
  expect(
    missPlaced(
      ['blue', 'red', 'red', 'blue', 'red'],
      ['blue', 'red', 'blue', 'red', 'red'],
      [1, 1, 0, 0, 1]
    )
  ).toEqual({ red: 1, blue: 1 });
});

test('Should return an empty object.', () => {
  expect(
    missPlaced(
      ['blue', 'red', 'red', 'blue', 'red'],
      ['blue', 'red', 'red', 'blue', 'red'],
      [1, 1, 1, 1, 1]
    )
  ).toEqual({});
});
