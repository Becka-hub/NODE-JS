import { Sequelize } from "sequelize";
export default new Sequelize('crud','root','',{dialect:"mysql",host:'localhost'});