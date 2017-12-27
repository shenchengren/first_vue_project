var crypto = require('crypto');
var md5 = crypto.createHash('md5');


// crypto.randomBytes(128, function (err, salt) {
//     if (err) { throw err;}
//     salt = salt.toString('hex');
//     console.log('生成salt:',salt); //生成salt
// })
// let aa=crypto.randomBytes(128, function (err, salt) {
//     if (err) { throw err;}
//     salt = salt.toString('hex');
//     console.log('生成salt:',salt); //生成salt
// })



let cryptoFn = {
    mima: "",
    ranFn: function () {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(64, function (err, salt) {
                if (err) reject(err)
                salt = salt.toString('hex');
                resolve(salt)
                // console.log('生成salt:',salt); //生成salt
            })
        });

    },
}
cryptoFn.ranFn().then(res => {
    // console.log(res);
    cryptoFn.mima = res;
    console.log('生成salt1', cryptoFn.mima); //生成salt

}).catch(err => {
    console.log(err)
})
console.log('生成salt', cryptoFn.mima); //生成salt

module.exports = {
    cryptoText: cryptoFn.mima
};