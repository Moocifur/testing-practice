// reverseString.test.js

import { reverseString } from './reverseString.js';

describe('reverseString function', () => {
    test('should reverse a simple string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('Should handle empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('Should handle a single character', () => {
        expect(reverseString('a')).toBe('a');
    });
});