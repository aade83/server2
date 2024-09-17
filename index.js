import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";

import connectDB from "./db.js";
dotenv.config({});

const app = express();



// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    Credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 9090;

//api
app.use("/api/v1/user", userRoute)



app.listen(PORT,()=>{
    connectDB();
    console.log('server is running at port ${PORT}');
})
