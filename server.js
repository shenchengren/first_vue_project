const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8079;

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, ()=>{
    console.log('express server is running on port: %d', PORT);
});
const user = {
    name: 'admin',
    pwd: '111'
};

// login
app.post('/api/login', (req,res)=>{
    let payload = req.body;
    const resBody = {
        userName: user.name,
        msg: 'your user name or password is not correct~',
        status: 0,
    };
    if(payload.name === user.name && payload.pwd === user.pwd){
        resBody.msg = 'login successfully!';
        resBody.status = 1;
    }
    res.json(resBody);
});