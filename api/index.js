import express from "express";
import dbConnect from "../config/database.js";
import router from "../routes/feedbackroutes.js";

const app=express();
const PORT = 3000||process.env.PORT;
app.use(express.json());
app.use("/api/v1",router);

dbConnect();


app.listen(PORT,()=>{
console.log(`server is running at port ${PORT}`);
});
