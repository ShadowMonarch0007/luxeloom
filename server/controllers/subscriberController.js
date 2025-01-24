import subscriberModel from "../models/subscriberModel.js";
import validator from 'validator'

const addSubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        const exists = await subscriberModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "You are already a subscriber!" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        const subscriber = new subscriberModel({ email });
        await subscriber.save();
        res.json({ success: true, message: "Subscribed Successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const listSubscribers = async (req, res) => {
    try {
        const subscribers = await subscriberModel.find({})
        res.json({ success: true, subscribers })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const removeSubscriber = async (req, res) => {
    try {
        await subscriberModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Subscriber Removed Successfully!" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { addSubscriber, listSubscribers, removeSubscriber };