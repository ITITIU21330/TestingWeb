const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Gửi email với nội dung động
app.post('/send-email', async (req, res) => {
  const { to, score } = req.body;

  const fixedScore = Math.min(10, Math.round(score * 2) / 2); // Làm tròn 0.5 và giới hạn 10
  const imageUrl = `https://testingweb-iyxq.onrender.com/images/score-${fixedScore}.jpg`;
  const pageUrl = `https://testingweb-iyxq.onrender.com/score?score=${fixedScore}`;

  // Đọc template và thay thế biến
  let emailHtml = fs.readFileSync(path.join(__dirname, '../views/emailTemplate.html'), 'utf8');
  emailHtml = emailHtml.replace('{{imageUrl}}', imageUrl).replace(/{{pageUrl}}/g, pageUrl);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Kết quả của bạn từ hệ thống",
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email đã gửi thành công!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gửi email thất bại', error });
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
