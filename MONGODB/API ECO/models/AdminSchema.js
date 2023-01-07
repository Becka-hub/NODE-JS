import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    isSuperAdmin: {
        type: Boolean,
        default: false
    },
    refresh_token: {
        type: String,
        required: false
    }
},
{ timestamps: true });

const admins = new mongoose.model("admins", AdminSchema);

export default admins;
