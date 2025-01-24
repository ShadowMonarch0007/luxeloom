import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
})

const subscriberModel = mongoose.models.subscribers || mongoose.model("subscribers", subscriberSchema);

export default subscriberModel;