import { episode } from '../format'

test('produce episode format', () => {
  expect(episode(1, 'hello')).toBe('1. hello');
});
