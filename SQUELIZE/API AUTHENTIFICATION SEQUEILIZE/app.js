import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
// import Users from "./models/UserModel.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected ...');
    // await Users.sync();
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(5000, () => console.log('Serveur running at port 5000'));