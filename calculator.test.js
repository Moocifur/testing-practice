// calculator.test.js

import { calculator } from './calculator.js';

describe('calculator object', () => {
    test('should add two positive numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('should subtract two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should multiply two numbers', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('should divide two numbers', () => {
        expect(calculator.divide(8, 2)).toBe(4);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });
});

