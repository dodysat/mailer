require('dotenv').config()
const nodemailer = require("nodemailer");

exports.mailerExec = async (event, context) => {
  var payload = JSON.parse(Buffer.from(event.data, 'base64').toString());
  const response = await sendEmail(payload)
  console.log(response);
};

async function sendEmail(payload) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'smtp.mailtrap.io',
    port: process.env.MAIL_PORT || 587,
    secure: process.env.MAIL_PORT == 465 ? true : false,
    auth: {
      user: process.env.MAIL_USER || "e58d51942e13ded6ae963",
      pass: process.env.MAIL_PASS || "5151942e13ded6aeed6ae",
    },
  });

  const info = await transporter.sendMail({
    from: `${payload.from.name} <${payload.from.email}>`,
    to: payload.to,
    subject: payload.subject || 'Subject',
    text: payload.text ? payload.text : '',
    html: payload.html ? Buffer.from(payload.html, 'base64').toString() : '',
  });
  return info;
}
