const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/comp', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});