const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const usersAdapter = new FileSync('./data/users.json');
const usersDb = low(usersAdapter);

module.exports = {
    usersDb: usersDb
};