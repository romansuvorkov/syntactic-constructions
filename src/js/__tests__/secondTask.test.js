import findBy from '../secondTask.js';

test('Тест', () => {
  const received = findBy('name', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(received);

  const expected = [{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }];

  expect(results).toEqual(expected);
});
