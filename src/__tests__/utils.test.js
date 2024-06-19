const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for a palindrome word with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws an error for a string with non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar1')).toThrow('Input must contain only alphabetic characters');
  });

  test('throws an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});
