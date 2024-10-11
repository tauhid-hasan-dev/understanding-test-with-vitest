import { convertToNumber } from "./convertToNumber";

const validateNumber = (number) => {
    if (isNaN(number)) {
        throw new Error('Invalid number');
    }
    return number;
};

const validateStringNotEmpty = (input) => {
    if (input === '') {
        throw new Error('Empty string is not allowed');
    }
    return input;
};

export function cleanNumbers(numbers) {
    let cleanedNumbers = [];
    for (const numberInput of numbers) {
        validateStringNotEmpty(numberInput);
        const number = convertToNumber(numberInput);
        validateNumber(number);
        cleanedNumbers.push(number);
    }
    return cleanedNumbers;
}


