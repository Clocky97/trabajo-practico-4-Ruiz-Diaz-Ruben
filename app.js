import express from "express";
import dotenv  from "dotenv";
const PORT = 1212;
dotenv.config();

const app = express();
app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en ${PORT}`);
});

