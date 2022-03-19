const express = require('express');
const path = require('path');
const dataFromFunctionsJS = require('./functions');
const app = express();
const port = process.env.PORT || 3000;
const imie = 'Wiola';
const outsideSubtitle = 'podtytuł';

app.set('view engine', 'hbs')

app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/js', express.static(path.join(__dirname, './js')));


app.get('/', function(req, res){       // get (pobierz) post put delete 
    res.render('index', {
        pageTitle: "zajęcia AFM 19.03.2022",
        subtitle: outsideSubtitle,
        example: dataFromFunctionsJS.sayHello2()
    })                
})

app.get('/about', function(req, res){  
    res.render('about');
})

app.get(`/team/${imie}`, function(req, res){  
    res.send(`<h2>strona o ${imie}</h2>`);
})

app.listen(port, (err) => {
    if (err) { return console.log(`wystąpił błąd ${err.message}`);}
    return console.log(`apka działa na porcie ${port}`);
})