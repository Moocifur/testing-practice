// capitalize.test.js
import { capitalize } from './capitalize.js';

describe('capitalize function', () => {
    test('should capitalize the first letter of alowercase string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('should handle empty strings', () => {
        expect(capitalize('')).toBe('');
    });

    test('Should handle already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })

    test('should handle single character', () => {
        expect(capitalize('a')).toBe('A');
    })
});