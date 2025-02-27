const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));

// Routes cho các file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'..' ,index.html'));
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname,'..' ,'question.html'));
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, '..' ,'share.html'));
});

app.get('/shareFacebook', (req, res) => {
  res.sendFile(path.join(__dirname,'..' ,'shareFacebook.html'));
});

app.get('/score', (req, res) => {
  res.sendFile(path.join(__dirname,'..' ,'score.html'));
});

app.get('/instruct', (req, res) => {
  res.sendFile(path.join(__dirname,'..' ,'instruct.html'));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
