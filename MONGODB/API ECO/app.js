import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";
import "./models/AdminSchema.js";
import "./models/SolutionSchema.js";
import "./models/PoubelleSchema.js";
import "./models/EtatSchema.js";
import "./models/ActualiterSchema.js";
import "./models/PhotoSchema.js";

// import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.static("./public"));
// app.use(router);
app.listen(process.env.PORT, () => console.log(`Server run port ${process.env.PORT}`));