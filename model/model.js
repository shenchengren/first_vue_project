const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const usersAdapter = new FileSync('./data/users.json');
const usersDb = low(usersAdapter);

const booksAdapter = new FileSync('./data/books.json');
const booksDb = low(booksAdapter);

module.exports = {
    usersDb: usersDb,
    booksDb: booksDb
};