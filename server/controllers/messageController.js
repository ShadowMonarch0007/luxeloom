import messageModel from "../models/message.js";

const addMessage = async (req, res) => {
    try {
        const { name, email, phone, text } = req.body;
        const date = Date.now();
        const message = new messageModel({ name, email, phone, text, date });
        await message.save();
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

export { addMessage, listMessages };
