const express = require('express')
// const path = require('path')
const port = 8081;

const app = express();

app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname+'/public')))
app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.render('layout');
})

app.get('/charts', (req, res) => {
    return res.render('./pages/charts');
})

app.get('/widgets', (req, res) => {
    return res.render('./pages/widgets');
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server in not start in port");
        return false;
    }
    console.log("Server start http://localhost:" + port);
})