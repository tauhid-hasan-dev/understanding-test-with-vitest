import {it, expect} from 'vitest';
import { add } from './math';

it("should return the correct sum if an array of numbers is passed", () => {
    // Arrange 
    const numbers = [1, 2, 3, 4, 5];
    const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);
    
    // Act/Action
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
})

it("should provide NaN if at least one invalid number is provided", () => {
    // Arrange 
    const numbers = [1, 2, "invalid", 4, 5];
    
    // Act/Action
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
})

it("should return the correct sum if an array of numeric string is provided", () => {
    // Arrange 
    const numbers = ["1", "2", "3", "4", "5"];
    const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);
    
    // Act/Action
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
})

it("should throw an error if no argument is passed", () => {
    const resultfn = () => add();

    // Assert
    expect(resultfn).toThrow();
})


it("should throw an error if multiple argument is passed", () => {
    const resultfn = () => add(1,2,3);

    // Assert
    expect(resultfn).toThrow();

    // expect(resultfn).toThrow(/is not iterable/i);

})

