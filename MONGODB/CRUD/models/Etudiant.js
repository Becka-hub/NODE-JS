import mongoose from "mongoose";

const etudiantSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
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

const etudiants = new mongoose.model("etudiants", etudiantSchema);

export default etudiants;
