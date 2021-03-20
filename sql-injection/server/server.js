const express = require('express');
const path = require('path');

const { createUser } = require('./controllers/dbController');

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/user', createUser, (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
