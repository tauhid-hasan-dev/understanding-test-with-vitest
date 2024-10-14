const CryptoJS = require('crypto-js'); 

// asynchronous function with callback way
export function encryptMessage(message, key, callback) {
    const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    callback(encryptedMessage);
}

// asynchronous function with promise way
export function encryptMessagePromise(message, key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
            if (encryptedMessage) {
                resolve(encryptedMessage);
            } else {
                reject(new Error('Failed to encrypt message'));
            }
        }, 2000);
    });
}


// const message = {
//     name: 'Mizan',
//     password: '11223344',
//   };
  
//   const secretKey = 'gh#MBCL4ADeX1059jZ83xuNv';
  
//   // Using the callback-based encryption function
//   encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
//     console.log('Encrypted message (callback):', encryptedMessage);
//   });
  
//   // Using the promise-based encryption function
//   encryptMessagePromise(JSON.stringify(message), secretKey)
//     .then((encryptedMessage) => {
//       console.log('Encrypted message (promise):', encryptedMessage);
//     })
//     .catch((error) => {
//       console.error('Error encrypting message:', error);
//     });
  

