const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/landing', function(req,res){
    res.render('landing');
});

app.get('/colegio', function(req,res){
    res.render('colegio');
});

app.listen(3002, () =>{
    console.log('Listening');
});