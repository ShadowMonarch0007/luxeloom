import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "info.luxeloom.shop@gmail.com",
        pass: process.env.MAIL_PASSWORD,
    },
});

async function sendMail(to, subject, text, html) {
    console.log("Mail send");
    const info = await transporter.sendMail({
        from: 'info.luxeloom.shop@gmail.com',
        to,
        subject,
        text,
        html,
    });
}

export { sendMail };
