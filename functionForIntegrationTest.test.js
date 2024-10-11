import {it, expect} from 'vitest';
import { cleanNumbers } from './functionForIntegrationTest';

it('should return an array of numbers if an array of numeric strings is provided', () => { 
    // Arrange
    const numbers = ['5', '10', '15'];

    // Act
    const result = cleanNumbers(numbers);
    
    // Assert
    expect(result).toBeInstanceOf(Array);
    result.forEach(num => expect(num).toBeTypeOf('number'));
 });