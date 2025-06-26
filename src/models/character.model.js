import {sequelize} from "../config/database.js";
import { DataTypes } from "sequelize";

const character = sequelize.define(character, {
    id: {primaryKey: true, allowNull: false, type: DataTypes.INTEGER, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    ki: {type: DataTypes.INTEGER, allowNull: false},
    race: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: true},
})
