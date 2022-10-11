const express = require('express');
const hbs = require('express-handlebars'); // template engine, can call utliple data rather than one
const path = require('path'); // path we will take
const app = express(); // run express for us 

// we are bringing files in, to use them. we have installed 
// local files required 
const API = require('./lib/api') // the file location of the file

app.use(express.static(path.join(__dirname, 'public')));
// use this path to access files from public

app.engine('.hbs', hbs.engine({
    defaultLayout: 'layout',
    extname: 'hbs'
}))


// objects () and key value pair {}

app.set('view engine', '.hbs');


// get - retrieve a page for me and put it in this file path, like a wesbite that has / and other pages atatched 
app.get('/', async (req, res) => { // request and res
    let data = await API.data;
    console.log(data);
    console.log("Hello");
    res.render('index', { data });
})

app.get('/about', async (req, res) => { 
    res.render('about');
})

app.listen(3000, () => {
    console.log('App is listening on port 3000.') // listen allows us to access a specific port
})