import express from "express";
import router from "./routes/routes.js";
import Db from "./db/db.js";

const app = express();

app.use(express.json())
app.use(router);
Db.sync()
.then(()=>console.log('Connexion a la base success!'))
.catch((error)=>console.log(error))
app.listen(8080, () => console.log("Server run port 8080"));