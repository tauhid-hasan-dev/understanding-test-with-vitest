# Test Hooks

Test hooks are special functions provided by testing frameworks that allow you to run code at specific points in the test lifecycle. They help in setting up and tearing down the test environment, ensuring that each test runs in a clean state. Common hooks include:

- **beforeAll**: Runs once before all tests in a suite.
- **beforeEach**: Runs before each test in a suite.
- **afterAll**: Runs once after all tests in a suite.
- **afterEach**: Runs after each test in a suite.

Important: hooks can be written inside the describe function and test can be run concurrently (just use it.concurrent), normally jest and vitest runs tests concurrently. Remember for enterprise level project it is very important to run test concurrently.

Example using Vitest:

```javascript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('Test hooks example', () => {
    let value;

    beforeEach(() => {
        // Setup code
        value = 0;
    });

    afterEach(() => {
        // Teardown code
        value = null;
    });

    it('should increment value', () => {
        value += 1;
        expect(value).toBe(1);
    });

    it('should decrement value', () => {
        value -= 1;
        expect(value).toBe(-1);
    });
});
```