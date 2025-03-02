
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Create a transporter object using environment variables
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use false for STARTTLS; true for SSL on port 465
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable
    pass: process.env.EMAIL_PASS, // Use environment variable
  }
});

// Email sending endpoint
app.post('/send-mail', async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent', response: info.response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const port = 5050;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

