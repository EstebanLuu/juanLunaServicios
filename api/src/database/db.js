import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()

const basename = process.env.BASENAME
const basepassword = process.env.BASEPASSWORD


export const sequelize = new Sequelize(basename, "postgres", basepassword, {
  host: "localhost",
  dialect: "postgres",
});
