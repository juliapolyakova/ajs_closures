import findBy from '../src/app';

const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('Поиск по имени', () => {
  const expected = [{
    name: 'урон',
    type: 'help',
    description: 'Страница описания элемента интерфейса',
  }];
  const received = findBy('name', 'урон');

  expect(results.filter(received)).toEqual(expected);
});

test('Поиск по типу', () => {
  const expected = [{
    name: 'маг',
    type: 'character',
    description: 'Персонаж, обладающий магическими способностями',
  }];
  const received = findBy('type', 'character');

  expect(results.filter(received)).toEqual(expected);
});
