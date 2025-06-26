import { Router } from "express";
import {
    getCharacter,
    createCharacters,
    getAllCharacters,
    updateCharacters,
    deleteCharacters,
} from  "../controllers/character.controller.js";

export const characterRoutes = Router();

characterRoutes.get("/character/:id", getCharacter);
characterRoutes.get("/character", getAllCharacters);
characterRoutes.post("/character", createCharacters);
characterRoutes.put("/character/:id", updateCharacters);
characterRoutes.delete("/character", deleteCharacters);
