// caesarCipher.test.js

import { caesarCipher } from './caesarCipher.js';

describe('caesarCipher function', () => {
    test('should shift lowercase letters', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });
});