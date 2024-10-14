
import {encryptMessage, encryptMessagePromise} from './async';
import {it, expect} from 'vitest';

it("should encrypt a message using callback", async () => {
    //Arrange

    const message = "Hello, World!";
    const secretKey = "gh#MBCL59jZ83xuNv";
   
    const encryptedData = await new Promise((resolve, reject) => {
        // Act
        encryptMessage(message, secretKey, (encryptedMessage) => {
            resolve(encryptedMessage);
        });
        // Assert
        expect(encryptedData).toBeDefined(); 
    });


});


it("should encrypt a message using promise", async () => {
      //Arrange

      const message = "Hello, World!";
      const secretKey = "gh#MBCL59jZ83xuNv";
     
      const encryptedData = await encryptMessagePromise(message, secretKey);
      expect(encryptedData).toBeDefined();
  
});