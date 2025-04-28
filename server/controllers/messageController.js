import { sendMail } from "../helper/sendMail.js";

import messageModel from "../models/message.js";

const addMessage = async (req, res) => {
    try {
        const { name, email, phone, text } = req.body;
        const date = Date.now();
        const message = new messageModel({ name, email, phone, text, date });
        await message.save();

        const subject = "We've Received Your Message - Luxeloom";
        const plainText = `Hello ${name},

Thank you for contacting Luxeloom! We've received your message and one of our team members will get back to you within 24–48 hours.

If you need immediate assistance, please call us at (123) 456-7890.

You submitted:
"${text}"

Thank you once again for reaching out!

Best regards,  
Luxeloom Team  
luxeloom.com`;

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <p>Hello ${name},</p>
                <p>Thank you for contacting <strong>Luxeloom</strong>! We've received your message and one of our team members will get back to you within 24–48 hours.</p>
                <p><em>You submitted:</em><br>"${text}"</p>
                <p>If you need immediate assistance, please call us at <a href="tel:1234567890">(123) 456-7890</a>.</p>
                <p>Thank you once again for reaching out!</p>
                <p>Best regards,<br><strong>Luxeloom Team</strong><br><a href="https://luxeloom.com">luxeloom.com</a></p>
            </div>
        `;

        await sendMail(email, subject, plainText, htmlContent);

        res.json({ success: true, message: "Message Sent Successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



const listMessages = async (req, res) => {
    try {
        const messages = await messageModel.find({}).sort({ date: -1 });
        res.json({ success: true, messages });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const removeMessages = async (req, res) => {
    try {
        await messageModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, messages: "Message deleted successfuly." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addMessage, listMessages, removeMessages };
