import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) console.log("DB Connected");
    else console.log("DB Error");
});

const NewSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number
});

const newModel = new mongoose.model("Users", NewSchema);

const data = new newModel({name:'Mijah',password:'admin',age:28});
data.save();

const newData=async()=>{
    const resultDataNew = await newModel.insertMany([{name:'Beckas',password: 'beckas',age:20}]);
    console.log(resultDataNew);
}
newData();

const app = express();
app.use(bodyParser.json());
app.listen(8080, () => console.log("Server run port 8080"));