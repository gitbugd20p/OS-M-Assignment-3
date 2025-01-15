import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import router from "./routes/api.js";
import {
    // MONGODB_CONNECTION,
    PORT,
    MAX_JSON_SIZE,
    URL_ENCODED,
    WEB_CACHE,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
} from "./app/config/config.js";
import fileUpload from "express-fileupload";

const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

app.use(
    fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
    })
);

// Rate Limiter
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web Caching
app.set("etag", WEB_CACHE);

// MongoDB connection
// mongoose.connect(MONGODB_CONNECTION,{autoIndex:true}).then(()=>{
//     console.log("Connected to MongoDB");
// }).catch(err=>{
//     console.log("Error connecting to MongoDB");
// })

// Set API Routes ================================
import helloRouter from "./routes/helloRouter.js";
import postBodyRouter from "./routes/postBodyRouter.js";

// 2. Create a get request api which will show us , “Hello World”
// For Hello World --> localhost:3000/hello
app.use("/hello", helloRouter);

// 3. Create a get api which will create a json web token in response. And show this token in response.
// For Encode --> localhost:3000/showToken/TokenEncode
// For Decode --> localhost:3000/showToken/TokenDecode
app.use("/showToken", router);

// 4. Create a post request api which will response, “I am post body”.
// For PostBody --> localhost:3000/testPost/testPostBody
app.use("/testPost", postBodyRouter);

// app.use("/api", router);

// ===============================================
// Set Application Storage
app.use(express.static("storage"));

// Run Your Express Back End Project
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
