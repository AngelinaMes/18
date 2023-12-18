import test from 'node:test';
import assert from 'assert/strict';

import * as funcs from '../index.js';

test('task1', () => {
  assert.strictEqual(funcs.getMonth(1), 'Месяц Январь');
  assert.strictEqual(funcs.getMonth(4), 'Месяц Апрель');
});
test('task2', () => {
  assert.ok(
    funcs.getTotalPrice([
      [200, 'Banana', 30],
      [190, 'Apple', 25],
      [350, 'Mango', 20],
    ]),
    815
  );
  assert.ok(
    funcs.getTotalPrice([
      [1200, 'Monitor', 30],
      [590, 'Keyboard', 25],
      [10350, 'CPU', 20],
      [9150, 'DRAM', 20],
    ]),
    21385
  );
});
test('task3', () => {
  assert.ok(
    funcs.countDuplicates(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']),
    { kiwi: 3, apple: 2, orange: 1 }
  );
  assert.ok(
    funcs.countDuplicates([
      'num11',
      'num12',
      'num11',
      'num11',
      'num12',
      'num11',
      'num12',
      12,
      13,
    ]),
    { num11: 4, num12: 3, 12: 1, 13: 1 }
  );
});
test('task4', () => {
  assert.ok(
    funcs.uniqueItems([
      'num11',
      'num12',
      'num11',
      'num11',
      'num12',
      'num11',
      'num12',
      12,
      13,
    ]),
    ['num11', 'num12', 12, 13]
  );
  assert.ok(
    funcs.uniqueItems(['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']),
    ['kiwi', 'apple', 'orange']
  );
});
test('task5', () => {
  assert.ok(funcs.getFavoritePizza([
    { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
    { name: 'mike', pizzas: ['salami', 'cheese'] },
    { name: 'stas', pizzas: ['pepperoni'] },
    { name: 'anna', pizzas: ['cheese'] }
]), 'cheese');
});
