const express = require("express");

const port = 8000;

const app = express();

app.set("view engine","ejs");
const path = require("path")

const middleware = (req,res,next)=>{
    console.log("hello");
    let age = req.query.age;
    if(age >= 18){
        return next;
    }
  return res.redirect('/')
}
//app.use(middleware);
app.use(express.static(path.join(__dirname,"/public")));app.get('/', (req, res) => {
    return res.render('./layout');
})
app.get('/authentication-login', (req, res) => {
    return res.render('./pages/authentication-login')
})
app.get('/authentication-register', (req, res) => {
    return res.render('./pages/authentication-register')
})
app.get('/charts', (req, res) => {
    return res.render('./pages/charts')
})
app.get('/error-403', (req, res) => {
    return res.render('./pages/error-403')
})
app.get('/error-404', (req, res) => {
    return res.render('./pages/error-404')
})
app.get('/error-405', (req, res) => {
    return res.render('./pages/error-405')
})
app.get('/error-500', (req, res) => {
    return res.render('./pages/error-500')
})
app.get('/form-basic', (req, res) => {
    return res.render('./pages/form-basic')
})
app.get('/form-wizard', (req, res) => {
    return res.render('./pages/form-wizard')
})
app.get('/grid', (req, res) => {
    return res.render('./pages/grid')
})
app.get('/icon-fontawesome', (req, res) => {
    return res.render('./pages/icon-fontawesome')
})
app.get('/icon-material', (req, res) => {
    return res.render('./pages/icon-material')
})
app.get('/index2', (req, res) => {
    return res.render('./pages/index2')
})
app.get('/pages-buttons', (req, res) => {
    return res.render('./pages/pages-buttons')
})
app.get('/pages-calendar', (req, res) => {
    return res.render('./pages/pages-calendar')
})
app.get('/pages-chat', (req, res) => {
    return res.render('./pages/pages-chat')
})
app.get('/pages-elements', (req, res) => {
    return res.render('./pages/pages-elements')
})
app.get('/pages-gallery', (req, res) => {
    return res.render('./pages/pages-gallery')
})
app.get('/pages-invoice', (req, res) => {
    return res.render('./pages/pages-invoice')
})
app.get('/tables', (req, res) => {
    return res.render('./pages/tables')
})
app.get('/widgets', (req, res) => {
    return res.render('./pages/widgets')
})
app.listen(port,(err)=>{
    if(err){
        console.log("Server Not Started");
        return false;
    }
    console.log("http://localhost:"+port)
});