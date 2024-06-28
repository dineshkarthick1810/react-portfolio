const express = require("express");
const app = express();
const cors = require("cors");
const modal = require("./modal/modal.js"); // Correct import
const mongoose = require("mongoose");
require('dotenv').config();

const db = mongoose.connection;
app.use(express.json());
app.use(cors());
const API_KEY = process.env.MONGO_URL;
const PORT=process.env.PORT
mongoose.connect(API_KEY, { useNewUrlParser: true, useUnifiedTopology: true });

db.once("open", () => {
    console.log("mongoose connected");
});

app.post("/postdata", async (req, res) => {
    try {

        const datas = req.body;
        
        const newUser = await modal.create(datas); // Use create method for a single document
        res.status(200).json(datas);
        console.log(newUser);
       
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Failed to save data" });
    }
});

app.listen(PORT, () => {
    console.log("server started");
});
