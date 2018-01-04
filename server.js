const express = require('express');
const bodyParser = require('body-parser');

const Db = require('./model/model');
const usersDb = Db.usersDb.get('users');
const booksDb = Db.booksDb.get('books');
// console.log(db);

const app = express();
const PORT = process.env.PORT || 8079;

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, ()=>{
    console.log('express server is running on port: %d', PORT);
});

// login
app.post('/api/login', (req,res)=>{
    let payload = req.body;
    let resBody = {
        userId:"",
        userName: payload.name || "",
        msg: 'your user name or password is not correct~',
        status: 0,
    };
    let user = usersDb.find({name: payload.name}).value();
    if(user && payload.name === user.name && payload.pwd === user.pwd){
        resBody.msg = 'login successfully!';
        resBody.status = 1;
        resBody.userName=payload.name;
        resBody.userId=user.id;
        usersDb.find({name: payload.name})
                .assign({isLogin: true})
                .write();
    }
    res.json(resBody);
});

// register
app.post('/api/register', (req,res)=>{
    const payload = req.body;
    let users = usersDb.value();
    let newUser = {
        id: (parseInt(users[users.length-1].id) + 1).toString(),
        name: payload.name,
        pwd: payload.pwd,
        isLogin: true,
        cart:[]
    };
    let resBody = {
        status: 0,
        msg: 'The user name has been registered~',
        resId:"",
    };

    let user = usersDb.find({name: payload.name}).value();
    if(!user){
        usersDb.push(newUser).write();
        resBody.status = 1;
        resBody.msg = 'You have been Registed successfully~';
        resBody.userName = newUser.name;
        resBody.userId = newUser.id;
    }
    res.json(resBody);
});

// register--username
app.post('/api/username/check', (req,res)=>{
    const payload = req.body;
    let users = usersDb.value();
    let resBody = {
        status: 0,
        // msg: 'The user name has been registered~'
    };

    let user = usersDb.find({name: payload.name}).value();
    if(!user){
        // usersDb.push(newUser).write();
        resBody.status = 1;
        // resBody.msg = 'You have been Registed successfully~';
        // resBody.userName = newUser.name;
    }
    res.json(resBody);
});

// retrieve all books
app.get('/api/books', (req,res)=>{
    let books = booksDb.value();
    res.send(books).end();
});

// add cart
app.post('/api/users/:userId/cart', (req,res)=>{
    // console.log(app)
    // console.log(req.params);
    let userId = req.params.userId;
    let bookId = req.body.bookId;
    console.log(bookId);

    let user = usersDb.find({id: userId}).value();
    if(user){
        console.log(user)
        let book = booksDb.find({id: bookId}).value();
        if(book){
            console.log(book)
            let temp = usersDb.find({id: userId})
            console.log(temp);
            console.log(temp.cart);
            temp.get('cart').push(book).write();
        }
    }
    res.json({status: 1});
});