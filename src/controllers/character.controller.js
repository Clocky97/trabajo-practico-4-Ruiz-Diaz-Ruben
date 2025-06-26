import { Character } from "../models/character.model";

export const getCharacter = async (req, res) =>{
    const id = res.params.id();
    const character = await Character.findByPk(id);
    if (!character){
        console.log("No se encontró un usuario con esa ID.");
    }
    res.json(character);
};

export const getAllCharacters = async (req, res) => {
    const character = await Character.findAll();
    res.json(character);
};

export const createCharacters = async (req, res) => {
    const {name, ki, race, gender, description} = req.body;
    if (name === "" || ki === "" || race === "" || gender === "" || description === "") {
        return res.json({
            msg: "Hay campos  vacíos",
        });
    }

    const character = await Character.create(req.body);

    res.status(201).json(product);
};

export const updateCharacters = async (req, res) =>{

};

export const deleteCharacters = async (req, res) =>{

};