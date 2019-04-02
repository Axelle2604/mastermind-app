import {
  incrementIndexRowToGuess,
  incrementSelectedColors,
} from './InGameScreen.js';

test('Should increment a value by one.', () => {
  expect(
    incrementIndexRowToGuess({
      indexRowToGuess: 1,
    })
  ).toEqual({
    indexRowToGuess: 2,
  });
});

test('Should replace a null value by one.', () => {
  expect(
    incrementIndexRowToGuess({
      indexRowToGuess: null,
    })
  ).toEqual({
    indexRowToGuess: 1,
  });
});

test('Should increment color to the array.', () => {
  expect(
    incrementSelectedColors('red')({
      selectedColors: ['green'],
    })
  ).toEqual({
    selectedColors: ['green', 'red'],
  });
});
