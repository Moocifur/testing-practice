// caesarCipher.test.js

import { caesarCipher } from './caesarCipher.js';

describe('caesarCipher function', () => {
    test('should shift lowercase letters', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });
    test('Should wrap from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });
    test('should preserve case', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
    test('Should preserve punctuation', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});