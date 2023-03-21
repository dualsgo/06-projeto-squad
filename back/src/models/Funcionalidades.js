const { Sequelize, DataTypes } = require("sequelize");
const db = require("../database/db");

const Funcionalidades = db.define("Funcionalidades", {
    funcionalidadeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Funcionalidades;