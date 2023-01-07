import mongoose from "mongoose";

const PoubelleSchema = new mongoose.Schema({
    ville: {
        type: String,
        required: true
    },
    lieu: {
        type: String,
        required: true
    },
    precision: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    }
},
{ timestamps: true });

const poubelles = new mongoose.model("poubelles", PoubelleSchema);

export default poubelles;
