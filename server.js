import express from 'express';
const app = express()
const PORT = process.env.PORT  || 8000;

//connect to database
import { conMongoDb } from './config/mongodbConfig.js';
conMongoDb();

//Middlewares

app.use(express.json());

// API endpoints
import userRouter from './routers/userRouter.js';
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.json({message: "It's Live"});
});


app.listen(PORT, (error) => {
    error
    ? console.log(error)
    : console.log(`server running http://localhost:${PORT}`);
})