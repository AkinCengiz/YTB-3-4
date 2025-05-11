const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const mainRoute = require("./routes")
const PORT = 5000;

const MONGO_URL = "mongodb+srv://ytb103104:JfwnYscjYob4yK70@ytb103104.8uj2b5o.mongodb.net/ytb-mern-stack"

const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected...");
    } catch (error) {
        throw error;
    }
}

app.use(express.json());
app.use(cors())
app.use("/api",mainRoute)

//localhost:5000/api/products


app.listen(PORT,() => {
    connect();
    console.log(`Sunucu ${PORT} üzerinden yayında...`)
})