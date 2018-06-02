const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hello world');
});

//basic request
app.get('/monkeys', function(req,res){
    res.send('We really like monkeys');
});

//wildcard request
app.get('/monkeys/*', function(req,res){
    res.send('Not your mothers monkey');
});

app.get('/hello/world/2', function(req,res){
    res.send('Another hello world example');
});

app.listen(3000, function(){
    console.log("Starting Express on port 3000");
});