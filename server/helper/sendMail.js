import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.email",
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "info.luxeloom.shop@gmail.com",
    pass: process.env.MAIL_PASSWORD, // generated ethereal password
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'info.luxeloom.shop@gmail.com', // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });
}

export {sendMail};
