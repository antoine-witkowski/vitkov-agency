const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    fetch('http://localhost:3000/annonces')
        .then((data) => data.json())
        .then((json) => {
            res.render('pages/home-annonces.ejs', {annonces: json});
        })
});

app.get('/annonce/:id', (req, res) => {
    fetch(`http://localhost:3000/annonce/${req.params.id}`)
        .then((data) => data.json())
        .then((json) => {
            res.render('pages/annonce', {annonce: json});
        })
});

app.get('/create/annonce', (req, res) => {
    res.render('pages/createAnnonce');
});

app.get('/update/annonce/:id', (req, res) => {
    fetch(`http://localhost:3000/annonce/${req.params.id}`)
        .then((data) => data.json())
        .then((json) => {
            res.render('pages/updateAnnonce', {annonce: json});
        })
});

app.listen(4000, () => {
    console.log("Front is running");
})