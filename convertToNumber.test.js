import {it, expect} from 'vitest';
import { convertToNumber } from './convertToNumber';


it('should return a number if numeric string is provided', () => {  
    const stringNumber = '5';
    const result = convertToNumber(stringNumber);

    expect(result).toBeTypeOf('number');
 });