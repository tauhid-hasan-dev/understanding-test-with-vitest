## Test Doubles

In software testing, **test doubles** are objects or procedures that mimic the behavior of real components. In simple terms, test doubles help us simulate testing of actual functions that have side effects like database connections and other sensitive connections in the project. There are several types of test doubles:


**Spy**: A spy is a test double object that records information about how a function is called, such as the number of times it is called, with what arguments, etc. It can also be used to assert that certain functions were called during execution of a test.

   ```javascript
   const userService = {
       getUser: jest.fn().mockReturnValue({ id: 1, name: 'Spy User' })
   };

   userService.getUser(1);
   expect(userService.getUser).toHaveBeenCalledWith(1);
   ```
**Mock**: A mock is a test double object that replaces a real object or function with a simplified version that behaves in a predictable way for testing purposes. It is used to control the behavior of the code under test by defining how certain functions should behave and what values they should return during a test.

    ```javascript
     const userService = {
            getUser: jest.fn().mockReturnValue({ id: 2, name: 'Mock User' })
     };

     userService.getUser(2);
     expect(userService.getUser).toHaveBeenCalledWith(2);
     expect(userService.getUser(2)).toEqual({ id: 2, name: 'Mock User' });
     ```


Using test doubles helps in creating more reliable and maintainable tests by isolating the unit of work and controlling the test environment.