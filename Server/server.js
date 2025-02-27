const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files for CSS, images, and JS
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));

// Routes for HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html')); // Assuming index.html is in the root folder
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname, 'question.html')); // Assuming question.html is in the root folder
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, 'share.html')); // Assuming share.html is in the root folder
});

app.get('/shareFacebook', (req, res) => {
  res.sendFile(path.join(__dirname, 'shareFacebook.html')); // Assuming shareFacebook.html is in the root folder
});

app.get('/score', (req, res) => {
  res.sendFile(path.join(__dirname, 'score.html')); // Assuming score.html is in the root folder
});

app.get('/instruct', (req, res) => {
  res.sendFile(path.join(__dirname, 'instruct.html')); // Assuming instruct.html is in the root folder
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

