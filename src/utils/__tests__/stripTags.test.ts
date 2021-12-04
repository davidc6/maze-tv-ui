import { stripTags } from '../stripTags'

test('strip tags from a string', () => {
  expect(stripTags('<p>hello</p>')).toBe('hello');
});
