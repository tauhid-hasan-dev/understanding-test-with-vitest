import {it, expect} from 'vitest';
import { add } from './math';

it("should return the correct sum if an array of numbers is passed", () => {
    const result = add([1, 2, 3, 4, 5]);

    expect(result).toBe(15);
})