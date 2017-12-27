const express = require('express');
const bodyParser = require('body-parser');

const usersDb = require('./model/model').usersDb.get('users');
// console.log(db);

const app = express();
const PORT = process.env.PORT || 8079;

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, ()=>{
    console.log('express server is running on port: %d', PORT);
});
// const user = {
//     id:'1001',
//     name: 'admin',
//     pwd: '111'
// };

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
        payload.userId=user.id;
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
        isLogin: true
    };
    let resBody = {
        status: 0,
        msg: 'The user name has been registered~'
    };

    let user = usersDb.find({name: payload.name}).value();
    if(!user){
        usersDb.push(newUser).write();
        resBody.status = 1;
        resBody.msg = 'You have been Registed successfully~';
        resBody.userName = newUser.name;
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