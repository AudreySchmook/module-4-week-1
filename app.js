const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hello world');
});

app.get('/monkeys', function(req,res){
    res.send('We really like monkeys');
});

app.listen(3000, function(){
    console.log("Starting Express on port 3000");
});