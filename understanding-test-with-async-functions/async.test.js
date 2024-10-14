
import {it, expect, beforeAll, afterAll, beforeEach, afterEach  } from 'vitest';
import {encryptMessage, encryptMessagePromise} from './async';
const CryptoJS = require('crypto-js'); 


beforeAll(() => {
    console.log('beforeAll'); // it will run before all tests
});

afterAll(() => {
    console.log('afterAll'); // it will run after all tests
});

beforeEach(() => {
    console.log('beforeEach'); // it will run before each test
 });

afterEach(() => {  
    console.log('afterEach'); // it will run after each test
 });

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


it("should encrypt a message using promise correctly", async () => {
    //Arrange

    const message = "Hello, World!";
    const secretKey = "secretkeysss";
   
    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();

    const decryptedMessage = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);

    expect(decryptedMessage).toEqual(message);

});