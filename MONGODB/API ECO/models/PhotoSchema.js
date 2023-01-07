import mongoose from "mongoose";
import actualiters from "./ActualiterSchema.js";

const PhotosSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    actualiter: {
        type: mongoose.Schema.ObjectId,
        ref: actualiters,
        required: true,
        index: true
    },
},
    { timestamps: true });

const photos = new mongoose.model("photos", PhotosSchema);

export default photos;
