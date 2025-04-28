import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "info.luxeloom.shop@gmail.com",
        pass: process.env.MAIL_PASSWORD,
    },
});

async function sendMail(to, subject, text, html) {
    try {
        const info = await transporter.sendMail({
            from: 'info.luxeloom.shop@gmail.com',
            to,
            subject,
            text,
            html,
            replyTo: 'info@luxeloom.shop',
        });
        console.log('Mail sent successfully:', info.messageId);
    } catch (error) {
        console.error('Error sending mail:', error);
    }
}

export { sendMail };
