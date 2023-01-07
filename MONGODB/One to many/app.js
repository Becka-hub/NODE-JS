import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";
import "./models/categorySchema.js";
import "./models/produitSchema.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use(router);
app.listen(8080, () => console.log("Server run port 8080"));