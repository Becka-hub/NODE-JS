import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = process.env.DB;
 mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) console.log("DB Connected");
    else console.log("DB Error");
});
