Testing 

Most of the cases we need to do Unit tests, then Integration test, UI test and sometimes manual tests.

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

# Test-Driven Development (TDD)

Test-Driven Development (TDD) is a software development approach in which tests are written before writing the actual code. The process involves writing a test for a specific functionality, writing the minimal amount of code to pass the test, and then refactoring the code while ensuring that all tests still pass. TDD helps in building robust and error-free code.

- **Red-Green-Refactor**: The TDD cycle consists of writing a failing test (Red), writing code to make the test pass (Green), and then refactoring the code (Refactor).
- **Specification**: Tests serve as a specification for the code functionality.
- **Feedback**: Provides immediate feedback on code correctness.

Example of TDD using Vitest:

```javascript
import { describe, it, expect } from 'vitest';

// Step 1: Write a failing test
describe('subtract function', () => {
    it('should return the difference of two numbers', () => {
        const subtract = (a, b) => a - b;
        expect(subtract(5, 3)).toBe(2);
    });
});

// Step 2: Write code to pass the test
const subtract = (a, b) => a - b;

// Step 3: Refactor (if necessary)
```

# AAA Pattern in Testing

The AAA (Arrange-Act-Assert) pattern is a common pattern used in unit testing to structure tests in a clear and understandable way. It divides the test into three distinct sections:

- **Arrange**: Set up the initial conditions and inputs for the test.
- **Act**: Execute the code being tested.
- **Assert**: Verify that the outcome is as expected.

Example of AAA pattern using Vitest:

```javascript
import { describe, it, expect } from 'vitest';

describe('AAA pattern example', () => {
    it('should demonstrate the AAA pattern', () => {
        // Arrange 
        const a = 1;
        const b = 2;
        const sum = (x, y) => x + y;

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(3);
    });
});
```

# Mock

Mocks prevent the real side effects, enabling a more controlled and focused testing environment without impacting the actual data, filesystem, or network resources.

***Deleting Data***: When testing code that deletes data (e.g., removing user accounts or records), mocks simulate the deletion without actually modifying the database. This prevents accidental data loss and allows you to test delete functionality in a safe, repeatable environment.

***Connecting to a Database***: Database connections involve setup, teardown, and potential network issues. By mocking the database layer, you can simulate queries and responses without needing an actual database connection, avoiding delays and making tests faster and more consistent.

***Writing Files***: Testing file-writing operations can lead to clutter, permission issues, or unintended file modifications. Mocks allow you to simulate file writes, ensuring that your code’s logic is correct without creating or modifying actual files on disk. This keeps the test environment clean and reduces file I/O time.


















