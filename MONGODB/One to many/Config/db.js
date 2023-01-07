import mongoose from "mongoose";
const db = "mongodb://localhost:27017/OneToMany";
 mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) console.log("DB Connected");
    else console.log("DB Error");
});
