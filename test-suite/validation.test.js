import {it, expect, describe} from 'vitest';
import { validateArrayNotEmpty, validateEmail } from './validation.js';


describe("validateEmail()", () => {
    it('should validate email', () => {
        const email = 'tauhid@gmail.com';
        const resultFn = () => validateEmail(email);
    
        expect(resultFn).not.toThrow();
    });
    
    
    it('should throw an error if an invalid email is passed', () => {
        const email = 'tauhid'; // invalid email
        const resultFn = () => validateEmail(email);
    
        expect(resultFn).toThrow();
    });
    
    it('should throw an error if an empty string passed', () => {
        const email = ''; // invalid email
        const resultFn = () => validateEmail(email);
    
        expect(resultFn).toThrow();
    });
    
    it('should throws an error for a null email address', () => {
        expect(()=> validateEmail(null)).toThrow("Invalid email address");
    });
    
    
    it('should throws an error for a undefined email address', () => {
        expect(()=> validateEmail(undefined)).toThrow("Invalid email address");
    });
});

describe("validateArrayNotEmpty()", () => {
    
    it('should validate a non empty array', () => {
        const arr = [2, 5]; // invalid email
        const resultFn = () => validateArrayNotEmpty(arr);
    
        expect(resultFn).not.toThrow();
    });
    
    it('should throws an error for an empty array', () => {
        expect(()=> validateArrayNotEmpty([]).toThrow("Array can not be empty"));
    });
    
    it('should throws an error for a not array input', () => {
        expect(()=> validateArrayNotEmpty('not an array').toThrow("Array can not be empty"));
    });
    
    it('should throws an error for a null input', () => {
        expect(()=> validateArrayNotEmpty(null).toThrow("Array can not be null"));
    });
    
    it('should throws an error for a undefined input', () => {
        expect(()=> validateArrayNotEmpty(undefined).toThrow("Array can not be undefined"));
    });
});










