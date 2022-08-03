const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log('server is listening')
});

app.get('/',(req)=>{
    console.log(req.hostname)
})
app.get('/hi',()=>{
    console.log('Hi')
})
