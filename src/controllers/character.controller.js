import { Character } from "../models/character.model.js";

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
    if (isNaN(ki)) {
        return res.json({
            msg: "El KI ingresado no es válido."
        });
    }
  if (gender !== "male" && gender !== "female") {
    return res.status(400).json({ msg: "El género debe ser 'male' o 'female'" });
  }

  try {
    const existing = await Character.findOne({ where: { name } });

    if (existing) {
      return res.status(400).json({ msg: "Ese nombre ya está en uso." });
    }


    const character = await Character.create(req.body);

    res.status(201).json(character);
    } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear personaje" });
  }};

export const updateCharacters = async (req, res) =>{
    try {
        const {id} = req.params;
        const updates = req.body;

        const updatedCharacter = await Character.findByIdAndUpdate(id, updates);

        if (!uptdatedCharacter) {
            return res.status(404).json({msg: "Personaje no encontrado"});
        }
        res.status(200).json(updatedCharacter);
    } catch (error) {
        res.status(500).json({msg: "Error al actualizar el personaje", error});
    }
    
};

export const deleteCharacters = async (req, res) =>{
    try {
        const {id} = req.params;

        const deletedCharacter = await Character.findByIdandDelete(id);

        if (!deletedCharacter) {
            return res.status(404).json({msg: "Personaje no encontrado"});
        }

        res.status(200).json({msg: "Personaje eliminado correctamente"});
    }catch (error){
        res.status(500).json({msg: "Error al eliminar el personaje", error})
    }
};