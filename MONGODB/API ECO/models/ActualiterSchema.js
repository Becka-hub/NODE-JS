import mongoose from "mongoose";

const ActualiterSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    lieu: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isPublishable: { type: Boolean, default: false }
}, { timestamps: true });

const actualiters = new mongoose.model("actualiters", ActualiterSchema);

export default actualiters;
