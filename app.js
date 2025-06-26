import express from "express";
import dotenv  from "dotenv";
import { startDB } from "./src/config/database.js";
import characterRoutes from "./src/routes/character.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 1212;

app.use(express.json());

app.use("/api", characterRoutes);

startDB();

app.listen(PORT, () => {
    console.log("Servidor funcionando")
})

