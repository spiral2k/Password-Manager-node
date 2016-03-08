var crypto = require('crypto-js');

var secretMessage = 'yoyoyo im hungry!';
var secretKey = '123';

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

console.log("Encrypted Massage: " + encryptedMessage);

console.log("---------------------------------------------------");


var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decreptedMessage = bytes.toString(crypto.enc.Utf8);

console.log(" d Massage: " + decreptedMessage);