import mongoose from "mongoose";
import poubelles from "./PoubelleSchema.js";
const EtatSchema = new mongoose.Schema({
    etat: {
        type: String,
        required:true,
    },
    photo: {
        type: String,
        required:true,
    },
    nom: {
        type: String,
        required:true,
    },
    prenom: {
        type: String,
        required:true,
    },
    telephone: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    poubelle: {
        type: mongoose.Schema.ObjectId,
        ref: poubelles,
        required: true,
        index: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
        required: false
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
});

const etats = new mongoose.model("etats", EtatSchema);

export default etats;
