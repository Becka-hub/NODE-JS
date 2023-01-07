import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    libelle: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    }
});

const categories = new mongoose.model("categories", categorySchema);

export default categories;
