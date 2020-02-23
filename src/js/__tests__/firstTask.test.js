import stringToNumb from '../firstTask.js';

test('Правильный ввод', () => {
  const received = stringToNumb('123');
  const expected = 123;

  expect(received).toBe(expected);
});

test('Неправильный ввод', () => {
  const received = stringToNumb('Пять');
  const expected = Error('Неправильный ввод. Допускаются только числа от 0 до 10');

  expect(received).toEqual(expected);
});
