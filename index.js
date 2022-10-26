const express = require("express");
const path = require("path");
const hbs = require('hbs')
const add = express();
const port = process.env.PORT || 5000 ;

let pathdirection = path.join(__dirname,'/public')

add.set('view engine','hbs');
const viewpath = path.join(__dirname,"/template");
add.set('views',viewpath)

const partials_paths = path.join(__dirname, "/template/partials")
hbs.registerPartials(partials_paths)

add.use(express.static(pathdirection))



add.get('',(req,res) => {
    res.render('main')
})

add.get('/weather',(req,res) => {
    res.render('weather')
})

add.get('/about',(req,res) => {
    res.render('about')
})

add.get('*',(req,res) => {
    res.render('error')
})



add.listen(port, () => {
    console.log('5000 port')
})

