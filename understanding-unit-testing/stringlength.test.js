// Error Checking: Use a callback function when you expect an error to be thrown, allowing the test framework to handle the function call and catch the error.
// Value Checking: Call the function directly when you expect a valid return value, as there's no error to catch.


import {it, expect} from 'vitest';
import { stringlength } from './stringlength';


it('should return the length of non empty string', () => {
    expect(stringlength('hello world')).toBe(11);
    expect(stringlength('world')).toBe(5);
    expect(stringlength('world')).toBe(5);
})

it('should return 0 for empty string', () => {
    expect(stringlength('')).toBe(0);
});

it('throws error for non-string input', () => {
    expect(()=> stringlength(null)).toThrow();
    expect(()=> stringlength(undefined)).toThrow();
    expect(stringlength(5)).toBeUndefined();
})
