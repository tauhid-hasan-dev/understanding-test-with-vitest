Practicing test with vitest

# Unit Testing

Unit testing is a software testing method where individual units or components of a software are tested in isolation from the rest of the application. The goal is to validate that each unit of the software performs as expected. Unit tests are typically automated and written by developers to ensure that code changes do not introduce new bugs.

- **Isolation**: Tests focus on a single "unit" of code, such as a function or method.
- **Automation**: Tests are often automated to run frequently and provide quick feedback.
- **Regression Prevention**: Helps catch bugs early and prevent regressions in the codebase.

Example of a simple unit test using Vitest:

```javascript
import { describe, it, expect } from 'vitest';

describe('sum function', () => {
    it('should return the sum of two numbers', () => {
        const sum = (a, b) => a + b;
        expect(sum(1, 2)).toBe(3);
    });
});
```

# Integration Testing

Integration testing is a software testing method where individual units are combined and tested as a group. The goal is to identify issues in the interaction between integrated units. It ensures that different modules or services work together as expected.

- **Combination**: Tests the interaction between integrated units.
- **Detection**: Identifies issues in the interfaces and interactions.
- **Validation**: Ensures combined units function correctly together.

Example of a simple integration test using Vitest:

```javascript
import { describe, it, expect } from 'vitest';

describe('integration test', () => {
    it('should return the correct result when functions are combined', () => {
        const multiply = (a, b) => a * b;
        const addAndMultiply = (a, b, c) => multiply(a + b, c);
        expect(addAndMultiply(1, 2, 3)).toBe(9);
    });
});
```



