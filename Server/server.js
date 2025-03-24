const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Đọc file tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, "../public")));

// Dùng body parser để nhận JSON từ client
app.use(express.json());

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Tạo transporter gửi mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route gửi email
app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

// Các route cũ
app.get('/score', (req, res) => {
  let score = parseFloat(req.query.score) || 0;
  if (score % 0.5 !== 0) {
    score = Math.round(score * 2) / 2;
  }
  if (score > 10) score = 10;
  
  let imageUrl = `/images/score-${score}.jpg`;
  let pageUrl = `https://testingweb-iyxq.onrender.com/score?score=${score}`;
  
  res.render('score', { score, imageUrl, pageUrl });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/question.html"));
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/share.html"));
});

app.get('/shareFacebook', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/shareFacebook.html"));
});

app.get('/instruct', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/instruct.html"));
});

app.get('/sendEmail', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/sendEmail.html"));
});

app.get('/shareEmail', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/shareEmail.html"));
});

app.get('/copyLink', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/copyLink.html"));
});

// Route xử lý lỗi 404
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
