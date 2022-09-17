import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import AuthRoute from "./routes/AuthRoute.js"

// imports end

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000
const MONGODB_CONNECT = process.env.MONGODB_CONNECT;
// middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// database  
try {
    mongoose.connect(MONGODB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("connected to database")
} catch (err) {
    console.log(err.message)
}
// Routes
app.get("/", (req, res) => {
    res.json("Auth app is being served")
})
app.use("/auth", AuthRoute)

// listen app
app.listen(PORT, () => {
    console.log(`Server listening on PORT : ${PORT}`)
}); 