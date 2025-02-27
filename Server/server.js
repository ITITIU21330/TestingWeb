const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Phục vụ các tệp tĩnh (CSS, hình ảnh, JS)
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes cho các file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public' ,'index.html'));
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname,'public' ,'question.html'));
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname,'public' ,'share.html'));
});

app.get('/shareFacebook', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'shareFacebook.html'));
});

app.get('/score', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'score.html'));
});

app.get('/instruct', (req, res) => {
  res.sendFile(path.join(__dirname, 'instruct.html'));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
