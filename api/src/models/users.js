import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Postblogs } from "./posts.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    genre: {
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

User.hasMany(Postblogs, {
  foreignKey: "UserId",
  sourceKey: "id",
});

Postblogs.belongsTo(User, {
  foreignKey: "UserId",
  targetId: "id",
});

export const Models = sequelize.models;
