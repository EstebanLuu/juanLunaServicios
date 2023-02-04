import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Postblogs = sequelize.define(
  "postblog",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export const Models = sequelize.models;
