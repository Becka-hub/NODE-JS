import mongoose from "mongoose";
import categories from "./categorySchema.js";

const produitSchema = new mongoose.Schema({
    libelle: {
        type: String,
        required: true,
    },
    prix: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.ObjectId,
        ref: categories,
        required: true,
        index: true
    }
});

const produits = new mongoose.model("produits", produitSchema);

export default produits;
