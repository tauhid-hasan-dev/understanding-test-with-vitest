## Test Doubles

In software testing, **test doubles** are objects or procedures that mimic the behavior of real components. They are used to isolate the unit of work being tested and to control the environment in which tests are executed. There are several types of test doubles:

1. **Dummy**: Objects that are passed around but never actually used. They are usually just used to fill parameter lists.
   
   ```javascript
   function greet(user) {
       return `Hello, ${user.name}!`;
   }

   const dummyUser = { name: 'John Doe' };
   console.log(greet(dummyUser)); // Output: Hello, John Doe!
   ```

2. **Fake**: Objects that have working implementations but are simplified versions of the real thing. They are often used for testing purposes.

   ```javascript
   class FakeDatabase {
       constructor() {
           this.data = {};
       }

       save(key, value) {
           this.data[key] = value;
       }

       find(key) {
           return this.data[key];
       }
   }

   const db = new FakeDatabase();
   db.save('user1', { name: 'Alice' });
   console.log(db.find('user1')); // Output: { name: 'Alice' }
   ```

3. **Stub**: Objects that provide predefined responses to method calls. They are used to control the behavior of the tested code.

   ```javascript
   const userService = {
       getUser: (id) => ({ id, name: 'Stub User' })
   };

   const user = userService.getUser(1);
   console.log(user); // Output: { id: 1, name: 'Stub User' }
   ```

4. **Spy**: Objects that record information about the interactions they have with other objects. They are used to verify that certain interactions occurred.

   ```javascript
   const userService = {
       getUser: jest.fn().mockReturnValue({ id: 1, name: 'Spy User' })
   };

   userService.getUser(1);
   expect(userService.getUser).toHaveBeenCalledWith(1);
   ```

5. **Mock**: Objects that are pre-programmed with expectations which form a specification of the calls they are expected to receive.

   ```javascript
   const userService = {
       getUser: jest.fn()
   };

   userService.getUser.mockReturnValue({ id: 1, name: 'Mock User' });

   const user = userService.getUser(1);
   expect(userService.getUser).toHaveBeenCalledWith(1);
   expect(user).toEqual({ id: 1, name: 'Mock User' });
   ```

Using test doubles helps in creating more reliable and maintainable tests by isolating the unit of work and controlling the test environment.