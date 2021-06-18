import healthReturn from '../app';

test('Check health', () => {
  const result1 = healthReturn({ name: 'char1', health: 5 });
  expect(result1).toBe('critical');

  const result2 = healthReturn({ name: 'char1', health: 15 });
  expect(result2).toBe('wounded');

  const result3 = healthReturn({ name: 'char1', health: 20 });
  expect(result3).toBe('wounded');

  const result4 = healthReturn({ name: 'char1', health: 50 });
  expect(result4).toBe('wounded');

  const result5 = healthReturn({ name: 'char1', health: 70 });
  expect(result5).toBe('healthy');
});
