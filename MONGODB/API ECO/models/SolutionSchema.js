import mongoose from "mongoose";

const SolutionSchema = new mongoose.Schema({
    photo: {
        type: String,
    },
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
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

const solutions = new mongoose.model("solutions", SolutionSchema);

export default solutions;
