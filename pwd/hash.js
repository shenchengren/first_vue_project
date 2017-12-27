// var crypto = require('crypto');
// var content = 'password';//加密的明文；
// var token1='miyue';//加密的密钥；
// var buf = crypto.randomBytes(16);
// token1 = buf.toString('hex');//密钥加密；
//     console.log("生成的token(用于加密的密钥):"+token1);
// var SecrectKey=token1;//秘钥；
// var Signture = crypto.createHmac('sha1', SecrectKey);//定义加密方式
// Signture.update(content);
// var miwen=Signture.digest().toString('base64');//生成的密文后将再次作为明文再通过pbkdf2算法迭代加密；
// console.log("加密的结果f："+miwen);


/**********对应的结果(每次生成的结果都不一样)******************/
// 生成的token(用于加密的密钥):de7c3dafede518a1ad9c2096ee9b4eff
// 加密的结果f：PUX7fnOMlqVj+BS9o6RnNgxfffY=
// 生成的token(用于加密的密钥):93fee046ebf47412c2d54c1e808218d2
// 加密的结果f：/ERkUcrjkwxzgxNM7WczU8RaX5o=



// function aesEncode(data, key) {
//     const cipher = crypto.createCipher('aes192', key);
//     var crypted = cipher.update(data, 'utf8', 'hex');
//     crypted += cipher.final('hex');
//     return crypted;
// }
// //创建解密算法
// function aesDecode(encrypted, key) {
//     const decipher = crypto.createDecipher('aes192', key);
//     var decrypted = decipher.update(encrypted, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// }
// var data = '我是一个大傻瓜';
// var key = 'keykey';
// console.log(aesEncode(data, key));
// console.log(data);
// console.log(aesDecode(aesEncode(data, key), key));




///////////////////////////
// 加密解密算法
///////////////////////////
// var crypto = require('crypto')
//     , fs = require('fs');

// //加密
// function cipher(algorithm, key, buf, cb) {
//     var encrypted = "";
//     var cip = crypto.createCipher(algorithm, key);
//     encrypted += cip.update(buf, 'binary', 'hex');
//     encrypted += cip.final('hex');
//     cb(encrypted);
// }

//解密
// function decipher(algorithm, key, encrypted, cb) {
//     var decrypted = "";
//     var decipher = crypto.createDecipher(algorithm, key);
//     decrypted += decipher.update(encrypted, 'hex', 'binary');
//     decrypted += decipher.final('binary');
//     cb(decrypted);
// }

// function cipherDecipherFile(filename, algorithm, key) {
//     fs.readFile(filename, "utf-8", function (err, data) {
//         if (err) throw err;
//         var s1 = new Date();

//         cipher(algorithm, key, data, function (encrypted) {
//             var s2 = new Date();
//             console.log('cipher:' + algorithm + ',' + (s2 - s1) + 'ms');

//             decipher(algorithm, key, encrypted, function (txt) {
//                 var s3 = new Date();
//                 console.log('decipher:' + algorithm + ',' + (s3 - s2) + 'ms');
//                 //                console.log(txt);
//             });
//         });
//     });
// }

//console.log(crypto.getCiphers());
// var algs = ['blowfish', 'aes-256-cbc', 'cast', 'des', 'des3', 'idea', 'rc2', 'rc4', 'seed'];
// var key = "abc";
// var filename = "../package.json";//"package.json";
// algs.forEach(function (name) {
//     cipherDecipherFile(filename, name, key);
// })