const express = require('express');
const path = require('path');
const { inputCleaner, inputValidator } = require('./middleware');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
 res.set('Location', '/form');
 res.status(302).end();
});

app.get('/form', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', inputCleaner, inputValidator, (req, res) => {
 res.send(`Sanitised username: ${req.body.username}\nSanitised comment: ${req.body.comment}`);
});

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});