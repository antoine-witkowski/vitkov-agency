const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const createRoutes = require("./routes/routes.js");

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/immo");

createRoutes.createAnnonceRoutes(app);

app.listen(3000, () => {
    console.log("Back is running");
});