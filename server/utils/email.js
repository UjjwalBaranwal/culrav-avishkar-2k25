// utils/email.js
const nodemailer = require("nodemailer");

const createTransport = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST) {
    throw new Error("SMTP config not provided in env");
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465, // true for 465
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const sendEmail = async ({ to, subject, html, text }) => {
  const transporter = createTransport();
  const from = process.env.EMAIL_FROM;
  await transporter.sendMail({ from, to, subject, html, text });
};

module.exports = { sendEmail };
