import express from "express";
import dotenv from "dotenv";  
import {initDB} from "./config/database.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config();

const app = express();

//Middleware
app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port:", PORT);
    });
});