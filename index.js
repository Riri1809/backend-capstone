import "./localEnv.js"
import {conn} from "./db/conn.js"; conn();
import express from "express";
//import mongoose from 'mongoose';
import morgan from "morgan";
import cors from "cors";

import userRoutes from "./routes/user.js";
import productsRoutes from "./routes/products.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // allows frontend to connect to backend
app.use(morgan('dev')); // logger
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({extended: true})); // allow data in url string

// Routes
app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("This is going to be great");
});




app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
});