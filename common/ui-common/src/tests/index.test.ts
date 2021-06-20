import { say } from '../index'

it('Correctly says stuff', () => {
  expect(say('Goodbye')).toBe('Hello, and Goodbye')
})